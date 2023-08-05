import EmojiPicker from 'vue3-emoji-picker'
import 'vue3-emoji-picker/css'
export default defineNuxtPlugin(nuxt => {
    nuxt.vueApp.component('EmojiPicker', EmojiPicker)
})