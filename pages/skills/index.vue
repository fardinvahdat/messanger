<template>
  <section class="home border-[1px] min-h-screen px-3 bg-white">
    <Header />
    <PostList />

    <div class="sticky bottom-[80px] ml-auto h-[35px] w-[35px]">
      <NuxtLink
        to="/skills/add"
        class="inline-block max-h-[35px] w-[35px] p-[2px] rounded-full border-[2px] bg-white border-primary-500"
      >
        <Icon name="circle-plus-blue" />
      </NuxtLink>
    </div>
  </section>
</template>
<script setup>
import Header from "@/components/TheSkills/Header.vue";
import PostList from "@/components/TheSkills/PostList.vue";
import Icon from "@/components/TheIcon/Icon.vue";

import { ref } from "vue";

//state
</script>