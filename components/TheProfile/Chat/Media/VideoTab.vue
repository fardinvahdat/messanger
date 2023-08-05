<template>
  <section class="grid grid-cols-3 gap-2">
    <section class="col-span-2">
      <nuxt-link to="media/video/1#1" class="relative">
        <img
          class="h-[150px] object-cover w-full"
          src="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
        />
        <span
          class="absolute right-2 top-2 z-50 w-5 h-5 flex items-center justify-center shadow-xl"
          ><Icon name="play"
        /></span>
      </nuxt-link>
    </section>
    <section class="grid grid-cols-1 gap-2">
      <nuxt-link to="media/video/2#2" class="relative">
        <img
          class="object-contain h-[71px] w-full"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20190627130930/a218.png"
        />
        <span
          class="absolute right-2 top-2 z-50 w-5 h-5 flex items-center justify-center shadow-xl"
          ><Icon name="play"
        /></span>
      </nuxt-link>
      <nuxt-link to="media/video/4#4" class="relative">
        <img
          class="object-cover h-[71px] w-full"
          src="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
        />
        <span
          class="absolute right-2 top-2 z-50 w-5 h-5 flex items-center justify-center shadow-xl"
          ><Icon name="play"
        /></span>
      </nuxt-link>
    </section>
    <section class="col-span-full">
      <nuxt-link to="media/video/3#3" class="relative">
        <img
          class="h-[200px] object-cover w-full"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg"
        />
        <span
          class="absolute right-2 top-2 z-50 w-5 h-5 flex items-center justify-center shadow-xl"
          ><Icon name="play"
        /></span>
      </nuxt-link>
    </section>
  </section>
</template>

<script setup>
import Icon from "@/components/TheIcon/Icon.vue";
</script>

<style scoped></style>
