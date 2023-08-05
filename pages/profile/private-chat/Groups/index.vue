<template>
  <section>
    <Header />
    <section class="px-4">
      <Groups />
    </section>
  </section>
</template>

<script setup>
import Header from '@/components/TheProfile/Chat/Header.vue'
import Groups from '@/components/TheProfile/Chat/Groups/Groups.vue'
const activeTab = ref('Image')
</script>

<style scoped>

</style>