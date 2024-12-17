<script setup>
import {marked} from 'marked'

const route = useRoute()
const {data} = await useFetch('/api/' + route.params.collection + '/' + route.params.slug)
</script>

<template>
  <div class="prose">
    <h1>{{ data.data.title || data.data.name }}</h1>
    <div v-if="data.body" v-html="marked(data.body)"/>
  </div>
</template>