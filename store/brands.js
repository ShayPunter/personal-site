import { defineStore } from 'pinia';

export const useBrandStore = defineStore('brands', {
	id: 'brands',
	state: () => ({
		_brands: {},
	}),

	getters: {
		brands: (state) => state._brands,
	},

	actions: {
		async fetchBrands() {
			this._brands = {};
			const postquery = groq`*[_type == "brands"]{company, mainImage}[0...6]`;
			const results = useSanityQuery(postquery);
			this._brands = results.data;
		},
	},
});
