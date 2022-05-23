<template>
	<div>
		<NuxtPage />
	</div>
</template>

<script>
	export default {
		transition: {
			name: 'test',
			mode: 'out-in',
		},
	};
</script>

<style>
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
</style>
