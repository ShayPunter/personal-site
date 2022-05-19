import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@nuxtjs/sanity'],
	plugins: ['@/plugins/sanity-blocks.js'],

	sanity: {
		projectId: 'ul94kzl8',
	},

	vite: {
		build: {
			rollupOptions: {
				external: ['chalk'],
			},
		},
	},
});
