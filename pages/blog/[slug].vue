<template>
	<NuxtLayout name="main">
		<Article :title="post.title" :body="post.body" :key="post.id"></Article>
	</NuxtLayout>
</template>

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
			const post = await useSanityQuery(query);
			console.log(post);
			return { post };
		},
	};
</script>
