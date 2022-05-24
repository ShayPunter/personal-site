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
						The Portfolio
					</h2>
				</div>
				<div
					class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
				>
					<suspense>
						<template #default>
							<div v-for="post in data.portfolio">
								<PortfolioItem
									:title="post.title"
									:image="post.mainImage.asset._ref"
									slug="#"
									:body="post.body[0].children[0].text"
								></PortfolioItem>
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
	const postquery = groq`{ "portfolio": *[_type == "portfolio"]{title, slug, mainImage, body}[0...20]}`;

	const sanity = useSanity();
	const { data } = await useAsyncData('data', () => sanity.fetch(postquery));
</script>

<script>
	export default {
		name: 'portfolio',

		filters: {
			formatDate: (dateStr) =>
				Intl.DateTimeFormat('en-GB').format(new Date(dateStr)),
		},
	};
</script>
