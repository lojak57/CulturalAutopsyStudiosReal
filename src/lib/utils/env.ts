import { dev } from '$app/environment';

export const ENV = {
	TRUEFORM_API_URL: 'https://api.trueform.app',
	TRUEFORM_API_KEY: '',
	ENABLE_ANALYTICS: false
};

export function getWhiteLabelConfig() {
	return {
		brandName: 'Cultural Autopsy Studios',
		domain: 'culturalautopsystudios.com',
		primaryColor: '#1e40af',
		secondaryColor: '#dc2626'
	};
}