<template>
  <div class="header pt-6 pb-2 border-b-[1px] sticky top-0 z-40 bg-white">
    <section class="flex justify-between">
      <div class="w-full">
        <div
          class="text-lg font-bold flex gap-2 items-center justify-between w-full"
        >
          <section class="flex gap-2 items-center">
            <span
              class="relative bottom-[2px]"
              @click="
                router.go(-1);
                account = null;
              "
              ><Icon name="arrow-angle-left"
            /></span>
            <div class="flex items-center gap-2">
              <img
                :src="account.avatar"
                class="object-cover h-[60px] w-[60px] rounded-full border-2 p-[1px]"
                :class="account.isStoryVisited ? '' : 'border-primary-300'"
              />
              <div>
                <h5 class="text-gray-700 text-lg font-medium">
                  {{ account.title }}
                </h5>
                <p class="text-gray-500 text-xs font-normal">
                  {{ account.description.slice(0, 15) }}
                </p>
              </div>
            </div>
          </section>
          <section class="flex gap-2 items-center">
            <template v-if="!props.isBlocked">
              <nuxt-link to="/chat/25"><Icon name="send" /></nuxt-link>
            </template>

            <span @click="isContextMenuVisible = !isContextMenuVisible">
              <Icon name="dots" />
            </span>

            <template v-if="isContextMenuVisible">
              <ContextMenu @select="actionSelected" />
            </template>
          </section>
        </div>
        <template v-if="!props.isBlocked">
          <section v-if="!isMutualFriendsVisible">
            <div class="w-full flex justify-between mt-4">
              <section class="flex gap-4">
                <div class="shared flex flex-col items-center justify-center">
                  <span class="text-sm font-normal text-gray-700">Shared</span>
                  <span class="text-xs font-normal text-gray-500">184</span>
                </div>
                <div
                  class="followers flex flex-col items-center justify-center"
                  @click="showFollowersList"
                >
                  <span class="text-sm font-normal text-gray-700"
                    >Followers</span
                  >
                  <span class="text-xs font-normal text-gray-500">{{
                    account.followers.length
                  }}</span>
                </div>
                <div
                  class="follows flex flex-col items-center justify-center"
                  @click="showFollowingsList"
                >
                  <span class="text-sm font-normal text-gray-700"
                    >Followings</span
                  >
                  <span class="text-xs font-normal text-gray-500">{{
                    account.followings.length
                  }}</span>
                </div>
              </section>
              <section @click="isMutualFriendsVisible = true">
                <div class="flex gap-1">
                  <img class="w-12 h-12 rounded-full" :src="avatar1" />
                  <img class="w-12 h-12 rounded-full" :src="avatar2" />
                  <img class="w-12 h-12 rounded-full" :src="avatar3" />
                </div>
                <p class="text-xs font-normal text-gray-500 text-center mt-1">
                  +14 Mutual
                </p>
              </section>
            </div>
            <section class="flex items-center gap-5 justify-center">
              <button
                type="button"
                class="rounded-lg w-full text-gray-700 mt-2 text-base py-2"
                :class="[isFollowed ? 'bg-gray-300' : 'bg-primary-500']"
                @click="isFollowed = !isFollowed"
                v-if="isFollowed && !account.isRequested"
              >
                Followed
              </button>
              <button
                type="button"
                class="rounded-lg w-full text-gray-700 mt-2 text-base py-2"
                :class="[
                  isFollowed && account.isRequested
                    ? 'bg-gray-300'
                    : 'bg-primary-500',
                ]"
                @click="
                  !account.isPublic
                    ? (account.isRequested = !account.isRequested)
                    : account.isRequested;
                  isFollowed = !isFollowed;
                "
              >
                {{
                  isFollowed
                    ? account.isRequested
                      ? "Requested"
                      : "UnFollow"
                    : "Follow"
                }}
              </button>
            </section>
          </section>
        </template>

        <div
          class="w-full flex justify-between mt-4"
          v-if="isMutualFriendsVisible"
        >
          <h4
            class="text-lg text-gray-700 font-bold flex gap-2 items-center"
            @click="isMutualFriendsVisible = false"
          >
            <Icon name="people-group" /> Mutual Friends
          </h4>
        </div>
      </div>
    </section>
  </div>
  <template v-if="isFollowed && !isMutualFriendsVisible">
    <SuggestList />
  </template>
</template>
<script setup>
import ContextMenu from "@/components/TheAccount/ContextMenu.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

import avatar1 from "@/assets/images/avatars/avatar1.png";
import avatar2 from "@/assets/images/avatars/avatar2.png";
import avatar3 from "@/assets/images/avatars/avatar3.png";
import SuggestList from "./SuggestList";
//state
const emits = defineEmits();
const props = defineProps({
  isBlocked: {
    default: false,
  },
});
const account = useAccount();
const users = useUsers();
const router = useRouter();
const isMutualFriendsVisible = useMutualFriends();
const stories = useStoryList();
const isContextMenuVisible = ref(false);
const followMode = useFollowMode();
const isFollowed = ref(false);

//methods

const showFollowersList = () => {
  followMode.value = "followers";
  router.push(`/follows/${account.value.id}`);
};
const showFollowingsList = () => {
  followMode.value = "followings";
  router.push(`/follows/${account.value.id}`);
};
const actionSelected = (e) => {
  if (e == "block") {
    emits("block", true);
  } else if (e == "report") {
    ElNotification({
      title: 'Reported',
      message: 'Account reported successfully. Thanks for your report',
      type: 'info'
    })
    emits("report", true);
  }
  isContextMenuVisible.value = false;
};
</script>
