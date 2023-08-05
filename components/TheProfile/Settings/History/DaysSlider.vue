<template>
  <section class="flex items-center justify-between gap-2">
    <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
        :slides-per-view="5"
        :navigation="true"
        :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
    >
    <SwiperSlide  v-for="day in days">
        <section class="flex items-center justify-center w-14 h-14 rounded-full" :class="[activeDay == day ? 'bg-primary-300' : '']" >
          <p class="text-sm font-bold text-gray-700" @click="activeDay = day">{{ day }}</p>
        </section>
    </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
const days = ref(['SUN','MON','TUE','WED','THU','FRI','SAT'])
const activeDay = ref('SUN')
</script>

<style scoped>

</style>