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
					:to="'/blog/' + slug"
					class="block mt-2 text-xl font-semibold text-gray-900"
					:key="slug"
				>
					{{ title }}
				</NuxtLink>
				<NuxtLink
					:to="'/blog/' + slug"
					class="block mt-2 mt-3 text-base text-gray-500"
					:key="slug"
				>
					{{ body }}
				</NuxtLink>
			</div>
			<div class="mt-6 flex items-center"></div>
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
		},

		name: 'Post',
	};
</script>
