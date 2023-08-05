<template>
  <section class="follows border-[1px] min-h-screen px-3 bg-white">
    <Header />
    <Requests />
  </section>
</template>
<script setup>
import Header from "@/components/TheFollows/RHeader.vue";
import Requests from "@/components/TheFollows/Requests.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";

//state

const users = useUsers();
const state = ref(null);
const activeName = useFollowMode();
const route = useRoute();

//mounted

onMounted(() => {
  state.value = users.value.filter((item) => item.id == route.params.id)[0];
});
</script>