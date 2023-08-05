<template>
  <section class="account max-w-[414px] m-auto border-[1px] min-h-screen px-3">
    <Header />
    <client-only>
      <template v-if="questionsList">
        <Post @remove="removeQuestion(index)" :state="item" v-for="(item, index) in questionsList" />
      </template>
    </client-only>
  </section>
  <div class="sticky bottom-[80px] ml-auto h-[35px] w-[35px]">
    <el-dropdown placement="left" popper-class="primary-dropdown">
      <span
        class="inline-block max-h-[35px] w-[35px] p-[2px] rounded-full border-[2px] bg-white border-primary-500"
      >
        <Icon name="circle-plus-blue" />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="addQuestion"
            >Add a question</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import Icon from "@/components/TheIcon/Icon.vue";
import Header from "@/components/TheQ&A/Header.vue";
import Post from "@/components/Base/CounterPost/Post.vue";
import { ref } from "vue";

//state

const questionsList = useQuestionsAndAnswers();
const router = useRouter();

// methods
const addQuestion = () => {
  router.push("/questions-and-answers/add");
};
const removeQuestion = (index) => {
  var newQuestions = questionsList.value.filter((question, second_index) => {
    if (second_index != index) {
      return question;
    }
  });
  questionsList.value = [];
  setTimeout(()=> {
    questionsList.value = newQuestions
  })
};
</script>
