<script setup>
const route = useRoute()
const {data: collection} = await useFetch('/api/horses')
</script>

<template>
  <ul v-for="horse in collection">
    <li>
      <NuxtLink :to="'/pferde/' + horse.slug">
        {{ horse.data.name }}
      </NuxtLink>
    </li>
  </ul>
</template>