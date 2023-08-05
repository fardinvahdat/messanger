<template>
  <section class="account max-w-[414px] m-auto border-[1px] min-h-screen px-3">
    <Header />
    <Answer :state="state" v-if="state" />
  </section>
  <div class="sticky bottom-[80px] ml-auto h-[35px] w-[35px]">
    <span
      class="inline-block max-h-[35px] w-[35px] p-[2px] rounded-full border-[2px] bg-white border-primary-500"
    >
      <Icon name="circle-plus-blue" />
    </span>
  </div>
</template>

<script setup>
import Icon from "@/components/TheIcon/Icon.vue";
import Header from "@/components/TheQ&A/QHeader.vue";
import Answer from "@/components/TheQ&A/Answer.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

//state

const questionsList = useQuestionsAndAnswers();
const route = useRoute();
const state = ref(null);

//mounted

onMounted(() => {
  const QId = parseInt(route.params.id.split("-")[0]);
  const Q = questionsList.value.filter((item) => item.id == QId)[0];
  const A = Q.answers.filter((item) => item.id == route.params.id)[0];
  state.value = A;
});
</script>