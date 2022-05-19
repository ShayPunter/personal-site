import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	buildModules: ['@nuxtjs/sanity'],
	plugins: ['@/plugins/sanity-blocks.js'],
	vite: {
		build: {
			rollupOptions: {
				external: ['chalk'],
			},
		},
	},
});
