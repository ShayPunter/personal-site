<template>
  <Main>
    <div class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
      <div class="text-center">
        <h1
          class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
        >
          <span class="block xl:inline">The home of</span>
          <br />
          <span class="block text-gray-900 xl:inline">SHAY PUNTER</span>
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
              Get started
            </a>
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
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
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
                alt=""
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
                      alt=""
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
  </Main>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import Main from '~/layout/main.vue'
import moment from 'moment'

export default {
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
