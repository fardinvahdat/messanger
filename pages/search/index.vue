<template>
  <section class="home border-[1px] min-h-screen px-3 bg-white">
    <Header />
    <SearchResult
      v-if="showResultMode === 'Hashtags'"
      mode="hashtag"
      :state="hashtagSearchResult"
    />
    <SearchResult
      v-else-if="showResultMode === 'Places'"
      mode="places"
      :state="placeSearchResult"
    />
    <SearchResult
      v-else-if="showResultMode === 'Account'"
      mode="accounts"
      :state="accountSearchResult.reverse()"
    />
    <SearchResult
      v-else-if="showResultMode === 'Top'"
      mode="accounts"
      :state="accountSearchResult.reverse()"
    />
    <SearchResult v-else-if="showResultMode === 'Tags'" mode="tags" />
    <PostList v-else-if="showResultMode === 'Posts'"  />
    <Skiils v-else-if="showResultMode === 'Skills'"  />
    <template v-else-if="showResultMode === 'Questions'" >
      <Post class="mt-4" v-for="(item, index) in questionsList" :key="index" :state="item" />
    </template>
  </section>
</template>
<script setup>
import Header from "@/components/TheSearch/Header.vue";
import Stories from "@/components/TheHome/Stories.vue";
import PostList from "@/components/TheHome/PostList.vue";
import Skiils from "@/components/TheSkills/PostList.vue";
import Post from "@/components/Base/CounterPost/Post.vue";
import SearchResult from "@/components/TheHome/SearchResult.vue";
import { ref } from "vue";

//state
const showResultMode = useSearchType();

const hashtagSearchResult = useHashtags();
const placeSearchResult = usePlaces();
const accountSearchResult = useUsers();
const questionsList = useQuestionsAndAnswers();
</script>