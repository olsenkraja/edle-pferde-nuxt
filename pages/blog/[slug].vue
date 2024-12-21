<script setup>
import {marked} from 'marked'

const config = useRuntimeConfig()
const route = useRoute()
const {data: post} = await useFetch('/api/posts/' + route.params.slug)

const relativeTimeAgo = formatRelativeDateTime(post.value.data.date)
const formattedDateTime = formatDateTime(post.value.data.date)
</script>

<template>
  <div class="space-y-16 my-16">
    <img :src="config.public.cmsUrl + '/' + post.data.cover_image" class="w-full max-h-[720px] object-cover" alt=""/>
    <div class="prose lg:prose-lg xl:prose-xl">
      <h1>{{ post.data.title || post.data.name }}</h1>
      <div>
        <span class="text-xs">{{ formattedDateTime }}</span>
        <span class="text-xs" v-if="relativeTimeAgo !== formattedDateTime"><br>{{ relativeTimeAgo }}</span>
      </div>
      <article v-html="marked(post.body)"/>
    </div>
  </div>
</template>