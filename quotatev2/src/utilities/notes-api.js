const BASE_URL = '/api/quotes/details'

export function create(newNoteData) {
	return fetch(BASE_URL, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
	}).then(res => res.json());
}