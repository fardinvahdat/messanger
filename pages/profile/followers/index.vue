<template>
  <section class="requests px-3 py-6">
    <section class="flex items-center gap-2">
      <el-button class="btn" text @click="router.go(-1)">
        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M8.69102 0.293557C8.59373 0.200504 8.47815 0.126676 8.3509 0.0763025C8.22366 0.0259291 8.08725 0 7.94948 0C7.81172 0 7.6753 0.0259291 7.54806 0.0763025C7.42081 0.126676 7.30524 0.200504 7.20794 0.293557L0.245038 6.93634C0.167362 7.01029 0.105737 7.09813 0.0636898 7.19483C0.021643 7.29154 0 7.3952 0 7.49989C0 7.60459 0.021643 7.70825 0.0636898 7.80495C0.105737 7.90166 0.167362 7.9895 0.245038 8.06345L7.20794 14.7062C7.61851 15.0979 8.28045 15.0979 8.69102 14.7062C9.10159 14.3145 9.10159 13.683 8.69102 13.2913L2.62466 7.4959L8.6994 1.70045C9.10159 1.31675 9.10159 0.677255 8.69102 0.293557Z"
              fill="black" fill-opacity="0.8"/>
        </svg>
      </el-button>
      <h1 class="text-gray-700 font-bold text-lg">Follows</h1>
    </section>
    <hr class="my-4 border border-gray-300 border-opacity-10">
    <section class="grid grid-cols-1 gap-4">
      <Item v-for="follow in follows" :key="follow.id" :info="follow" />
    </section>
  </section>
</template>

<script setup>
import Item from "@/components/TheProfile/Follows/Item";
const router = useRouter()
const follows = ref([
  { id: 1, image: '/assets/images/avatars/avatar1.png', isFollowed: true },
  { id: 2, image: '/assets/images/avatars/avatar2.png', isFollowed: false },
  { id: 3, image: '/assets/images/avatars/avatar3.png', isFollowed: true },
  { id: 4, image: '/assets/images/avatars/avatar4.png', isFollowed: false },
  { id: 5, image: '/assets/images/avatars/avatar5.png', isFollowed: false },
  { id: 6, image: '/assets/images/avatars/avatar6.png', isFollowed: true },
  { id: 7, image: '/assets/images/avatars/avatar7.png', isFollowed: false },
  { id: 8, image: '/assets/images/avatars/avatar8.png', isFollowed: false },
])
</script>

<style scoped>

</style>