const BASE_URL = '/api/quotes';

export function getAll() {
	return fetch(BASE_URL).then(res => res.json());
}

export function create(newQuoteData) {
	return fetch(BASE_URL, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(newQuoteData),
	}).then(res => res.json());
}

export function update(updatedQuoteData) {
	return fetch(`${BASE_URL}/${updatedQuoteData._id}`, {
		method: 'PUT',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(updatedQuoteData),
	}).then(res => res.json());
}

export function deleteOne(id) {
	return fetch(`${BASE_URL}/${id}`, {
		method: 'DELETE',
	}).then(res => res.json());
}

