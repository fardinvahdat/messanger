<template>
  <section class="flex items-center justify-between">
    <section class="flex items-center gap-2 grow-0">
      <img :src="props.info.image" class="w-16 h-16 rounded-full flex-shrink-0">
      <section>
        <h1 class="font-medium text-lg text-gray-700">Megan smith</h1>
        <p class="mt-1 font-normal text-xs text-gray-500">@meg-sth</p>
      </section>
    </section>
    <template v-if="props.info.isFollowed">
      <el-button class="btn btn-primary rounded-full py-1 px-4" @click="toggleFollow">
        UnFollow
      </el-button>
    </template>
    <template v-else>
        <el-button class="btn btn-primary border border-primary-300 bg-transparent border-solid text-primary-300 rounded-full py-1 px-4" @click="toggleFollow">
        Follow
      </el-button>
    </template>
  </section>
</template>

<script setup>
const props = defineProps({
  info: ''
})

const toggleFollow = () => {
  props.info.isFollowed = props.info.isFollowed == true ? false : true
}
</script>

<style scoped>

</style>