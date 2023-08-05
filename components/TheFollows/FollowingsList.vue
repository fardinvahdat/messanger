<template>
  <div>
    <ul v-if="state">
      <li
        v-for="(following, index) in state.followings"
        :key="index"
        class="flex items-center justify-between my-2"
      >
        <div class="flex items-center justify-between gap-2">
          <img
            :src="following.avatar"
            class="object-cover rounded-full h-[60px] w-[60px]"
          />
          <div>
            <h6 class="text-gray-700 text-base mb-0">{{ following.title }}</h6>
            <p class="text-gray-500 text-sm">
              {{ following.description.slice(0, 10) }}
            </p>
          </div>
        </div>
        <button
          class="px-6 py-2 rounded-xl text-sm bg-primary-300 font-bold text-white"
          @click="removeFollowing(following)"
        >
          Following
        </button>
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

const removeFollowing = (follower) => {
  state.value.followings = state.value.followings.filter(
    (item) => item.id !== follower.id
  );
};
</script>