<template>
  <section class="flex items-start gap-2 min-w-[200px] group-chat-item">
    <template v-if="props.chat.isSender">
      <section class="relative bg-primary-600 px-4 py-2 rounded-lg grow">
        <template v-if="props.chat.reply">
          <section class="bg-white bg-opacity-50 px-2 py-3 rounded-lg flex items-center gap-2">
            <img :src="`/assets/images/avatars/${props.chat.reply.avatar}`" class="w-10 h-10 rounded-full">
            <section>
              <p class="text-sm text-white font-normal">{{ props.chat.reply.user }}</p>
              <h3 class="mt-1 text-sm text-gray-700 font-normal">{{ props.chat.reply.text }}</h3>
            </section>
          </section>
        </template>
        <section class="flex items-center justify-between gap-4">
          <p class="text-white text-base font-normal">{{ props.chat.text }}</p>
          <el-button class="btn" text @click="toggleOptions">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M3.33333 10.8332C3.79357 10.8332 4.16667 10.4601 4.16667 9.99984C4.16667 9.5396 3.79357 9.1665 3.33333 9.1665C2.8731 9.1665 2.5 9.5396 2.5 9.99984C2.5 10.4601 2.8731 10.8332 3.33333 10.8332Z"
                  stroke="white" stroke-width="2"/>
              <path
                  d="M9.99999 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 9.99999 9.1665C9.53975 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53975 10.8332 9.99999 10.8332Z"
                  stroke="white" stroke-width="2"/>
              <path
                  d="M16.6667 10.8332C17.1269 10.8332 17.5 10.4601 17.5 9.99984C17.5 9.5396 17.1269 9.1665 16.6667 9.1665C16.2064 9.1665 15.8333 9.5396 15.8333 9.99984C15.8333 10.4601 16.2064 10.8332 16.6667 10.8332Z"
                  stroke="white" stroke-width="2"/>
            </svg>
          </el-button>
        </section>
        <p class="text-right text-white text-xs font-normal flex items-center gap-1 justify-end">
          {{ props.chat.time }}
          <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5L4 8L5 7" stroke="#50CCE8" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.5 3.75L7.4375 7.5L13 1" stroke="#50CCE8" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 1L6.5 5" stroke="#50CCE8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </p>
        <template v-if="showOptions">
          <el-collapse v-model="showOptions">
            <el-collapse-item title="true" name="1">
              <hr class="my-2 border border-gray-400 border-opacity-30">
              <section class="flex items-center justify-between cursor-pointer" @click="selectChatForReply">
                <h3 class="text-sm font-normal" :class="[props.chat.isSender ? 'text-white' : 'text-gray-500']">
                  Reply</h3>
                <section :class="[props.chat.isSender ? 'text-white' : 'text-gray-300']">
                  <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.83333 4.06047V0.382741L0 6.02975L5.83333 11.5771V8.21511C13.1458 8.21511 15 0.000366211 15 0.000366211C12.93 3.70426 9.8025 4.06047 5.83333 4.06047Z"
                        fill="currentColor"/>
                  </svg>
                </section>
              </section>
              <hr class="my-2 border border-gray-400 border-opacity-30">
              <section class="flex items-center justify-between">
                <h3 class="text-sm font-normal" :class="[props.chat.isSender ? 'text-white' : 'text-gray-500']">
                  Forward</h3>
                <section :class="[props.chat.isSender ? 'text-white' : 'text-gray-300']">
                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.16667 8.30578V11.9835L15 6.33649L9.16667 0.789062V4.15112C1.85417 4.15112 0 12.3659 0 12.3659C2.07 8.66199 5.1975 8.30578 9.16667 8.30578Z"
                        fill="currentColor"/>
                  </svg>
                </section>
              </section>
              <hr class="my-2 border border-gray-400 border-opacity-30">
              <section class="flex items-center justify-between">
                <h3 class="text-sm font-normal" :class="[props.chat.isSender ? 'text-white' : 'text-gray-500']">
                  Delete</h3>
                <section :class="[props.chat.isSender ? 'text-white' : 'text-gray-300']">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.8 3.10441H11.4V1.67434C11.4 1.04331 10.8619 0.530273 10.2 0.530273H4.2C3.53812 0.530273 3 1.04331 3 1.67434V3.10441H0.6C0.268125 3.10441 0 3.36004 0 3.67645V4.24848C0 4.32713 0.0675 4.39148 0.15 4.39148H1.2825L1.74562 13.7406C1.77562 14.3502 2.30437 14.8311 2.94375 14.8311H11.4562C12.0975 14.8311 12.6244 14.352 12.6544 13.7406L13.1175 4.39148H14.25C14.3325 4.39148 14.4 4.32713 14.4 4.24848V3.67645C14.4 3.36004 14.1319 3.10441 13.8 3.10441ZM10.05 3.10441H4.35V1.81734H10.05V3.10441Z"
                        fill="currentColor"/>
                  </svg>
                </section>
              </section>
            </el-collapse-item>
          </el-collapse>
        </template>
      </section>
    </template>
    <template v-else>
      <img :src="`/assets/images/avatars/${props.chat.avatar}`" class="w-10 h-10 rounded-full"/>
      <section class="relative bg-gray-200 px-4 py-2 rounded-lg grow">
        <section class="flex items-center justify-between gap-4">
          <p class="text-gray-300 text-base font-normal">{{ props.chat.user }}</p>
          <el-button class="btn" text @click="toggleOptions">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M3.33333 10.8332C3.79357 10.8332 4.16667 10.4601 4.16667 9.99984C4.16667 9.5396 3.79357 9.1665 3.33333 9.1665C2.8731 9.1665 2.5 9.5396 2.5 9.99984C2.5 10.4601 2.8731 10.8332 3.33333 10.8332Z"
                  stroke="white" stroke-width="2"/>
              <path
                  d="M9.99999 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 9.99999 9.1665C9.53975 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53975 10.8332 9.99999 10.8332Z"
                  stroke="white" stroke-width="2"/>
              <path
                  d="M16.6667 10.8332C17.1269 10.8332 17.5 10.4601 17.5 9.99984C17.5 9.5396 17.1269 9.1665 16.6667 9.1665C16.2064 9.1665 15.8333 9.5396 15.8333 9.99984C15.8333 10.4601 16.2064 10.8332 16.6667 10.8332Z"
                  stroke="white" stroke-width="2"/>
            </svg>
          </el-button>
        </section>
        <p class="mt-1 text-black text-opacity-80 text-base font-normal">{{ props.chat.text }}</p>
        <p class="text-right text-gray-700 text-xs font-normal">{{ props.chat.time }}</p>
        <template v-if="showOptions">
          <el-collapse v-model="showOptions">
            <el-collapse-item title="true" name="1">
              <hr class="my-2 border border-gray-400 border-opacity-30">
              <section class="flex items-center justify-between cursor-pointer" @click="selectChatForReply">
                <h3 class="text-sm font-normal text-gray-500">Reply</h3>
                <section class="text-gray-300">
                  <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.83333 4.06047V0.382741L0 6.02975L5.83333 11.5771V8.21511C13.1458 8.21511 15 0.000366211 15 0.000366211C12.93 3.70426 9.8025 4.06047 5.83333 4.06047Z"
                        fill="currentColor"/>
                  </svg>
                </section>
              </section>
              <hr class="my-2 border border-gray-400 border-opacity-30">
              <section class="flex items-center justify-between">
                <h3 class="text-sm font-normal text-gray-500">Forward</h3>
                <section class="text-gray-300">
                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.16667 8.30578V11.9835L15 6.33649L9.16667 0.789062V4.15112C1.85417 4.15112 0 12.3659 0 12.3659C2.07 8.66199 5.1975 8.30578 9.16667 8.30578Z"
                        fill="currentColor"/>
                  </svg>
                </section>
              </section>
              <hr class="my-2 border border-gray-400 border-opacity-30">
              <section class="flex items-center justify-between">
                <h3 class="text-sm font-normal text-gray-500">Delete</h3>
                <section class="text-gray-300">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.8 3.10441H11.4V1.67434C11.4 1.04331 10.8619 0.530273 10.2 0.530273H4.2C3.53812 0.530273 3 1.04331 3 1.67434V3.10441H0.6C0.268125 3.10441 0 3.36004 0 3.67645V4.24848C0 4.32713 0.0675 4.39148 0.15 4.39148H1.2825L1.74562 13.7406C1.77562 14.3502 2.30437 14.8311 2.94375 14.8311H11.4562C12.0975 14.8311 12.6244 14.352 12.6544 13.7406L13.1175 4.39148H14.25C14.3325 4.39148 14.4 4.32713 14.4 4.24848V3.67645C14.4 3.36004 14.1319 3.10441 13.8 3.10441ZM10.05 3.10441H4.35V1.81734H10.05V3.10441Z"
                        fill="currentColor"/>
                  </svg>
                </section>
              </section>
            </el-collapse-item>
          </el-collapse>
        </template>
      </section>
    </template>
  </section>
</template>

<script setup>
const props = defineProps({
  chat: {
    default: ''
  }
})
const emits = defineEmits()
const showOptions = ref(0)

// methods
const toggleOptions = () => {
  showOptions.value = showOptions.value == '0' ? '1' : '0'
}
const selectChatForReply = (index) => {
  showOptions.value = '0'
  emits('action', {
    action: 'reply',
    item: props.chat
  })
}
</script>

<style scoped>

</style>