<template>
  <section class="flex items-center justify-between">
    <section class="flex items-center gap-2 grow-0">
      <img :src="props.info.image" class="w-16 h-16 rounded-full flex-shrink-0">
      <section>
        <h1 class="font-medium text-lg text-gray-700">Megan smith</h1>
        <p class="mt-1 font-normal text-xs text-gray-500">@meg-sth</p>
      </section>
    </section>
    <el-button class="btn btn-primary rounded-full py-1 px-4">
      Accept
    </el-button>
  </section>
</template>

<script setup>
const props = defineProps( {
  info: ''
})
</script>

<style scoped>

</style>