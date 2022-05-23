<template>
	<div>
		<div
			id="loader"
			class="animate__animated loader z-10 flex h-screen mx-auto bg-gray-800 transition-all animate__fast"
		>
			<div class="m-auto">
				<h1
					id="loader-h1"
					class="animate__animated hidden text-4xl tracking-tight font-extrabold text-white"
				>
					SHAY PUNTER
				</h1>
				<p
					id="loader-p"
					class="animate__animated z-0 hidden text-center text-md mt-2 tracking-tight text-white"
				>
					Landing shortly...
				</p>
			</div>
		</div>

		<div
			id="slideup"
			class="flex relative h-screen mx-auto bg-gray-900 animate__animated"
		>
			<div class="my-auto mx-8 sm:mx-auto">
				<div class="align-center text-center">
					<h1
						class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
					>
						SHAY PUNTER
					</h1>
					<p
						class="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
					>
						Welcome to my website, I am a full stack developer & project manager
						and here you'll find everything you need to know about me plus my
						experiences and learnings are all published here too!
					</p>
					<div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
						<div class="rounded-md shadow">
							<NuxtLink
								to="/portfolio"
								class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 md:py-4 md:text-lg md:px-10"
							>
								View my work
							</NuxtLink>
						</div>

						<div class="mt-4 sm:ml-4 sm:mt-0 rounded-md shadow">
							<NuxtLink
								to="/blog"
								class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 md:py-4 md:text-lg md:px-10"
							>
								View the blog
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
			<div class="absolute bottom-0 left-0 ml-10 mb-10">
				<div class="inline-flex">
					<p class="text-gray-300">Scroll Down For More</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 text-gray-300 pl-2"
						fill="none"
						viewBox="0 0 20 20"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</div>
			</div>
		</div>

		<!-- PORTFOLIO / JOURNEY -->
		<div class="bg-white">
			<div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
				<div class="text-center">
					<h2
						class="text-base font-semibold text-blue-600 tracking-wide uppercase"
					>
						Experience
					</h2>
					<p
						class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
					>
						Shay's Journey
					</p>
				</div>

				<div>
					<suspense>
						<template #default>
							<div class="mt-20" v-for="experienc in experience">
								<Experience
									:company="experienc.company"
									:role="experienc.role"
									:startDate="experienc.startDate"
									:endDate="experienc.endDate"
									:location="experienc.location"
									:url="experienc.mainImage"
								>
									<SanityContent :blocks="experienc.body" />
								</Experience>
							</div>
						</template>
						<template #fallback>
							<p>Loading experience...</p>
						</template>
					</suspense>
				</div>
			</div>
		</div>

		<!-- LOGO CLOUD -->
		<div class="bg-white">
			<div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
				<div class="text-center">
					<h3
						class="text-base font-semibold text-blue-600 tracking-wide uppercase"
					>
						Providing a result-focused service
					</h3>
					<p
						class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
					>
						Brands Shay has worked with
					</p>
				</div>

				<div class="mt-20">
					<div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
						<suspense>
							<template #default>
								<div
									class="col-span-1 flex justify-center py-8 px-8 bg-gray-50"
									v-for="brand in brands"
								>
									<SanityImage
										:asset-id="brand.mainImage.asset._ref"
										auto="format"
										:alt="brand.company"
										width="142"
										height="80"
									/>
								</div>
							</template>
							<template #fallback>
								<p>Loading brands...</p>
							</template>
						</suspense>
					</div>
				</div>
			</div>
		</div>

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
						Learn from me / The blog
					</h2>
				</div>
				<div
					class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
				>
					<suspense>
						<template #default>
							<div v-for="post in posts" v-if="posts">
								<Post
									:title="post.title"
									:publishedAt="post.publishedAt"
									:image="post.mainImage.asset._ref"
									:author_name="post.author_name"
									:author_image="post.authorImg.asset._ref"
									:slug="post.slug.current"
									:body="post.body[0].children[0].text"
								></Post>
							</div>
							<div v-else>
								<p>No posts to load.</p>
							</div>
						</template>
						<template #fallback>
							<p>Loading blog posts...</p>
						</template>
					</suspense>
				</div>
			</div>
		</div>

		<!-- GET IN TOUCH -->
		<div class="bg-white">
			<!-- Side-by-side grid -->
			<div class="bg-white">
				<div
					class="max-w-md mx-auto py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8"
				>
					<div class="divide-y divide-warm-gray-200">
						<section
							class="lg:grid lg:grid-cols-3 lg:gap-8"
							aria-labelledby="contact-heading"
						>
							<h2
								id="contact-heading"
								class="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl"
							>
								Lets have a chat
							</h2>
							<div
								class="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2"
							>
								<div>
									<h3 class="text-lg font-medium text-warm-gray-900">
										Via email
									</h3>
									<dl class="mt-2 text-base text-warm-gray-500">
										<div>
											<dt class="sr-only">Email</dt>
											<dd>
												<a href="mailto:shay@shaypunter.co.uk"
													>shay@shaypunter.co.uk</a
												>
											</dd>
										</div>
									</dl>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { storeToRefs } from 'pinia';
	import { usePostsStore } from '@/store/posts';
	import { useExperienceStore } from '@/store/experience';
	import { useBrandStore } from '@/store/brands';

	const { posts } = storeToRefs(usePostsStore());
	const { experience } = storeToRefs(useExperienceStore());
	const { brands } = storeToRefs(useBrandStore());
	const { fetchPosts } = usePostsStore();
	const { fetchExperience } = useExperienceStore();
	const { fetchBrands } = useBrandStore();

	fetchPosts();
	fetchExperience();
	fetchBrands();
