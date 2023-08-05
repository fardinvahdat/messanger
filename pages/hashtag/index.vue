<template>
  <section
    class="hashtag max-w-[414px] m-auto border-[1px] min-h-screen px-3"
  >
    <Header />
    <HashtagList @change="showList"/>
  </section>
</template>

<script setup>
import Header from "@/components/TheHashtag/Header.vue";
import HashtagList from "@/components/TheHashtag/HashtagList.vue";
const router = useRouter()
const showList = (e) => {
  let url = `/hashtag/list`
  router.push({ path: url, query: {id: e} })
}
</script>