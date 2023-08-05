<template>
  <section class="private-chat px-5 py-6">
    <section class="flex items-center gap-2">
      <el-button class="btn" text @click="router.go(-1)">
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.69102 0.293557C8.59373 0.200504 8.47815 0.126676 8.3509 0.0763025C8.22366 0.0259291 8.08725 0 7.94948 0C7.81172 0 7.6753 0.0259291 7.54806 0.0763025C7.42081 0.126676 7.30524 0.200504 7.20794 0.293557L0.245038 6.93634C0.167362 7.01029 0.105737 7.09813 0.0636898 7.19483C0.021643 7.29154 0 7.3952 0 7.49989C0 7.60459 0.021643 7.70825 0.0636898 7.80495C0.105737 7.90166 0.167362 7.9895 0.245038 8.06345L7.20794 14.7062C7.61851 15.0979 8.28045 15.0979 8.69102 14.7062C9.10159 14.3145 9.10159 13.683 8.69102 13.2913L2.62466 7.4959L8.6994 1.70045C9.10159 1.31675 9.10159 0.677255 8.69102 0.293557Z"
            fill="black"
            fill-opacity="0.8"
          />
        </svg>
      </el-button>
      <section class="flex items-center gap-1 grow-0">
        <section class="relative">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_20871)">
              <path
                d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0L14 0C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V10C16 10.5304 15.7893 11.0391 15.4142 11.4142C15.0391 11.7893 14.5304 12 14 12H11.5C11.3448 12 11.1916 12.0361 11.0528 12.1056C10.9139 12.175 10.7931 12.2758 10.7 12.4L8.8 14.933C8.70685 15.0572 8.58607 15.158 8.44721 15.2274C8.30836 15.2969 8.15524 15.333 8 15.333C7.84475 15.333 7.69164 15.2969 7.55279 15.2274C7.41393 15.158 7.29315 15.0572 7.2 14.933L5.3 12.4C5.20685 12.2758 5.08607 12.175 4.94721 12.1056C4.80836 12.0361 4.65525 12 4.5 12H2C1.46957 12 0.960859 11.7893 0.585786 11.4142C0.210714 11.0391 0 10.5304 0 10V2ZM3.5 3C3.36739 3 3.24021 3.05268 3.14645 3.14645C3.05268 3.24021 3 3.36739 3 3.5C3 3.63261 3.05268 3.75979 3.14645 3.85355C3.24021 3.94732 3.36739 4 3.5 4H12.5C12.6326 4 12.7598 3.94732 12.8536 3.85355C12.9473 3.75979 13 3.63261 13 3.5C13 3.36739 12.9473 3.24021 12.8536 3.14645C12.7598 3.05268 12.6326 3 12.5 3H3.5ZM3.5 5.5C3.36739 5.5 3.24021 5.55268 3.14645 5.64645C3.05268 5.74021 3 5.86739 3 6C3 6.13261 3.05268 6.25979 3.14645 6.35355C3.24021 6.44732 3.36739 6.5 3.5 6.5H12.5C12.6326 6.5 12.7598 6.44732 12.8536 6.35355C12.9473 6.25979 13 6.13261 13 6C13 5.86739 12.9473 5.74021 12.8536 5.64645C12.7598 5.55268 12.6326 5.5 12.5 5.5H3.5ZM3.5 8C3.36739 8 3.24021 8.05268 3.14645 8.14645C3.05268 8.24021 3 8.36739 3 8.5C3 8.63261 3.05268 8.75979 3.14645 8.85355C3.24021 8.94732 3.36739 9 3.5 9H8.5C8.63261 9 8.75979 8.94732 8.85355 8.85355C8.94732 8.75979 9 8.63261 9 8.5C9 8.36739 8.94732 8.24021 8.85355 8.14645C8.75979 8.05268 8.63261 8 8.5 8H3.5Z"
                fill="#90A4AE"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_20871">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <section
            class="absolute -top-3 right-0 w-5 h-5 rounded-full flex items-center justify-center bg-error-800"
          >
            <span class="text-white text-xs font-normal">8</span>
          </section>
        </section>
        <h1 class="text-gray-700 font-bold text-lg">Private Chat</h1>
      </section>
    </section>
    <hr class="my-2 border border-gray-300 border-opacity-10" />
    <section class="grid grid-cols-1 gap-2">
      <template v-for="(chat, index) in chats">
        <Item
          :info="chat"
          @click="router.push({ path: '/profile/private-chat/25' })"
        />
        <template v-if="index + 1 < chats.length">
          <hr class="border border-gray-300 border-opacity-10" />
        </template>
      </template>
    </section>
  </section>
</template>

<script setup>
import { defineEmits } from "vue";
import Item from "@/components/TheProfile/Chat/Item";
const router = useRouter();
const chats = ref([
  {
    id: 1,
    image: "avatar1.png",
    text: "What do You think?",
    newNotifications: 3,
  },
  {
    id: 2,
    image: "avatar2.png",
    text: "Ok, thanks",
    newNotifications: 1,
  },
  {
    id: 3,
    image: "avatar3.png",
    text: "This is the project link in Google Drive.",
    newNotifications: 1,
  },
  {
    id: 4,
    image: "avatar4.png",
    text: "Thanks.",
    newNotifications: 1,
  },
  {
    id: 5,
    image: "avatar5.png",
    text: "I saved the event in my calendar..",
    newNotifications: 1,
  },
  {
    id: 6,
    image: "avatar6.png",
    text: "...the name of the novel you just read?",
    newNotifications: 0,
  },
  {
    id: 7,
    image: "avatar7.png",
    text: "...the name of the novel you just read?",
    newNotifications: 0,
  },
]);
</script>

<style scoped></style>
