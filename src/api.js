// export const API_URL = 'http://localhost:3100/api'
// export const API_URL = '/api'
export const API_URL = 'https://grub-paste.herokuapp.com/api'


export function FILE_POST(body){
	return {
		url: `${API_URL}/files`,
		options: {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(body)
		}
	}
}

export function FILE_GET(id){
	return {
		url: `${API_URL}/files/${id}`,
		options: {
			method: 'GET'
		}
	}
}

export function FILES_GET(name){
	return {
		url: `${API_URL}/files?name=${name}`,
		options: {
			method: 'GET'
		}
	}
}