<template>
  <section>
  <section class="flex items-center gap-3">
    <el-button class="btn" text @click="router.go(-1)">
      <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.69102 1.14452C8.59373 1.0734 8.47815 1.01698 8.3509 0.978481C8.22366 0.939983 8.08725 0.920166 7.94948 0.920166C7.81172 0.920166 7.6753 0.939983 7.54806 0.978481C7.42081 1.01698 7.30524 1.0734 7.20794 1.14452L0.245038 6.22131C0.167362 6.27783 0.105737 6.34496 0.0636898 6.41887C0.021643 6.49277 0 6.572 0 6.65201C0 6.73202 0.021643 6.81125 0.0636898 6.88516C0.105737 6.95906 0.167362 7.02619 0.245038 7.08271L7.20794 12.1595C7.61851 12.4589 8.28045 12.4589 8.69102 12.1595C9.10159 11.8602 9.10159 11.3775 8.69102 11.0782L2.62466 6.64896L8.6994 2.21975C9.10159 1.9265 9.10159 1.43776 8.69102 1.14452Z" fill="black" fill-opacity="0.8"/>
      </svg>
    </el-button>
    <section class="flex items-center grow-0 gap-2">
      <img src="/assets/images/groups/group1.png" class="w-14 h-14 rounded-full flex-shrink-0"/>
      <section>
        <h1 class="font-medium text-base text-gray-700">Physics</h1>
        <p class="mt-1 text-sm text-gray-500 font-normal">Admin: Emma Watson</p>
      </section>
    </section>
    <section class="ml-auto">
      <el-button class="btn" text @click="toggleShowOptions">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.8333 16.6667C10.8333 16.2064 10.4602 15.8333 10 15.8333C9.53977 15.8333 9.16667 16.2064 9.16667 16.6667C9.16667 17.1269 9.53977 17.5 10 17.5C10.4602 17.5 10.8333 17.1269 10.8333 16.6667Z" stroke="#90A4AE" stroke-width="2"/>
          <path d="M10.8333 9.99992C10.8333 9.53968 10.4602 9.16658 10 9.16658C9.53977 9.16658 9.16667 9.53968 9.16667 9.99992C9.16667 10.4602 9.53977 10.8333 10 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 9.99992Z" stroke="#90A4AE" stroke-width="2"/>
          <path d="M10.8333 3.33342C10.8333 2.87318 10.4602 2.50008 10 2.50008C9.53977 2.50008 9.16667 2.87318 9.16667 3.33342C9.16667 3.79365 9.53977 4.16675 10 4.16675C10.4602 4.16675 10.8333 3.79365 10.8333 3.33342Z" stroke="#90A4AE" stroke-width="2"/>
        </svg>
      </el-button>
    </section>
  </section>
    <template v-if="isOptionsShow">
      <section class="mt-4 flex items-center justify-between">
        <section class="bg-primary-300 bg-opacity-30 flex items-center gap-1 py-1 px-3 rounded-full grow-0" v-for="option in options">
          <section v-html="icons[option.icon]" class="text-gray-500"/>
          <p class="text-sm font-normal text-gray-500">{{ option.name }}</p>
        </section>
      </section>
    </template>
  </section>
</template>

<script setup>
const router = useRouter()
const emits = defineEmits()
// variables
const isOptionsShow = ref(false)
const options = ref([
  { id: 1, name: 'Reply', icon: 'reply' },
  { id: 1, name: 'Forward', icon: 'forward' },
  { id: 1, name: 'Copy', icon: 'copy' },
  { id: 1, name: 'Delete', icon: 'delete' },
])
const icons = reactive({
  'reply': '<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '<path d="M5.83333 4.06047V0.382741L0 6.02975L5.83333 11.5771V8.21511C13.1458 8.21511 15 0.000366211 15 0.000366211C12.93 3.70426 9.8025 4.06047 5.83333 4.06047Z" fill="currentColor"/>\n' +
      '</svg>\n',
  'forward': '<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '<path d="M9.16667 7.51672V11.1945L15 5.54743L9.16667 0V3.36205C1.85417 3.36205 0 11.5768 0 11.5768C2.07 7.87293 5.1975 7.51672 9.16667 7.51672Z" fill="currentColor"/>\n' +
      '</svg>\n',
  'copy': '<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '<path d="M7.8 3.9H1.3C0.58305 3.9 0 4.48305 0 5.2V11.7C0 12.417 0.58305 13 1.3 13H7.8C8.51695 13 9.1 12.417 9.1 11.7V5.2C9.1 4.48305 8.51695 3.9 7.8 3.9Z" fill="currentColor"/>\n' +
      '<path d="M11.7 0H5.2C4.85522 0 4.52456 0.136964 4.28076 0.380761C4.03696 0.624558 3.9 0.955219 3.9 1.3V2.6H9.1C9.44478 2.6 9.77544 2.73696 10.0192 2.98076C10.263 3.22456 10.4 3.55522 10.4 3.9V9.1H11.7C12.0448 9.1 12.3754 8.96304 12.6192 8.71924C12.863 8.47544 13 8.14478 13 7.8V1.3C13 0.955219 12.863 0.624558 12.6192 0.380761C12.3754 0.136964 12.0448 0 11.7 0Z" fill="currentColor"/>\n' +
      '</svg>\n',
  'delete': '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '<path d="M11.5 2.14512H9.5V0.953386C9.5 0.427534 9.05156 0 8.5 0H3.5C2.94844 0 2.5 0.427534 2.5 0.953386V2.14512H0.5C0.223437 2.14512 0 2.35814 0 2.62181V3.0985C0 3.16405 0.05625 3.21768 0.125 3.21768H1.06875L1.45469 11.0086C1.47969 11.5166 1.92031 11.9173 2.45312 11.9173H9.54688C10.0813 11.9173 10.5203 11.5181 10.5453 11.0086L10.9312 3.21768H11.875C11.9438 3.21768 12 3.16405 12 3.0985V2.62181C12 2.35814 11.7766 2.14512 11.5 2.14512ZM8.375 2.14512H3.625V1.07256H8.375V2.14512Z" fill="currentColor"/>\n' +
      '</svg>\n'
})

// methods
const toggleShowOptions = () => {
  isOptionsShow.value =! isOptionsShow.value
  emits('showOptions', isOptionsShow.value)
}

</script>

<style scoped>

</style>