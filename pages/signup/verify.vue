<template>
  <section>
    <h1 class="text-center text-2xl text-white font-bold">Verification code</h1>
    <p class="mt-7 font-normal text-lg">
      We sent a sms, with Verification code to <b>+1 647 111 1111</b>
      <br />
      {{ Math.floor(timer / 60) + ":" + (timer % 60) }}
    </p>
    <section class="mt-7 otp">
      <v-otp-input
        ref="otpInput"
        v-model:value="bindModal"
        input-classes="otp-input"
        separator=""
        :num-inputs="4"
        :should-auto-focus="true"
        input-type="letter-numeric"
        :conditionalClass="['one', 'two', 'three', 'four']"
        :placeholder="['', '', '', '']"
        @on-complete="handleOnComplete"
      />
    </section>
    <section class="mt-5">
      <p class="text-white font-normal text-base">
        Do not get code?
        <span
          class="ml-1 underline"
          :class="[timer == 0 ? 'text-primary-300' : 'text-gray-300']"
          >Resend code</span
        >
      </p>
    </section>
    <section class="mt-5">
      <el-button class="btn btn-primary w-full">Submit</el-button>
    </section>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "login",
});
const router = useRouter();
const bindModal = ref();
const timer = ref(120);
// methods
const pushSignup = (e) => {
  router.push({ path: "/login" });
};
const pushVerify = (e) => {
  router.push({ path: "/signup/verify" });
};
const startCountdown = () => {
  let interval = setInterval(() => {
    if (timer.value < 1) {
      clearInterval(interval);
    } else {
      timer.value--;
    }
  }, 1000);
};

// hooks
onMounted(() => {
  startCountdown();
});
</script>

<style scoped>
</style>