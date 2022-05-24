<script setup>
	const route = useRoute();
	const query = groq`*[_type == "post" && slug.current == "${route.params.slug}"][0]{ title, body[]{
							..., 
							asset->{
							  ...,
							  "_key": _id
							},
						  } }`;

	const sanity = useSanity();
	const { data } = await useAsyncData('articles', () => sanity.fetch(query));
</script>

<template>
	<NuxtLayout name="main">
		<div class="relative py-16 bg-white overflow-hidden">
			<div v-if="data" class="relative px-4 sm:px-6 lg:px-8">
				<div class="text-lg max-w-prose mx-auto">
					<h1
						class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
					>
						{{ data.title }}
					</h1>
				</div>
				<div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
					<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div class="max-w-4xl mx-auto">
							<SanityContent :blocks="data.body" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</NuxtLayout>
</template>
