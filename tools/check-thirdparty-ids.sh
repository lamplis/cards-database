#!/usr/bin/env sh
# Third-party id integrity guard.
#
# Fails if any (file, key, id) pair for tcgplayer/cardmarket/cardtrader that
# exists in upstream/master (data/ + data-asia/) is missing from HEAD.
# Rebases with `-X theirs` can silently revert upstream id additions; this
# guard turns that silent loss into a hard failure.
#
# Cardium-only additions are always allowed. Files listed in
# tools/thirdparty-id-allowlist.txt are skipped (intentional divergences).
set -eu

ROOT="$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

UPSTREAM_REF="${1:-upstream/master}"
LOCAL_REF="${2:-HEAD}"
ALLOWLIST="tools/thirdparty-id-allowlist.txt"

extract() {
	# -> "path<TAB>key: id" lines, sorted
	git -c core.quotepath=off grep -E -o \
		"(tcgplayer|cardmarket|cardtrader): [0-9]+" "$1" -- data data-asia 2>/dev/null \
		| sed "s/^$(printf '%s' "$1" | sed 's/[.[\*^$\/]/\\&/g')://" \
		| sed -E 's/:(tcgplayer|cardmarket|cardtrader): ([0-9]+)$/\
\1: \2/' | paste -d '\t' - - \
		| LC_ALL=C sort -u
}

UP_FILE="$(mktemp)"
LOCAL_FILE="$(mktemp)"
MISSING_FILE="$(mktemp)"
trap 'rm -f "$UP_FILE" "$LOCAL_FILE" "$MISSING_FILE"' EXIT

extract "$UPSTREAM_REF" > "$UP_FILE"
extract "$LOCAL_REF" > "$LOCAL_FILE"

LC_ALL=C comm -23 "$UP_FILE" "$LOCAL_FILE" > "$MISSING_FILE"

# Drop allowlisted paths
if [ -f "$ALLOWLIST" ]; then
	TMP="$(mktemp)"
	cp "$MISSING_FILE" "$TMP"
	grep -v '^[[:space:]]*#' "$ALLOWLIST" | grep -v '^[[:space:]]*$' | while IFS= read -r path; do
		grep -v -F "$path	" "$TMP" > "$TMP.next" || true
		mv "$TMP.next" "$TMP"
	done
	mv "$TMP" "$MISSING_FILE"
fi

COUNT="$(wc -l < "$MISSING_FILE" | tr -d ' ')"
if [ "$COUNT" -gt 0 ]; then
	echo "[x] $COUNT third-party id pair(s) present in $UPSTREAM_REF are missing from $LOCAL_REF:" >&2
	sed 's/^/    /' "$MISSING_FILE" >&2
	echo "[x] A rebase likely reverted upstream id additions. Restore them before continuing." >&2
	exit 1
fi

echo "[OK] Third-party id integrity: no upstream pairs missing."
