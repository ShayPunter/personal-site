import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	target: 'static',
	//ssr: true,

	head: {
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
			{
				name: 'description',
				content:
					'Shay Punter is a software engineer and project manager based in Liverpool, UK. He is passionate about building web applications and solving problems.',
			},
			{
				name: 'title',
				content: 'Shay Punter | Software Engineer & Project Manager',
			},
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: 'static/favicon.ico' },
			{
				rel: 'preconnect',
				href: 'https://cdn.sanity.io/',
				crossorigin: true,
			},
		],
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
