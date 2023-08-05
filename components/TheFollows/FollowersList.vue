<template>
  <div v-if="state">
    <div
      class="flex items-center justify-start gap-2 relative"
      @click="router.push(`/follows/${route.params.id}/requests`)"
    >
      <span
        class="text-xs absolute left-[40px] top-0 rounded-full bg-primary-600 text-white w-[20px] h-[20px] flex items-center justify-center"
        >{{ state.followRequests.length }}</span
      >
      <img :src="avatar6" class="object-cover rounded-full h-[60px] w-[60px]" />
      <div>
        <h6 class="text-gray-700 text-base mb-0">Follow Requests</h6>
        <p class="text-gray-500 text-sm">Approve or ignore requests</p>
      </div>
    </div>
    <el-divider class="mt-2" />
    <h3 class="font-bold my-2 pb-4">All Followers</h3>
    <ul>
      <li
        v-for="(follower, index) in state.followers"
        :key="index"
        class="flex items-center justify-between my-2"
      >
        <div class="flex items-center justify-between gap-2">
          <img
            :src="follower.avatar"
            class="object-cover rounded-full h-[60px] w-[60px]"
          />
          <div>
            <h6 class="text-gray-700 text-base mb-0">{{ follower.title }}</h6>
            <p class="text-gray-500 text-sm">
              {{ follower.description.slice(0, 20) }}
            </p>
          </div>
        </div>
        <button
          class="px-6 py-2 rounded-xl text-sm bg-primary-500 font-bold text-white"
          @click="removeFollower(follower)"
        >
          Remove
        </button>
      </li>
    </ul>
    <el-divider class="mt-2" />
    <h3 class="font-bold my-2 pb-4">Suggested</h3>
    <Swiper :slides-per-view="2">
      <SwiperSlide
          v-for="(follower, index) in state.followers"
        :key="index"
        class="text-center my-2"
      >
        <div class="grid grid-cols-1 gap-2">
          <img
            :src="follower.avatar"
            class="object-cover rounded-full h-[60px] w-[60px] mx-auto"
          />
          <div>
            <h6 class="text-gray-700 text-base mb-0">{{ follower.title }}</h6>
            <p class="text-gray-500 text-sm">
              {{ follower.description.slice(0, 20) }}
            </p>
          </div>
        </div>
        <button
          class="px-6 py-2 rounded-xl text-sm bg-primary-500 font-bold text-white"
        >
          Follow
        </button>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import avatar6 from "~/assets/images/avatars/avatar6.jpg";
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";

//state

const users = useUsers();
const router = useRouter();
const route = useRoute();
const state = ref(null);

//mounted

onMounted(() => {
  state.value = users.value.filter((item) => item.id == route.params.id)[0];
  console.log(state.value.followers);
});

//methods

const removeFollower = (follower) => {
  state.value.followers = state.value.followers.filter(
    (item) => item.id !== follower.id
  );
};
</script>