<template>
  <div class="header pt-6 pb-2 border-b-[1px] sticky top-0 z-40 bg-white">
    <section class="flex justify-between">
      <div class="left">
        <div
          class="text-lg font-bold flex gap-2 items-center"
          @click="router.go(-1)"
        >
          <span class="relative bottom-[2px]"
            ><Icon name="arrow-angle-left"
          /></span>
          <div class="flex items-center gap-2">
            <span
              class="h-[60px] w-[60px] rounded-full border-2 flex items-center justify-center border-dashed border-primary-500"
              ><Icon name="hashtag"
            /></span>
            <div>
              <h5 class="text-gray-700 text-lg font-medium">
                {{ hashtag.title }}
              </h5>
              <p class="text-gray-500 text-xs font-normal">
                {{ hashtag.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <button
      type="button"
      class="rounded-lg w-full text-gray-700 mt-2 text-lg py-2"
      :class="[hashtag.isFollowed ? 'bg-gray-300' : 'bg-primary-500']"
      @click="hashtag.isFollowed = !hashtag.isFollowed"
    >
      {{ hashtag.isFollowed ? 'Followed' : 'Follow' }}
    </button>
  </div>
  <template v-if="hashtag.isFollowed">
    <SuggestList class="mt-4" />
  </template>
</template>
<script setup>
import Icon from "@/components/TheIcon/Icon.vue";
import SuggestList from "@/components/TheHashtag/SuggestList";
import { ref } from "vue";
import { useRouter } from "vue-router";

//state

const hashtag = useHashtag();
const router = useRouter();
</script>