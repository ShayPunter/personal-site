<template>
	<div>
		<NuxtPage />
	</div>
</template>

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
