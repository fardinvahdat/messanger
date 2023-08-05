<template>
  <Header />
  <div class="grid grid-cols-3 gap-1 mt-2" v-if="storyList.length">
    <img
      v-for="(story, index) in storyList"
      :key="index"
      :src="story.image"
      class="min-h-[180px] max-h-[180px] h-[120px] w-full object-cover"
      @click="showStory(story)"
    />
  </div>
  <div
    v-if="!storyList.length"
    style="height: calc(100vh - 150px)"
    class="w-full flex items-center justify-center"
  >
    <img :src="Empty" class="w-full max-h-[300px]" />
  </div>
</template>

<script setup>
import Header from "@/components/TheProfile/Settings/Stories/Header.vue";
import Empty from "@/assets/noData/Empty.jpg";
import { ref } from "vue";
import { useRouter } from "vue-router";

//state

const stories = useStoryList();
const router = useRouter();
const storyList = ref([]);
const isNavigationVisible = useNavigation();
onMounted(() => {
  storyList.value = stories.value.filter((item) => item.userId === 3)[0].slides;
  isNavigationVisible.value = false;
});

//methods

const showStory = (story) => {
  console.log(story.id);
  router.push(`/profile/settings/stories/${story.id}`);
};
</script>
