export function getApiUrl(env) {
	// PRODUCTION
	if(env === 'production') return 'http://api.designdino.co';
	// DEV
	if(env === 'dev') return 'http://localhost:8080';
}