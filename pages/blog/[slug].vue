<template>
	<NuxtLayout name="main">
		<Head>
			<Title>{{ data.title }}</Title>
			<Meta name="description" :content="data.body[0].children[0].text" />
		</Head>
		<Article :title="data.title" :body="data.body"></Article>
	</NuxtLayout>
</template>

<script setup>
	const route = useRoute();
	console.log(route.params.slug);
	const query = groq`*[_type == "post" && slug.current == "${route.params.slug}"][0]{"id": _id, title, body[]{
								...,
								asset->{
								  ...,
								  "_key": _id
								},
							  } }`;
	const { data, refresh } = await useSanityQuery(query);
</script>
