<template>
  <section class="explore-id border-[1px] min-h-screen px-3 bg-white">
    <Header />
    <section v-for="(item, index) in posts" :key="index" :id="item.id">
      <Post :state="item" />
    </section>
  </section>
</template>
<script setup>
import Header from "@/components/TheArchives/Header.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import Post from "@/components/ThePostCard/Post";

import { ref } from "vue";

const route = useRoute();
const ExplorePosts = ref([]);
const postList = usePosts();
const state = useArchiveList();
const posts = ref([]);
onMounted(() => {
  ExplorePosts.value = JSON.parse(JSON.stringify(state.value));
  postList.value.map((item, index) => {
    if (index < state.value.length) {
      let post = JSON.parse(JSON.stringify(item));
      post.image = state.value[index].src;
      posts.value.push(post);
    }
  });
  setTimeout(() => {
    document.getElementById(`${route.params.id}`).scrollIntoView();
  }, 50);
});

//state
</script>
