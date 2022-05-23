import { defineStore } from 'pinia';

export const usePostsStore = defineStore('posts', {
	id: 'posts',
	state: () => ({
		_posts: {},
		_post: null,
	}),

	getters: {
		posts: (state) => state._posts,
		post: (state) => state._post,
	},

	actions: {
		async fetchPosts() {
			this._posts = {};
			const postquery = groq`*[_type == "post"]{title, "author_name": author->name, "authorImg": author->image, publishedAt, slug, mainImage, body}`;
			const results = useSanityQuery(postquery);
			this._posts = results.data;
		},

		async fetchPost(slugg) {
			this._post = null;
			const query = groq`*[_type == "post" && slug.current == "${slugg}"][0]{ title,
				body[]{
				  ..., 
				  asset->{
					...,
					"_key": _id
				  },
				}}`;

			const results = useSanityQuery(query);
			this._post = results.data;
		},
	},
});
