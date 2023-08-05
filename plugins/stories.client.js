import Stories from "vue3-insta-stories";
export default defineNuxtPlugin((nuxtapp) => {
  nuxtapp.vueApp.component("Stories", Stories);
});
