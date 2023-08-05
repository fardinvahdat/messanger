<template>
  <section class="add-post bg-white relative max-w-[414px] m-auto border-[1px] min-h-screen">
    <Header class="p-3" />
    <section class="mt-4 p-3">
      <Body />
    </section>
  </section>
</template>
<script setup>
import Header from "@/components/ThePost/Add/Header.vue";
import Body from "@/components/ThePost/Add/Body.vue";
import Icon from "@/components/TheIcon/Icon.vue";

import { ref } from "vue";
</script>
