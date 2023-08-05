<template>
  <section>
    <Header />
    <section class="px-4">
      <Links />
    </section>
  </section>
</template>

<script setup>
import Header from '@/components/TheProfile/Chat/Header.vue'
import Links from '@/components/TheProfile/Chat/Links/Links.vue'
const activeTab = ref('Image')
</script>

<style scoped>

</style>