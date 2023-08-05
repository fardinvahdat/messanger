<template>
  <section class="p-2 mt-4">
    <!-- comments  -->
    <hr
      class="mb-2 border border-gray-400 border-opacity-30 w-[25%] m-auto mt-0"
      @click="emit('close-drawer')"
    />
    <template v-if="state">
      <div
        v-for="(comment, index) in state.commentList"
        :key="index"
        class="my-4"
      >
        <section>
          <section class="flex gap-2 items-center my-2">
            <img
              :src="comment.avatar"
              class="object-cover h-[50px] w-[50px] min-w-[50px] rounded-full border-2"
            />
            <div class="info">
              <h5
                class="text-gray-700 text-lg font-medium flex items-center justify-between"
              >
                {{ comment.name
                }}<span class="text-xs font-normal text-gray-600">{{
                  comment.time
                }}</span>
              </h5>
              <p class="text-gray-500 text-xs font-normal">
                {{ comment.comment }}
              </p>
              <el-button class="btn mt-2 text-xs" text>
                Reply
              </el-button>
            </div>
          </section>
        </section>
        <section v-if="comment.children.length" class="pl-6 my-2">
          <div
            v-for="(subComment, subIndex) in comment.children"
            :key="subIndex"
            class="flex gap-2 items-center my-2"
          >
            <img
              :src="subComment.avatar"
              class="object-cover h-[50px] w-[50px] min-w-[50px] rounded-full border-2"
            />
            <div class="info w-full">
              <h5
                class="text-gray-700 text-lg font-medium flex items-center justify-between"
              >
                {{ subComment.name
                }}<span class="text-xs font-normal text-gray-600">{{
                  subComment.time
                }}</span>
              </h5>
              <p class="text-gray-500 text-xs font-normal">
                {{ subComment.comment }}
              </p>
              <el-button class="btn mt-2 text-xs" text>
                Reply
              </el-button>
            </div>
          </div>
        </section>
      </div>
    </template>
  </section>

  <div class="fixed w-full mb-6 bottom-0 mx-0 chat-page p-2">
    <section class="chat-form bg-white mx-0">
      <section class="flex items-center justify-between">
        <el-input placeholder="Type..." v-model="newComment" />
        <el-button class="btn" text>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.30107 1.68295L15.0936 7.80174C15.2227 7.86355 15.3317 7.96062 15.408 8.08175C15.4844 8.20288 15.5248 8.34313 15.5248 8.48629C15.5248 8.62946 15.4844 8.7697 15.408 8.89083C15.3317 9.01196 15.2227 9.10904 15.0936 9.17085L2.30107 15.2896C2.16988 15.3525 2.02337 15.3764 1.87901 15.3583C1.73464 15.3403 1.5985 15.2812 1.48679 15.188C1.37509 15.0947 1.29253 14.9714 1.24895 14.8326C1.20538 14.6938 1.20262 14.5454 1.241 14.405L2.52086 9.71303C2.53653 9.65552 2.56877 9.6039 2.61358 9.5646C2.65839 9.5253 2.71377 9.50006 2.77282 9.49203L8.97175 8.64992C8.9976 8.64629 9.02207 8.63606 9.04281 8.62021C9.06355 8.60437 9.07985 8.58344 9.09015 8.55945L9.10107 8.5212C9.10586 8.48731 9.09905 8.45279 9.08175 8.42325C9.06444 8.39371 9.03766 8.37089 9.00575 8.35849L8.97236 8.34938L2.7795 7.50788C2.72056 7.49974 2.66531 7.47444 2.62062 7.43515C2.57593 7.39586 2.54377 7.3443 2.52815 7.28688L1.241 2.56756C1.20262 2.42723 1.20538 2.27882 1.24895 2.14001C1.29253 2.0012 1.37509 1.87785 1.48679 1.78463C1.5985 1.69142 1.73464 1.63227 1.87901 1.61425C2.02337 1.59622 2.16988 1.62007 2.30107 1.68295Z"
              fill="#50CCE8"
            />
          </svg>
        </el-button>
      </section>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
//state

const isNavigationVisible = useNavigation();
const posts = usePosts();
const route = useRoute();
const props = defineProps({
  state: {
    default: {
      authorId: 0,
      name: "",
      avatar: "",
      comment: "",
      time: "",
      children: [],
    },
  },
});
const { state } = props;
const newComment = ref('')

//emits

const emit = defineEmits("close-drawer");
</script>