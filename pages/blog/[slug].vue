<script setup>
	import { storeToRefs } from 'pinia';
	import { usePostsStore } from '../../store/posts';

	const { singlepost, loading, error } = storeToRefs(usePostsStore());
	const { fetchPost } = usePostsStore();

	fetchPost();
</script>

<template>
	<!-- <div class="relative py-16 bg-white">
		<p>baseline</p>
		{{ singlepost }}
		<p v-if="loading">Loading article...</p>
		<p v-else-if="error">{{ error.message }}</p>
		<div v-else-if="singlepost">
			<p>pp</p>
			{{ singlepost.data.title }}
		</div>

		<div class="relative px-4 sm:px-6 lg:px-8">
			<div class="text-lg max-w-prose mx-auto">
				<h1
					class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
				>
					{{ singlepost.data.title }}
				</h1>
			</div>
			<div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
				<SanityContent :blocks="singlepost.data.body" />
			</div>
		</div>
	</div> -->

	<NuxtLayout name="main">
		<div class="relative py-16 bg-white overflow-hidden">
			<p v-if="loading">Loading article...</p>
			<p v-if="error">{{ error.message }}</p>
			<div v-if="singlepost.data" class="relative px-4 sm:px-6 lg:px-8">
				<div class="text-lg max-w-prose mx-auto">
					<h1
						class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
					>
						{{ singlepost.data.title }}
					</h1>
				</div>
				<div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
					<SanityContent :blocks="singlepost.data.body" />
				</div>
			</div>
		</div>
	</NuxtLayout>
</template>
