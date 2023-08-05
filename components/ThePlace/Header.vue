<template>
  <div class="header pt-6 pb-2 border-b-[1px] sticky top-0 bg-white">
    <section>
      <section class="flex justify-between">
        <div class="left">
          <h3
            class="text-lg font-bold flex gap-2 items-center"
            @click="router.go(-1)"
          >
            <span class="relative bottom-[2px]"
              ><Icon name="arrow-angle-left"
            /></span>
            {{ place }}
          </h3>
        </div>
      </section>
    </section>
  </div>
</template>
<script setup>
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

//state

const place = usePlace();
const router = useRouter();
</script>