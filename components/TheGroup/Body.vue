<template>
  <section>
    <section class="grid grid-cols-1 gap-5 px-3 chat-body">
      <template v-for="(chat, index) in chats">
        <template v-if="chat.date">
          <section class="flex justify-center">
            <section class="px-6 py-2 rounded-full"
                     :class="[chat.date == 'Today' ? 'bg-primary-300 bg-opacity-30' : '']">
              <p class="text-gray-500 text-sm font-normal">{{ chat.date }}</p>
            </section>
          </section>
        </template>
        <template v-else-if="chat.text">
          <section class="w-10/12" :class="chat.isSender ? 'ml-auto' : ''">
            <Item :chat="chat" @action="actionCalled"/>
          </section>
        </template>
        <template v-else-if="chat.image">
          <section class="w-10/12" :class="chat.isSender ? 'ml-auto' : ''">
            <img :src="chat.image" alt="">
          </section>
        </template>
      </template>
      <section class="flex justify-center fixed bottom-1 left-0 w-full">
        <section
            class="add-chat max-w-[414px] bg-white left-auto right-auto w-full z-10 bottom-1 border rounded border-gray-700 py-2 px-2">
          <template v-if="selectedChatForReply">
            <section class="flex items-center gap-2 px-2 py-3 rounded-lg bg-gray-400 bg-opacity-50">
              <img :src="`/assets/images/avatars/${selectedChatForReply.avatar}`" class="w-10 h-10 rounded-full">
              <section>
                <p class="text-sm text-gray-300 font-normal">{{ selectedChatForReply.user }}</p>
                <h3 class="mt-1 text-sm text-gray-700 font-normal">{{ selectedChatForReply.text }}</h3>
              </section>
            </section>
          </template>
          <section class="flex items-center gap-2 relative">
            <section class="absolute left-2 bottom-full" v-if="showEmoji">
              <EmojiPicker :native="true" @select="addEmoji" />
            </section>
            <el-button text class="btn" @click="toggleShowEmoji">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.3" clip-path="url(#clip0_1_22771)">
                  <path
                      d="M8.5 17C10.7543 17 12.9163 16.1045 14.5104 14.5104C16.1045 12.9163 17 10.7543 17 8.5C17 6.24566 16.1045 4.08365 14.5104 2.48959C12.9163 0.895533 10.7543 0 8.5 0C6.24566 0 4.08365 0.895533 2.48959 2.48959C0.895533 4.08365 0 6.24566 0 8.5C0 10.7543 0.895533 12.9163 2.48959 14.5104C4.08365 16.1045 6.24566 17 8.5 17ZM7.4375 6.90625C7.4375 7.43856 7.26325 7.327 6.99656 7.15594C6.82125 7.04331 6.60663 6.90625 6.375 6.90625C6.14337 6.90625 5.92875 7.04437 5.75344 7.15594C5.48675 7.327 5.3125 7.4375 5.3125 6.90625C5.3125 6.0265 5.7885 5.3125 6.375 5.3125C6.9615 5.3125 7.4375 6.0265 7.4375 6.90625ZM13.1017 10.0938C13.1949 10.2553 13.244 10.4385 13.244 10.625C13.244 10.8115 13.1949 10.9947 13.1017 11.1562C12.6355 11.9641 11.9648 12.635 11.1569 13.1013C10.3491 13.5676 9.43274 13.8129 8.5 13.8125C7.56744 13.8127 6.65128 13.5673 5.84366 13.101C5.03605 12.6347 4.36547 11.964 3.89937 11.1562C3.80617 10.9948 3.75707 10.8117 3.75703 10.6253C3.75698 10.4389 3.80598 10.2557 3.8991 10.0942C3.99223 9.93273 4.1262 9.79859 4.28757 9.70526C4.44894 9.61192 4.63202 9.56269 4.81844 9.5625H12.1816C12.3681 9.5625 12.5513 9.6116 12.7128 9.70485C12.8743 9.79811 13.0084 9.93223 13.1017 10.0938ZM11.2466 7.15594C11.0712 7.04331 10.8566 6.90625 10.625 6.90625C10.3934 6.90625 10.1788 7.04437 10.0034 7.15594C9.73675 7.327 9.5625 7.4375 9.5625 6.90625C9.5625 6.0265 10.0385 5.3125 10.625 5.3125C11.2115 5.3125 11.6875 6.0265 11.6875 6.90625C11.6875 7.43856 11.5133 7.327 11.2466 7.15594Z"
                      fill="black"/>
                </g>
                <defs>
                  <clipPath id="clip0_1_22771">
                    <rect width="17" height="17" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </el-button>
            <el-input class="grow" v-model="newChat" @keydown.enter="addChat"/>
            <el-button text class="btn" @click="getStream">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.3">
                  <path
                      d="M11.2702 13.7368C12.7554 13.7368 13.9454 12.5379 13.9454 11.0526L13.9544 5.68421C13.9544 4.19895 12.7554 3 11.2702 3C9.78489 3 8.58595 4.19895 8.58595 5.68421V11.0526C8.58595 12.5379 9.78489 13.7368 11.2702 13.7368ZM16.7102 11.0526C16.3344 11.0526 16.0212 11.3211 15.9675 11.6879C15.6365 14.0232 13.5338 15.6158 11.2702 15.6158C9.00647 15.6158 6.90384 14.0321 6.57279 11.6879C6.54523 11.5108 6.45521 11.3494 6.319 11.2329C6.1828 11.1164 6.0094 11.0524 5.83016 11.0526C5.36489 11.0526 5.007 11.4642 5.06963 11.9205C5.48121 14.5779 7.71805 16.6626 10.3754 17.0653V19.1053C10.3754 19.5974 10.7781 20 11.2702 20C11.7623 20 12.1649 19.5974 12.1649 19.1053V17.0653C14.8133 16.6805 17.0591 14.5779 17.4707 11.9205C17.4851 11.8122 17.4762 11.7021 17.4446 11.5975C17.4129 11.4929 17.3593 11.3962 17.2873 11.3141C17.2153 11.2319 17.1265 11.166 17.027 11.121C16.9275 11.0759 16.8194 11.0526 16.7102 11.0526Z"
                      fill="black"/>
                </g>
              </svg>
            </el-button>
            <el-button text class="btn">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.1719 8.4375H11.25C10.8024 8.4375 10.3732 8.25971 10.0568 7.94324C9.74029 7.62678 9.5625 7.19755 9.5625 6.75V1.82812C9.5625 1.79083 9.54768 1.75506 9.52131 1.72869C9.49494 1.70232 9.45917 1.6875 9.42188 1.6875H7.5498C7.48415 1.56591 7.40767 1.45048 7.32129 1.34262C6.91594 0.839531 6.31371 0.5625 5.625 0.5625C4.30031 0.5625 3.375 1.60348 3.375 3.09375V8.15625C3.375 9.03516 4.09008 9.5625 4.78125 9.5625C4.96648 9.56452 5.15026 9.52953 5.32178 9.45958C5.49331 9.38962 5.64914 9.28612 5.78013 9.15513C5.91112 9.02414 6.01463 8.86831 6.08458 8.69678C6.15453 8.52526 6.18952 8.34148 6.1875 8.15625V2.8125C6.1875 2.66332 6.12824 2.52024 6.02275 2.41475C5.91726 2.30926 5.77418 2.25 5.625 2.25C5.47582 2.25 5.33274 2.30926 5.22725 2.41475C5.12176 2.52024 5.0625 2.66332 5.0625 2.8125V8.15625C5.06372 8.19351 5.05728 8.23063 5.04358 8.26531C5.02988 8.29999 5.00921 8.33148 4.98284 8.35784C4.95648 8.38421 4.92499 8.40488 4.89031 8.41858C4.85563 8.43228 4.81851 8.43872 4.78125 8.4375C4.70285 8.4375 4.5 8.38688 4.5 8.15625V3.09375C4.5 2.41383 4.79566 1.6875 5.625 1.6875C6.66879 1.6875 6.75 2.74746 6.75 3.07195V7.94988C6.75 8.56336 6.5577 9.11812 6.20824 9.51293C5.85352 9.91406 5.36027 10.125 4.78125 10.125C4.20223 10.125 3.70898 9.91406 3.35426 9.51293C3.0048 9.11812 2.8125 8.56336 2.8125 7.94988V5.0625C2.8125 4.91332 2.75324 4.77024 2.64775 4.66475C2.54226 4.55926 2.39918 4.5 2.25 4.5C2.10082 4.5 1.95774 4.55926 1.85225 4.66475C1.74676 4.77024 1.6875 4.91332 1.6875 5.0625V7.94988C1.6875 9.76078 2.85434 11.1009 4.5 11.238V15.1875C4.5 15.7842 4.73705 16.3565 5.15901 16.7785C5.58097 17.2004 6.15326 17.4375 6.75 17.4375H14.0625C14.6592 17.4375 15.2315 17.2004 15.6535 16.7785C16.0754 16.3565 16.3125 15.7842 16.3125 15.1875V8.57812C16.3125 8.54083 16.2977 8.50506 16.2713 8.47869C16.2449 8.45232 16.2092 8.4375 16.1719 8.4375Z"
                    fill="black" fill-opacity="0.3"/>
                <path
                    d="M11.25 7.31236H15.8136C15.8275 7.3123 15.841 7.30815 15.8525 7.30042C15.864 7.29269 15.873 7.28173 15.8783 7.26892C15.8836 7.2561 15.885 7.24201 15.8823 7.22841C15.8796 7.21481 15.873 7.20231 15.8632 7.19248L10.8074 2.13666C10.7976 2.12688 10.785 2.12023 10.7714 2.11755C10.7578 2.11486 10.7438 2.11625 10.7309 2.12155C10.7181 2.12684 10.7072 2.13581 10.6994 2.14732C10.6917 2.15883 10.6876 2.17236 10.6875 2.18623V6.74986C10.6875 6.89905 10.7468 7.04212 10.8523 7.14761C10.9577 7.2531 11.1008 7.31236 11.25 7.31236Z"
                    fill="black" fill-opacity="0.3"/>
              </svg>
            </el-button>
            <el-button text class="btn" @click="accessVideo">
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11.3753 7.69321C11.3753 8.41359 11.0899 9.10445 10.582 9.61383C10.0741 10.1232 9.38524 10.4094 8.66695 10.4094C7.94865 10.4094 7.25978 10.1232 6.75187 9.61383C6.24396 9.10445 5.95862 8.41359 5.95862 7.69321C5.95862 6.97284 6.24396 6.28198 6.75187 5.7726C7.25978 5.26322 7.94865 4.97705 8.66695 4.97705C9.38524 4.97705 10.0741 5.26322 10.582 5.7726C11.0899 6.28198 11.3753 6.97284 11.3753 7.69321Z"
                    fill="black" fill-opacity="0.3"/>
                <path
                    d="M2.16667 2.80428C1.59203 2.80428 1.04093 3.03321 0.634602 3.44072C0.228273 3.84822 0 4.40091 0 4.97721L0 11.496C0 12.0723 0.228273 12.625 0.634602 13.0325C1.04093 13.44 1.59203 13.6689 2.16667 13.6689H15.1667C15.7413 13.6689 16.2924 13.44 16.6987 13.0325C17.1051 12.625 17.3333 12.0723 17.3333 11.496V4.97721C17.3333 4.40091 17.1051 3.84822 16.6987 3.44072C16.2924 3.03321 15.7413 2.80428 15.1667 2.80428H13.897C13.3224 2.80416 12.7714 2.57514 12.3652 2.16761L11.4682 1.26802C11.0619 0.860485 10.5109 0.631471 9.93634 0.631348H7.397C6.82242 0.631471 6.2714 0.860485 5.86517 1.26802L4.96817 2.16761C4.56193 2.57514 4.01092 2.80416 3.43634 2.80428H2.16667ZM2.70833 4.97721C2.56468 4.97721 2.4269 4.91998 2.32532 4.8181C2.22374 4.71622 2.16667 4.57805 2.16667 4.43398C2.16667 4.2899 2.22374 4.15173 2.32532 4.04985C2.4269 3.94798 2.56468 3.89074 2.70833 3.89074C2.85199 3.89074 2.98977 3.94798 3.09135 4.04985C3.19293 4.15173 3.25 4.2899 3.25 4.43398C3.25 4.57805 3.19293 4.71622 3.09135 4.8181C2.98977 4.91998 2.85199 4.97721 2.70833 4.97721ZM12.4583 7.69337C12.4583 8.70189 12.0589 9.66911 11.3478 10.3822C10.6367 11.0954 9.67229 11.496 8.66667 11.496C7.66106 11.496 6.69663 11.0954 5.98556 10.3822C5.27448 9.66911 4.875 8.70189 4.875 7.69337C4.875 6.68485 5.27448 5.71764 5.98556 5.00451C6.69663 4.29138 7.66106 3.89074 8.66667 3.89074C9.67229 3.89074 10.6367 4.29138 11.3478 5.00451C12.0589 5.71764 12.4583 6.68485 12.4583 7.69337Z"
                    fill="black" fill-opacity="0.3"/>
              </svg>
            </el-button>
          </section>
        </section>
      </section>
    </section>
  </section>
</template>

<script setup>
import Item from './ChatItem'

const router = useRouter()
const chats = ref([
  {date: 'Today'},
  {id: '1', isSender: true, text: 'Hi Em! Where are you now?', time: '11:37 AM'},
  {id: '2', isSender: false, user: 'Emma Watson', avatar: 'avatar1.png', text: 'I\'m here.', time: '11:37 AM'},
  {
    id: '3', isSender: false,
    user: 'Emma Watson',
    avatar: 'avatar1.png',
    image: '/assets/images/profile/map.png',
    time: '11:37 AM'
  },
  {id: '4', isSender: false, user: 'Emma Watson', avatar: 'avatar2.png', text: 'Ok, send videooos', time: '11:37 AM'},
])
const newChat = ref('')
const selectedChatForReply = ref(false)
const showEmoji = ref(false)
// methods
const addChat = () => {
  if (selectedChatForReply.value) {
    chats.value.push({
      isSender: true,
      time: new Date().toLocaleTimeString(),
      text: newChat.value,
      reply: selectedChatForReply.value
    })
  }
  else
  chats.value.push({
    isSender: true,
    time: new Date().toLocaleTimeString(),
    text: newChat.value,
  })
  newChat.value = ''
  selectedChatForReply.value = false
}
const actionCalled = (data) => {
  if (data.action == 'reply') {
    if (data.item.isSender == false) {
      selectedChatForReply.value = data.item
    }
  }
}
const getStream = () => {
  navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((stream) => {
        window.localStream = stream; // A
        window.localAudio.srcObject = stream; // B
        window.localAudio.autoplay = true; // C
      })
      .catch((err) => {
        console.error(`you got an error: ${err}`);
      });
}
const accessVideo = () => {
  var facingMode = "user"
  var constraints = {
    audio: false,
    video: {
      facingMode: facingMode
    }
  }
  navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        window.localStream = stream; // A
        window.localAudio.srcObject = stream; // B
        window.localAudio.autoplay = true; // C
      })
      .catch((err) => {
        console.error(`you got an error: ${err}`);
      });
}
const toggleShowEmoji = () => {
  showEmoji.value = !showEmoji.value
}
const addEmoji = (e) => {
  newChat.value += e.i
}

</script>

<style scoped>

</style>