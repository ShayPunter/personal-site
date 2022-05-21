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
              <a
                href="/portfolio"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 md:py-4 md:text-lg md:px-10"
              >
                View my work
              </a>
            </div>

            <div class="mt-4 sm:ml-4 sm:mt-0 rounded-md shadow">
              <a
                href="/blog"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 md:py-4 md:text-lg md:px-10"
              >
                View the blog
              </a>
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

        <LazyHydrate when-visible>
          <div>
            <div class="mt-20" v-for="experience in posts.expr">
              <experience
                :company="experience.company"
                :role="experience.role"
                :startDate="experience.startDate"
                :endDate="experience.endDate"
                :location="experience.location"
                :url="$urlFor(experience.mainImage)"
              >
                <block-content
                  :blocks="child"
                  v-for="child in experience.body"
                  :key="child._id"
                />
              </experience>
            </div>
          </div>
        </LazyHydrate>
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
          <LazyHydrate when-visible>
            <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
              <div
                class="col-span-1 flex justify-center py-8 px-8 bg-gray-50"
                v-for="brand in posts.brands"
              >
                <img
                  class="max-h-20"
                  :src="$urlFor(brand.mainImage)"
                  :alt="brand.company"
                  loading="lazy"
                />
              </div>
            </div>
          </LazyHydrate>
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
        <LazyHydrate when-visible>
          <div
            class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
          >
            <div
              v-for="post in posts.posts"
              :key="post.title"
              class="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full object-cover"
                  :src="$urlFor(post.mainImage)"
                  alt="123456789"
                  loading="lazy"
                />
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <a :href="'/blog/' + post.slug.current" class="block mt-2">
                    <p class="text-xl font-semibold text-gray-900">
                      {{ post.title }}
                    </p>
                    <p class="mt-3 text-base text-gray-500">
                      <block-content
                        :blocks="post.body[0]"
                        v-bind:key="post.body[0]._id"
                        v-if="post.body.length"
                      />
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <a href="#">
                      <span class="sr-only">{{ post.author_name }}</span>
                      <img
                        class="h-10 w-10 rounded-full"
                        :src="$urlFor(post.authorImg)"
                        alt="123456789"
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">Shay</p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time :datetime="post.publishedAt">
                        {{ post.publishedAt | moment }}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LazyHydrate>
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

<script>
import { groq } from '@nuxtjs/sanity'
import moment from 'moment'
import 'animate.css'
import LazyHydrate from 'vue-lazy-hydration'

export default {
  components: {
    LazyHydrate,
  },

  mounted() {
    if (localStorage.getItem('visited') === 'true') {
      console.log("You've visited before")
      document.getElementById('loader').remove()
      return
    }
    /* Probably a better way of doing this */
    document.body.style.overflowY = 'hidden'
    setTimeout(() => {
      document.getElementById('loader-h1').classList.remove('hidden')
      document.getElementById('loader-h1').classList.add('animate__fadeInUp')
    }, 150)
    setTimeout(() => {
      document.getElementById('loader-p').classList.remove('hidden')
      document.getElementById('loader-p').classList.add('animate__fadeInUp')
    }, 800)
    setTimeout(function () {
      document.getElementById('loader-h1').classList.add('animate__fadeOutUp')
      // Fade out the lower text
      setTimeout(() => {
        document.getElementById('loader-p').classList.add('animate__fadeOutUp')
      }, 500)
      // Slide up the content & remove
      setTimeout(() => {
        document.getElementById('slideup').classList.add('animate__slideOutUpp')
        setTimeout(() => {
          document
            .getElementById('slideup')
            .classList.remove('animate__slideOutUpp')
        }, 1200)
        setTimeout(() => {
          document.getElementById('loader').remove()
          document.body.style.overflowY = 'auto'
        }, 1200)
      }, 1800)
    }, 3000)
    localStorage.setItem('visited', 'true')
  },

  filters: {
    moment: function (date) {
      return moment(date).format('Do MMM YYYY')
    },
  },

  async asyncData({ $sanity }) {
    const postquery = groq`{ "posts": *[_type == "post"]{title, "author_name": author->name, "authorImg": author->image, publishedAt, slug, mainImage{asset->{url}}, body}[0...6],
                              "expr": *[_type == "experience"]{company, role, mainImage{asset->{url}}, startDate, endDate, location, body[]{
    ..., 
    asset->{
      ...,
      "_key": _id
    },
  }}[0...5],
  "brands": *[_type == "brands"]{company, mainImage{asset->{url}}}[0...6]}`
    const posts = await $sanity.fetch(postquery)
    return { posts }
  },
}
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
