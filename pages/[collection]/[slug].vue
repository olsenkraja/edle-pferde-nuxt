<script setup>
import {marked} from 'marked'

const route = useRoute()
const {data} = await useFetch('/api/' + route.params.collection + '/' + route.params.slug)
</script>

<template>
  <div class="prose">
    <h1>{{ data.data.title }}</h1>
    <div v-html="marked(data.body)"/>
  </div>
</template>