<template>
  <div class="header pt-6 pb-2 border-b-[1px] sticky top-0 z-40 bg-white">
    <section class="flex justify-between">
      <div class="w-full">
        <div
          class="text-lg font-bold flex gap-2 items-center justify-between w-full"
        >
          <section class="flex gap-2 items-center">
            <span
              class="relative bottom-[2px]"
              @click="
                router.push('/account');
                isMutualFriendsVisible = false;
              "
              ><Icon name="arrow-angle-left"
            /></span>
            <div class="flex items-center gap-2">
              <img
                :src="account.avatar"
                class="object-cover h-[60px] w-[60px] rounded-full border-2 p-[1px]"
                :class="account.isStoryVisited ? '' : ' border-primary-300'"
              />
              <div>
                <h5 class="text-gray-700 text-lg font-medium">
                  {{ account.title }}
                </h5>
                <p class="text-gray-500 text-xs font-normal">
                  {{ account.description.slice(0, 15) }}
                </p>
              </div>
            </div>
          </section>
          <section class="flex gap-2 items-center">
            <span><Icon name="send" /></span>
            <span><Icon name="dots" /></span>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

//state

const account = useAccount();
const router = useRouter();
const isMutualFriendsVisible = useMutualFriends();
</script>