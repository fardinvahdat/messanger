<template>
  <section class="home border-[1px] min-h-screen px-3 bg-white">
    <Header />
    <Stories />
    <PostList />

    <div class="sticky bottom-[80px] ml-auto h-[35px] w-[35px]">
      <span
        class="inline-block max-h-[35px] w-[35px] p-[2px] rounded-full border-[2px] bg-white border-primary-500"
        @click="isContextMenuVisible = !isContextMenuVisible"
      >
        <Icon name="circle-plus-blue" />
      </span>

      <template v-if="isContextMenuVisible"><ContextMenu /> </template>
    </div>
  </section>
</template>
<script setup>
import Header from "@/components/TheHome/Header.vue";
import Stories from "@/components/TheHome/Stories.vue";
import PostList from "@/components/TheHome/PostList.vue";
import SearchResult from "@/components/TheHome/SearchResult.vue";
import ContextMenu from "@/components/TheHome/ContextMenu.vue";
import Icon from "@/components/TheIcon/Icon.vue";

import { ref } from "vue";

//state
const showResultMode = useSearchType();
const hashtagSearchResult = useHashtags();
const placeSearchResult = usePlaces();
const accountSearchResult = useUsers();
const account = useAccount();
const isContextMenuVisible = ref(false);

onMounted(() => {
  account.value = null;
});
</script>
