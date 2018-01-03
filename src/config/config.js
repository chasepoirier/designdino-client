export function	getApiUrl() {
	// PRODUCTION
	if(process.env.NODE_ENV === 'production') return 'http://api.designdino.co';
	// DEV
	if(process.env.NODE_ENV === 'development') return 'http://localhost:8080';
}