</script>

<script>
	import 'animate.css';

	export default {
		name: 'index',

		mounted() {
			window.scrollTo(0, 0);
			// if (localStorage.getItem('visited') === 'true') {
			// 	document.getElementById('loader').remove();
			// 	window.scrollTo(0, 0);
			// 	return;
			// } disabled for debugging

			/* Probably a better way of doing this */
			document.body.style.overflowY = 'hidden';
			setTimeout(() => {
				document.getElementById('loader-h1').classList.remove('hidden');
				document.getElementById('loader-h1').classList.add('animate__fadeInUp');
			}, 150);
			setTimeout(() => {
				document.getElementById('loader-p').classList.remove('hidden');
				document.getElementById('loader-p').classList.add('animate__fadeInUp');
			}, 800);
			setTimeout(function () {
				document
					.getElementById('loader-h1')
					.classList.add('animate__fadeOutUp');
				// Fade out the lower text
				setTimeout(() => {
					document
						.getElementById('loader-p')
						.classList.add('animate__fadeOutUp');
				}, 500);
				// Slide up the content & remove
				setTimeout(() => {
					document
						.getElementById('slideup')
						.classList.add('animate__slideOutUpp');
					setTimeout(() => {
						document
							.getElementById('slideup')
							.classList.remove('animate__slideOutUpp');
					}, 1200);
					setTimeout(() => {
						document.getElementById('loader').remove();
						document.body.style.overflowY = 'auto';
					}, 1200);
				}, 1800);
			}, 3000);
			localStorage.setItem('visited', 'true');
		},

		filters: {
			formatDate: (dateStr) =>
				Intl.DateTimeFormat('en-GB').format(new Date(dateStr)),
		},
	};
</script>

<style scope>
	.hidden {
		display: none;
	}

	@-webkit-keyframes slideOutUpp {
		0% {
			-webkit-transform: translateZ(0);
			transform: translateZ(0);
		}

		to {
			-webkit-transform: translate3d(0, -100%, 0);
			transform: translate3d(0, -100%, 0);
		}
	}

	@keyframes slideOutUpp {
		0% {
			-webkit-transform: translateZ(0);
			transform: translateZ(0);
		}

		to {
			-webkit-transform: translate3d(0, -100%, 0);
			transform: translate3d(0, -100%, 0);
		}
	}

	.animate__slideOutUpp {
		-webkit-animation-name: slideOutUpp;
		animation-name: slideOutUpp;
	}
</style>
