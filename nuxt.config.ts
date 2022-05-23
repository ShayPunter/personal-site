import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sanity'],

	runtimeConfig: {
		public: {
			sanity: {
				projectId: 'ul94kzl8',
				useCdn: true,
				globalHelper: true,
			},
		},
	},
});
