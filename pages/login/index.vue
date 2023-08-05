<template>
  <section>
    <h1 class="text-center text-2xl text-white font-bold">Welcome to VIRA!</h1>
    <section class="mt-10 grid grid-cols-1">
      <section>
        <label class="text-sm text-primary-800 font-normal"
          >Username, mobile or email</label
        >
        <el-input placeholder="mymail@domain.com" type="email">
          <template v-slot:prefix>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12L4 7.95312V7C4 6.71875 4.09896 6.48177 4.29688 6.28906C4.49479 6.09635 4.72917 6 5 6H19C19.2708 6 19.5052 6.09635 19.7031 6.28906C19.901 6.48177 20 6.71875 20 7V7.95312L12 12ZM11.5 13H12.5L20 9.10938V17C20 17.2708 19.901 17.5052 19.7031 17.7031C19.5052 17.901 19.2708 18 19 18H5C4.72917 18 4.49479 17.901 4.29688 17.7031C4.09896 17.5052 4 17.2708 4 17V9.10938L11.5 13Z"
                fill="#0F1C57"
              />
            </svg>
          </template>
        </el-input>
      </section>
      <section class="mt-6">
        <label class="text-sm text-primary-800 font-normal">Password</label>
        <el-input type="password" :show-password="true">
          <template v-slot:prefix>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0417 8.66667H18.6472C18.8601 8.66667 19.0643 8.75196 19.2149 8.90377C19.3654 9.05559 19.45 9.26149 19.45 9.47619V19.1905C19.45 19.4052 19.3654 19.6111 19.2149 19.7629C19.0643 19.9147 18.8601 20 18.6472 20H5.80278C5.58987 20 5.38568 19.9147 5.23513 19.7629C5.08458 19.6111 5 19.4052 5 19.1905V9.47619C5 9.26149 5.08458 9.05559 5.23513 8.90377C5.38568 8.75196 5.58987 8.66667 5.80278 8.66667H7.40833V7.85714C7.40833 6.56895 7.9158 5.33352 8.8191 4.42262C9.7224 3.51173 10.9475 3 12.225 3C13.5025 3 14.7276 3.51173 15.6309 4.42262C16.5342 5.33352 17.0417 6.56895 17.0417 7.85714V8.66667ZM15.4361 8.66667V7.85714C15.4361 6.99835 15.0978 6.17472 14.4956 5.56746C13.8934 4.9602 13.0766 4.61905 12.225 4.61905C11.3734 4.61905 10.5566 4.9602 9.9544 5.56746C9.3522 6.17472 9.01389 6.99835 9.01389 7.85714V8.66667H15.4361ZM11.4222 13.5238V15.1429H13.0278V13.5238H11.4222ZM8.21111 13.5238V15.1429H9.81667V13.5238H8.21111ZM14.6333 13.5238V15.1429H16.2389V13.5238H14.6333Z"
                fill="#0F1C57"
              />
            </svg>
          </template>
        </el-input>
      </section>
      <section class="mt-2">
        <el-checkbox>
          <template v-slot:default>
            <p class="text-sm text-primary-800 font-normal">Remember me</p>
          </template>
        </el-checkbox>
      </section>
      <section class="mt-2">
        <nuxt-link
          to="/login/forget-password"
          class="underline text-white font-medium text-sm"
          >forget password</nuxt-link
        >
      </section>
      <section class="mt-5">
        <el-button
          class="w-full btn btn-primary"
          @click="version == 'parent' ? router.push({ path: '/profile/settings/parent' }) : router.push({ path: '/home' })"
          >Log In</el-button
        >
      </section>
    </section>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "login",
});
const router = useRouter();
const version = ref('child')
const pushSignup = (e) => {
  router.push({ path: "/signup" });
};
</script>

<style scoped>
</style>