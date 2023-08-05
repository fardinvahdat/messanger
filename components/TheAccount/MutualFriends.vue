<template>
  <div class="flex flex-col gap-4 mt-2">
    <div
      class="result flex gap-2 items-center"
      v-for="(item, index) in state"
      :key="index"
      @click="showMore(item)"
    >
      <div class="avatar">
        <img
          :src="item.avatar"
          class="h-[60px] w-[60px] rounded-full flex items-center justify-center object-cover"
        />
      </div>
      <div class="info">
        <h5 class="text-gray-700 text-lg font-medium">{{ item.title }}</h5>
        <p class="text-gray-500 text-xs font-normal">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
//state

const props = defineProps({
  state: {
    default: [],
  },
});
const { state } = props;
const account = useAccount();
const isMutualFriendsVisible = useMutualFriends();

//methods

const showMore = (item) => {
  account.value = item;
  isMutualFriendsVisible.value = false;
  router.push("/account");
};
</script>