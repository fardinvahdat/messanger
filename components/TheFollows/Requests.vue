<template>
  <div>
    <ul v-if="state">
      <li
        v-for="(request, index) in state.followRequests"
        :key="index"
        class="flex items-center justify-between my-2"
      >
        <div class="flex items-center justify-between gap-2">
          <img
            :src="request.avatar"
            class="object-cover rounded-full h-[60px] w-[60px]"
          />
          <div>
            <h6 class="text-gray-700 text-base mb-0">{{ request.title }}</h6>
            <p class="text-gray-500 text-sm">
              {{ request.description.slice(0, 20) }}
            </p>
          </div>
        </div>
        <div class="flex gap-2">
          <button
            class="px-4 py-2 rounded-xl text-sm bg-primary-300 font-bold text-white"
            @click="confirmRequest(request)"
          >
            Confirm
          </button>
          <button
            class="px-4 py-2 rounded-xl text-sm bg-gray-300 font-bold text-white"
            @click="deleteRequest(request)"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

//state

const users = useUsers();
const route = useRoute();
const state = ref(null);

//mounted

onMounted(() => {
  state.value = users.value.filter((item) => item.id == route.params.id)[0];
});

//methods

const confirmRequest = (follower) => {
  state.value.followRequests = state.value.followRequests.filter(
    (item) => item.id !== follower.id
  );
  console.log(state.value.followers, follower);
  state.value.followers.push(follower);
};
const deleteRequest = (follower) => {
  state.value.followRequests = state.value.followRequests.filter(
    (item) => item.id !== follower.id
  );
};
</script>