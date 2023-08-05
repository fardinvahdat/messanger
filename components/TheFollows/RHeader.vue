<template>
  <div class="header pt-6 border-b-[1px] sticky top-0 z-40 bg-white">
    <section class="pb-2 justify-between">
      <div
        class="logo flex gap-2 items-center"
        v-if="state"
        @click="router.push(`/follows/${route.params.id}`)"
      >
        <Icon name="arrow-angle-left" /> Follow Requests
      </div>
    </section>
  </div>
</template>
<script setup>
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

//state

const router = useRouter();
const route = useRoute();
const users = useUsers();
const state = ref(null);

//methods

onMounted(() => {
  state.value = users.value.filter((item) => item.id == route.params.id)[0];
});
</script>