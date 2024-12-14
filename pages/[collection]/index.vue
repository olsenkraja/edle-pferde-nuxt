<script setup>
const route = useRoute()
const {data: collection} = await useFetch('/api/' + route.params.collection)
</script>

<template>
  <h1>{{ route.params.collection }}</h1>
  <ul v-for="item in collection">
    <li>
      <NuxtLink :to="'/'+item.collection+'/' + item.slug">
        {{ item.data.title }}
      </NuxtLink>
    </li>
  </ul>
</template>