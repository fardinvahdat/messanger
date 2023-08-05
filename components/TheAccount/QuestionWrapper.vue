<template>
  <div class="grid grid-cols-1 gap-1 mt-2">
    <Question
      v-for="question in questions"
      @remove="removeQuestion(index)"
      :state="question"
    />
  </div>
</template>

<script setup>
//computed

import Question from "@/components/TheQ&A/Question";
const questions = computed(() => {
  if (account.value.id) {
    return questionsList.value.filter(
      (item) => item.authorId == account.value.id
    );
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
const removeQuestion = (index) => {
  console.log(index);
  var newQuestions = questionsList.value.filter((question, second_index) => {
    console.log(question, second_index);
    if (second_index != index) {
      return question;
    }
  });
  console.log(newQuestions);
  questionsList.value = newQuestions;
};
</script>
