<script setup>
import {marked} from 'marked'

const config = useRuntimeConfig()
const route = useRoute()
const {data: post} = await useFetch('/api/posts/' + route.params.slug)

const relativeTimeAgo = formatRelativeDateTime(post.value.data.date)
const formattedDateTime = formatDateTime(post.value.data.date)

const horses = []
for (let i = 0; i < post.value.data.horses.length; i++) {
  let {data: horse} = await useFetch('/api/horses/' + post.value.data.horses[i])
  horses.push({
    slug: post.value.data.horses[i],
    ...horse.value
  })
}
</script>

<template>
  <div class="space-y-16 my-16">
    <img :src="config.public.cmsUrl + '/' + post.data.cover_image" class="w-full max-h-[720px] object-cover" alt=""/>
    <div class="flex sm:flex-row flex-col justify-between">
      <div class="prose lg:prose-lg xl:prose-xl">
        <h1>{{ post.data.title || post.data.name }}</h1>
        <div>
          <span class="text-xs">{{ formattedDateTime }}</span>
          <span class="text-xs" v-if="relativeTimeAgo !== formattedDateTime"><br>{{ relativeTimeAgo }}</span>
        </div>
        <article v-html="marked(post.body)"/>
      </div>
      <div class="space-y-4">
        <HorseThumbnail v-for="horse in horses" :key="horse.id" :horse="horse" />
      </div>
    </div>
  </div>
</template>