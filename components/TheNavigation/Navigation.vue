<template>
  <footer
    class="fixed max-w-[414px] m-auto bottom-0 h-[70px] w-full bg-primary-800 flex justify-around rounded-t-[10px] items-center z-10"
  >
    <NuxtLink
      v-for="(item, index) in navigations"
      :key="index"
      :to="item.route"
      @click="item.route == '/home' ? (account = null) : ''"
      ><span><Icon :name="item.icon" /></span
    ></NuxtLink>
    <NuxtLink to="/profile" @click="goToProfile">
      <img :src="avatar" class="h-[30px] w-[30px] rounded-full object-cover" />
    </NuxtLink>
  </footer>
</template>

<script setup>
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";

//state

const account = useAccount();
const users = useUsers();
const avatar = ref("");
const counter = useCounter();
const navigations = ref([
  {
    route: "/home",
    icon: "image",
  },
  {
    route: "/questions-and-answers",
    icon: "folder",
  },
  {
    route: "/skills",
    icon: "play",
  },
  {
    route: "/explore",
    icon: "compass",
  },
]);

//methods

const goToProfile = () => {
  account.value = users.value.filter((item) => item.id == 3)[0];
};

//mounted

onMounted(() => {
  avatar.value = users.value.filter((item) => item.id === 3)[0].avatar;
});

watch(counter, (value) => {
  avatar.value = users.value.filter((item) => item.id === 3)[0].avatar;
});
</script>
