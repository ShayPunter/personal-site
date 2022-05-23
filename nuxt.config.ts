import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sanity', '@pinia/nuxt'],

	runtimeConfig: {
		public: {
			sanity: {
				projectId: 'ul94kzl8',
				useCdn: true,
				globalHelper: true,
			},
		},
	},

	pageTransition: {
		name: 'default',
		mode: '',
	},

	nitro: {
		preset: 'cloudflare',
	},
});
