<template>
  <template v-if="isColMode" :key="counter">
    <Post
      v-for="(post, index) in posts"
      :key="index"
      :state="post"
      :id="post.id"
      :posts="posts"
      @colMode="isColMode = false"
      @update="
        counter++;
        isColMode = false;
      "
    />
  </template>
  <template v-if="!isColMode">
    <div class="grid grid-cols-3 gap-1 mt-2">
      <img
        v-for="(post, index) in posts"
        :key="index"
        :src="post.image"
        class="min-h-[120px] h-[120px] w-full object-cover"
        @click="showPostsList(post.id)"
      />
    </div>
  </template>
</template>
<script setup>
import Post from "@/components/TheProfile/PostCard.vue";
import { computed, ref } from "vue";

const isColMode = ref(false);
const counter = ref(0);

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

const showPostsList = (id) => {
  isColMode.value = !isColMode.value;
  setTimeout(() => {
    document.getElementById(`${id}`).scrollIntoView();
  }, 100);
};
</script>
