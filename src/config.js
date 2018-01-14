export function	getApiUrl() {
	let state = process.env.NODE_ENV;
	// PRODUCTION
	if(state === 'production') {
		return 'http://api.designdino.co';
	}
	// DEV
	if(state === 'development') {
		return 'http://localhost:8080/api';
	}
}
