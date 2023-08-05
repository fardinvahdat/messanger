import Hammer from "hammerjs";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Hammer", Hammer);
});
