<template>
  <div class="header pt-6 border-b-[1px] sticky top-0 z-40 bg-white">
    <section class="pb-2 justify-between">
      <div
        class="logo flex gap-2 items-center"
        @click="router.go(-1)"
      >
        <span class="relative bottom-[2px]"
          ><Icon name="arrow-angle-left"
        /></span>
        <Icon name="gear" /> Archives
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

//methods
</script>