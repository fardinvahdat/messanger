<template>
  <section>
    <section class="grid grid-cols-1 gap-4 px-3">
      <section class="flex items-center justify-between" v-for="(item, index) in items">
        <h3 class="font-normal text-base text-gray-500">{{ index }}</h3>
        <h3 class="font-normal text-base text-gray-700">{{ item }}</h3>
      </section>
    </section>
    <hr class="my-3 border border-gray-300 border-opacity-10">
    <section class="grid grid-cols-1 gap-4 px-3">
      <section class="flex items-center justify-between" v-for="(item, index) in checkboxes">
        <h3 class="font-normal text-base text-gray-500">{{ index }}</h3>
        <Checkbox v-model="checkboxes[index]" />
      </section>
    </section>
  </section>
</template>

<script setup>
import Checkbox from "../../Base/Checkbox/Checkbox";
const items = ref({
  views: '5k',
  likes: '5k',
  'views Time': '25:00:50',
  'income each week': '25$',
  'income each month': '750$',
  'income each year': '1420$',
  'total income': '15140$',
})
const checkboxes = ref({
  'send report to my email': false,
  'deposit in my credit each month': true,
})
</script>

<style scoped>

</style>