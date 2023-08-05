<template>

  <section class="settings px-4 py-6">
    <section class="flex items-center gap-2">
      <el-button class="btn" text @click="router.go(-1)">
        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M8.69102 0.293557C8.59373 0.200504 8.47815 0.126676 8.3509 0.0763025C8.22366 0.0259291 8.08725 0 7.94948 0C7.81172 0 7.6753 0.0259291 7.54806 0.0763025C7.42081 0.126676 7.30524 0.200504 7.20794 0.293557L0.245038 6.93634C0.167362 7.01029 0.105737 7.09813 0.0636898 7.19483C0.021643 7.29154 0 7.3952 0 7.49989C0 7.60459 0.021643 7.70825 0.0636898 7.80495C0.105737 7.90166 0.167362 7.9895 0.245038 8.06345L7.20794 14.7062C7.61851 15.0979 8.28045 15.0979 8.69102 14.7062C9.10159 14.3145 9.10159 13.683 8.69102 13.2913L2.62466 7.4959L8.6994 1.70045C9.10159 1.31675 9.10159 0.677255 8.69102 0.293557Z"
              fill="black" fill-opacity="0.8"/>
        </svg>
      </el-button>
      <section class="flex items-center gap-1 grow-0">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.8" clip-path="url(#clip0_1_17332)">
            <path
                d="M8.86233 1.46011e-06C9.09753 1.46011e-06 9.30793 0.146401 9.38713 0.365601L9.95193 1.9312C10.1543 1.9816 10.3279 2.032 10.4751 2.0848C10.6359 2.1424 10.8431 2.2296 11.0991 2.3488L12.4143 1.6528C12.5217 1.59593 12.6446 1.5754 12.7646 1.59429C12.8846 1.61319 12.9952 1.67049 13.0799 1.7576L14.2367 2.9536C14.3903 3.1128 14.4335 3.3456 14.3471 3.5488L13.7303 4.9944C13.8327 5.1824 13.9143 5.3432 13.9767 5.4776C14.0439 5.624 14.1271 5.8256 14.2263 6.0856L15.6639 6.7016C15.8799 6.7936 16.0135 7.0096 15.9991 7.2408L15.8935 8.9008C15.8863 9.00865 15.8476 9.112 15.7822 9.19804C15.7168 9.28407 15.6275 9.34902 15.5255 9.3848L14.1639 9.8688C14.1247 10.0568 14.0839 10.2176 14.0407 10.3536C13.971 10.5636 13.8915 10.7703 13.8023 10.9728L14.4863 12.4848C14.5346 12.591 14.5476 12.7099 14.5234 12.8241C14.4992 12.9383 14.4391 13.0417 14.3519 13.1192L13.0511 14.2808C12.9655 14.357 12.8586 14.4052 12.7447 14.4189C12.6309 14.4326 12.5156 14.4112 12.4143 14.3576L11.0735 13.6472C10.8638 13.7583 10.6473 13.8563 10.4255 13.9408L9.83993 14.16L9.31993 15.6C9.28139 15.7055 9.21188 15.7968 9.12051 15.862C9.02914 15.9273 8.92018 15.9634 8.80793 15.9656L7.28793 16C7.1727 16.003 7.05936 15.9703 6.96352 15.9062C6.86767 15.8422 6.79403 15.75 6.75273 15.6424L6.13993 14.0208C5.93085 13.9493 5.72383 13.872 5.51913 13.7888C5.3517 13.7163 5.1868 13.6382 5.02473 13.5544L3.50473 14.204C3.40457 14.2467 3.29416 14.2594 3.18692 14.2405C3.07968 14.2216 2.98025 14.172 2.90073 14.0976L1.77593 13.0424C1.69218 12.9642 1.63515 12.8616 1.6129 12.7492C1.59065 12.6368 1.6043 12.5202 1.65193 12.416L2.30553 10.992C2.2186 10.8233 2.13801 10.6515 2.06393 10.4768C1.97745 10.263 1.89741 10.0466 1.82393 9.828L0.391928 9.392C0.275528 9.35682 0.174003 9.28419 0.10312 9.18538C0.0322359 9.08658 -0.00403925 8.96714 -7.22356e-05 8.8456L0.0559278 7.3088C0.0599138 7.20853 0.0912371 7.11126 0.14651 7.0275C0.201783 6.94375 0.278902 6.8767 0.369528 6.8336L1.87193 6.112C1.94153 5.8568 2.00233 5.6584 2.05593 5.5136C2.1314 5.3202 2.21521 5.13015 2.30713 4.944L1.65593 3.568C1.60651 3.46351 1.5915 3.34603 1.61306 3.23247C1.63463 3.11891 1.69165 3.01511 1.77593 2.936L2.89913 1.8752C2.97786 1.80094 3.07638 1.75101 3.18283 1.73143C3.28928 1.71184 3.39911 1.72343 3.49913 1.7648L5.01753 2.392C5.18553 2.28 5.33753 2.1896 5.47513 2.1168C5.63913 2.0296 5.85833 1.9384 6.13433 1.84L6.66233 0.367201C6.70136 0.259416 6.77271 0.166307 6.86664 0.100586C6.96057 0.0348661 7.07249 -0.000261001 7.18713 1.46011e-06H8.86233ZM8.01913 5.6152C6.68553 5.6152 5.60473 6.6832 5.60473 8.0016C5.60473 9.32 6.68553 10.3888 8.01913 10.3888C9.35193 10.3888 10.4327 9.32 10.4327 8.0016C10.4327 6.6832 9.35273 5.6152 8.01913 5.6152Z"
                fill="#263238"/>
          </g>
          <defs>
            <clipPath id="clip0_1_17332">
              <rect width="16" height="16" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <h1 class="text-gray-700 font-bold text-lg">Settings</h1>
      </section>
    </section>
    <Header class="mt-4"/>
    <hr class="border border-gray-300 border-opacity-10 my-5">
    <section class="grid grid-cols-1 gap-4">
      <template v-for="(child, index) in childs">
        <nuxt-link :to="`./kids/${child.id}`" class="flex items-center gap-3">
          <img :src="`/assets/images/avatars/avatar${child.id}.png`" class="w-16 h-16 rounded-full"/>
          <section>
            <p class="text-xs text-gray-500 font-normal">{{ child.username }}</p>
            <h1 class="text-lg text-gray-700 font-medium mt-1">{{ child.name }}</h1>
            <p class="mt-1 text-xs text-gray-500 font-normal">{{ child.data }}</p>
          </section>
          <span
              class="ml-auto w-10 h-10 rounded-full flex items-center justify-center grow-0 bg-error-800 text-white font-medium text-base">
            {{ child.notifCount }}
          </span>
        </nuxt-link>
        <hr class="border border-gray-300 border-opacity-10 my-1">
      </template>
      <nuxt-link to="./kids/add" class="flex items-center gap-3">
        <section class="relative w-20 h-20 rounded-full flex items-center justify-center grow-0">
          <section class="absolute left-0 top-0 w-full h-full">
            <svg width="100%" height="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_1_18551)">
                <circle cx="40" cy="40" r="32" stroke="#50CCE8" stroke-width="3" stroke-dasharray="1 1"
                        shape-rendering="crispEdges"></circle>
              </g>
              <defs>
                <filter id="filter0_d_1_18551" x="0" y="0" width="80" height="80" filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                 result="hardAlpha"></feColorMatrix>
                  <feOffset dy="4"></feOffset>
                  <feGaussianBlur stdDeviation="5"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix type="matrix"
                                 values="0 0 0 0 0.315646 0 0 0 0 0.80165 0 0 0 0 0.908333 0 0 0 0.1 0"></feColorMatrix>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_18551"></feBlend>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_18551" result="shape"></feBlend>
                </filter>
              </defs>
            </svg>
          </section>
          <section class="w-10 h-10 flex justify-center items-center grow-0 border border-primary-300 rounded-full">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M8.883 0.00699997L9 0C9.24493 3.23106e-05 9.48134 0.0899562 9.66437 0.252715C9.84741 0.415475 9.96434 0.639749 9.993 0.883L10 1V8H17C17.2449 8.00003 17.4813 8.08996 17.6644 8.25272C17.8474 8.41547 17.9643 8.63975 17.993 8.883L18 9C18 9.24493 17.91 9.48134 17.7473 9.66437C17.5845 9.84741 17.3603 9.96434 17.117 9.993L17 10H10V17C9.99997 17.2449 9.91004 17.4813 9.74728 17.6644C9.58453 17.8474 9.36025 17.9643 9.117 17.993L9 18C8.75507 18 8.51866 17.91 8.33563 17.7473C8.15259 17.5845 8.03566 17.3603 8.007 17.117L8 17V10H1C0.755067 9.99997 0.518663 9.91004 0.335628 9.74728C0.152593 9.58453 0.0356572 9.36025 0.00699997 9.117L0 9C3.23106e-05 8.75507 0.0899562 8.51866 0.252715 8.33563C0.415475 8.15259 0.639749 8.03566 0.883 8.007L1 8H8V1C8.00003 0.755067 8.08996 0.518663 8.25272 0.335628C8.41547 0.152593 8.63975 0.0356572 8.883 0.00699997L9 0L8.883 0.00699997Z"
                  fill="#50CCE8"/>
            </svg>
          </section>
        </section>
        <h2 class="text-lg text-gray-700 font-medium">Add a new child</h2>
      </nuxt-link>
    </section>
  </section>
</template>

<script setup>
import Header from "@/components/TheProfile/Settings/Parent/Header.vue";
const router = useRouter()
const childs = ref([
  {id: 1, name: 'Emma Watson', username: '@emma-w-2004', data: 'Grade: Middle 7', notifCount: 117},
  {id: 2, name: 'Claire Watson', username: '@cli-watson-2006', data: 'Grade: Middle 5', notifCount: 7},
  {id: 3, name: 'Sarah Watson', username: '@emma-w-2007', data: 'Grade: Middle 4', notifCount: 5},
])
</script>

<style scoped>

</style>