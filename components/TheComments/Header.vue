<template>
  <div class="header pt-6 pb-2 border-b-[1px] sticky top-0 z-40 bg-white">
    <section class="flex justify-between">
      <div class="left">
        <div
          class="text-lg font-bold flex gap-2 items-center"
          @click="
            router.go(-1);
            isNavigationVisible = false;
          "
        >
          <span class="relative bottom-[2px]"
            ><Icon name="arrow-angle-left"
          /></span>
          Comments
        </div>
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
const isNavigationVisible = useNavigation();
</script>