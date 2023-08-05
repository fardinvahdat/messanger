<template>
  <div class="header pt-6 pb-2 border-b-[1px] sticky top-0 z-40 bg-white">
    <section class="flex pb-4 justify-between">
      <div class="logo">
        <img src="~/assets/images/svg/Logo.svg" />
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

const isSearchModeToggler = () => {
  router.push("/search");
};
</script>