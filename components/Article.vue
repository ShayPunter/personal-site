<template>
	<div class="relative py-16 bg-white overflow-hidden">
		<div class="relative px-4 sm:px-6 lg:px-8">
			<div class="text-lg max-w-prose mx-auto">
				<h1
					class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
				>
					{{ title }}
				</h1>
			</div>
			<div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
				<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div class="max-w-4xl mx-auto">
						<div v-for="section in body" v-bind:key="section._key">
							<SanityContent
								v-if="section._type === 'block'"
								:blocks="[section]"
							></SanityContent>

							<SanityImage
								:assetId="section.asset._id"
								v-if="section && section._type === 'image'"
								class="my-4"
							></SanityImage>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				required: true,
			},
			body: {
				type: [Array],
				default: () => [],
				required: true,
			},
		},

		methods: {
			objectToArray: (obk) => {
				var result = [];

				for (var key in obk) {
					result.push(obk[key]);
				}

				return result;
			},
		},

		name: 'Article',
	};
</script>
