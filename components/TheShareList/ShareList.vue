<template>
  <section class="my-4 flex flex-col justify-between h-full">
    <div>
      <el-input v-model="search" class="w-full mt-2 h-[44px] mb-4">
        <template #suffix><Icon name="arrow-angle-right-blue" /></template>
        <template #prefix><Icon name="search" /></template>
      </el-input>
      <div class="wrapper max-h-[200px] overflow-y-auto">
        <div
          v-for="(user, index) in users"
          :key="index"
          @click="user.isAddToShare = !user.isAddToShare"
          class="flex gap-2 items-center"
        >
          <div class="relative">
            <img
              :src="user.avatar"
              class="object-cover h-[60px] w-[60px] rounded-full border-2"
            />
            <div
              v-if="user.isAddToShare"
              class="absolute h-[40px] w-[40px] left-[10px] top-[10px] rounded-full bg-primary-500 bg-opacity-90 flex justify-center items-center"
            >
              <Icon name="check" />
            </div>
          </div>
          <div class="info">
            <h5 class="text-gray-700 text-lg font-medium">{{ user.title }}</h5>
            <p class="text-gray-500 text-xs font-normal">
              {{ user.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <el-input
        v-model="comment"
        class="w-full mt-2 h-[44px]"
        placeholder="Send a message!"
        autofocus
      >
      </el-input>
      <button
        type="button"
        class="rounded-lg w-full text-gray-700 bg-primary-500 mt-2 text-lg py-2"
        :class="isShared ? 'text-white bg-gray-500' : ''"
        @click="isShared = true"
      >
        {{ !isShared ? "Share" : "Shared" }}
      </button>
    </div>
  </section>
</template>

<script setup>
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";

//state

const users = useUsers();
const search = ref("");
const comment = ref("");
const isShared = ref(false);

//mounted

onMounted(() => {
  isShared.value = false;
});
</script>
