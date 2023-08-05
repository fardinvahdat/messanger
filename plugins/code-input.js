import VOtpInput from "vue3-otp-input";
export default defineNuxtPlugin(nuxtapp=>{
    nuxtapp.vueApp.component('VOtpInput', VOtpInput)
})