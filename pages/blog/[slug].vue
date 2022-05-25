<script>
	export default {
		async setup() {
			const route = useRoute();
			console.log(route.params.slug);
			const query = groq`*[_type == "post" && slug.current == "${route.params.slug}"][0]{"id": _id, title, body[]{
								...,
								asset->{
								  ...,
								  "_key": _id
								},
							  } }`;

			const sanity = useSanity();

			const { data } = await useAsyncData('sanity', () => sanity.fetch(query));

			return { data };
		},

		async mounted() {
			const route = useRoute();
			const query = groq`*[_type == "post" && slug.current == "${route.params.slug}"][0]{"id": _id, title, body[]{
								...,
								asset->{
								  ...,
								  "_key": _id
								},
							  } }`;

			if (route.params.slug != localStorage.getItem('slug')) {
				const { data } = await useAsyncData('sanity', () =>
					sanity.fetch(query),
				);

				localStorage.setItem('slug', route.params.slug);
				this.data = data;
			} else {
				const { data } = await useAsyncData('sanity', () =>
					sanity.fetch(query),
				);
				localStorage.setItem('slug', route.params.slug);
				this.data = data;
			}
		},
	};
</script>

<template>
	<NuxtLayout name="main">
		<Article :title="data.title" :body="data.body" :key="data.id"></Article>
	</NuxtLayout>
</template>
