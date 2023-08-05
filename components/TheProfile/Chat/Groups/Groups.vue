<template>
  <section class="grid grid-cols-1 gap-2">
    <template v-for="(group, index) in groups">
      <nuxt-link to="/group/25" class="flex items-center gap-3">
        <section class="flex-shrink-0 flex items-center grow-0 justify-center text-gray-700 hover:text-primary-300 w-14 h-14 rounded-full relative">
          <img :src="`/assets/images/groups/group${index + 1}.png`" class="w-full h-full">
        </section>
        <section>
          <h1 class="font-medium text-base text-gray-700">{{ group.name }}</h1>
          <p class="mt-1 font-normal text-sm text-gray-500">{{ group.text }}</p>
        </section>
      </nuxt-link>
      <template v-if="index + 1 < groups.length">
        <hr class="border border-gray-300 border-opacity-10">
      </template>
    </template>
  </section>
</template>

<script setup>
const groups = ref([
  { name: 'Rossignol High School', text: 'Sarah Wilson: What do you think?'},
  { name: 'Physics', text: 'Emma Watson: Ok, thanks.'},
  { name: 'Churchill High School', text: 'Megan Watson: link in Google Drive.'},
  { name: 'Fitness 7 24', text: 'Emma Watson: Thanks.'},
])
</script>

<style scoped>

</style>