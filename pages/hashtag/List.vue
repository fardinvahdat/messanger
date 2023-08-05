<template>
  <section class="pb-14 px-3">
    <Header/>
    <section class="mt-2 grid grid-cols-1 gap-5 p-3">
      <template v-for="(post, index) in posts">
        <section :id="post.id">
          <Post :state="post" class="w-full"/>
        </section>
      </template>
    </section>
  </section>
</template>

<script setup>
import Header from '@/components/TheHashtag/Header'
import Post from "@/components/ThePostCard/Post.vue";

const posts = usePosts()

const route = useRoute()
onMounted(() => {
  console.log(posts.value)
  setTimeout(() => {
    let id = route.query.id
    let element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }, 100)
})
</script>

<style scoped>

</style>