import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

function findRepoRoot(startDir: string): string {
	let currentDir = startDir

	while (!fs.existsSync(path.join(currentDir, 'package.json'))) {
		const parentDir = path.dirname(currentDir)
		if (parentDir === currentDir) {
			throw new Error('Unable to locate repository root (package.json not found)')
		}
		currentDir = parentDir
	}

	return currentDir
}

export function getRepoPaths(metaUrl: string) {
	const currentDir = path.dirname(fileURLToPath(metaUrl))
	const repoRoot = findRepoRoot(currentDir)

	return {
		repoRoot,
		scriptsDir: path.join(repoRoot, 'scripts', 'pokedexIdFixer'),
		dataDir: path.join(repoRoot, 'data'),
	}
}

