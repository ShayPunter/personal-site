<template>
  <Main>
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
      </div>
    </div>
  </Main>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import moment from 'moment'
import Main from '~/layout/main.vue'

export default {
  filters: {
    moment: function (date) {
      return moment(date).format('Do MMM YYYY')
    },
  },

  async asyncData({ $sanity }) {
    const postquery = groq`{ "posts": *[_type == "post"]{title, "author_name": author->name, "authorImg": author->image, publishedAt, slug, mainImage{asset->{url}}, body}[0...10]}`
    const posts = await $sanity.fetch(postquery)
    return { posts }
  },

  components: { Main },
}
</script>
