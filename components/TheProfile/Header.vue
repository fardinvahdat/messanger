<template>
  <section>
    <section class="flex items-center justify-between">
      <section class="flex items-center gap-4">
        <section class="relative">
          <img :src="avatar" class="w-20 h-20 rounded-full object-cover" />
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
              />
              <path
                d="M1.58047 4.00009L5.16675 7.12509"
                stroke="white"
                stroke-width="1.8"
                stroke-linecap="round"
              />
              <path
                d="M10.3627 1.42703L5.1662 7.12505"
                stroke="white"
                stroke-width="1.8"
                stroke-linecap="round"
              />
              <path
                d="M10.3627 1.42703L5.1662 7.12505"
                stroke="white"
                stroke-width="1.8"
                stroke-linecap="round"
              />
            </svg>
          </section>
        </section>
        <section>
          <p class="font-normal text-xs text-gray-500">{{ currentUser.description.split(',')[0] }}</p>
          <h1 class="mt-1 text-gray-700 font-medium text-lg">{{ currentUser.title }}</h1>
          <p class="mt-1 text-xs font-normal text-gray-500">grade: Middle 7</p>
        </section>
      </section>
      <el-button
        class="btn"
        text
        @click="router.push({ path: '/profile/settings' })"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.8" clip-path="url(#clip0_1_15722)">
            <path
              d="M8.8622 1.46011e-06C9.09741 1.46011e-06 9.30781 0.146401 9.387 0.365601L9.9518 1.9312C10.1542 1.9816 10.3278 2.032 10.475 2.0848C10.6358 2.1424 10.843 2.2296 11.099 2.3488L12.4142 1.6528C12.5216 1.59593 12.6445 1.5754 12.7645 1.59429C12.8845 1.61319 12.9951 1.67049 13.0798 1.7576L14.2366 2.9536C14.3902 3.1128 14.4334 3.3456 14.347 3.5488L13.7302 4.9944C13.8326 5.1824 13.9142 5.3432 13.9766 5.4776C14.0438 5.624 14.127 5.8256 14.2262 6.0856L15.6638 6.7016C15.8798 6.7936 16.0134 7.0096 15.999 7.2408L15.8934 8.9008C15.8862 9.00865 15.8475 9.112 15.782 9.19804C15.7166 9.28407 15.6274 9.34902 15.5254 9.3848L14.1638 9.8688C14.1246 10.0568 14.0838 10.2176 14.0406 10.3536C13.9709 10.5636 13.8914 10.7703 13.8022 10.9728L14.4862 12.4848C14.5345 12.591 14.5475 12.7099 14.5233 12.8241C14.4991 12.9383 14.439 13.0417 14.3518 13.1192L13.051 14.2808C12.9653 14.357 12.8584 14.4052 12.7446 14.4189C12.6308 14.4326 12.5155 14.4112 12.4142 14.3576L11.0734 13.6472C10.8636 13.7583 10.6472 13.8563 10.4254 13.9408L9.8398 14.16L9.3198 15.6C9.28127 15.7055 9.21176 15.7968 9.12039 15.862C9.02902 15.9273 8.92006 15.9634 8.80781 15.9656L7.2878 16C7.17257 16.003 7.05924 15.9703 6.9634 15.9062C6.86755 15.8422 6.79391 15.75 6.7526 15.6424L6.13981 14.0208C5.93072 13.9493 5.72371 13.872 5.51901 13.7888C5.35158 13.7163 5.18668 13.6382 5.02461 13.5544L3.50461 14.204C3.40445 14.2467 3.29404 14.2594 3.1868 14.2405C3.07956 14.2216 2.98013 14.172 2.90061 14.0976L1.77581 13.0424C1.69206 12.9642 1.63503 12.8616 1.61278 12.7492C1.59053 12.6368 1.60418 12.5202 1.65181 12.416L2.30541 10.992C2.21848 10.8233 2.13789 10.6515 2.06381 10.4768C1.97733 10.263 1.89729 10.0466 1.82381 9.828L0.391806 9.392C0.275406 9.35682 0.173881 9.28419 0.102998 9.18538C0.0321138 9.08658 -0.00416132 8.96714 -0.000194306 8.8456L0.0558057 7.3088C0.0597918 7.20853 0.091115 7.11126 0.146388 7.0275C0.201661 6.94375 0.27878 6.8767 0.369406 6.8336L1.87181 6.112C1.94141 5.8568 2.00221 5.6584 2.05581 5.5136C2.13128 5.3202 2.21509 5.13015 2.30701 4.944L1.65581 3.568C1.60639 3.46351 1.59138 3.34603 1.61294 3.23247C1.6345 3.11891 1.69152 3.01511 1.77581 2.936L2.89901 1.8752C2.97774 1.80094 3.07626 1.75101 3.18271 1.73143C3.28915 1.71184 3.39899 1.72343 3.49901 1.7648L5.01741 2.392C5.18541 2.28 5.33741 2.1896 5.47501 2.1168C5.63901 2.0296 5.85821 1.9384 6.13421 1.84L6.66221 0.367201C6.70124 0.259416 6.77259 0.166307 6.86652 0.100586C6.96045 0.0348661 7.07237 -0.000261001 7.18701 1.46011e-06H8.8622ZM8.019 5.6152C6.68541 5.6152 5.60461 6.6832 5.60461 8.0016C5.60461 9.32 6.68541 10.3888 8.019 10.3888C9.3518 10.3888 10.4326 9.32 10.4326 8.0016C10.4326 6.6832 9.3526 5.6152 8.019 5.6152Z"
              fill="#90A4AE"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_15722">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </el-button>
    </section>
    <!-- <section class="mt-2 grid grid-cols-4 gap-5">
      <nuxt-link :to="`/profile/${index}`" class="" v-for="(item, index) in profileItems">
        <h3 :class="profileItemsClass">{{ index }}</h3>
        <p :class="profileItemsValueClass">{{ item }}</p>
      </nuxt-link>
    </section> -->

    <section class="flex gap-4 justify-around my-6" v-if="account">
      <div class="shared flex flex-col items-center justify-center">
        <span class="text-sm font-normal text-gray-700">Posts</span>
        <span class="text-xs font-normal text-gray-500">{{postCount}}</span>
      </div>
      <div
        class="followers flex flex-col items-center justify-center"
        @click="showFollowersList"
      >
        <span class="text-sm font-normal text-gray-700">Followers</span>
        <span class="text-xs font-normal text-gray-500">{{
          account.followers.length
        }}</span>
      </div>
      <div
        class="follows flex flex-col items-center justify-center"
        @click="showFollowingsList"
      >
        <span class="text-sm font-normal text-gray-700">Followings</span>
        <span class="text-xs font-normal text-gray-500">{{
          account.followings.length
        }}</span>
      </div>
    </section>
  </section>
</template>
<script setup>
import { ref } from "vue";
const router = useRouter();
const profileItemsClass = "font-normal text-sm text-black text-center";
const profileItemsValueClass =
  "mt-1 text-xs text-gray-500 font-normal text-center";
const profileItems = {
  Posts: "567",
  Followers: "12,454",
  Follows: "127",
  Requests: "12",
};

const account = useAccount();
const users = useUsers();
const currentUser = ref(users.value.find((item) => item.id === 3))
const followMode = useFollowMode();
const avatar = ref("");
const counter = useCounter();
const posts = usePosts();
const postCount = ref(0);

//mounted

onMounted(() => {
  account.value = users.value.filter((item) => item.id == 3)[0];
  avatar.value = users.value.filter((item) => item.id === 3)[0].avatar;
  posts.value.map((item) => {
    if (item.authorId === 3) {
      postCount.value++;
    }
  });
});

watch(counter, (value) => {
  avatar.value = users.value.filter((item) => item.id === 3)[0].avatar;
});

//methods

const showFollowersList = () => {
  followMode.value = "followers";
  router.push(`/follows/${account.value.id}`);
};
const showFollowingsList = () => {
  followMode.value = "followings";
  router.push(`/follows/${account.value.id}`);
};
</script>
