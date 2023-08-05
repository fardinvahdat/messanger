<template>
  <div class="header pt-6 border-b-[1px] sticky top-0 z-40 bg-white">
    <section class=" pb-2 justify-between">
      <div class="logo flex gap-2 items-center">
        <Icon name="folder-black" /> Questions
      </div>
      <hr class="my-2 border border-gray-300 border-opacity-10" />
      <el-input v-model="search" class="w-full mt-2 h-[44px]">
        <template #suffix><Icon name="arrow-angle-right-blue" /></template>
        <template #prefix><Icon name="search" /></template>
      </el-input>
    </section>
  </div>
</template>
<script setup>
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

//state

const router = useRouter();
const search = ref('')

//methods
</script>