<template>
  <section>
    <h1 class="text-center text-2xl text-white font-bold">Set Password</h1>
    <p class="mt-5 text-primary-800 font-normal text-lg">Your password must be more than 6 characters and include a combination of numbers, letters and special characters(@%$!)</p>
    <section class="mt-8">
      <label class="text-sm text-primary-800 font-normal">New Password</label>
      <el-input type="password" :show-password="true" >
        <template v-slot:prefix>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.0417 8.66667H18.6472C18.8601 8.66667 19.0643 8.75196 19.2149 8.90377C19.3654 9.05559 19.45 9.26149 19.45 9.47619V19.1905C19.45 19.4052 19.3654 19.6111 19.2149 19.7629C19.0643 19.9147 18.8601 20 18.6472 20H5.80278C5.58987 20 5.38568 19.9147 5.23513 19.7629C5.08458 19.6111 5 19.4052 5 19.1905V9.47619C5 9.26149 5.08458 9.05559 5.23513 8.90377C5.38568 8.75196 5.58987 8.66667 5.80278 8.66667H7.40833V7.85714C7.40833 6.56895 7.9158 5.33352 8.8191 4.42262C9.7224 3.51173 10.9475 3 12.225 3C13.5025 3 14.7276 3.51173 15.6309 4.42262C16.5342 5.33352 17.0417 6.56895 17.0417 7.85714V8.66667ZM15.4361 8.66667V7.85714C15.4361 6.99835 15.0978 6.17472 14.4956 5.56746C13.8934 4.9602 13.0766 4.61905 12.225 4.61905C11.3734 4.61905 10.5566 4.9602 9.9544 5.56746C9.3522 6.17472 9.01389 6.99835 9.01389 7.85714V8.66667H15.4361ZM11.4222 13.5238V15.1429H13.0278V13.5238H11.4222ZM8.21111 13.5238V15.1429H9.81667V13.5238H8.21111ZM14.6333 13.5238V15.1429H16.2389V13.5238H14.6333Z" fill="#0F1C57"/>
        </svg>
        </template>
      </el-input>
    </section>
    <section class="mt-6">
      <label class="text-sm text-primary-800 font-normal">New Password, again</label>
      <el-input type="password" :show-password="true" >
        <template v-slot:prefix>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.2727 10.4545H12.0614C11.7056 9.44451 11.0452 8.56977 10.1712 7.951C9.29716 7.33224 8.25268 6.99996 7.18182 7C4.32318 7 2 9.32318 2 12.1818C2 15.0405 4.32318 17.3636 7.18182 17.3636C8.25268 17.3637 9.29716 17.0314 10.1712 16.4126C11.0452 15.7939 11.7056 14.9191 12.0614 13.9091H12.3636L14.0909 15.6364L15.8182 13.9091L17.5455 15.6364L21 12.1473L19.2727 10.4545ZM7.18182 14.7727C5.75682 14.7727 4.59091 13.6068 4.59091 12.1818C4.59091 10.7568 5.75682 9.59091 7.18182 9.59091C8.60682 9.59091 9.77273 10.7568 9.77273 12.1818C9.77273 13.6068 8.60682 14.7727 7.18182 14.7727Z" fill="#0F1C57" fill-opacity="0.3"/>
          </svg>
        </template>
      </el-input>
    </section>
    <section class="mt-2">
      <el-checkbox >
        <template v-slot:default>
          <p class="text-sm text-primary-800 font-normal">Remember me</p>
        </template>
      </el-checkbox>
    </section>
    <section class="mt-5">
      <el-button @click="pushVerify" class="btn btn-primary w-full">Submit</el-button>
    </section>
  </section>
</template>

<script setup>
definePageMeta({
  layout: 'login'
})
const router = useRouter()
const bindModal = ref()
const timer = ref(120)
// methods
const pushVerify = (e) =>{
  router.push({ path: '/login/' })
}
</script>

<style scoped>

</style>