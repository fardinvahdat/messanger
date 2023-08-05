<template>
  <div class="grid grid-cols-3 gap-1 mt-2">
    <img
      v-for="(post, index) in posts"
      :key="index"
      :src="post.image"
      class="min-h-[120px] h-[120px] w-full object-cover"
      @click="showPostsList(post)"
    />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { computed } from "vue";

//computed

const posts = computed(() => {
  if (account.value.id) {
    return postList.value.filter((item) => item.authorId == account.value.id);
  }
});

//state

const account = useAccount();
const postList = usePosts();
const router = useRouter();

//methods

const showPostsList = (post) => {
  router.push(`/account/post-list?post_id=${post.id}`);
};
</script>