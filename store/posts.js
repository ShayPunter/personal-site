import { defineStore } from 'pinia';

export const usePostsStore = defineStore('posts', {
	id: 'posts',
	state: () => ({
		_blogposts: null,
		_singlepost: {},
		loading: false,
		error: null,
	}),

	getters: {
		blogposts: (state) => state._blogposts,
		singlepost: (state) => state._singlepost,
	},

	actions: {
		async fetchPosts() {
			this._blogposts = null;
			this.loading = true;

			try {
				const postquery = groq`*[_type == "post"]{title, "author_name": author->name, "authorImg": author->image, publishedAt, slug, mainImage, body}[0...5]`;
				this._blogposts = await useSanityQuery(postquery, {
					slugg: 'route.params.slug',
				});
			} catch (error) {
				this.error = error;
			} finally {
				this.loading = false;
			}
		},

		async fetchPost() {
			const route = useRoute();
			this._singlepost = {};
			this.loading = true;

			try {
				const query = groq`*[_type == "post" && slug.current == $slugg][0]{ title, body[]{
							..., 
							asset->{
							  ...,
							  "_key": _id
							},
						  } }`;

				this._singlepost = await useSanityQuery(query, {
					slugg: route.params.slug,
				});
			} catch (error) {
				this.error = error;
			} finally {
				this.loading = false;
			}
		},
	},
});
