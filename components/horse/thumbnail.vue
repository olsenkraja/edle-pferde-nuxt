<script setup>
const config = useRuntimeConfig()

defineProps({
  horse: Object
})
</script>

<template>
  <NuxtLink :to="'/pferde/' + horse.slug" class="flex items-center space-x-4">
    <div>
      <img :src="config.public.cmsUrl + horse.data.profile_picture" alt=""
           class="size-20 aspect-square rounded object-cover">
    </div>
    <div>
      <div class="font-semibold">{{ horse.data.name }}</div>
      <div class="text-xs">{{ horse.data.family }}</div>
    </div>
  </NuxtLink>
</template>