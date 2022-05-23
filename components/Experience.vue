<!-- Please remove this file from your project -->
<template>
	<div class="grid gap-8 grid-cols-1 sm:grid-cols-3">
		<div>
			<img :src="url" :alt="company" loading="lazy" />
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
	// import moment from 'moment'

	export default {
		// filters: {
		//   moment: function (date) {
		//     if (date === 'current') return 'Current'
		//     return moment(date).format('MMM YYYY')
		//   },
		// },

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
