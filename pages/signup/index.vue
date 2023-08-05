<template>
  <section>
    <h1 class="text-center text-2xl text-white font-bold">Welcome to VIRA!</h1>
    <section class="mt-10 grid grid-cols-1">

      <section>
        <label class="text-sm text-primary-800 font-normal">Username</label>
        <el-input placeholder="username">
          <template v-slot:prefix>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0ZM8 16C8 16 16 16 16 14C16 11.6 12.1 9 8 9C3.9 9 0 11.6 0 14C0 16 8 16 8 16Z" fill="#0F1C57"/>
            </svg>
          </template>
        </el-input>
      </section>
      <section class="mt-6">
        <label class="text-sm text-primary-800 font-normal">Email or mobile</label>
        <el-input placeholder="mymail@domain.com">
          <template v-slot:prefix>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="5" width="15" height="15" rx="2" fill="#0F1C57"/>
              <rect x="7.5" y="7.5" width="10" height="10" rx="2" fill="white"/>
              <path d="M13.0504 11.9001H7.49991C7.3408 11.9001 7.18821 11.9633 7.07571 12.0758C6.9632 12.1883 6.9 12.3409 6.9 12.5C6.9 12.6591 6.9632 12.8117 7.07571 12.9242C7.18821 13.0367 7.3408 13.0999 7.49991 13.0999H13.0504L11.0746 15.0748L11.0745 15.0748C10.9619 15.1874 10.8986 15.3402 10.8986 15.4995C10.8986 15.6587 10.9619 15.8115 11.0745 15.9241C11.1872 16.0367 11.3399 16.1 11.4992 16.1C11.6585 16.1 11.8112 16.0367 11.9238 15.9241L14.9232 12.9247L13.0504 11.9001ZM13.0504 11.9001L11.0746 9.9252L11.0745 9.92519C10.9619 9.81257 10.8986 9.65982 10.8986 9.50054C10.8986 9.34127 10.9619 9.18852 11.0745 9.07589C11.1872 8.96327 11.3399 8.9 11.4992 8.9C11.6585 8.9 11.8112 8.96327 11.9238 9.07589L14.9232 12.0753L13.0504 11.9001ZM15.0536 12.2701C15.0234 12.1972 14.9791 12.1311 14.9233 12.0754V12.9246C14.9791 12.8689 15.0234 12.8028 15.0536 12.7299C15.0839 12.657 15.0995 12.5789 15.0995 12.5C15.0995 12.4211 15.0839 12.343 15.0536 12.2701Z" fill="#0F1C57" stroke="#0F1C57" stroke-width="0.2"/>
            </svg>
          </template>
        </el-input>
      </section>
      <section class="mt-6">
        <label class="text-sm text-primary-800 font-normal">Password</label>
        <el-input type="password" :show-password="true">
          <template v-slot:prefix>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.0417 9.66667H18.6472C18.8601 9.66667 19.0643 9.75196 19.2149 9.90377C19.3654 10.0556 19.45 10.2615 19.45 10.4762V20.1905C19.45 20.4052 19.3654 20.6111 19.2149 20.7629C19.0643 20.9147 18.8601 21 18.6472 21H5.80278C5.58987 21 5.38568 20.9147 5.23513 20.7629C5.08458 20.6111 5 20.4052 5 20.1905V10.4762C5 10.2615 5.08458 10.0556 5.23513 9.90377C5.38568 9.75196 5.58987 9.66667 5.80278 9.66667H7.40833V8.85714C7.40833 7.56895 7.9158 6.33352 8.8191 5.42262C9.7224 4.51173 10.9475 4 12.225 4C13.5025 4 14.7276 4.51173 15.6309 5.42262C16.5342 6.33352 17.0417 7.56895 17.0417 8.85714V9.66667ZM15.4361 9.66667V8.85714C15.4361 7.99835 15.0978 7.17472 14.4956 6.56746C13.8934 5.9602 13.0766 5.61905 12.225 5.61905C11.3734 5.61905 10.5566 5.9602 9.9544 6.56746C9.3522 7.17472 9.01389 7.99835 9.01389 8.85714V9.66667H15.4361ZM11.4222 14.5238V16.1429H13.0278V14.5238H11.4222ZM8.21111 14.5238V16.1429H9.81667V14.5238H8.21111ZM14.6333 14.5238V16.1429H16.2389V14.5238H14.6333Z" fill="#0F1C57"/>
            </svg>
          </template>
        </el-input>
      </section>
      <section class="mt-6">
        <label class="text-sm text-primary-800 font-normal">Repeat password</label>
        <el-input type="password" :show-password="true">
          <template v-slot:prefix>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.2727 10.4545H12.0614C11.7056 9.44451 11.0452 8.56977 10.1712 7.951C9.29716 7.33224 8.25268 6.99996 7.18182 7C4.32318 7 2 9.32318 2 12.1818C2 15.0405 4.32318 17.3636 7.18182 17.3636C8.25268 17.3637 9.29716 17.0314 10.1712 16.4126C11.0452 15.7939 11.7056 14.9191 12.0614 13.9091H12.3636L14.0909 15.6364L15.8182 13.9091L17.5455 15.6364L21 12.1473L19.2727 10.4545ZM7.18182 14.7727C5.75682 14.7727 4.59091 13.6068 4.59091 12.1818C4.59091 10.7568 5.75682 9.59091 7.18182 9.59091C8.60682 9.59091 9.77273 10.7568 9.77273 12.1818C9.77273 13.6068 8.60682 14.7727 7.18182 14.7727Z" fill="#0F1C57"/>
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
        <el-button class="w-full btn btn-primary" @click="pushVerify">Sign up</el-button>
      </section>
      <section class="mt-6" @click="pushSignup">
        <section class="flex justify-center">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.4219 30.832C25.2305 30.832 30.832 25.2305 30.832 18.4219C30.832 11.6016 25.2305 6 18.4102 6C11.5898 6 6 11.6016 6 18.4219C6 25.2305 11.6016 30.832 18.4219 30.832ZM19.9102 14.7656L24.4219 19.6055C24.9141 20.1211 24.9141 20.9297 24.457 21.375C23.9297 21.9023 23.1211 21.9023 22.6406 21.375L18.4219 16.875L14.1914 21.375C13.7109 21.9023 12.9141 21.9023 12.375 21.375C11.918 20.9297 11.918 20.1328 12.4102 19.6055L16.9336 14.7773C17.7773 13.875 19.0547 13.8633 19.9102 14.7656Z" fill="white"/>
          </svg>
        </section>
        <p class="mt-1 text-center text-white font-normal text-base">
          <b>Existing User?</b>
          Swipe up
        </p>
      </section>
    </section>
  </section>
</template>

<script setup>
definePageMeta({
  layout: 'login'
})
const router = useRouter()
const pushSignup = (e) =>{
  router.push({ path: '/login' })
}
const pushVerify = (e) =>{
  router.push({ path: '/signup/verify' })
}
</script>

<style scoped>

</style>