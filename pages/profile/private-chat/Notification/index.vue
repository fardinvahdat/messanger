<template>
  <section>
    <Header />
    <section class="px-4">
      <Notification />
    </section>
  </section>
</template>

<script setup>
import Header from '@/components/TheProfile/Chat/Header.vue'
import Notification from '@/components/TheProfile/Chat/Notification/Notification.vue'
const activeTab = ref('Image')
</script>

<style scoped>

</style>