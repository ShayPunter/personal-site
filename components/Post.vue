<!-- Please remove this file from your project -->
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
				>
					{{ title }}
				</NuxtLink>
				<NuxtLink
					:to="'/blog/' + slug"
					class="block mt-2 mt-3 text-base text-gray-500"
				>
					{{ body }}
				</NuxtLink>
			</div>
			<div class="mt-6 flex items-center">
				<div class="flex-shrink-0">
					<span class="sr-only">{{ author_name }}</span>
					<SanityImage
						:asset-id="author_image"
						auto="format"
						:alt="author_name"
						class="h-10 w-10 rounded-full"
						loading="lazy"
					/>
				</div>
				<div class="ml-3">
					<p class="text-sm font-medium text-gray-900">Shay</p>
					<div class="flex space-x-1 text-sm text-gray-500">
						<time :datetime="publishedAt">
							{{ publishedAt }}
						</time>
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
			image: {
				required: true,
			},
			publishedAt: {
				required: true,
			},
			author_name: {
				required: true,
			},
			author_image: {
				required: true,
			},
			slug: {
				required: true,
			},
			body: {
				required: true,
			},
		},

		name: 'Post',
	};
</script>
