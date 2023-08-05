<template>
  <section class="post my-2 flex flex-col gap-2 pb-2 border-b-[1px]">
    <div class="header flex justify-between items-center">
      <div class="left flex gap-2">
        <section class="w-[60px] h-[60px] relative">
          <img
            :src="state.avatar"
            class="object-cover w-full h-full rounded-full"
            @click="goToProfile(state)"
          />
          <template v-if="randomNumber > 0.8">
            <section
              class="absolute top-8 -right-2 w-6 h-6 rounded-full flex items-center justify-center bg-primary-300"
            >
              <svg
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.58047 4.00009L5.16675 7.12509"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M1.58047 4.00009L5.16675 7.12509"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M10.3627 1.42703L5.1662 7.12505"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M10.3627 1.42703L5.1662 7.12505"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                ></path>
              </svg>
            </section>
          </template>
        </section>
        <div class="flex justify-center flex-col" @click="goToProfile(state)">
          <h5 class="text-gray-700 font-bold text-lg cursor-pointer">
            {{ state.name }}
          </h5>
          <p class="font-normal text-sm text-gray-300">
            {{ state.location }} {{ state.dateOfRelease }}
          </p>
        </div>
      </div>
      <div class="right relative">
        <span @click="isContextMenuVisible = !isContextMenuVisible">
          <Icon name="dots" />
        </span>

        <template v-if="isContextMenuVisible">
          <ContextMenu
            :state="state"
            @close-menu="isContextMenuVisible = !isContextMenuVisible"
          />
        </template>
      </div>
    </div>
    <div class="wrapper flex flex-col gap-4">
      <img :src="state.image" alt="" class="rounded-xl" />
      <div class="actions flex justify-between px-4">
        <span class="flex items-center gap-1 text-gray-300 text-sm">
          <span class="relative bottom-[1px]"> <Icon name="eye" /></span
          >{{ state.views }}
        </span>
        <span
          class="flex items-center gap-1 text-gray-300 text-sm"
          @click="handleLike(state)"
        >
          <span class="relative bottom-[1px]">
            <Icon name="like" v-if="!state.isLiked" /><Icon
              name="like-fill"
              v-if="state.isLiked" /></span
          >{{ state.likes }}
        </span>
        <span
          class="flex items-center gap-1 text-gray-300 text-sm"
          @click="goToCommentPage(state)"
        >
          <span class="relative bottom-[1px]"> <Icon name="comment" /></span
          >{{ state.comments }}
        </span>
        <span class="relative top-[3px]" @click="showShareList">
          <Icon name="share" />
        </span>
        <span class="relative top-[3px]" @click="state.saved = !state.saved">
          <template v-if="state.saved">
            <Icon name="saved" class="text-gray-700" />
          </template>
          <template v-else>
            <Icon name="save" />
          </template>
        </span>
      </div>
      <p class="caption pb-0 text-base">
        {{ showMoreCaption ? state.caption : state.caption.slice(0, 110) }}
        <span class="text-blue-600" @click="showMoreCaption = !showMoreCaption">
          <template v-if="showMoreCaption"> Read Less </template>
          <template v-else> Read More </template>
        </span>
      </p>
    </div>
  </section>
  <ClientOnly>
    <template v-if="randomNumber > 0.8">
      <section class="mb-4 relative">
        <section class="absolute right-0 top-0 z-10">
          <section class="bg-yellow-500 px-6 py-2 rounded-r">
            <p class="text-base font-normal text-gray-700">Ads</p>
          </section>
        </section>
        <template v-if="randomNumber > 0.9">
          <video controls class="rounded">
            <source src="/assets/videos/ads.mp4" />
          </video>
        </template>
        <template v-else>
          <img src="/assets/images/posts/ads.jpg" class="rounded" />
        </template>
      </section>
    </template>
    <div class="max-w-[414px]">
      <el-drawer
        v-model="isShareListVisible"
        :with-header="false"
        direction="btt"
        size="70%"
        custom-class="share-drawer"
      >
        <ShareList @close="isShareListVisible = false" />
      </el-drawer>
    </div>
  </ClientOnly>
</template>
<script setup>
import Icon from "@/components/TheIcon/Icon.vue";
import ShareList from "@/components/TheShareList/ShareList.vue";
import ContextMenu from "@/components/ThePostCard/ContextMenu.vue";
import { useRouter } from "vue-router";
//state

const account = useAccount();
const router = useRouter();
const props = defineProps({
  state: {
    default: {
      avatar: "",
      name: "",
      location: "",
      dateOfRelease: "",
      image: "",
      views: 0,
      likes: 0,
      comments: 0,
      caption: "",
      saved: false,
    },
  },
});
const { state } = props;
const users = useUsers();
const isShareListVisible = ref(false);
const isContextMenuVisible = ref(false);
const randomNumber = Math.random();
const showMoreCaption = ref(false);

//methods

const goToProfile = (item) => {
  const user = users.value.filter((user) => user.id == item.authorId);
  account.value = user[0];
  router.push("/account");
};
const showShareList = () => {
  users.value.forEach((object) => {
    delete object["isAddToShare"];
  });
  isShareListVisible.value = !isShareListVisible.value;
};
const goToCommentPage = (state) => {
  router.push(`/comment/${props.state.id}?comments=${state.comments}`);
};
const handleLike = (state) => {
  if (state.isLiked) {
    state.likes--;
    state.isLiked = false;
  } else {
    state.likes++;
    state.isLiked = true;
  }
};
</script>
