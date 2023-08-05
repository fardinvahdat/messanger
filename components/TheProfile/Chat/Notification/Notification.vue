<template>
  <section class="grid grid-cols-1 gap-2">
    <section class="flex items-center justify-between">
      <section class="flex items-center gap-3">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.8312 10.1586C10.9461 10.117 11.0454 10.0411 11.1157 9.9412C11.186 9.84128 11.2239 9.72217 11.2242 9.6V9C11.2243 8.92119 11.2088 8.84314 11.1787 8.77034C11.1485 8.69754 11.1042 8.63142 11.0484 8.5758L10.0242 7.5516V4.8C10.0242 2.8698 8.7132 1.2438 6.9372 0.7548C6.7614 0.312 6.3318 0 5.8242 0C5.3166 0 4.887 0.312 4.7112 0.7548C3.9174 0.9732 3.2334 1.4316 2.7036 2.031L0.8484 0.1758L0 1.0242L10.8 11.8242L11.6484 10.9758L10.8312 10.1586ZM5.8242 12C6.19578 12.0005 6.55827 11.8852 6.86129 11.6701C7.16431 11.455 7.3928 11.1509 7.515 10.8H4.1334C4.2556 11.1509 4.48409 11.455 4.78711 11.6701C5.09013 11.8852 5.45262 12.0005 5.8242 12ZM1.6242 4.8V7.5516L0.6 8.5758C0.544174 8.63142 0.499902 8.69754 0.469731 8.77034C0.439559 8.84314 0.424086 8.92119 0.4242 9V9.6C0.4242 9.75913 0.487414 9.91174 0.599936 10.0243C0.712458 10.1368 0.86507 10.2 1.0242 10.2H7.5516L1.665 4.3134C1.6464 4.4742 1.6242 4.6344 1.6242 4.8Z" fill="#90A4AE"/>
        </svg>
        <h2 class="font-normal text-base text-gray-700">Mute</h2>
      </section>
      <Checkbox v-model="Mute" />
    </section>
    <hr class="border border-gray-300 border-opacity-10">
  </section>
</template>

<script setup>
import Checkbox from "@/components/Base/Checkbox/Checkbox";
const Mute = ref(false)
</script>

<style scoped>

</style>