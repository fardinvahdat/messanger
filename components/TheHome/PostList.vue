<template>
  <main>
    <Post
      v-for="(post, index) in posts"
      :key="index"
      :state="post"
    />
  </main>
</template>
<script setup>
import Post from "@/components/ThePostCard/Post.vue";
import { computed } from "vue";

//computed

const posts = computed(() => {
  if (account.value?.id) {
    return postList.value.filter((item) => item.authorId == account.value.id);
  } else {
    return postList.value;
  }
});

//state

const account = useAccount();
const postList = usePosts();
</script>