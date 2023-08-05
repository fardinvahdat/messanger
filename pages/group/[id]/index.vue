<template>
  <section class="group-page py-6 px-4">
    <Header @showOptions="isShowOptions = $event" />
    <template v-if="!isShowOptions">
      <Tabs class="mt-4" />
    </template>
    <hr class="my-2 border border-gray-300 border-opacity-10">
    <Body />
  </section>
</template>

<script setup>
import Header from '@/components/TheGroup/Header'
import Tabs from '@/components/TheGroup/Tabs'
import Body from '@/components/TheGroup/Body'
definePageMeta({
  layout: 'full'
})
const isShowOptions = ref(false)
</script>

<style scoped>

</style>