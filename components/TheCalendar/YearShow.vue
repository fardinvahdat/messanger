<template>
  <section>
    <Swiper
        :slides-per-view="1"
        :modules="[SwiperNavigation]"
        :navigation="true"
        @slide-change="slideChange"
    >
      <SwiperSlide v-for="item in years">
        <section class="flex justify-center">
          <p class="font-bold tetx-base text-gray-700">
            {{ item }}
          </p>
        </section>
      </SwiperSlide>
    </Swiper>
    <hr class="my-3 border border-gray-300 border-opacity-10"/>
    <section class="grid grid-cols-2 gap-5">
      <section class="px-4 py-2 border border-gray-300 border-opacity-30 rounded-lg" v-for="(item, monthIndex) in month">
        <h2 class="text-center text-gray-500 font-bold text-sm">{{ item }}</h2>
        <section class="mt-4 grid grid-cols-2 gap-5">
          <section v-for="item in events.filter(event=> event.month == monthIndex)">
            <el-popover placement="right" trigger="click" popper-class="day-show-popover">
              <template #reference>
                <el-button class="w-12 h-12 rounded-full flex-shrink-0" :class="item.color">
                  <Icon :name="item.icon"/>
                </el-button>
              </template>
              <section>
                <section class="absolute left-0 w-1 h-full top-0 rounded-lg" :class="item.color"/>
                <h2 class="text-xs font-normal" :class="item.text">{{ item.title }}</h2>
              </section>
            </el-popover>
          </section>
        </section>
      </section>
    </section>
  </section>
</template>

<script setup>
import Icon from '@/components/TheIcon/Icon'
const router = useRouter()
const years = ref(['2017', '2018', '2019', '2020', '2021', '2022'])
const month = ref(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])

const events = ref([
  {
    title: 'Physics Group Team Weekly Meeting',
    icon: 'book-white',
    color: 'bg-purple-500',
    text: 'text-purple-500',
    month: 0
  },
  {title: 'Physics Search⚡⚡', icon: 'paint-white', color: 'bg-yellow-500', text: 'text-yellow-500', month: 2},
  {title: 'Physics Search⚡⚡', icon: 'paint-white', color: 'bg-success-500', text: 'text-success-500', month: 10},
  {title: 'Physics Search⚡⚡', icon: 'paint-white', color: 'bg-success-500', text: 'text-success-500', month: 1},
  {title: 'Call Mom', icon: 'call-white', color: 'bg-error-800', text: 'text-error-800', month: 4},
  {title: 'Painting Gallery 🕒 \n' +
        'Meet Sarah on Centural Perk at 07:15', icon: 'paint-white', color: 'bg-yellow-500', text: 'text-yellow-500', month: 6},
])

// methods
const hasEvent = (selectedDay) => {
  let event = events.value.find(day=> day.day == selectedDay)
  return event
}
const slideChange = () => {

}
</script>

<style scoped>

</style>