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
      class="flex h-screen mx-auto bg-gray-900 animate__animated"
    >
      <div class="m-auto">
        <div class="align-center text-center">
          <h1
            class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
          >
            <span class="block xl:inline">The home of</span>
            <br />
            <span
              class="animate__animated animate__bounce block text-white xl:inline"
              >SHAY PUNTER</span
            >
          </h1>
          <p
            class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            Welcome to my website, I am a full stack developer & project manager
            and here you'll find everything you need to know about me plus my
            experiences and learnings are all published here too!
          </p>
          <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div class="rounded-md shadow">
              <a
                href="#"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

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
            From the blog
          </h2>
        </div>
        <div
          class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
        >
          <div
            v-for="post in posts"
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
                <a :href="post.slug.current" class="block mt-2">
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
                  <p class="text-sm font-medium text-gray-900">
                    <a href="#" class="hover:underline"> Shay </a>
                  </p>
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
      </div>
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import Main from '~/layout/main.vue'
import moment from 'moment'
import 'animate.css'

export default {
  mounted() {
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
  },

  filters: {
    moment: function (date) {
      return moment(date).format('Do MMM YYYY')
    },
  },

  async asyncData({ $sanity }) {
    const query = groq`*[_type == "post"]{title, "author_name": author->name, "authorImg": author->image, publishedAt, slug, mainImage{asset->{url}}, body}[0...5]`
    const posts = await $sanity.fetch(query)
    return { posts }
  },
  components: { Main },
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
