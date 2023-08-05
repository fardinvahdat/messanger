<template>
  <div class="mt-2">
    <section class="flex items-start gap-2 w-full">
      <section class="">
        <section class="flex items-center justify-between mb-2">
          <section class="flex items-center gap-2 grow-0">
            <span class="flex gap-2 items-center" @click="goToProfile">
              <img
                :src="state.avatar"
                class="w-12 h-12 rounded-full object-cover"
              />
              <section>
                <h2
                  class="font-medium text-base text-gray-700 flex gap-2 items-center"
                >
                  {{ state.name }}
                  <span v-if="state.isAdmin"> <Icon name="verified" /></span>
                </h2>
                <p class="text-xs text-gray-500 font-normal">
                  {{ state.time }}
                </p>
              </section></span
            >
          </section>
          <div class="right relative">
            <el-dropdown
              placement="left"
              popper-class="primary-dropdown"
              @command="handleCommand"
            >
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
                  <el-dropdown-item command="share">Share</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </section>
        <img
          :src="state.image"
          class="w-full h-[394px] object-cover rounded-lg"
        />

        <h1 class="mt-2 font-medium text-base text-gray-700">
          {{ state.subject }}
        </h1>
        <p class="font-normal text-xs text-gray-500 break-all">
          {{ state.caption }}
        </p>
      </section>
    </section>
  </div>
  <section class="mb-4 mt-4 flex items-center justify-between">
    <section class="flex items-center gap-1 grow-0">
      <Icon name="eye" />
      <p class="text-xs font-normal text-gray-500">{{ state.views }}</p>
    </section>
    <section
      class="flex items-center gap-1 grow-0"
      @click="state.showAnswer = !state.showAnswer"
    >
      <span :class="[!state.showAnswer ? 'text-gray-300' : 'text-primary-500']">
        <Icon name="question" />
      </span>
      <p
        class="text-xs"
        :class="
          state.showAnswer
            ? 'text-primary-500 font-medium'
            : 'text-gray-500 font-normal'
        "
      >
        {{ state.folders }}
      </p>
    </section>
    <span @click="state.isSaved = !state.isSaved">
      <template v-if="state.isSaved">
        <icon name="saved" @click="state.isSaved = false" />
      </template>
      <template v-else>
        <icon name="save" />
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
        :class="
          state.isDisLiked &&
          'pointer-events-none cursor-not-allowed opacity-50'
        "
      >
        <Icon name="minus" />
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
        :class="
          state.isLiked && 'pointer-events-none cursor-not-allowed opacity-50'
        "
      >
        <Icon name="plus" />
      </span>
    </section>
    <section
      class="flex items-center gap-1 grow-0"
      @click="isShareListVisible = true"
    >
      <Icon name="comment" />
      <p class="text-xs font-normal text-gray-500">{{ state.comments }}</p>
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
        <CommentBox :state="state" @close-drawer="isShareListVisible = false" />
      </el-drawer></div
  ></ClientOnly>
  <template v-if="state.answers?.length && state.showAnswer">
    <div v-for="item in state.answers" :key="item" class="ml-5">
      <section class="flex items-start gap-2 w-full">
        <img :src="item.image" class="w-32 h-32 max-w-32 rounded-lg" />
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
                    <span v-if="item.isAdmin"> <Icon name="verified" /></span>
                  </h2>
                  <p class="text-xs text-gray-500 font-normal">
                    {{ item.time }}
                  </p>
                </section></NuxtLink
              >
            </section>
            <div class="right relative">
              <span @click="isContextMenuVisible = !isContextMenuVisible">
                <Icon name="dots" />
              </span>

              <el-dropdown
                placement="left"
                popper-class="primary-dropdown"
                @command="handleCommand"
              >
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
                    <el-dropdown-item command="share">Share</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
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
              <Icon name="eye" />
              <p class="text-xs font-normal text-gray-500">{{ item.views }}</p>
            </section>
            <section
              class="flex items-center gap-1 grow-0"
              @click="isShareListVisible = true"
            >
              <Icon name="comment" />
              <p class="text-xs font-normal text-gray-500">
                {{ item.comments }}
              </p>
            </section>
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
                  item.isDisLiked &&
                  'pointer-events-none cursor-not-allowed opacity-50'
                "
              >
                <Icon name="minus" />
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
                  item.isLiked &&
                  'pointer-events-none cursor-not-allowed opacity-50'
                "
              >
                <Icon name="plus" />
              </span>
            </section>
          </section>
        </section>
      </section>
    </div>
  </template>
  <Answer v-model="showAnswerDialog" />
  <hr class="my-2 border border-gray-400 border-opacity-30" />
</template>

<script setup>
import CommentBox from "@/components/TheQ&A/CommentBox.vue";
import ContextMenu from "@/components/TheQ&A/ContextMenu.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import Answer from "@/components/Base/Share/Answer";
import { ref } from "vue";

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
const { state } = props;
const account = useAccount();
const users = useUsers();
const router = useRouter();
const emit = defineEmits("remove");
//state

const isShareListVisible = ref(false);
const isContextMenuVisible = ref(false);
const showAnswerDialog = ref(false);

// methods

const goToProfile = () => {
  const user = users.value.filter((user) => user.id == 1);
  account.value = user[0];
  router.push("/account");
};

const showShareList = () => {
  users.value.forEach((object) => {
    delete object["isAddToShare"];
  });
  isShareListVisible.value = !isShareListVisible.value;
};
const handleCommand = (e) => {
  switch (e) {
    case "remove": {
      emit("remove");
      break;
    }
    case "share": {
      share();
    }
  }
};
const share = () => {
  showAnswerDialog.value = true;
};
</script>
