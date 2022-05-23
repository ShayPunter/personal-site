<template>
	<NuxtLayout name="main">
		<!-- BLOG / LEARNING -->
		<div
			class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
		>
			<div class="absolute inset-0">
				<div class="bg-white h-1/3 sm:h-2/3" />
			</div>
			<div class="relative max-w-7xl mx-auto">
				<div class="text-center">
					<h2
						class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
					>
						Learn from me / The blog
					</h2>
				</div>
				<div
					class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
				>
					<div
						v-for="post in data"
						:key="post._id"
						class="flex flex-col rounded-lg shadow-lg overflow-hidden"
					>
						<div class="flex-shrink-0">
							<img
								class="h-48 w-full object-cover"
								:src="$urlFor(post.mainImage)"
								alt="123456789"
								loading="lazy"
							/>
						</div>
						<div class="flex-1 bg-white p-6 flex flex-col justify-between">
							<div class="flex-1">
								<NuxtLink
									:to="'/blog/' + post.slug.current"
									class="block mt-2 text-xl font-semibold text-gray-900"
								>
									{{ post.title }}
								</NuxtLink>
								<NuxtLink
									:to="'/blog/' + post.slug.current"
									class="block mt-2 mt-3 text-base text-gray-500"
								>
									<div v-if="post.body.length">
										{{ post.body[0].children[0].text }}
									</div>
								</NuxtLink>
							</div>
							<div class="mt-6 flex items-center">
								<div class="flex-shrink-0">
									<a href="#">
										<span class="sr-only">{{ post.author_name }}</span>
										<img
											class="h-10 w-10 rounded-full"
											:src="$urlFor(post.authorImg)"
											alt="123456789"
											loading="lazy"
										/>
									</a>
								</div>
								<div class="ml-3">
									<p class="text-sm font-medium text-gray-900">Shay</p>
									<div class="flex space-x-1 text-sm text-gray-500">
										<time :datetime="post.publishedAt">
											{{ post.publishedAt }}
										</time>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</NuxtLayout>
</template>

<script setup>
	const postquery = groq`*[_type == "post"]{title, "author_name": author->name, "authorImg": author->image, publishedAt, slug, mainImage, body}[0...12]`;
	const { data, refresh } = useSanityQuery(postquery);
</script>

<script>
	export default {
		filters: {
			formatDate: (dateStr) =>
				Intl.DateTimeFormat('en-GB').format(new Date(dateStr)),
		},
	};
</script>
