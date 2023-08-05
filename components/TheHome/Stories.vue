<template>
  <div class="stories flex gap-4 pt-4 pb-2 border-b-[1px] overflow-auto w-full">
    <div
      class="story flex flex-col gap-1 justify-between min-w-max"
      @click="router.push('/editor')"
    >
      <figure
        class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
      >
        <img
          :src="avatar6"
          class="object-cover h-[60px] border-primary-300 w-[60px] rounded-full border-2 border-dashed filter blur-[1px] grayscale-[0.5] p-[1px]"
        />
        <figcaption class="absolute px-4 text-lg text-white top-0 w-[60px] h-[60px] flex items-center justify-center">
          <p class="text-2xl text-center">+</p>
        </figcaption>
      </figure>
      <p class="pb-0 text-[11px] text-gray-300 font-normal text-center">
        Add Yours
      </p>
    </div>
    <div
      class="story flex flex-col gap-1 justify-between min-w-max"
      v-for="(story, index) in storyList"
      :key="index"
      @click="showUserStory(story)"
    >
      <img
        :src="story.avatar"
        class="object-cover h-[60px] w-[60px] rounded-full border-2 p-[1px]"
        :class="story.isStoryVisited ? '' : ' border-primary-300'"
      />
      <p class="pb-0 text-[11px] text-gray-300 font-normal">
        {{ story.title }}
      </p>
    </div>
  </div>
</template>
<script setup>
import avatar6 from "~/assets/images/avatars/avatar6.jpg";
import { ref } from "vue";
import { useRouter } from "vue-router";

//state

const stories = useUsers();
const storylist = useStoryList();
const router = useRouter();
const isNavigationVisible = useNavigation();
const account = useAccount();

//computed

const stories2 = computed(() => {
  let x = [];
  storylist.value.map((item) => {
    item.slides.length && x.push(item.userId);
  });
  return x;
});
const storyList = computed(() => {
  return stories.value.filter((item) => stories2.value.includes(item.id));
});

//methods

const showUserStory = (user) => {
  user.isStoryVisited = true;
  account.value = user;
  isNavigationVisible.value = true;
  router.push(`/story/${user.id}`);
};
</script>
