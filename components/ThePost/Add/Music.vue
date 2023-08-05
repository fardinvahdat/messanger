<template>
  <section class="add-music">
    <el-radio-group v-model="activeMusic" class="grid grid-cols-1 gap-5">
      <el-radio v-for="music in musics" :label="music" size="large" border class="w-full">
        <template #default>
        <section class="flex justify-between items-center gap-2">
        {{ music }}
          <Icon name="music-transparent" class="text-gray-700" />
        </section>
        </template>
      </el-radio>
    </el-radio-group>
  </section>
</template>

<script setup>
import Icon from '@/components/TheIcon/Icon'
const emits = defineEmits()
const props = defineProps({
  activeItem: {
    default: ''
  }
})
const activeMusic = computed({
  set(value) {
    emits('update:activeItem', value)
  },
  get() {
    return props.activeItem
  }
})
const musics = ref([
  'Crown your life',
  'Twin',
  'Promise',
  'Love U for fun'
])
</script>

<style scoped>

</style>