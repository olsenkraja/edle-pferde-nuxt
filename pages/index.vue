<script setup>
const {data: posts} = await useFetch('/api/posts')
</script>

<template>
  <ul v-for="post in posts" class="">
    <li>
      <NuxtLink :to="'/posts/' + post.slug" class="hover:underline">
        {{ post.data.title }}
      </NuxtLink>
    </li>
  </ul>
</template>