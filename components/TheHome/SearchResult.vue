<template>
  <div class="flex flex-col gap-4 mt-2">
    <div
      class="result flex gap-2 items-center"
      v-for="(item, index) in state"
      :key="index"
      @click="showMore(item)"
    >
      <div class="avatar">
        <template v-if="mode === 'hashtag'"
          ><span
            class="h-[60px] w-[60px] rounded-full border-2 flex items-center justify-center border-dashed border-primary-500"
            ><Icon name="hashtag"
          /></span>
        </template>
        <template v-if="mode === 'places'"
          ><span
            class="h-[60px] w-[60px] rounded-full border-2 flex items-center justify-center border-dashed border-primary-500"
            ><Icon name="location"
          /></span>
        </template>
        <template v-if="mode === 'accounts'"
          ><img
            :src="item.avatar"
            class="object-cover h-[60px] w-[60px] rounded-full border-2 p-[1px]"
            :class="item.isStoryVisited ? '' : ' border-primary-300'"
          />
        </template>
      </div>
      <div class="info">
        <h5 class="text-gray-700 text-lg font-medium">{{ item.title }}</h5>
        <p class="text-gray-500 text-xs font-normal">{{ item.description }}</p>
      </div>
    </div>
  </div>

  <template v-if="mode === 'tags'">
    <template v-if="tagShowType == 'col'">
    <HashtagList @change="showTag"/>
    </template>
    <template v-else>
    <TagShowRow :current="currentTag"/>
    </template>
  </template>
</template>

<script setup>
import Icon from "@/components/TheIcon/Icon.vue";
import HashtagList from "@/components/TheHashtag/HashtagList.vue";
import TagShowRow from "@/components/TheHome/TagShowRow.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

//state

const props = defineProps({
  state: {
    default: [],
  },
  mode: {
    default: "",
  },
});
const { state, mode } = props;
const place = usePlace();
const account = useAccount();
const hashtag = useHashtag();
const router = useRouter();
const tagShowType = ref('col')
const currentTag = ref('')

//methods

const showMore = (item) => {
  if (mode === "hashtag") {
    hashtag.value = item;
    router.push("/hashtag");
  } else if (mode === "places") {
    place.value = item.title;
    router.push("/place");
  } else if (mode === "accounts") {
    console.log(item);
    account.value = item;
    router.push("/account");
  }
};
const showTag = (e) => {
  tagShowType.value = 'row'
  currentTag.value = e
}
</script>