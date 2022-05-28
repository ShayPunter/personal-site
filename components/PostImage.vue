<template>
	<pre>{{ JSON.stringify(_sanityProps, null, 2) }}</pre>
	<!-- <SanityImage :asset-id="image" auto="format" loading="lazy" /> -->
</template>

<script>
	export default {
		props: ['_sanityProps'],
		name: 'PostImage',
	};
</script>
