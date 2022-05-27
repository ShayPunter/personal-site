<template>
	<div>
		<div
			id="loader"
			class="loader z-10 flex relative h-screen mx-auto bg-gray-800 transition-all animate__fast"
		>
			<div class="m-auto overflow-y-hidden">
				<h1
					id="loader-h1"
					class="text-4xl opacity-0 tracking-tight font-extrabold text-white"
				>
					SHAY PUNTER
				</h1>
				<svg height="4" id="animatesvgldra">
					<line
						id="animatesvgldr"
						x1="0"
						style="stroke: rgb(255, 255, 255); stroke-width: 4"
					/>
				</svg>
				<!-- <p
					id="loader-p"
					class="animate__animated z-0 text-center text-md mt-2 tracking-tight text-white"
				>
					Landing shortly...
				</p> -->
			</div>
		</div>

		<div class="absolute inset-0 z-0">
			<div
				id="c-hero"
				class="flex relative h-screen mx-auto bg-gray-900 animate__animated"
			>
				<div class="my-auto mx-8 sm:mx-auto">
					<div class="align-center text-center">
						<h1
							class="text-4xl opacity-0 tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
						>
							SHAY PUNTER
						</h1>
						<p
							id="c-hero-p"
							class="mt-3 opacity-0 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
						>
							Welcome to my website, I am a full stack developer & project
							manager and here you'll find everything you need to know about me
							plus my experiences and learnings are all published here too!
						</p>
						<div
							class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
						>
							<div id="fadeinButton" class="opacity-0 rounded-md shadow">
								<NuxtLink
									to="/portfolio"
									class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 md:py-4 md:text-lg md:px-10"
								>
									View my work
								</NuxtLink>
							</div>

							<div
								id="fadeinButton"
								class="opacity-0 mt-4 sm:ml-4 sm:mt-0 rounded-md shadow"
							>
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
					<div id="fadeInScroll" class="opacity-0 inline-flex">
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
						<div
							class="mt-20 gs_reveal gs_reveal_fromLeft"
							v-for="experienc in data.expr"
						>
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
										v-for="brand in data.brands"
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
								<div v-for="post in data.posts">
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
	</div>
</template>

<script setup>
	const postquery = groq`{ "posts": *[_type == "post"]{title, "author_name": author->name, "authorImg": author->image, publishedAt, slug, mainImage, body}[0...6],
                              "expr": *[_type == "experience"]{company, role, mainImage, startDate, endDate, location, body[]{
    ..., 
    asset->{
      ...,
      "_key": _id
    },
  }}[0...5],
  "brands": *[_type == "brands"]{company, mainImage}[0...6]}`;

	const sanity = useSanity();
	const { data } = await useAsyncData('data', () => sanity.fetch(postquery));
</script>

