<template>
  <section>
    <h1 class="text-gray-700 font-medium text-base">21-28 Apr 2022 TUE</h1>
    <hr class="my-2 border border-gray-300 border-opacity-10"/>
    <template v-for="(time, index) in times">
      <section class="grid grid-cols-1 gap-2">
        <section class="flex items-center gap-3 h-12">
          <section class="flex-shrink-0 font-medium text-xs text-gray-300">{{ time.title }}</section>
          <section class="grow overflow-auto flex items-center gap-3">
            <section v-for="item in events.filter(event=> event.day == time.index)">
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
      <hr class="my-2 border border-gray-300 border-opacity-10"/>
    </template>
  </section>
</template>

<script setup>
import Icon from '@/components/TheIcon/Icon'
const weekDays = ref([
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
])
const times = computed(() => {
  let times = []
  for (let i = 0; i < weekDays.value.length; i++) {
    times.push({
      index: i,
      title: weekDays.value[i]
    })
  }
  return times
})
const events = ref([
  {
    title: 'Physics Group Team Weekly Meeting',
    icon: 'book-white',
    color: 'bg-purple-500',
    text: 'text-purple-500',
    day: 0
  },
  {title: 'Physics Search⚡⚡', icon: 'paint-white', color: 'bg-yellow-500', text: 'text-yellow-500', day: 2},
  {title: 'Physics Search⚡⚡', icon: 'paint-white', color: 'bg-success-500', text: 'text-success-500', day: 3},
  {title: 'Physics Search⚡⚡', icon: 'paint-white', color: 'bg-success-500', text: 'text-success-500', day: 1},
  {title: 'Call Mom', icon: 'call-white', color: 'bg-error-800', text: 'text-error-800', day: 4},
  {title: 'Painting Gallery 🕒 \n' +
        'Meet Sarah on Centural Perk at 07:15', icon: 'paint-white', color: 'bg-yellow-500', text: 'text-yellow-500', day: 6},
])
</script>

<style scoped>

</style>