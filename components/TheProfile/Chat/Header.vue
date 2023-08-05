<template>
  <section>
    <Header @call="pushPage('/chat/25/voice-call')" @video-call="pushPage('/chat/25/video-call')"
            :has-back-emit="true" @back="router.go(-1)" @blocked="blocked"/>
    <section class="px-4">
      <hr class="border border-gray-300 border-opacity-10 my-2">
      <Tabs v-model:activeTab="activeTab"/>
      <hr class="border border-gray-300 border-opacity-10 my-2">
    </section>
  </section>
</template>

<script setup>
import Header from '@/components/Chat/Header.vue'
import Tabs from '@/components/TheProfile/Chat/Tabs.vue'

const router = useRouter()
const route = useRoute()
const emits = defineEmits()
const activeRoute = computed(()=>{
  let path = route.path.split('/')
  switch (path[path.length - 1]) {
    case "media":  {
      return "Media"
    }
    case "files":  {
      return "Files"
    }
    case "links":  {
      return "Links"
    }
    case "groups":  {
      return "Groups"
    }
    case "notification":  {
      return "Notifications"
    }
    default: {
      return ""
    }
  }
})
const activeTab = ref(activeRoute.value)

// methods

const pushPage = (page) => {
  router.push({ path: page })
}
const blocked = () => {
  emits('blocked')
}
// watcher
watch(activeTab, value=>{
  switch (value) {
    case "Media": {
      pushPage('./media')
      break
    }
    case "Files": {
      pushPage('./files')
      break
    }
    case "Links": {
      pushPage('./links')
      break
    }
    case "Groups": {
      pushPage('./groups')
      break
    }
    case "Notifications": {
      pushPage('./notification')
      break
    }
  }
})
</script>

<style scoped>

</style>