<template>
  <section class="py-2 container add-user-to-call">
    <el-button class="btn" text @click="closeMenu">
      <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8.69102 0.293557C8.59373 0.200504 8.47815 0.126676 8.3509 0.0763025C8.22366 0.0259291 8.08725 0 7.94948 0C7.81172 0 7.6753 0.0259291 7.54806 0.0763025C7.42081 0.126676 7.30524 0.200504 7.20794 0.293557L0.245038 6.93634C0.167362 7.01029 0.105737 7.09813 0.0636898 7.19483C0.021643 7.29154 0 7.3952 0 7.49989C0 7.60459 0.021643 7.70825 0.0636898 7.80495C0.105737 7.90166 0.167362 7.9895 0.245038 8.06345L7.20794 14.7062C7.61851 15.0979 8.28045 15.0979 8.69102 14.7062C9.10159 14.3145 9.10159 13.683 8.69102 13.2913L2.62466 7.4959L8.6994 1.70045C9.10159 1.31675 9.10159 0.677255 8.69102 0.293557Z"
            fill="black" fill-opacity="0.8"/>
      </svg>
    </el-button>
    <section class="flex items-center gap-4 overflow-auto mt-2">
      <template v-for="(friend, index) in friends">
        <section class="" @click="selectUser">
          <section class="w-16 h-16 rounded-full border-2 border-primary-300 relative">
            <img :src="`/assets/images/avatars/${friend}`" class="w-full h-full rounded-full"/>
            <template v-if="index == 1">
              <section class="absolute left-0 top-0 w-full h-full flex items-center justify-center">
                <section class="w-10 h-10 rounded-full flex items-center justify-center grow-0 bg-primary-300">

                  <template v-if="props.type == 'voice'">
                  <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0461 0.339905C15.1515 0.232287 15.2774 0.146792 15.4163 0.0884275C15.5553 0.0300626 15.7044 0 15.8551 0C16.0058 0 16.155 0.0300626 16.2939 0.0884275C16.4328 0.146792 16.5587 0.232287 16.6642 0.339905C17.1062 0.78655 17.1124 1.50829 16.6796 1.96267L7.54119 12.7656C7.43743 12.8795 7.31152 12.9711 7.17116 13.0347C7.0308 13.0983 6.87894 13.1326 6.72487 13.1355C6.5708 13.1384 6.41776 13.1098 6.27511 13.0515C6.13246 12.9933 6.0032 12.9065 5.89524 12.7965L0.334585 7.16168C0.120129 6.94297 0 6.64888 0 6.34257C0 6.03627 0.120129 5.74217 0.334585 5.52347C0.440058 5.41585 0.565942 5.33035 0.704866 5.27199C0.84379 5.21362 0.992961 5.18356 1.14365 5.18356C1.29433 5.18356 1.44351 5.21362 1.58243 5.27199C1.72135 5.33035 1.84724 5.41585 1.95271 5.52347L6.66953 10.3037L15.0152 0.373906C15.0248 0.361962 15.0351 0.350608 15.0461 0.339905Z" fill="white"/>
                  </svg>
                  </template>
                  <template v-else-if="props.type == 'video'">
                    <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.0714 2.61071C22.7025 2.4446 22.2929 2.39056 21.8935 2.45533C21.4941 2.5201 21.1225 2.70081 20.825 2.975L18.2143 5.40357V3.64286C18.2143 2.67671 17.8305 1.75014 17.1473 1.06697C16.4642 0.3838 15.5376 0 14.5714 0H3.64286C2.67671 0 1.75014 0.3838 1.06697 1.06697C0.3838 1.75014 0 2.67671 0 3.64286V13.3571C0 14.3233 0.3838 15.2499 1.06697 15.933C1.75014 16.6162 2.67671 17 3.64286 17H14.5714C15.5376 17 16.4642 16.6162 17.1473 15.933C17.8305 15.2499 18.2143 14.3233 18.2143 13.3571V11.5964L20.8371 14.025C21.2233 14.3745 21.7249 14.5691 22.2457 14.5714C22.5348 14.5708 22.8203 14.5087 23.0836 14.3893C23.4417 14.2444 23.7485 13.996 23.9648 13.6759C24.1811 13.3558 24.2971 12.9785 24.2979 12.5921V4.40786C24.2961 4.02012 24.1784 3.64178 23.9598 3.32151C23.7412 3.00124 23.4318 2.75369 23.0714 2.61071Z" fill="white"/>
                    </svg>
                  </template>
                </section>
              </section>
            </template>
          </section>
          <h2 class="mt-1 font-normal text-xs text-gray-300">sarah smith</h2>
        </section>
      </template>
    </section>
    <Search class="mt-3" @select="selectUser"/>
  </section>
</template>

<script setup>
import Search from './../Search'
const props = defineProps({
  'type' : {
    default: 'voice'
  }
})
const emits = defineEmits()
// variables
const friends = ref([
  'avatar1.png',
  'avatar2.png',
  'avatar3.png',
  'avatar4.png',
  'avatar5.png',
])
// methods
const closeMenu = () => {
  emits('close', true)
}
const selectUser = () => {
  emits('select', true)
}
</script>

<style scoped>

</style>