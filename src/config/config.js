export function	getApiUrl() {
	console.log(process.env.NODE_ENV);
	let state = process.env.NODE_ENV;
	// PRODUCTION
	if(state === 'production') {
		console.log(process.env.NODE_ENV);
		return 'http://api.designdino.co';
	}
	// DEV
	if(state === 'development') {
		console.log(process.env.NODE_ENV);
		return 'http://localhost:8080';
	}
}
