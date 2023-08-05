<template>
  <section>
    <Header />
    <section class="px-4">
      <Files />
    </section>
  </section>
</template>

<script setup>
import Header from '@/components/TheProfile/Chat/Header.vue'
import Files from '@/components/TheProfile/Chat/Files/Files.vue'
const activeTab = ref('Image')
</script>

<style scoped>

</style>