import { defineStore } from 'pinia';

export const usePostsStore = defineStore('posts', {
	id: 'posts',
	state: () => ({
		_posts: {},
		_singlepost: {},
	}),

	getters: {
		posts: (state) => state._posts,
		singlepost: (state) => state._singlepost,
	},

	actions: {
		async fetchPosts() {
			this._posts = {};
			const postquery = groq`*[_type == "post"]{title, "author_name": author->name, "authorImg": author->image, publishedAt, slug, mainImage, body}`;
			const results = useSanityQuery(postquery);
			this._posts = results.data;
		},

		async fetchPost() {
			const route = useRoute();
			this._singlepost = {};
			const query = groq`*[_type == "post" && slug.current == "${route.params.slug}"][0]{ title, body[]{
							..., 
							asset->{
							  ...,
							  "_key": _id
							},
						  } }`;

			this._singlepost = useSanityQuery(query).data;
		},
	},
});
