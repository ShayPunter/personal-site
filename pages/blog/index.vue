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
					<suspense>
						<template #default>
							<div v-for="post in posts" v-if="posts">
								<Post
									:title="post.title"
									:publishedAt="post.publishedAt"
									:image="post.mainImage.asset._ref"
									:author_name="post.author_name"
									:author_image="post.authorImg.asset._ref"
									:slug="post.slug.current"
									:body="post.body[0].children[0].text"
								></Post>
							</div>
							<div v-else>
								<p>No posts to load.</p>
							</div>
						</template>
						<template #fallback>
							<p>Loading blog posts...</p>
						</template>
					</suspense>
				</div>
			</div>
		</div>
	</NuxtLayout>
</template>

<script setup>
	import { storeToRefs } from 'pinia';
	import { usePostsStore } from '@/store/posts';

	const { posts } = storeToRefs(usePostsStore());
	const { fetchPosts } = usePostsStore();

	fetchPosts();

	console.log(posts);
</script>

<script>
	export default {
		name: 'blog-page',
		transition: {
			name: 'test',
			mode: 'out-in',
		},

		filters: {
			formatDate: (dateStr) =>
				Intl.DateTimeFormat('en-GB').format(new Date(dateStr)),
		},
	};
</script>
