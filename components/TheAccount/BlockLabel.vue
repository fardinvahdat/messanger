<template>
  <section class="absolute left-0 top-0 w-full h-full z-30 bg-white bg-opacity-20 backdrop-blur-lg">
    <section class="w-full h-full flex items-center justify-center p-3">
      <h1 class="text-base font-normal text-gray-700">
        <template v-if="props.type == 'block'">
        You Blocked Megan Smith Account. Megan Smith Unable to see your content.
        </template>
        <template v-else-if="props.type == 'report'">
          Megan Smith Account reported. We will review your reported case and take appropriate action.
          Thanks for helping.
        </template>
        <el-button @click="undoClicked" class="btn text-primary-500 inline-block items-center gap-1" text>
          Undo
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.66973 1.57503e-05C7.08109 0.00466419 4.73074 1.02474 2.99551 2.68302L1.60043 1.28795C1.0098 0.69732 0 1.1156 0 1.95084V7.18751C0 7.70529 0.419727 8.12501 0.9375 8.12501H6.17418C7.00941 8.12501 7.4277 7.11521 6.83711 6.52458L5.20625 4.89372C6.41187 3.76486 7.97191 3.13955 9.6293 3.12525C13.2386 3.09408 16.281 6.01497 16.2498 9.74407C16.2202 13.2816 13.3522 16.25 9.6875 16.25C8.08098 16.25 6.56262 15.6767 5.36602 14.6267C5.18074 14.4642 4.90094 14.4741 4.72664 14.6483L3.17734 16.1976C2.98703 16.3879 2.99645 16.6982 3.19617 16.8786C4.91398 18.4302 7.19039 19.375 9.6875 19.375C15.0377 19.375 19.375 15.0378 19.375 9.68759C19.375 4.34349 15.0138 -0.00955456 9.66973 1.57503e-05Z" fill="#50CCE8"/>
          </svg>

        </el-button>
      </h1>
    </section>
  </section>
</template>

<script setup>
const emits = defineEmits()
const props = defineProps({
  type: {
    default: 'block' // report or block
  }
})
const undoClicked = () => {
  emits('undo', true)
}
</script>

<style scoped>

</style>