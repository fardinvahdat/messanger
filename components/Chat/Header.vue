<template>
  <section class="pt-5 flex items-center justify-between">
    <section class="flex items-center gap-3">
      <el-button @click="back" text>
        <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.69102 1.07561C8.59373 0.979054 8.47815 0.902445 8.3509 0.850173C8.22366 0.797902 8.08725 0.770996 7.94948 0.770996C7.81172 0.770996 7.6753 0.797902 7.54806 0.850173C7.42081 0.902445 7.30524 0.979054 7.20794 1.07561L0.245038 7.96868C0.167362 8.04542 0.105737 8.13657 0.0636898 8.23692C0.021643 8.33726 0 8.44483 0 8.55347C0 8.66211 0.021643 8.76968 0.0636898 8.87003C0.105737 8.97037 0.167362 9.06152 0.245038 9.13826L7.20794 16.0313C7.61851 16.4378 8.28045 16.4378 8.69102 16.0313C9.10159 15.6249 9.10159 14.9696 8.69102 14.5631L2.62466 8.54932L8.6994 2.53552C9.10159 2.13736 9.10159 1.47377 8.69102 1.07561Z" fill="#263238"/>
        </svg>
      </el-button>
      <section class="flex items-center gap-1">
      <img src="/assets/images/profile.png" class="w-12 h-12 rounded-full"/>
        <section>
          <h1 class="font-medium text-gray-700 text-base">Emma Watson</h1>
          <p class="mt-1 text-gray-500 font-normal text-sm">Last seen at 08:22 PM</p>
        </section>
      </section>
    </section>
    <section class="flex items-center grow-0 gap-2">
      <el-button text class="btn" @click="videoCallClicked">
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.1419 1.82659C15.8838 1.71036 15.5972 1.67256 15.3178 1.71787C15.0383 1.76319 14.7784 1.88962 14.5702 2.08146L12.7436 3.78061V2.54873C12.7436 1.87276 12.4751 1.22448 11.9971 0.746504C11.5191 0.268526 10.8709 0 10.1949 0H2.54873C1.87276 0 1.22448 0.268526 0.746505 0.746504C0.268526 1.22448 0 1.87276 0 2.54873V9.34533C0 10.0213 0.268526 10.6696 0.746505 11.1475C1.22448 11.6255 1.87276 11.8941 2.54873 11.8941H10.1949C10.8709 11.8941 11.5191 11.6255 11.9971 11.1475C12.4751 10.6696 12.7436 10.0213 12.7436 9.34533V8.11344L14.5787 9.81259C14.8489 10.0571 15.1998 10.1933 15.5642 10.1949C15.7664 10.1944 15.9663 10.151 16.1504 10.0675C16.401 9.9661 16.6157 9.79234 16.767 9.56837C16.9183 9.3444 16.9995 9.0804 17 8.81009V3.08396C16.9988 2.81268 16.9164 2.54797 16.7635 2.32389C16.6106 2.09982 16.3941 1.92662 16.1419 1.82659Z" fill="#90A4AE"/>
        </svg>
      </el-button>
      <el-button text class="btn" @click="callClicked">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.29878 2.35105L8.15959 2.07585C8.9676 1.81825 9.82921 2.23505 10.1756 3.04946L10.8628 4.67188C11.162 5.37829 10.9964 6.2095 10.4516 6.7263L8.9364 8.16472C9.0292 9.02553 9.31881 9.87274 9.80361 10.7064C10.2642 11.5129 10.882 12.2189 11.6204 12.7824L13.4405 12.1744C14.1309 11.9448 14.8821 12.2096 15.3045 12.8312L16.2909 14.2792C16.7829 15.0024 16.6949 15.9992 16.0845 16.612L15.4301 17.2688C14.7789 17.9224 13.8485 18.16 12.9884 17.8912C10.9572 17.2576 9.09 15.3768 7.38598 12.2488C5.67956 9.11593 5.07716 6.4567 5.57956 4.27427C5.79076 3.35586 6.44437 2.62386 7.29878 2.35105Z" fill="#90A4AE"/>
        </svg>
      </el-button>
      <el-dropdown placement="left" popper-class="primary-dropdown" @command="handleCommand">
      <el-button text class="btn">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.8334 16.6667C10.8334 16.2064 10.4603 15.8333 10.0001 15.8333C9.53984 15.8333 9.16675 16.2064 9.16675 16.6667C9.16675 17.1269 9.53984 17.5 10.0001 17.5C10.4603 17.5 10.8334 17.1269 10.8334 16.6667Z" stroke="#90A4AE" stroke-width="2"/>
          <path d="M10.8334 10.0002C10.8334 9.53993 10.4603 9.16683 10.0001 9.16683C9.53984 9.16683 9.16675 9.53993 9.16675 10.0002C9.16675 10.4604 9.53984 10.8335 10.0001 10.8335C10.4603 10.8335 10.8334 10.4604 10.8334 10.0002Z" stroke="#90A4AE" stroke-width="2"/>
          <path d="M10.8334 3.33317C10.8334 2.87293 10.4603 2.49984 10.0001 2.49984C9.53984 2.49984 9.16675 2.87293 9.16675 3.33317C9.16675 3.79341 9.53984 4.1665 10.0001 4.1665C10.4603 4.1665 10.8334 3.79341 10.8334 3.33317Z" stroke="#90A4AE" stroke-width="2"/>
        </svg>
      </el-button>

        <template #dropdown>
          <el-dropdown-menu >
            <el-dropdown-item command="profile">Show profile</el-dropdown-item>
            <el-dropdown-item command="block">Block</el-dropdown-item>
            <el-dropdown-item command="share">Share chat</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <PrivateChat v-model="shareDialog" />
    </section>
  </section>
</template>

<script setup>
import PrivateChat from '@/components/Base/Share/PrivateChat'
const props = defineProps({
  hasBackEmit: {
    default: false
  }
})
const emits = defineEmits()
const account = useAccount()
const users = useUsers()

// variables
const router = useRouter()
const shareDialog = ref(false)
// methods
const callClicked = ()=>{
  emits('call')
}
const videoCallClicked = ()=>{
  emits('videoCall')
}
const back = () => {
  if (props.hasBackEmit) {
    emits('back')
  }
  else
    router.push({ path: '/account' })
}
const handleCommand = (e) => {
  switch (e) {
    case "profile": {
      account.value = users.value[1]
      router.push({ path: '/account' })
      break
    }
    case "block": {
      emits('blocked', true)
      console.log('emited')
      break
    }
    case "share": {
      shareDialog.value = true
      break
    }
  }
}
</script>

<style scoped>

</style>