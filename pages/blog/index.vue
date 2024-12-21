<script setup>
const {data} = await useFetch('/api/posts')
const posts = data.value.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
const config = useRuntimeConfig()
</script>

<template>
  <ul class="space-y-8 my-16">
    <li v-for="post in posts">
      <NuxtLink :to="'/blog/' + post.slug">
        <div class="flex space-x-4">
          <img :src="config.public.cmsUrl + '/' + post.data.cover_image" alt=""
               class="size-32 aspect-square shadow-lg rounded-lg object-cover">
          <div class="flex flex-col justify-between">
            <div class="space-y-2">
              <h1 class="font-bold leading-none line-clamp-3">{{ post.data.title }}</h1>
              <div class="text-sm line-clamp-2 sm:line-clamp-3 text-gray-600">{{ post.body }}</div>
            </div>
            <span class="text-xs">{{ formatDate(post.data.date) }}</span>
          </div>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>