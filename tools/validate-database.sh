#!/usr/bin/env sh
# Full database validation gate:
#   1. Root TypeScript validation   (tsc --noEmit)
#   2. Server TypeScript validation (tsgo --noEmit)
#   3. Server compile               (bun compiler/index.ts)
#   4. Server unit tests            (bun test)
#   5. Bruno API suite              (bru run --env Developpement)
set -eu

ROOT="$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

SERVER_PID=""

cleanup() {
	if [ -n "$SERVER_PID" ] && kill -0 "$SERVER_PID" 2>/dev/null; then
		echo "[i] Stopping server (pid $SERVER_PID)"
		kill "$SERVER_PID" 2>/dev/null || true
		wait "$SERVER_PID" 2>/dev/null || true
	fi
	# bun run start spawns a child bun process that can survive the kill
	# above; sweep any leftover server processes so the port is freed.
	pkill -f "bun src/index.ts" 2>/dev/null || true
}
trap cleanup EXIT INT TERM

step() {
	echo
	echo "=== $* ==="
}

step "0/5 Third-party id integrity"
sh "$ROOT/tools/check-thirdparty-ids.sh"

step "1/5 Root TypeScript validation"
bun run validate

# Compile must run before server validate: server/src imports the
# generated per-language JSON files produced by the compiler.
step "2/5 Server compile"
(cd server && bun run compile)

step "3/5 Server TypeScript validation"
(cd server && bun run --bun validate)

step "4/5 Server unit tests"
(cd server && bun run test)

step "5/5 Bruno API suite"
if ! command -v bru >/dev/null 2>&1; then
	echo "[x] Bruno CLI 'bru' not found. Install with: bun install -g @usebruno/cli" >&2
	exit 1
fi

echo "[i] Starting server..."
# CI=1 skips the runtime provider-cache preload gate (same as GitHub CI);
# MAX_WORKERS=1 keeps the local run light.
(cd server && CI=1 MAX_WORKERS=1 bun run start) &
SERVER_PID=$!

READY=0
ATTEMPT=0
while [ "$ATTEMPT" -lt 60 ]; do
	if curl -sf http://127.0.0.1:3000/status >/dev/null 2>&1; then
		READY=1
		break
	fi
	if ! kill -0 "$SERVER_PID" 2>/dev/null; then
		echo "[x] Server process exited before becoming ready" >&2
		exit 1
	fi
	ATTEMPT=$((ATTEMPT + 1))
	sleep 1
done

if [ "$READY" -ne 1 ]; then
	echo "[x] Server did not become ready within 60s" >&2
	exit 1
fi
echo "[i] Server ready after ${ATTEMPT}s"

(cd .bruno && bru run --env Developpement)

echo
echo "[OK] All validation steps passed."
