<template>
  <div class="header pt-6 flex items-center gap-2 border-b-[1px] sticky top-0 z-40 bg-white">
    <el-button class="btn" text @click="router.go(-1)">
        <span class="relative bottom-[2px]"
        ><Icon name="arrow-angle-left"
        /></span>
    </el-button>
    <section class=" pb-2 justify-between">
      <div class="logo flex gap-2 items-center">
        <Icon name="profile-posts" /> Add post
      </div>
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