<template>
	<div>
		<Head>
			<Title>Software Engineer & Project Manager</Title>
			<Meta
				name="description"
				content="Shay Punter is a software engineer and project manager based in Liverpool, UK. He is passionate about building web applications and solving problems."
			/>
			<Meta rel="preconnect" href="https://cdn.sanity.io" />
		</Head>
		<div
			id="loader-ov"
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
					<div
						id="c-experience"
						class="overflow-y-hidden text-center"
						style="height: 100px"
					>
						<h2
							class="text-base opacity-0 font-semibold text-blue-600 tracking-wide uppercase"
						>
							Experience
						</h2>
						<p
							class="mt-1 text-4xl opacity-0 font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
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
					<div
						id="c-brands"
						class="overflow-y-hidden text-center"
						style="height: 100px"
					>
						<h3
							class="text-base opacity-0 font-semibold text-blue-600 tracking-wide uppercase"
						>
							Providing a result-focused service
						</h3>
						<p
							class="mt-1 text-4xl opacity-0 font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
						>
							Brands Shay has worked with
						</p>
					</div>

					<div class="mt-20">
						<div
							class="overflow-hidden mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8"
						>
							<suspense>
								<template #default>
									<div
										id="brandicons"
										class="opacity-0 col-span-1 flex justify-center py-8 px-8 bg-gray-50"
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
					<div
						id="c-posts"
						class="overflow-hidden text-center"
						style="height: 60px"
					>
						<h2
							class="opacity-0 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
						>
							Learn from me / The blog
						</h2>
					</div>
					<div
						class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
					>
						<suspense>
							<template #default>
								<div
									v-for="post in data.posts"
									id="c-post-item"
									class="opacity-0"
								>
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

      <footer class="bg-white">
        <div
            class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
        >
          <div class="flex justify-center space-x-6 md:order-2">
            <a
                href="https://github.com/ShayPunter"
                class="text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">GitHub</span>
              <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
              >
                <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                />
              </svg>
            </a>

            <a
                href="https://www.linkedin.com/in/shaypunter/"
                class="text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">LinkedIn</span>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  class="h-6 w-6"
                  fill="currentColor"
              >
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                />
              </svg>
            </a>
          </div>
          <div class="mt-8 md:mt-0 md:order-1">
            <p class="text-center text-base text-gray-400">
              &copy; 2022 PunterDigital Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
		</div>
	</div>
</template>

<script setup>
	const postquery = groq`{
  "posts": *[_type == "post"]{
    title,
    "author_name": author->name,
    "authorImg": author->image,
    publishedAt,
    slug,
    mainImage,
    body
  }[0...6],

  "expr": *[_type == "experience"] | order(endDate desc) {
    company,
    role,
    mainImage,
    startDate,
    endDate,
    location,
    body[] {
      ...,
      asset->{
        ...,
        "_key": _id
      },
    },
  }[0...5],

  "brands": *[_type == "brands"]{
    company,
    mainImage
  }[0...6]
}`;

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

		beforeMount() {
			window.scrollTo(0, 0);
		},

		data: function () {
			return {
				pageanimation: {
					experience: {
						title: false,
						area: false,
					},
				},
			};
		},

		mounted() {
			this.regListener();
			this.textScrollIn();

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
					'#loader-ov',
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
				var count = 1;
				var brandcount = 1;
				var postcount = 1;
				var arrayLength = gsap.utils.toArray('.gs_reveal').length - 1;
				var arrayLength2 = gsap.utils.toArray('#brandicons').length - 1;
				var arrayLength3 = gsap.utils.toArray('#c-post-item').length - 1;
				var expr_area = false;
				var brand_area = false;
				var post_area = false;

				gsap.utils.toArray('.gs_reveal').forEach(function (elem) {
					gsap.set(elem, { autoAlpha: 0 });

					ScrollTrigger.create({
						trigger: elem,
						onEnter: function () {
							if (expr_area) {
								return;
							}

							if (count <= arrayLength) {
								count++;
							} else {
								expr_area = true;
							}

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
							setTimeout(() => {
								gsap.fromTo(
									elem,
									{ x: x, y: y, autoAlpha: 0 },
									{
										duration: 3,
										x: 0,
										y: 0,
										autoAlpha: 1,
										ease: 'expo',
										overwrite: 'auto',
									},
								);
							}, 400);
						},
					});
				});

				gsap.utils.toArray('#brandicons').forEach(function (elem) {
					ScrollTrigger.create({
						trigger: elem,
						onEnter: function () {
							if (brand_area) {
								return;
							}

							if (brandcount <= arrayLength2) {
								brandcount++;
							} else {
								brand_area = true;
							}

							setTimeout(() => {
								gsap.fromTo(
									elem,
									{
										y: '300',
									},
									{ duration: 2, y: '0', opacity: 1, ease: 'power4.out' },
								);
							}, 500);
						},
					});
				});

				gsap.utils.toArray('#c-post-item').forEach(function (elem) {
					ScrollTrigger.create({
						trigger: elem,
						onEnter: function () {
							if (post_area) {
								return;
							}

							if (postcount <= arrayLength3) {
								postcount++;
							} else {
								post_area = true;
							}

							setTimeout(() => {
								gsap.fromTo(
									elem,
									{
										y: '300',
									},
									{ duration: 2, y: '0', opacity: 1, ease: 'power4.out' },
								);
							}, 500);
						},
					});
				});
			},

			textScrollIn() {
				var expr_titles = false;
				var brands_titles = false;
				var post_titles = false;

				ScrollTrigger.create({
					trigger: '#c-experience',
					onEnter: function () {
						if (expr_titles) {
							return;
						}
						expr_titles = true;

						gsap.fromTo(
							'#c-experience h2',
							{
								y: '50',
							},
							{ duration: 1, y: '0', opacity: 1 },
						);
						setTimeout(() => {
							gsap.fromTo(
								'#c-experience p',
								{
									y: '50',
								},
								{ duration: 1.2, y: '0', opacity: 1 },
							);
						}, 400);
					},
				});

				ScrollTrigger.create({
					trigger: '#c-brands',
					onEnter: function () {
						if (brands_titles) {
							return;
						}
						brands_titles = true;

						gsap.fromTo(
							'#c-brands h3',
							{
								y: '50',
							},
							{ duration: 1, y: '0', opacity: 1 },
						);
						setTimeout(() => {
							gsap.fromTo(
								'#c-brands p',
								{
									y: '50',
								},
								{ duration: 1.2, y: '0', opacity: 1 },
							);
						}, 400);
					},
				});

				ScrollTrigger.create({
					trigger: '#c-posts',
					onEnter: function () {
						if (post_titles) {
							return;
						}
						post_titles = true;

						gsap.fromTo(
							'#c-posts h2',
							{
								y: '100',
							},
							{ duration: 1, y: '0', opacity: 1 },
						);
					},
				});
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