<script>
	import 'animate.css';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	export default {
		name: 'index',

		// created: function () {
		// 	document.addEventListener('DOMContentLoaded', function () {
		// 		gsap.utils.toArray('.gs_reveal').forEach(function (elem) {
		// 			hide(elem); // assure that the element is hidden when scrolled into view

		// 			ScrollTrigger.create({
		// 				trigger: elem,
		// 				onEnter: function () {
		// 					animateFrom(elem);
		// 				},
		// 				onEnterBack: function () {
		// 					animateFrom(elem, -1);
		// 				},
		// 				onLeave: function () {
		// 					hide(elem);
		// 				}, // assure that the element is hidden when scrolled into view
		// 			});
		// 		});
		// 	});
		// },

		beforeMount() {
			window.scrollTo(0, 0);
		},

		mounted() {
			this.regListener();
			// if (localStorage.getItem('visited') === 'true') {
			// 	document.getElementById('loader').remove();
			// 	window.scrollTo(0, 0);
			// 	return;
			// } disabled for debugging

			// Draw SVG Line In
			gsap.fromTo(
				'#animatesvgldr',
				{
					attr: { x1: '0' },
					y: '1',
				},
				{ duration: 1, attr: { x1: '248' }, ease: 'power2.out' },
			);

			gsap.fromTo(
				'#animatesvgldra',
				{
					y: '1',
				},
				{ duration: 0, y: '1' },
			);

			// Slide In Text
			setTimeout(() => {
				gsap.fromTo(
					'#loader-h1',
					{
						y: '100',
					},
					{ duration: 1, y: '0', opacity: 1, ease: 'power4.out' },
				);
			}, 400);

			// Move SVG Line To Top
			setTimeout(() => {
				gsap.fromTo(
					'#animatesvgldra',
					{
						y: '0',
					},
					{ duration: 1, y: '-40', ease: 'power2.out' },
				);
			}, 1800);

			// Slide Out Text
			setTimeout(() => {
				gsap.fromTo(
					'#loader-h1',
					{
						y: '0',
					},
					{ duration: 1, y: '-100', opacity: 1, ease: 'power4.in' },
				);
			}, 2200);

			// Draw Out Line
			setTimeout(() => {
				gsap.fromTo(
					'#animatesvgldr',
					{
						attr: { x1: '248' },
					},
					{ duration: 2, attr: { x1: '0' }, ease: 'power2.inOut' },
				);
			}, 2900);

			// Slide Up Page
			setTimeout(() => {
				gsap.fromTo(
					'#loader',
					{
						y: '0',
					},
					{ duration: 1, y: '-250%', opacity: 1, ease: 'power4.out' },
				);
			}, 3500);

			// Enable scroll bar
			setTimeout(() => {
				document.body.style.overflow = 'auto';
			}, 3800);

			// Hero - Load Title
			setTimeout(() => {
				gsap.fromTo(
					'#c-hero h1',
					{
						y: '50',
					},
					{ duration: 1, y: '0', opacity: 1 },
				);
			}, 4500);

			// Hero - Load P
			setTimeout(() => {
				gsap.fromTo(
					'#c-hero #c-hero-p',
					{
						y: '50',
					},
					{ duration: 1, y: '0', opacity: 1 },
				);
			}, 4600);

			setTimeout(() => {
				gsap.fromTo(
					'#c-hero #fadeinButton',
					{
						y: '50',
					},
					{ duration: 1, y: '0', opacity: 1 },
				);
			}, 4800);

			setTimeout(() => {
				gsap.fromTo(
					'#c-hero #fadeInScroll',
					{
						y: '100',
					},
					{ duration: 1, y: '0', opacity: 1 },
				);
			}, 5000);

			localStorage.setItem('visited', 'true');
		},

		methods: {
			regListener: function () {
				console.log('ae5');
				gsap.utils.toArray('.gs_reveal').forEach(function (elem) {
					gsap.set(elem, { autoAlpha: 0 });

					ScrollTrigger.create({
						trigger: elem,
						onEnter: function () {
							console.log('ae');
							var direction = 1;
							var x = 0,
								y = direction * 100;
							if (elem.classList.contains('gs_reveal_fromLeft')) {
								x = -100;
								y = 0;
							} else if (elem.classList.contains('gs_reveal_fromRight')) {
								x = 100;
								y = 0;
							}
							elem.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
							elem.style.opacity = '0';
							gsap.fromTo(
								elem,
								{ x: x, y: y, autoAlpha: 0 },
								{
									duration: 1.25,
									x: 0,
									y: 0,
									autoAlpha: 1,
									ease: 'expo',
									overwrite: 'auto',
								},
							);
						},
						onEnterBack: function () {
							console.log('ae2');
							var direction = -1;
							var x = 0,
								y = direction * 100;
							if (elem.classList.contains('gs_reveal_fromLeft')) {
								x = -100;
								y = 0;
							} else if (elem.classList.contains('gs_reveal_fromRight')) {
								x = 100;
								y = 0;
							}
							elem.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
							elem.style.opacity = '0';
							gsap.fromTo(
								elem,
								{ x: x, y: y, autoAlpha: 0 },
								{
									duration: 1.25,
									x: 0,
									y: 0,
									autoAlpha: 1,
									ease: 'expo',
									overwrite: 'auto',
								},
							);
						},
						onLeave: function () {
							console.log('ae3');
							gsap.set(elem, { autoAlpha: 0 });
						},
					});
				});
			},

			animateFrom(elem, direction) {
				direction = direction || 1;
				var x = 0,
					y = direction * 100;
				if (elem.classList.contains('gs_reveal_fromLeft')) {
					x = -100;
					y = 0;
				} else if (elem.classList.contains('gs_reveal_fromRight')) {
					x = 100;
					y = 0;
				}
				elem.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
				elem.style.opacity = '0';
				gsap.fromTo(
					elem,
					{ x: x, y: y, autoAlpha: 0 },
					{
						duration: 1.25,
						x: 0,
						y: 0,
						autoAlpha: 1,
						ease: 'expo',
						overwrite: 'auto',
					},
				);
			},

			hide: function (elem) {
				gsap.set(elem, { autoAlpha: 0 });
			},
		},

		filters: {
			formatDate: (dateStr) =>
				Intl.DateTimeFormat('en-GB').format(new Date(dateStr)),
		},
	};
</script>

<style scope>
	body {
		overflow: hidden;
	}

	.gs_reveal {
		opacity: 0;
		visibility: hidden;
		will-change: transform, opacity;
	}
</style>
