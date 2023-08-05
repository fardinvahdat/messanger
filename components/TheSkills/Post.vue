<template>
  <div class="mt-2">
    <section class="flex items-start gap-2 w-full">
      <section class="">
        <section class="flex items-center justify-between mb-2">
          <section class="flex items-center gap-2 grow-0">
            <a
              href="javascript:void(0)"
              class="flex gap-2 items-center"
              @click="goToProfile(state)"
            >
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
              </section></a
            >
          </section>
          <div class="right relative">
            <span @click="isContextMenuVisible = !isContextMenuVisible">
              <Icon name="dots" />
            </span>

            <template v-if="isContextMenuVisible"><ContextMenu :state="state" @close-menu="isContextMenuVisible=false" /> </template>
          </div>
        </section>

        <video
          class="h-[200px] w-full"
          controls
          :src="state.video"
          :poster="state.image"
          id="1"
        >
          Sorry, your browser doesn't support embedded videos, but don't worry,
          you can
          <a href="https://archive.org/details/BigBuckBunny_124">download it</a>
          and watch it with your favorite video player!
        </video>
        <p class="font-normal text-xs text-gray-500 break-all mt-2">
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
      @click="isShareListVisible = true"
    >
      <Icon name="comment" />
      <p class="text-xs font-normal text-gray-500">{{ state.comments }}</p>
    </section>
    <span
      class="flex items-center gap-1 text-gray-300 text-sm"
      @click="handleLike(state)"
    >
      <span class="relative bottom-[1px]">
        <Icon name="like" v-if="!state.isFav" /><Icon
          name="like-fill"
          v-if="state.isFav" /></span
      >{{ state.favCount }}
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
        :class="state.isLiked && 'pointer-events-none cursor-not-allowed opacity-50'"
      >
        <Icon name="plus" />
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
        <CommentBox :state="state" @close-drawer="isShareListVisible = false" />
      </el-drawer></div
  ></ClientOnly>
  <template v-if="state.answers?.length && state.showAnswer">
    <div v-for="item in state.answers" :key="item">
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

              <template v-if="isContextMenuVisible"><ContextMenu /> </template>
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
                  item.isDisLiked && 'pointer-events-none cursor-not-allowed'
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
                  item.isLiked && 'pointer-events-none cursor-not-allowed'
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
  <hr class="my-2 border border-gray-400 border-opacity-30" />
</template>

<script setup>
import CommentBox from "@/components/TheQ&A/CommentBox.vue";
import ContextMenu from "@/components/TheSkills/ContextMenu.vue";
import Icon from "@/components/TheIcon/Icon.vue";
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

//state

const isShareListVisible = ref(false);
const isContextMenuVisible = ref(false);
const users = useUsers();
const account = useAccount();
const router = useRouter();

//methods

const handleLike = (state) => {
  if (state.isFav) {
    state.favCount--;
    state.isFav = false;
  } else {
    state.favCount++;
    state.isFav = true;
  }
};
const goToProfile = (item) => {
  const user = users.value.filter((user) => user.id == item.userId);
  account.value = user[0];
  router.push("/account");
};
</script>
