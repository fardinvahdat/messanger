<template>
  <section class="">
    <el-input type="text" v-model="search">
      <template v-slot:prefix>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M19.728 17.2913L15.8332 13.3971C15.6574 13.2214 15.4191 13.1237 15.1691 13.1237H14.5323C15.6105 11.7449 16.2512 10.0107 16.2512 8.12421C16.2512 3.63636 12.6142 0 8.1256 0C3.63699 0 0 3.63636 0 8.12421C0 12.6121 3.63699 16.2484 8.1256 16.2484C10.0125 16.2484 11.747 15.6079 13.126 14.5298V15.1665C13.126 15.4165 13.2236 15.6547 13.3994 15.8305L17.2942 19.7246C17.6614 20.0918 18.2552 20.0918 18.6186 19.7246L19.7241 18.6193C20.0913 18.2521 20.0913 17.6584 19.728 17.2913ZM8.1256 13.1237C5.36367 13.1237 3.12523 10.8896 3.12523 8.12421C3.12523 5.36276 5.35977 3.1247 8.1256 3.1247C10.8875 3.1247 13.126 5.35885 13.126 8.12421C13.126 10.8857 10.8914 13.1237 8.1256 13.1237Z"
              fill="#90A4AE"/>
        </svg>
      </template>
      <template v-slot:append>
        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M0.308982 0.293557C0.406274 0.200504 0.521852 0.126676 0.649096 0.0763025C0.776341 0.0259291 0.912754 0 1.05052 0C1.18828 0 1.3247 0.0259291 1.45194 0.0763025C1.57919 0.126676 1.69476 0.200504 1.79206 0.293557L8.75496 6.93634C8.83264 7.01029 8.89426 7.09813 8.93631 7.19483C8.97836 7.29154 9 7.3952 9 7.49989C9 7.60459 8.97836 7.70825 8.93631 7.80495C8.89426 7.90166 8.83264 7.9895 8.75496 8.06345L1.79206 14.7062C1.38149 15.0979 0.71955 15.0979 0.308982 14.7062C-0.101586 14.3145 -0.101586 13.683 0.308982 13.2913L6.37534 7.4959L0.300604 1.70045C-0.101585 1.31675 -0.101586 0.677255 0.308982 0.293557Z"
              fill="#50CCE8"/>
        </svg>
      </template>
    </el-input>
    <section class="result mt-4 overflow-auto" :class="props.maxHeight">
      <section class="grid grid-cols-1 gap-4">
        <template v-for="item in results">
          <section class="flex items-center gap-3" @click="selectUser">
            <section class="relative w-12 h-12 rounded-full border-2 border-primary-300 flex-shrink-0">
              <img :src="item.image" class="w-full h-full">
              <template v-if="item.verify">
                <section class="absolute -right-2 w-4 h-4 rounded-full bg-primary-300 top-4 flex items-center justify-center">
                  <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.4635 2.99988L4.33252 5.49988" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
                    <path d="M1.4635 2.99988L4.33252 5.49988" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
                    <path d="M8.4895 0.941236L4.33227 5.49965" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
                    <path d="M8.4895 0.941236L4.33227 5.49965" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
                  </svg>
                </section>
              </template>
            </section>
            <section class="grow">
              <h1 class="text-lg font-medium text-gray-700">{{ item.name }}</h1>
              <p class="mt-2 text-sm text-gray-500 font-normal truncate">{{ item.data }}</p>
            </section>
          </section>
        </template>
      </section>
    </section>
  </section>
</template>

<script setup>
const props = defineProps({
  'maxHeight': {
    default: 'max-h-[150px]'
  }
})
const emits = defineEmits()
// variables
const search = ref('')
const results = ref([
  {
    id: 1,
    name: 'Megan smith',
    data: '@meg-sth, grade: Middle 7, Toronto',
    verify: true,
    image: '/assets/images/avatars/avatar1.png'
  },
  {
    id: 2,
    name: 'Megan smith',
    data: '@meg-sth, grade: Middle 7, Toronto',
    verify: false,
    image: '/assets/images/avatars/avatar2.png'
  },
  {
    id: 3,
    name: 'Megan smith',
    data: '@meg-sth, grade: Middle 7, Toronto',
    verify: false,
    image: '/assets/images/avatars/avatar3.png'
  },
  {
    id: 4,
    name: 'Megan smith',
    data: '@meg-sth, grade: Middle 7, Toronto',
    verify: false,
    image: '/assets/images/avatars/avatar4.png'
  }
])
// methods
const selectUser = () => {
  emits('select', true)
}
</script>

<style scoped>

</style>