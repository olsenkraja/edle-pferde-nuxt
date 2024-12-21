<script setup>
import {marked} from 'marked'

const config = useRuntimeConfig()
const route = useRoute()
const {data} = await useFetch('/api/' + route.params.collection + '/' + route.params.slug)
</script>

<template>
  <div class="prose lg:prose-lg xl:prose-xl">
    <img :src="config.public.cmsUrl+'/'+data.data.cover_image" class="w-full max-h-96 object-cover"/>
    <h1>{{ data.data.title || data.data.name }}</h1>
    <div v-if="data.body" v-html="marked(data.body)"/>
  </div>
  <pre>{{ data }}</pre>
</template>