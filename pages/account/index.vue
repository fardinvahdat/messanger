<template>
  <section
    class="account max-w-[414px] m-auto border-[1px] min-h-screen px-3 relative"
  >
    <Header
      v-if="account"
      @block="syncBlock(true)"
      @report="syncReport(true)"
      :isBlocked="account.isBlocked"
    />
    <template v-if="account && !account.isBlocked">
      <template v-if="!isMutualFriendsVisible && account.isPublic">
        <Tabs v-model:activeTab="activeTab" class="my-4" />
        <template v-if="activeTab == 'Post'">
          <PostWrapper v-if="!isMutualFriendsVisible && account.isPublic" />
        </template>
        <template v-else-if="activeTab == 'Skill'">
          <SkillWrapper />
        </template>
        <template v-else-if="activeTab == 'Question'">
          <Post
            v-for="(item, index) in state.questionsList"
            :key="index"
            :state="item"
          />
        </template>
        <template v-else-if="activeTab == 'Answer'">
          <AnswerPost :state="state.answersList" />
        </template>
      </template>
      <MutualFriends
        v-else-if="isMutualFriendsVisible"
        :state="mutualFriends"
      />
    </template>
    <section
      v-if="account && !account.isPublic && !isMutualFriendsVisible"
      class="flex items-center mt-4 gap-4"
    >
      <div>
        <Icon name="lock" />
      </div>
      <div>
        <h4 class="font-bold text-base">This Account is Private</h4>
        <p class="text-gray-700 text-sm">
          follow this account to see their photos and videos
        </p>
      </div>
    </section>
    <BlockLabel v-if="account && account.isBlocked" @undo="syncBlock(false)" />
  </section>
</template>

<script setup>
import Header from "@/components/TheAccount/Header.vue";
import BlockLabel from "@/components/TheAccount/BlockLabel.vue";
import MutualFriends from "@/components/TheAccount/MutualFriends.vue";
import PostWrapper from "@/components/TheAccount/PostWrapper.vue";
import SkillWrapper from "@/components/TheAccount/SkillWrapper.vue";
import QuestionWrapper from "@/components/TheAccount/QuestionWrapper.vue";
import AnswerWrapper from "@/components/TheAccount/AnswerWrapper.vue";
import Tabs from "@/components/TheAccount/Tabs.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import Post from "@/components/Base/CounterPost/Post.vue";
import AnswerPost from "@/components/Base/CounterPost/AnswerPost.vue";

//state

const isMutualFriendsVisible = useMutualFriends();
const mutualFriends = useUsers();
const isBlocked = ref(false);
const isReported = ref(false);
const users = useUsers();

const account = useAccount();
const activeTab = useAccountTab();
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
    (item) => item.authorId == account.value.id
  );
  questionsList.value.map((item) => {
    item.answers.map((i) => {
      if (i.authorId == account.value.id) {
        state.value.answersList.push(i);
      }
    });
  });
});

const syncBlock = (isBlock) => {
  users.value.map((item) => {
    if (item.id === account.value.id) {
      item.isBlocked = !item.isBlocked;
      account.value = item;
    }
  });
};
const syncReport = (isReport) => {
  users.value.map((item) => {
    if (item.id === account.value.id) {
      item.isReported = isReport;
      account.value = item;
    }
  });
};
</script>
