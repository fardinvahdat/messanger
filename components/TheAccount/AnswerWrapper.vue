<template>
  <div class="grid grid-cols-1 gap-1 mt-2">
    <Answer v-for="answer in answers" :state="answer" />
  </div>
</template>

<script setup>

//computed

import Answer from "@/components/TheQ&A/Answer";
const answers = computed(() => {
  if (account.value.id) {
    let answers = []
    questionsList.value.map((item) => {
      item.answers.map((i) => {
        if (i.authorId == account.value.id) {
          answers.push(i);
        }
      });
    });
    return answers;
  }
});

//state

const account = useAccount();
const questionsList = useQuestionsAndAnswers();
const router = useRouter();

//methods

const showPostsList = (post) => {
  router.push(`/account/post-list?post_id=${post.id}`);
};
</script>