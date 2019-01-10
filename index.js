let apiKey
const BASE_URL = 'https://api.llambda.net'

const setAPIKey = key => {
	apiKey = key
}

const login = (username, password) => {
	// if (!apiKey) return

	return fetch(BASE_URL + '/api/v1/authenticate', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			username,
			password
		}),
		credentials: 'include'
	})
}

const logout = () => {
	return fetch(BASE_URL + '/api/v1/logout', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: 'include'
	})
}

const deactivate = () => {
	return fetch(BASE_URL + '/api/v1/deactivate', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: 'include'
	})
}

const isAuthenticated = () => {
	return fetch(BASE_URL + '/api/v1/isAuthenticated', {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		credentials: 'include'
	})
}

const getClasses = () => {
	return fetch(BASE_URL + '/api/v1/classes', {
		method: 'GET',
		headers: {
			Accept: 'application/json'
		},
		credentials: 'include'
	})
}

const getClass = (period, quarter = 'current') => {
	return fetch(BASE_URL + `/api/v1/classes/${period}?quarter=${quarter}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json'
		},
		credentials: 'include'
	})
}

module.exports = {
	login,
	logout,
	deactivate,
	getClasses,
	getClass,
	isAuthenticated
}
