export type PrizeFinish = 'normal' | 'holo'

export interface SetlistRow {
	setTitle: string | null
	collectorNumber: string | null
	promotion: string
	finish: PrizeFinish | null
	unnumbered: boolean
	basicEnergy: string | null
}

const DASHES = new Set(['—', '–', '-', ''])

export function parseSetlist(wikitext: string): SetlistRow[] {
	return extractTemplates(wikitext, 'Setlist/entry').map(parseEntry)
}

function parseEntry(template: string): SetlistRow {
	const inner = template.slice(2, -2)
	const prefix = 'Setlist/entry|'
	const fields = splitTopLevel(inner.slice(prefix.length))
	const numberField = fields[0]?.trim() ?? ''
	const nameField = fields[2]?.trim() ?? ''
	const promotionField = fields[fields.length - 1]?.trim() ?? ''
	const promotion = stripTemplates(promotionField)
	const { setTitle, collectorNumber, unnumbered } = parseNumberField(numberField)

	return {
		setTitle,
		collectorNumber,
		promotion,
		finish: finishOf(promotion),
		unnumbered,
		basicEnergy: nameField.match(/\{\{TCG\|Basic ([^}|]+) Energy\}\}/)?.[1] ?? null,
	}
}

function finishOf(promotion: string): PrizeFinish | null {
	if (promotion === 'Standard Set Foil')
		return 'holo'
	if (promotion === 'Standard Set')
		return 'normal'
	return null
}

function parseNumberField(raw: string): {
	setTitle: string | null
	collectorNumber: string | null
	unnumbered: boolean
} {
	const trimmed = raw.trim()
	if (DASHES.has(trimmed)) {
		return { setTitle: null, collectorNumber: null, unnumbered: true }
	}

	const mee = trimmed.match(/^\[\[MEE\]\]\s*(\S+)$/)
	if (mee) {
		return {
			setTitle: 'MEE',
			collectorNumber: normalizeCollector(mee[1]),
			unnumbered: false,
		}
	}

	if (/^[A-Za-z]+\d+[a-zA-Z]?$/.test(trimmed)) {
		return { setTitle: null, collectorNumber: trimmed, unnumbered: false }
	}

	const link = trimmed.match(/link=([^\]|]+)/)
	const setTitle = link ? link[1].replace(/ \(TCG\)$/, '').trim() : null
	const number = trimmed.match(/([A-Za-z]*\d+[a-zA-Z]?)(?:\/\d+[a-zA-Z]?)?\s*$/)
	if (!number) {
		return { setTitle, collectorNumber: null, unnumbered: false }
	}

	return {
		setTitle,
		collectorNumber: normalizeCollector(number[1]),
		unnumbered: false,
	}
}

function normalizeCollector(token: string): string {
	if (/^\d+$/.test(token))
		return String(parseInt(token, 10))
	return token
}

function stripTemplates(value: string): string {
	let out = ''
	let index = 0
	while (index < value.length) {
		if (value.startsWith('{{', index)) {
			let depth = 0
			while (index < value.length) {
				if (value.startsWith('{{', index)) {
					depth++
					index += 2
					continue
				}
				if (value.startsWith('}}', index)) {
					depth--
					index += 2
					if (depth === 0)
						break
					continue
				}
				index++
			}
			continue
		}
		out += value[index]
		index++
	}
	return out.replace(/\s+/g, ' ').trim()
}

function extractTemplates(text: string, name: string): string[] {
	const needle = `{{${name}`
	const found: string[] = []
	let from = 0
	while (from < text.length) {
		const start = text.indexOf(needle, from)
		if (start < 0)
			break
		let depth = 0
		let index = start
		let closed = false
		while (index < text.length) {
			if (text.startsWith('{{', index)) {
				depth++
				index += 2
				continue
			}
			if (text.startsWith('}}', index)) {
				depth--
				index += 2
				if (depth === 0) {
					found.push(text.slice(start, index))
					closed = true
					break
				}
				continue
			}
			index++
		}
		if (!closed)
			break
		from = index
	}
	return found
}

function splitTopLevel(body: string): string[] {
	const fields: string[] = []
	let buffer = ''
	let templates = 0
	let links = 0
	let index = 0
	while (index < body.length) {
		if (body.startsWith('{{', index)) {
			templates++
			buffer += '{{'
			index += 2
			continue
		}
		if (body.startsWith('}}', index)) {
			templates--
			buffer += '}}'
			index += 2
			continue
		}
		if (body.startsWith('[[', index)) {
			links++
			buffer += '[['
			index += 2
			continue
		}
		if (body.startsWith(']]', index)) {
			links--
			buffer += ']]'
			index += 2
			continue
		}
		if (body[index] === '|' && templates === 0 && links === 0) {
			fields.push(buffer)
			buffer = ''
			index++
			continue
		}
		buffer += body[index]
		index++
	}
	fields.push(buffer)
	return fields
}
