<template>
  <section class="explore-id border-[1px] min-h-screen px-3 bg-white">
    <PostHeader />
    <section
      v-for="(item, index) in state"
      :key="index"
      :id="ExplorePosts[index].id"
    >
      <Post :state="item" />
    </section>
  </section>
</template>
<script setup>
import Header from "@/components/TheExplore/Header.vue";
import PostHeader from "@/components/TheExplore/PostHeader.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import Post from "@/components/ThePostCard/Post";

import { ref } from "vue";
const route = useRoute();
const ExplorePosts = ref([]);
const state = ref([]);
const exploreList = useExploreList();
const postList = usePosts();
const showExploreMode = useExploreType();
const showExploreModeType = useExploreModeType();
onMounted(() => {
  const x = exploreList.value.filter(
    (item) =>
      item.tags.includes(showExploreMode.value) ||
      item.tags.includes(showExploreModeType.value)
  );
  ExplorePosts.value = JSON.parse(JSON.stringify(x));
  postList.value.map((item, index) => {
    if (index < x.length) {
      let post = JSON.parse(JSON.stringify(item));
      post.image = x[index].src;
      state.value.push(post);
    }
  });
  setTimeout(() => {
    document.getElementById(`${route.params.id}`).scrollIntoView();
  }, 50);
});

//state
</script>
