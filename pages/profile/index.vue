<template>
  <section class="p-6 pb-24">
    <Header />
    <hr class="mt-2 mb-4 border-t border-gray-300 border-opacity-10" />
    <Tabs v-model:activeTab="activeTab" />
    <hr class="my-2 border-t border-gray-300 border-opacity-10" />
    <template v-if="activeTab == 'Post'">
      <Posts />
    </template>
    <template v-else-if="activeTab == 'Answer'">
      <AnswerPost :state="state.answersList" />
    </template>
    <template v-else-if="activeTab == 'Skill'">
      <Post2
        v-for="(post, index) in state.postList"
        :key="index"
        :state="post"
        :id="post.id"
      />
    </template>
    <template v-else-if="activeTab == 'Question'">
      <Post
        v-for="(item, index) in state.questionsList"
        :key="index"
        :state="item"
      />
    </template>
  </section>
</template>
<script setup>
import Header from "@/components/TheProfile/Header";
import Tabs from "@/components/TheProfile/Tabs";
import Posts from "@/components/TheProfile/Posts";
import AnswerTab from "@/components/TheProfile/AnswerTab.vue";
import Post2 from "@/components/TheSkills/Post.vue";
import Post from "@/components/Base/CounterPost/Post.vue";
import AnswerPost from "@/components/Base/CounterPost/AnswerPost.vue";
import { ref } from "vue";
const router = useRouter();
const activeTab = useProfileTab();
watch(activeTab, () => {
  if (activeTab.value == "Chat") {
    router.push({ path: "/profile/private-chat" });
    activeTab.value = "Post";
  } else if (activeTab.value == "Financial") {
    router.push({ path: "/profile/financial" });
  }
});
const questionsList = useQuestionsAndAnswers();
const postList = useSkills();
const state = ref({
  postList: [],
  questionsList: [],
  answersList: [],
});

onMounted(() => {
  state.value.postList = postList.value.filter((item) => item.userId == 3);
  state.value.questionsList = questionsList.value.filter(
    (item) => item.authorId == 3
  );
  questionsList.value.map((item) => {
    item.answers.map((i) => {
      if (i.authorId == 3) {
        state.value.answersList.push(i);
      }
    });
  });
  if (activeTab.value == "Chat" || activeTab.value == "Financial") {
    activeTab.value = "Post";
  }
});
</script>
