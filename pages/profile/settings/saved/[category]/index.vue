<template>
  <Header :isColMode="isColMode" @colMode="isColMode = false" />
  <template v-if="isColMode && postArray.length" :key="counter">
    <Post
      v-for="(post, index) in postArray"
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
  <template v-if="!isColMode && postArray.length">
    <div class="grid grid-cols-3 gap-1 mt-2">
      <img
        v-for="(post, index) in postArray"
        :key="index"
        :src="post.image"
        class="min-h-[120px] h-[120px] w-full object-cover"
        @click="showPostsList(post.id)"
      />
    </div>
  </template>
  <div
    v-if="!postArray.length"
    style="height: calc(100vh - 150px)"
    class="w-full flex items-center justify-center"
  >
    <img :src="Empty" class="w-full max-h-[300px]" />
  </div>
</template>
<script setup>
import Header from "@/components/TheProfile/Settings/Saved/Header.vue";
import Post from "@/components/TheProfile/PostCard.vue";
import Empty from "@/assets/noData/Empty.jpg";
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
const savedPost = useSavedList();
const route = useRoute();
const postArray = ref([]);

const showPostsList = (id) => {
  isColMode.value = !isColMode.value;
  setTimeout(() => {
    document.getElementById(`${id}`).scrollIntoView();
  }, 100);
};

onMounted(() => {
  let r = route.params.category;
  r.split("-").map((item) => {
    r = r.replace("-", " ");
  });
  const x = savedPost.value.filter((item) => item.type == r);
  x.map((item, index) => {
    let image = item.src;
    item = postList.value.filter((post) => post.id == item.id)[0];
    item.image = image;
    postArray.value.push(item);
  });
  console.log(postArray.value, r);
});
</script>
