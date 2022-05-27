import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	target: 'static',
	//ssr: true,

	head: {
		title: 'Shay Punter | Software Engineer & Project Manager',
		description:
			'Shay Punter is a software engineer and project manager based in Liverpool, UK. He is passionate about building web applications and solving problems.',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: 'static/favicon.ico' }],
	},

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

	pageTransition: {
		name: 'default',
		mode: '',
	},

	nitro: {
		preset: 'cloudflare',
	},
});
