<template>
  <section class="grid grid-cols-1 gap-2">
  <template v-for="event in events">
    <EventShow :event="event" />
  </template>
  </section>
</template>

<script setup>
import EventShow from './EventShow'
const events = ref([
  { id: 1, name: 'Math Exam', time: '11:00 AM — 01:00 PM', icon: 'book-white', color: 'bg-purple-500', peoples: 5},
  { id: 2, name: 'painting gallery', time: '09:00 AM — 09:00 PM', icon: 'paint-white', color: 'bg-yellow-500', peoples: 3},
  { id: 3, name: 'Birthday Party', time: '05:00 PM — 09:00 PM', icon: 'gift-white', color: 'bg-error-800', peoples: 8},
])
</script>

<style scoped>

</style>