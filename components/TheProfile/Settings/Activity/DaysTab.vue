<template>
  <section class="flex items-center justify-between gap-2">
    <template v-for="day in days">
      <p class="text-sm font-bold" :class="[day == activeDay ? 'text-primary-300' : 'text-gray-700']" @click="activeDay = day">{{ day }}</p>
    </template>
  </section>
</template>

<script setup>
const days = ref(['All','SUN','MON','TUE','WED','THU','FRI','SAT'])
const activeDay = ref('All')
</script>

<style scoped>

</style>