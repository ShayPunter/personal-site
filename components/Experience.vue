<template>
	<div class="grid gap-8 grid-cols-1 sm:grid-cols-3">
		<div>
			<SanityImage :asset-id="url.asset._ref" auto="format" loading="lazy" />
		</div>
		<div class="col-span-2">
			<h2 class="font-bold text-3xl text-blue-700">{{ company }}</h2>
			<p class="text-blue-900 my-1">
				{{ role }} | {{ startDate }} - {{ endDate }}
			</p>
			<p class="font-bold">{{ location }}</p>
			<div class="mt-4">
				<slot></slot>
			</div>
			<!-- <-- Information about the job -->
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			company: {
				type: String,
				required: true,
			},
			role: {
				type: String,
				required: true,
			},
			startDate: {
				type: String,
				required: true,
			},
			endDate: {
				type: String,
				required: false,
				default: 'current',
			},
			location: {
				type: String,
				required: true,
			},
			url: {
				type: Object,
				required: true,
			},
		},

		name: 'Experience',
	};
</script>
