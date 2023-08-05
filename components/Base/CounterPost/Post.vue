<template>
  <div>
    <section class="flex items-start gap-2 w-full">
      <img :src="state.image" class="w-32 h-32 max-w-32 rounded-lg"/>
      <section class="">
        <section class="flex items-center justify-between">
          <section class="flex items-center gap-2 grow-0">
            <NuxtLink :to="`/questions-and-answers/question/${state.id}`">
              <img
                  :src="state.avatar"
                  class="w-12 h-12 rounded-full object-cover"
              />
              <section>
                <h2
                    class="font-medium text-base text-gray-700 flex gap-2 items-center"
                >
                  {{ state.name }}
                  <span v-if="state.isAdmin"> <Icon name="verified"/></span>
                </h2>
                <p class="text-xs text-gray-500 font-normal">
                  {{ state.time }}
                </p>
              </section>
            </NuxtLink
            >
          </section>
          <el-dropdown placement="left" popper-class="primary-dropdown" @command="handleCommand">
            <el-button class="btn" text>
              <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M12 7.8125C12.8284 7.8125 13.5 7.11295 13.5 6.25C13.5 5.38706 12.8284 4.6875 12 4.6875C11.1716 4.6875 10.5 5.38706 10.5 6.25C10.5 7.11295 11.1716 7.8125 12 7.8125Z"
                    fill="#90A4AE"
                />
                <path
                    d="M12 14.0625C12.8284 14.0625 13.5 13.3629 13.5 12.5C13.5 11.6371 12.8284 10.9375 12 10.9375C11.1716 10.9375 10.5 11.6371 10.5 12.5C10.5 13.3629 11.1716 14.0625 12 14.0625Z"
                    fill="#90A4AE"
                />
                <path
                    d="M12 20.3125C12.8284 20.3125 13.5 19.6129 13.5 18.75C13.5 17.8871 12.8284 17.1875 12 17.1875C11.1716 17.1875 10.5 17.8871 10.5 18.75C10.5 19.6129 11.1716 20.3125 12 20.3125Z"
                    fill="#90A4AE"
                />
              </svg>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="remove">Remove</el-dropdown-item>
                <el-dropdown-item command="share">Share</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </section>
        <h1 class="mt-2 font-medium text-base text-gray-700">
          {{ state.subject }}
        </h1>
        <p class="font-normal text-xs text-gray-500 break-all">
          {{
            state.isShowMore && state.caption.length > 120
                ? state.caption.slice(0, 120)
                : state.caption
          }}
          <span
              v-if="state.caption.length > 120"
              @click="state.isShowMore = !state.isShowMore"
              class="ml-1 bg-primary-300 inline-block px-4 py-1 rounded-xl text-gray-500"
          >{{ state.isShowMore ? "Read More" : "Read Less" }}</span
          >
        </p>
      </section>
    </section>
  </div>
  <section class="mb-4 mt-1 flex items-center justify-between">
    <section class="flex items-center gap-1 grow-0">
      <Icon name="eye"/>
      <p class="text-xs font-normal text-gray-500">{{ state.views }}</p>
    </section>
    <section class="flex items-center">
      <el-button class="btn text-sm text-gray-300 hover:text-gray-500" text>
        Answer
      </el-button>
    </section>
    <!--    <section-->
    <!--      class="flex items-center gap-1 grow-0"-->
    <!--      @click="isShareListVisible = true"-->
    <!--    >-->
    <!--      <Icon name="comment" />-->
    <!--      <p class="text-xs font-normal text-gray-500">{{ state.comments }}</p>-->
    <!--    </section>-->
    <section
        class="flex items-center gap-1 grow-0"
        @click="state.showAnswer = !state.showAnswer"
    >
      <span :class="[!state.showAnswer ? 'text-gray-300' : 'text-primary-500']">
      <Icon name="answer"/>
      </span>
      <p
          class="text-xs"
          :class="
          state.showAnswer ? 'text-primary-500 font-medium' : 'text-gray-500 font-normal'
        "
      >
        {{ state.answers.length }}
      </p>
    </section>
    <span class="relative top-[3px]" @click="share">
      <Icon name="share" class="text-gray-700"/>
    </span>
    <span class="relative top-[3px]" @click="state.saved = !state.saved">
          <template v-if="state.saved">
          <Icon name="saved" class="text-gray-700"/>
          </template>
          <template v-else>
          <Icon name="save"/>
          </template>
        </span>
    <section class="flex items-center gap-2 grow-0">
      <span
          @click="
          () => {
            state.like--;
            if (!state.isLiked) {
              state.isDisLiked = true;
            }
            state.isLiked = false;
          }
        "
          :class="state.isDisLiked && 'pointer-events-none cursor-not-allowed opacity-50'"
      >
        <Icon name="minus"/>
      </span>
      <p class="text-xs font-normal text-gray-500">{{ state.like }}</p>
      <span
          @click="
          () => {
            state.like++;
            if (!state.isDisLiked) {
              state.isLiked = true;
            }
            state.isDisLiked = false;
          }
        "
          :class="state.isLiked && 'pointer-events-none cursor-not-allowed opacity-50'"
      >
        <Icon name="plus"/>
      </span>
    </section>
  </section>

  <ClientOnly>
    <div class="max-w-[414px]">
      <el-drawer
          v-model="isShareListVisible"
          :with-header="false"
          direction="btt"
          size="70%"
          custom-class="qa-drawer"
      >
        <CommentBox :state="state" @close-drawer="isShareListVisible = false"/>
      </el-drawer>
    </div
    >
  </ClientOnly>
  <template v-if="state.answers?.length && state.showAnswer">
    <div v-for="item in state.answers" :key="item" class="ml-5">
      <section class="flex items-start gap-2 w-full">
        <img :src="item.image" class="w-32 h-32 max-w-32 rounded-lg"/>
        <section class="">
          <section class="flex items-center justify-between">
            <section class="flex items-center gap-2 grow-0">
              <NuxtLink :to="`/questions-and-answers/answer/${item.id}`">
                <img
                    :src="item.avatar"
                    class="w-12 h-12 rounded-full object-cover"
                />
                <section>
                  <h2
                      class="font-medium text-base text-gray-700 flex gap-2 items-center"
                  >
                    {{ item.name }}
                    <span v-if="item.isAdmin"> <Icon name="verified"/></span>
                  </h2>
                  <p class="text-xs text-gray-500 font-normal">
                    {{ item.time }}
                  </p>
                </section>
              </NuxtLink
              >
            </section>
            <el-dropdown class="ml-auto" popper-class="primary-dropdown">
              <el-button class="btn" text>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M15.5 10C16.5701 10 17.4375 9.10457 17.4375 8C17.4375 6.89543 16.5701 6 15.5 6C14.4299 6 13.5625 6.89543 13.5625 8C13.5625 9.10457 14.4299 10 15.5 10Z"
                      fill="currentColor"/>
                  <path
                      d="M15.5 18C16.5701 18 17.4375 17.1046 17.4375 16C17.4375 14.8954 16.5701 14 15.5 14C14.4299 14 13.5625 14.8954 13.5625 16C13.5625 17.1046 14.4299 18 15.5 18Z"
                      fill="currentColor"/>
                  <path
                      d="M15.5 26C16.5701 26 17.4375 25.1046 17.4375 24C17.4375 22.8954 16.5701 22 15.5 22C14.4299 22 13.5625 22.8954 13.5625 24C13.5625 25.1046 14.4299 26 15.5 26Z"
                      fill="currentColor"/>
                </svg>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="share">Share</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </section>
          <h1 class="mt-2 font-medium text-base text-gray-700">
            {{ item.subject }}
          </h1>
          <p class="font-normal text-xs text-gray-500 break-all">
            {{
              item.isShowMore && item.caption.length > 120
                  ? item.caption.slice(0, 120)
                  : item.caption
            }}
            <span
                v-if="item.caption.length > 120"
                @click="item.isShowMore = !item.isShowMore"
                class="ml-1 bg-primary-300 inline-block px-4 py-1 rounded-xl text-gray-500"
            >{{ item.isShowMore ? "Read More" : "Read Less" }}</span
            >
          </p>
          <section class="mb-4 mt-1 flex items-center justify-between">
            <section class="flex items-center gap-1 grow-0">
              <Icon name="eye"/>
              <p class="text-xs font-normal text-gray-500">{{ item.views }}</p>
            </section>
            <section
                class="flex items-center gap-1 grow-0"
                @click="isShareListVisible = true"
            >
              <Icon name="comment"/>
              <p class="text-xs font-normal text-gray-500">
                {{ item.comments }}
              </p>
            </section>
            <span class="relative top-[3px]" @click="share">
              <Icon name="share" class="text-gray-700"/>
            </span>
            <section class="flex items-center gap-2 grow-0">
              <span
                  @click="
                  () => {
                    item.like--;
                    if (!item.isLiked) {
                      item.isDisLiked = true;
                    }
                    item.isLiked = false;
                  }
                "
                  :class="
                  item.isDisLiked && 'pointer-events-none cursor-not-allowed opacity-50'
                "
              >
                <Icon name="minus"/>
              </span>
              <p class="text-xs font-normal text-gray-500">{{ item.like }}</p>
              <span
                  @click="
                  () => {
                    item.like++;
                    if (!item.isDisLiked) {
                      item.isLiked = true;
                    }
                    item.isDisLiked = false;
                  }
                "
                  :class="
                  item.isLiked && 'pointer-events-none cursor-not-allowed opacity-50'
                "
              >
                <Icon name="plus"/>
              </span>
            </section>
          </section>
        </section>
      </section>
    </div>
  </template>
  <Answer v-model="showAnswerDialog" />
  <hr class="my-2 border border-gray-400 border-opacity-30"/>
</template>

<script setup>
import CommentBox from "@/components/TheQ&A/CommentBox.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import {ref} from "vue";
import Answer from '@/components/Base/Share/Answer'

//props

const props = defineProps({
  index: {
    default: 1,
  },
  state: {
    default: {
      image: "",
      avatar: "",
      name: "",
      time: "",
      subject: "",
      caption: "",
      isShowMore: false,
      views: 0,
      comments: 0,
      folders: 0,
      like: 0,
      isLiked: false,
      isDisLiked: false,
    },
  },
});
const {state} = props;
const emits = defineEmits()

//state

const isShareListVisible = ref(false);
const addNewAnswer = ref(false)
const showAnswerDialog = ref(false)
const handleCommand = (e) => {
  switch (e) {
    case "remove": {
      emits('remove')
      break
    }
    case "share" : {
      share()
    }
  }
}
const share = () => {
  showAnswerDialog.value = true
}
</script>

<style scoped>
</style>