<template>
  <section>
  <section class="bg-white py-2 px-4 rounded-lg border border-gray-300">
    <section class="flex justify-center gap-2">
      <section v-for="type in showTypes" class="px-4 py-1 rounded-full bg-primary-500" :class="[type == activeShowType ? '' : 'bg-opacity-20']" @click="activeShowType = type">
        <p class="font-bold text-sm text-gray-700">{{ type }}</p>
      </section>
    </section>
    <hr class="my-2 border border-gray-300 border-opacity-10"/>
    <template v-if="activeShowType == 'Month'">
      <MonthShow />
    </template>
    <template v-else-if="activeShowType == 'Week'">
      <WeekShow />
    </template>
    <template v-else-if="activeShowType == 'Day'">
      <DayShow />
    </template>
    <template v-else-if="activeShowType == 'Year'">
      <YearShow />
    </template>
  </section>
  <section class="mt-4">
    <EventsList />
  </section>
  </section>
</template>

<script setup>
import MonthShow from "./MonthShow";
import WeekShow from "./WeekShow";
import YearShow from "./YearShow";
import DayShow from "./DayShow";
import EventsList from "./EventsList";
const showTypes = ref(['Day', 'Week', 'Month', 'Year'])
const activeShowType = ref('Month')
</script>

<style scoped>

</style>