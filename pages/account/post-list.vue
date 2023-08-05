<template>
  <section class="account max-w-[414px] m-auto border-[1px] min-h-screen px-3">
    <Header/>
    <client-only>
      <template v-for="post in posts">
        <section :id="`post-item-${post.id}`">
          <Post :state="post"/>
        </section>
      </template>
    </client-only>
  </section>
</template>

<script setup>
import Header from "@/components/TheAccount/ThePostList/Header.vue";
import Post from "@/components/ThePostCard/Post";
//state
const postList = usePosts();
const route = useRoute()
const account = useAccount();
const posts = computed(() => {
  return postList.value.filter(item => item.authorId == account.value.id)
})
const fetchPost = () => {
  let id = route.query.post_id
  let currentPost = document.getElementById(`post-item-${id}`)
  if (currentPost) {
    currentPost.scrollIntoView({
      behavior: 'smooth',
    })
  }
}
onMounted(() => {
  setTimeout(() => {
    fetchPost()
  }, 100)
})
</script>