<template>
	<div>
		<NuxtPage />
	</div>
</template>

<script setup>
	useHead({
		titleTemplate: '%s | Shay Punter',
		viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
		charset: 'utf-8',
		bodyAttrs: {
			class: 'test',
		},
	});
</script>

<script>
	export default {
		transition: {
			name: 'test',
			mode: 'out-in',
		},
	};
</script>

<style>
	/* Transition Styles */
	.page-enter-active,
	.page-leave-active {
		transition-property: opacity;
		transition-timing-function: ease-in-out;
		transition-duration: 250ms;
	}
	.page-enter,
	.page-leave-to {
		opacity: 0;
	}

	body {
		overflow: auto;
	}
</style>
