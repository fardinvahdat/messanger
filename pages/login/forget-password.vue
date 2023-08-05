<template>
  <section>
    <h1 class="text-center text-2xl text-white font-bold">Forget Password?</h1>
    <section class="mt-10">
      <label class="text-sm text-primary-800 font-normal">Email or mobile</label>
      <el-input placeholder="mymail@domain.com">
        <template v-slot:prefix>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12L4 7.95312V7C4 6.71875 4.09896 6.48177 4.29688 6.28906C4.49479 6.09635 4.72917 6 5 6H19C19.2708 6 19.5052 6.09635 19.7031 6.28906C19.901 6.48177 20 6.71875 20 7V7.95312L12 12ZM11.5 13H12.5L20 9.10938V17C20 17.2708 19.901 17.5052 19.7031 17.7031C19.5052 17.901 19.2708 18 19 18H5C4.72917 18 4.49479 17.901 4.29688 17.7031C4.09896 17.5052 4 17.2708 4 17V9.10938L11.5 13Z" fill="#0F1C57"/>
          </svg>
        </template>
      </el-input>
    </section>
    <p class="mt-2 text-white text-lg font-normal">The OTP code was sent to your email.</p>
    <section class="mt-5">
      <el-button @click="pushVerify" class="btn btn-primary w-full">OK</el-button>
    </section>
    <section class="mt-10 flex items-center justify-between">
      <p class="text-white font-normal text-lg">Existing user? <b>Swipe up</b></p>
      <el-button link class="text-white text-lg font-bold">Skip</el-button>
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
  router.push({ path: '/login/verify' })
}
</script>

<style scoped>

</style>