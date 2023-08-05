<template>
  <section class="relative py-5 px-3 pl-6 bg-white rounded-lg border border-gray-300 show-event">
    <section>
    <section class="w-1 left-1 rounded-lg top-0 h-full flex items-center absolute event-divider">
      <section :class="props.event.color" class="w-full"/>
    </section>
    <section class="flex items-center gap-2" @click="toggleCollapse">
      <section class="w-12 h-12 rounded-full grow-0 flex items-center justify-center" :class="props.event.color">
        <Icon :name="props.event.icon"/>
      </section>
      <section>
        <h1 class="font-normal text-lg text-gray-700">{{ props.event.name }}</h1>
        <p class="mt-1 font-bold text-sm text-gray-500">{{ props.event.time }}</p>
      </section>
        <el-dropdown class="ml-auto" popper-class="primary-dropdown">
          <el-button class="btn" text>
            <svg width="4" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.83329 15.6667C2.83329 15.2064 2.4602 14.8333 1.99996 14.8333C1.53972 14.8333 1.16663 15.2064 1.16663 15.6667C1.16663 16.1269 1.53972 16.5 1.99996 16.5C2.4602 16.5 2.83329 16.1269 2.83329 15.6667Z" stroke="#90A4AE" stroke-width="2"/>
              <path d="M2.83329 9.00016C2.83329 8.53993 2.4602 8.16683 1.99996 8.16683C1.53972 8.16683 1.16663 8.53993 1.16663 9.00016C1.16663 9.4604 1.53972 9.8335 1.99996 9.8335C2.4602 9.8335 2.83329 9.4604 2.83329 9.00016Z" stroke="#90A4AE" stroke-width="2"/>
              <path d="M2.83329 2.33317C2.83329 1.87293 2.4602 1.49984 1.99996 1.49984C1.53972 1.49984 1.16663 1.87293 1.16663 2.33317C1.16663 2.79341 1.53972 3.1665 1.99996 3.1665C2.4602 3.1665 2.83329 2.79341 2.83329 2.33317Z" stroke="#90A4AE" stroke-width="2"/>
            </svg>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu >
              <el-dropdown-item @click="share">share</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
    </section>
    <section class="mt-3">
      <Swiper
          :slides-per-view="7"
          :modules="[SwiperNavigation]"
          :navigation="true"
      >
        <SwiperSlide v-for="item in props.event.peoples">
          <section class="flex justify-center">
            <img :src="`/assets/images/avatars/avatar${item}.png`" class="w-10 h-10 rounded-full"/>
          </section>
        </SwiperSlide>
      </Swiper>
    </section>
    </section>
    <section class="mt-3">
      <el-collapse v-model="showCollapse" class="show-event-collapse">
        <el-collapse-item title="" name="1">
          <section class="mt-2">
          <section class="flex items-center justify-between">
            <h1 class="font-bold text-lg text-gray-700">Description</h1>
          </section>
          <p class="font-normal text-gray-500 text-base">Physics project related to light refraction in solids and liquids and presentation of light refraction angle formulas.</p>
          </section>
          <hr class="my-2 border border-gray-300 border-opacity-10">
          <section>
            <section class="flex items-center justify-between">
              <h1 class="font-bold text-lg text-gray-700">To do</h1>
              <el-dropdown class="ml-auto" popper-class="primary-dropdown">
                <el-button class="btn" text>
                  <svg width="4" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.83329 15.6667C2.83329 15.2064 2.4602 14.8333 1.99996 14.8333C1.53972 14.8333 1.16663 15.2064 1.16663 15.6667C1.16663 16.1269 1.53972 16.5 1.99996 16.5C2.4602 16.5 2.83329 16.1269 2.83329 15.6667Z" stroke="#90A4AE" stroke-width="2"/>
                    <path d="M2.83329 9.00016C2.83329 8.53993 2.4602 8.16683 1.99996 8.16683C1.53972 8.16683 1.16663 8.53993 1.16663 9.00016C1.16663 9.4604 1.53972 9.8335 1.99996 9.8335C2.4602 9.8335 2.83329 9.4604 2.83329 9.00016Z" stroke="#90A4AE" stroke-width="2"/>
                    <path d="M2.83329 2.33317C2.83329 1.87293 2.4602 1.49984 1.99996 1.49984C1.53972 1.49984 1.16663 1.87293 1.16663 2.33317C1.16663 2.79341 1.53972 3.1665 1.99996 3.1665C2.4602 3.1665 2.83329 2.79341 2.83329 2.33317Z" stroke="#90A4AE" stroke-width="2"/>
                  </svg>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu >
                    <el-dropdown-item @click="share">share</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </section>
            <section class="mt-3 grid grid-cols-1 gap-5">
              <section v-for="(todo, index) in todoList" class="flex items-center gap-3">
                <el-checkbox v-model="todoList[index]" label="Option 1" style="--el-checkbox-checked-bg-color: #2DE09E">
                  <template #default>
                    <p class="text-gray-500 font-normal text-base decoration-success-500" :class="[todo ? 'line-through ' : '']">{{ index }}</p>
                  </template>
                </el-checkbox>
              </section>
            </section>
          </section>
        </el-collapse-item>
      </el-collapse>
    </section>
    <Share v-model="shareDialog" :title="`Share ${props.event.name}`" />
  </section>
</template>

<script setup>
import Icon from "../TheIcon/Icon";
import Share from "@/components/Base/Share/Share";
const props = defineProps({
  event: {
    default: ''
  }
})
const shareDialog = ref(false)
const todoList = ref({
  'study of light refraction season': true,
  'Google Search Related Articles': true,
  'Type project text': true,
  'Download slideshow template': false,
  'Download photos from Shutt': false,
  'Prepare a slideshow file': false,
  'Practice Presentation :))': false,
})
const showCollapse = ref("")
const toggleCollapse = () => {
  showCollapse.value == '1' ? showCollapse.value = '' : showCollapse.value = '1'
}
const share = () => {
  shareDialog.value = true
}
</script>

<style scoped>

</style>