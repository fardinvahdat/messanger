<template>
  <section>
    <section class="flex justify-center">
      <section class="relative">
        <img src="/assets/images/avatars/avatar3.png" class="w-20 h-20 rounded-full">
        <section class="absolute top-8 -right-2 w-6 h-6 rounded-full flex items-center justify-center bg-primary-300">
          <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_17427)">
              <path d="M1.17221 5.79998L0.644433 7.84998C0.626227 7.92491 0.626851 8.00257 0.64626 8.07726C0.665669 8.15196 0.703373 8.2218 0.756617 8.2817C0.809862 8.3416 0.877301 8.39004 0.95401 8.42348C1.03072 8.45692 1.11476 8.47451 1.19999 8.47498C1.2397 8.47859 1.27972 8.47859 1.31943 8.47498L3.6111 7.99998L8.0111 4.05498L5.55554 1.84998L1.17221 5.79998Z" fill="white"/>
              <path d="M9.39444 2.07999L7.75555 0.604993C7.6478 0.508509 7.50199 0.454346 7.34999 0.454346C7.198 0.454346 7.05219 0.508509 6.94444 0.604993L6.03333 1.42499L8.4861 3.63249L9.39721 2.81249C9.45053 2.76426 9.49276 2.70704 9.52148 2.64411C9.55021 2.58117 9.56486 2.51376 9.5646 2.44572C9.56434 2.37769 9.54918 2.31037 9.51998 2.24761C9.49078 2.18485 9.44812 2.12789 9.39444 2.07999Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_1_17427">
                <rect width="10" height="9" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </section>
      </section>
    </section>
    <section class="text-center mt-2">
      <p class="font-normal text-xs text-gray-500">@emma-w-2004</p>
      <h1 class="mt-1 text-gray-700 font-medium text-lg">Emma Watson</h1>
    </section>
    <section class="flex justify-center mt-2">
    <el-button class="mt-2 mx-auto py-2 btn btn-primary bg-opacity-30 rounded-full py-0 px-4 text-gray-500 text-base" @click="router.push({ path: 'parent/profile-info'})">
      Edit Profile Info
    </el-button>
    </section>
  </section>
</template>

<script setup>
const router = useRouter()
</script>

<style scoped>

</style>