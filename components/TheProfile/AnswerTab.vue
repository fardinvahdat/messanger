<template>
  <section class="grid grid-cols-1 gap-3">
    <template v-for="index in 4">
      <Answer :index="index"/>
      <template v-if="index < 3">
        <hr class="border-t border-gray-300 border-opacity-10"/>
      </template>
    </template>
  </section>
</template>

<script setup>
import Answer from './Answer'
</script>

<style scoped>

</style>