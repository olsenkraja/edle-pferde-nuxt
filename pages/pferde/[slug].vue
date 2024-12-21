<script setup>
import {marked} from 'marked'

const config = useRuntimeConfig()
const route = useRoute()
const {data: horse} = await useFetch('/api/horses/' + route.params.slug)
</script>

<template>
  <div class="flex flex-col sm:flex-row sm:space-x-8 space-y-8 sm:space-y-0">
    <img :src="config.public.cmsUrl+'/'+horse.data.profile_picture"
         class="sm:size-64 aspect-square rounded-xl object-cover" alt=""/>
    <div class="space-y-4">
      <h1 class="text-4xl font-extrabold">{{ horse.data.name }}</h1>
      <ul>
        <li>{{ horse.data.family }}</li>
        <li>{{ horse.data.gender }}</li>
        <li>{{ horse.data.birth_year }}</li>
        <li>{{ horse.data.breed }}</li>
        <li>{{ horse.data.size }}</li>
        <li>{{ horse.data.color }}</li>
      </ul>
      <p>{{ horse.bio }}</p>
    </div>
  </div>
  <div class="prose lg:prose-lg xl:prose-xl">
    <div v-if="horse.body" v-html="marked(horse.body)"/>
  </div>
</template>