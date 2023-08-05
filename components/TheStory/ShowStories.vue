<template>
  <span v-if="props.isTileView">
    <div class="flex gap-2 max-h-[275px] mt-2">
      <div class="w-3/5">
        <img class="bg-cover h-full" :src="acc.list[0]" alt="" />
      </div>
      <div class="w-2/5 flex flex-col gap-2 max-h-full">
        <div>
          <img class="w-full max-h-[134px] cover" :src="acc.list[1]" alt="" />
        </div>
        <div>
          <img class="w-full max-h-[134px] cover" :src="acc.list[2]" alt="" />
        </div>
      </div>
    </div>
    <div class="w-full max-h-[200px] mt-2">
      <img
        class="object-cover max-h-[200px] mx-0 w-full"
        :src="acc.list[3]"
        alt=""
      />
    </div>
    <div class="w-full flex gap-2 mt-4">
      <div class="w-1/3">
        <img class="w-full max-h-[134px] cover" :src="acc.list[4]" alt="" />
      </div>
      <div class="w-1/3">
        <img class="w-full max-h-[134px] cover" :src="acc.list[5]" alt="" />
      </div>
      <div class="w-1/3">
        <img class="w-full max-h-[134px] cover" :src="acc.list[6]" alt="" />
      </div>
    </div>
    <div class="flex gap-2 max-h-[275px] mt-2">
      <div class="w-2/5 flex flex-col gap-2 max-h-full">
        <img
          class="w-full max-h-[134px] h-[134px] object-cover"
          :src="acc.list[7]"
          alt=""
        />
      </div>
      <div class="w-3/5">
        <img
          class="object-cover h-[134px] w-full max-h-[134px]"
          :src="acc.list[8]"
          alt=""
        />
      </div>
    </div>
  </span>
  <span v-if="!props.isTileView">
    <img class="bg-contain w-full mt-2 h-full" :src="acc.list[0]" alt="" />
    <img class="bg-contain w-full mt-2 h-full" :src="acc.list[1]" alt="" />
    <img class="bg-contain w-full mt-2 h-full" :src="acc.list[2]" alt="" />
    <img class="bg-contain w-full mt-2 h-full" :src="acc.list[3]" alt="" />
    <img class="bg-contain w-full mt-2 h-full" :src="acc.list[4]" alt="" />
    <img class="bg-contain w-full mt-2 h-full" :src="acc.list[5]" alt="" />
    <img class="bg-contain w-full mt-2 h-full" :src="acc.list[6]" alt="" />
    <img class="bg-contain w-full mt-2 h-full" :src="acc.list[7]" alt="" />
    <img class="bg-contain w-full mt-2 h-full" :src="acc.list[8]" alt="" />
  </span>
</template>

<script setup>
import hashtag1 from "@/assets/images/hashtags/hashtag-1.png";
import hashtag2 from "@/assets/images/hashtags/hashtag-2.png";
import hashtag3 from "@/assets/images/hashtags/hashtag-3.png";
import hashtag4 from "@/assets/images/hashtags/hashtag-4.png";
import hashtag5 from "@/assets/images/hashtags/hashtag-5.png";
import hashtag6 from "@/assets/images/hashtags/hashtag-6.png";
import hashtag7 from "@/assets/images/hashtags/hashtag-7.png";
import hashtag8 from "@/assets/images/hashtags/hashtag-8.png";
import hashtag9 from "@/assets/images/hashtags/hashtag-9.png";

const props = defineProps({
  isTileView: {
    default: true,
  },
});

//state

const stories = useStoryList();
const account = useAccount();
const acc = stories.value.filter((item) => account.value.id == item.userId)[0];
</script>