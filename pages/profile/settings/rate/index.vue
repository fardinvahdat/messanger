<template>
  <section class="help-page px-4 py-6">
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
        <h1 class="text-gray-700 font-bold text-lg">Rate</h1>
      </section>
    </section>
    <section class="mt-6 grid grid-cols-1 gap-4">
      <!-- <Item :item="item" v-for="item in supportMenu" :key="item.id" /> -->
      <el-collapse v-model="activeTab" accordion>
        <el-collapse-item v-for="item in supportMenu" :title="item.name">
          <section class="mt-3">
            <a :href="item.href">{{ item.name }}</a>
          </section>
        </el-collapse-item>
      </el-collapse>
    </section>
  </section>
</template>

<script setup>
import Icon from "@/components/TheIcon/Icon.vue";
const router = useRouter();
const activeTab = ref("");
const supportMenu = ref([
  {
    id: 1,
    name: "App Store",
    href: "https://www.apple.com/app-store/",
  },
  {
    id: 2,
    name: "Google Play",
    href: "https://play.google.com/store/games?pli=1",
  },
]);
</script>

<style scoped></style>
