<template>
  <nuxt-link :to="props.item.href" class="flex items-center gap-1 w-[50%]">
    <section >
      <Icon :name="props.item.icon"/>
    </section>
    <p class="font-normal text-gray-500 text-xs">{{ props.item.name }}</p>
  </nuxt-link>
</template>

<script setup>
import Icon from "../../TheIcon/Icon";
const props = defineProps({
  item: {
    default: []
  }
})
</script>

<style scoped>

</style>