<template>
  <section class="flex items-center gap-3">
      <img :src="`/assets/images/avatars/${props.info.image}`" class="w-14 h-14 rounded-full object-cover">
    <section class="grow">
      <h1 class="font-medium text-base text-gray-700">Emma Watson</h1>
      <p class="mt-1 text-gray-500 font-normal text-sm">{{ props.info.text }}</p>
    </section>
    <section class="text-right w-fit">
      <p class="font-normal text-xs text-gray-500">32 min ago</p>
      <span class="w-5 h-5 ml-auto text-xs bg-error-800 text-white rounded-full flex items-center justify-center" v-if="props.info.newNotifications">
        {{ props.info.newNotifications }}
      </span>
    </section>
  </section>
</template>

<script setup>
const props = defineProps({
  info: {
    default: ''
  }
})
</script>

<style scoped>

</style>