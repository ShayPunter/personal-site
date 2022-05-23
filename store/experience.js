import { defineStore } from 'pinia';

export const useExperienceStore = defineStore('experience', {
	id: 'experience',
	state: () => ({
		_experience: {},
	}),

	getters: {
		experience: (state) => state._experience,
	},

	actions: {
		async fetchExperience() {
			this._experience = {};
			const postquery = groq`*[_type == "experience"]{company, role, mainImage, startDate, endDate, location, body[]{
				...,
				asset->{
				  ...,
				  "_key": _id
				},
			  }}[0...5]`;
			const results = useSanityQuery(postquery);
			this._experience = results.data;
		},
	},
});
