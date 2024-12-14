<script setup>
const { data: posts } = await useFetch('/api/posts')
</script>

<template>
  <ul v-for="post in posts">
    <li><NuxtLink :to="'/posts/' + post.slug">{{ post.data.title }}</NuxtLink></li>
  </ul>
</template>