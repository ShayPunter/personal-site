<template>
	<NuxtLayout name="main">
		<Head>
			<Title>Portfolio</Title>
			<Meta name="description" content="The portfolio of Shay Punter" />
			<Meta rel="preconnect" href="https://cdn.sanity.io" />
		</Head>
		<!-- PORTFOLIO -->
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
							<div v-if="data.portfolio" v-for="post in data.portfolio">
								<PortfolioItem
									:title="post.title"
									:image="post.mainImage.asset._ref"
									slug="#"
									body="sample"
									:weblink="post.weblink"
									:lang="post.codinglang"
									:framework="post.frameworks"
								></PortfolioItem>
							</div>
							<div v-else>
								<p>There are currently no items in my portfolio</p>
							</div>
						</template>
						<template #fallback>
							<p>Loading portfolio...</p>
						</template>
					</suspense>
				</div>
			</div>
		</div>
	</NuxtLayout>
</template>

<script setup>
	const postquery = groq`{ "portfolio": *[_type == "portfolio"][0...20]}`;

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
