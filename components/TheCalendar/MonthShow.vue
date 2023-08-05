<template>
  <section>
    <Swiper
        :slides-per-view="1"
        :modules="[SwiperNavigation]"
        :navigation="true"
        @slide-change="slideChange"
    >
      <SwiperSlide v-for="item in month">
        <section class="flex justify-center">
          <p class="font-bold tetx-base text-gray-700">
            {{ item }} 2022
          </p>
        </section>
      </SwiperSlide>
    </Swiper>
    <hr class="my-3 border border-gray-300 border-opacity-10"/>
    <section class="grid grid-cols-7 gap-3">
      <section v-for="day in days">
        <p class="text-xs font-normal text-gray-700 text-center">{{ day }}</p>
      </section>
    </section>
    <section class="mt-4 grid grid-cols-7 gap-y-3">
      <template v-for="day in monthDays">
        <section @click="router.push({ path: '/calendar/show/25' })" class="flex items-center justify-center font-bold text-base relative">
          <section class="w-10 h-10 rounded-full flex items-center justify-center"
                   :class="[hasEvent(day.day) ? hasEvent(day.day).hasNextDay ? '' : 'relative' : '']">
          <template v-if="day.disabled">
            <p class="text-gray-300">{{ day.day }}</p>
          </template>
          <template v-else>
            <template v-if="hasEvent(day.day)">
              <section class="w-full h-full absolute left-0 top-0"
                       :class="[hasEvent(day.day).color, calculateRounded(day.day)]"
              />
            </template>
            <temaplate e-else>
              <section class="relative">
                <p :class="[hasEvent(day.day) ? 'text-white' : 'text-gray-700']">
                  <template v-if="hasEvent(day.day) && hasEvent(day.day).isGift">
                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.49989 3.25016H5.41658V6.50011H1.08332C0.796002 6.50011 0.520457 6.38597 0.317296 6.18281C0.114135 5.97965 0 5.7041 0 5.41679V4.33348C0 4.04616 0.114135 3.77062 0.317296 3.56746C0.520457 3.3643 0.796002 3.25016 1.08332 3.25016H2.45696C2.18822 2.78482 2.102 2.23621 2.21505 1.71086C2.32809 1.18552 2.63232 0.720927 3.06867 0.407299C3.50502 0.0936709 4.04236 -0.0466117 4.57633 0.0136905C5.1103 0.0739927 5.60282 0.330576 5.95823 0.733619C6.31365 0.330576 6.80617 0.0739927 7.34014 0.0136905C7.87411 -0.0466117 8.41145 0.0936709 8.8478 0.407299C9.28415 0.720927 9.58838 1.18552 9.70142 1.71086C9.81446 2.23621 9.72825 2.78482 9.45951 3.25016H10.8332C11.1205 3.25016 11.396 3.3643 11.5992 3.56746C11.8023 3.77062 11.9165 4.04616 11.9165 4.33348V5.41679C11.9165 5.7041 11.8023 5.97965 11.5992 6.18281C11.396 6.38597 11.1205 6.50011 10.8332 6.50011H6.49989V3.25016ZM3.24995 2.16685C3.24995 2.45416 3.36408 2.7297 3.56724 2.93287C3.7704 3.13603 4.04595 3.25016 4.33326 3.25016H5.41658V2.16685C5.41658 1.87953 5.30244 1.60399 5.09928 1.40083C4.89612 1.19766 4.62057 1.08353 4.33326 1.08353C4.04595 1.08353 3.7704 1.19766 3.56724 1.40083C3.36408 1.60399 3.24995 1.87953 3.24995 2.16685ZM6.49989 3.25016H7.58321C7.79747 3.25016 8.00692 3.18663 8.18507 3.06759C8.36322 2.94855 8.50207 2.77936 8.58406 2.58141C8.66605 2.38346 8.68751 2.16564 8.64571 1.9555C8.60391 1.74536 8.50073 1.55233 8.34923 1.40083C8.19772 1.24932 8.00469 1.14615 7.79455 1.10435C7.58441 1.06255 7.36659 1.084 7.16864 1.16599C6.97069 1.24799 6.8015 1.38684 6.68246 1.56499C6.56343 1.74314 6.49989 1.95259 6.49989 2.16685V3.25016ZM10.8332 7.58342H6.49989V13H8.66652C9.24115 13 9.79224 12.7717 10.1986 12.3654C10.6049 11.9591 10.8332 11.408 10.8332 10.8334V7.58342ZM5.41658 13V7.58342H1.08332V10.8334C1.08332 11.408 1.31158 11.9591 1.71791 12.3654C2.12423 12.7717 2.67532 13 3.24995 13H5.41658Z" fill="white"/>
                    </svg>
                  </template>
                  <template v-else>
                  {{ day.day }}
                  </template>
                </p>
              </section>
            </temaplate>
          </template>
          </section>
        </section>
      </template>
    </section>
  </section>
</template>

<script setup>
const router = useRouter()
const month = ref(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])
const days = ref(['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'])
const monthDays = computed(()=>{
  let start = 28
  let days = []
  while (days.length < 35) {
    if (start%31 != 0) {
      if (start / 31 < 1 || start / 31 > 2) {
        days.push({
          day: start % 31,
          disabled: true
        })
      }
      else {
        days.push({
          day: start % 31,
          disabled: false
        })
      }
    }
    start++;
  }
  return days
})
const events = ref([
  { day: 1, color: 'bg-purple-500', isGift: false },
  { day: 21, color: 'bg-error-800', isGift: true },
  { day: 6, color: 'bg-yellow-500', isGift: false, hasNextDay: 'first' },
  { day: 7, color: 'bg-yellow-500', isGift: false, hasNextDay: 'middle' },
  { day: 8, color: 'bg-yellow-500', isGift: false, hasNextDay: 'end' },
])

// methods
const hasEvent = (selectedDay) => {
  let event = events.value.find(day=> day.day == selectedDay)
  return event
}
const calculateRounded = (day) => {
  let event = hasEvent(day)
  if (event.hasNextDay) {
    switch (event.hasNextDay) {
      case "end": {
        return 'rounded-r-full'
      }
      case "first":{
        return 'rounded-l-full'
      }
    }
  }
  else {
    return 'rounded-full'
  }
}
const slideChange = () => {
  let firstNumber = Math.floor(Math.random() * 31)
  let secondNumber = Math.floor(Math.random() * 31)
  events.value[0].day = firstNumber
  events.value[1].day = secondNumber
  let startNumber = Math.floor(Math.random() * 31)
  while (startNumber < 2 && startNumber > 27) {
    startNumber = Math.floor(Math.random() * 31)
  }
  for (let i= 2; i<5; i++) {
    console.log(startNumber + (i - 2))
    events.value[i].day = startNumber + (i - 2)
  }
}
</script>

<style scoped>

</style>