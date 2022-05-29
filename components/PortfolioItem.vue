<template>
	<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
		<div class="flex-shrink-0">
			<SanityImage
				:asset-id="image"
				auto="format"
				:alt="title"
				width="142"
				height="80"
				class="h-48 w-full object-cover"
				loading="lazy"
			/>
		</div>
		<div class="flex-1 bg-white p-6 flex flex-col justify-between">
			<div class="flex-1">
				<NuxtLink
					:to="weblink"
					class="block mt-2 text-xl font-semibold text-gray-900"
					:key="weblink"
				>
					{{ title }}
				</NuxtLink>
				<NuxtLink
					:to="weblink"
					class="block mt-2 mt-3 text-base text-gray-500"
					:key="weblink"
				>
					{{ body }}
				</NuxtLink>
			</div>
			<div
				class="mt-6 inline-flex flex-row items-center pb-2 border-b-2 border-gray-100"
			>
				<div v-for="code in splitIntoArray(lang)" class="inline-flex">
					<p class="px-1">{{ code }}</p>
					<span aria-hidden="true"> &middot; </span>
				</div>
			</div>
			<div class="mt-4 flex items-center">
				<div v-for="code in splitIntoArray(framework)" class="inline-flex">
					<p class="px-1">{{ code }}</p>
					<span aria-hidden="true"> &middot; </span>
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
			image: {
				required: true,
			},
			slug: {
				required: true,
			},
			body: {
				required: true,
			},
			weblink: {
				required: true,
			},
			framework: {
				required: true,
			},
			lang: {
				required: true,
			},
		},

		methods: {
			splitIntoArray(text) {
				return text.split(',');
			},
		},

		name: 'PortfolioItem',
	};
</script>
