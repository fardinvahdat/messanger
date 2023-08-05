<template>
  <section
    class="default-layout max-w-[414px] m-auto"
    :class="isNavigationVisible ? '' : ' pb-[60px]'"
    :counter="counter"
  >
    <slot />
    <Navigation v-if="!isNavigationVisible" />
  </section>
</template>

<script setup>
import Navigation from "@/components/TheNavigation/Navigation.vue";

//state

const isNavigationVisible = useNavigation();
const counter = useCounter();
</script>

<style scoped></style>
