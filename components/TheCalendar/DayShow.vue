<template>
  <section>
    <h1 class="text-gray-700 font-medium text-base">21 Apr 2022 TUE</h1>
    <hr class="my-2 border border-gray-300 border-opacity-10"/>
    <template v-for="(time, index) in times">
      <section class="grid grid-cols-1 gap-2">
        <section class="flex items-center gap-3 h-12">
          <section class="flex-shrink-0 font-medium text-xs text-gray-300">{{ time }}</section>
          <section class="grow overflow-auto flex items-center gap-3">
            <section v-for="item in events.filter(event=> event.time == time)">
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

const times = computed(() => {
  let times = []
  for (let i = 0; i < 24; i++) {
    let append = ''
    if (i > 12) {
      append = 'PM'
    } else {
      append = 'AM'
    }
    if (i % 12 == 0) {
      if (i / 12 == 1)
        times.push('12PM')
      else
        times.push('12AM')
    } else
      times.push(i % 12 + append)
  }
  return times
})
const events = ref([
  {
    title: 'Physics Group Team Weekly Meeting',
    icon: 'book-white',
    color: 'bg-purple-500',
    text: 'text-purple-500',
    time: '11AM'
  },
  {title: 'Physics Search⚡⚡', icon: 'paint-white', color: 'bg-yellow-500', text: 'text-yellow-500', time: '12PM'},
  {title: 'Physics Search⚡⚡', icon: 'paint-white', color: 'bg-success-500', text: 'text-success-500', time: '5PM'},
  {title: 'Physics Search⚡⚡', icon: 'paint-white', color: 'bg-success-500', text: 'text-success-500', time: '11AM'},
  {title: 'Call Mom', icon: 'call-white', color: 'bg-error-800', text: 'text-error-800', time: '8AM'},
  {title: 'Painting Gallery 🕒 \n' +
        'Meet Sarah on Centural Perk at 07:15', icon: 'paint-white', color: 'bg-yellow-500', text: 'text-yellow-500', time: '11AM'},
])
</script>

<style scoped>

</style>