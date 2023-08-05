<template>
  <main>
    <Post
      v-for="(post, index) in postList"
      :key="index"
      :state="post"
      :id="post.id"
    />
  </main>
</template>
<script setup>
import Post from "@/components/TheSkills/Post.vue";
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
const postList = useSkills();
</script>