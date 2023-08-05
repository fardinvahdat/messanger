<template>
  <section
    class="account max-w-[414px] m-auto border-[1px] min-h-screen relative"
  >
    <!-- <Header @showTile="isTileView = $event" /> -->
    <!-- <ShowStories :isTileView="isTileView" /> -->
    <Stories
      @close="
        isNavigationVisible = false;
        router.push('/home');
      "
    />
  </section>
</template>

<script setup>
import Header from "@/components/TheStory/Header.vue";
import ShowStories from "@/components/TheStory/ShowStories.vue";
import Stories from "@/components/TheStory/Stories.vue";
import { useRouter } from "vue-router";

//state
const isNavigationVisible = useNavigation();
const router = useRouter();
const isTileView = ref(true);

//methods
</script>