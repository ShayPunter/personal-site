<template>
	<NuxtLayout name="main">
		<div class="relative py-16 bg-white overflow-hidden">
			<suspense>
				<template #default>
					<div class="relative px-4 sm:px-6 lg:px-8">
						<div class="text-lg max-w-prose mx-auto">
							<h1
								class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
							>
								{{ post.title }}
							</h1>
						</div>
						<div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
							<SanityContent :blocks="post.body" />
						</div>
					</div>
				</template>
				<template #fallback>
					<p>Loading article...</p>
				</template>
			</suspense>
		</div>
	</NuxtLayout>
</template>

<script setup>
	import { storeToRefs } from 'pinia';
	import { usePostsStore } from '@/store/posts';

	const route = useRoute();
	const { post } = storeToRefs(usePostsStore());
	const { fetchPost } = usePostsStore();

	fetchPost(route.params.slug);
	console.log(post);
</script>

<script>
	export default {
		name: 'blog-article',
		transition: {
			name: 'test',
			mode: 'out-in',
		},
	};
</script>
