<template>
  <div v-if="state.length">
    <PostWrapperHeader @state="stateCalled" />
    <div class="flex gap-2 h-[275px] mt-2">
      <div class="w-3/5">
        <img
          class="object-cover h-full"
          :src="state[0].src"
          alt=""
          v-if="state[0]"
          @click="showPost"
          :id="state[0].id"
        />
      </div>
      <div class="w-2/5 flex flex-col gap-2 h-full">
        <div>
          <img
            class="w-full h-[134px] object-cover"
            :src="state[1].src"
            :id="state[1].id"
            v-if="state[1]"
            @click="showPost"
            alt=""
          />
        </div>
        <div>
          <img
            class="w-full h-[134px] object-cover"
            :src="state[2].src"
            :id="state[2].id"
            v-if="state[2]"
            @click="showPost"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="w-full mt-2">
      <img
        class="object-cover h-[200px] mx-0 w-full"
        :src="state[3].src"
        :id="state[3].id"
        v-if="state[3]"
        @click="showPost"
        alt=""
      />
    </div>
    <div class="w-full flex gap-2 mt-2">
      <div class="w-1/3">
        <img
          class="w-full object-cover h-[134px] cover"
          :src="state[4].src"
          :id="state[4].id"
          v-if="state[4]"
          @click="showPost"
          alt=""
        />
      </div>
      <div class="w-1/3">
        <img
          class="w-full object-cover h-[134px] cover"
          :src="state[5].src"
          :id="state[5].id"
          v-if="state[5]"
          @click="showPost"
          alt=""
        />
      </div>
      <div class="w-1/3">
        <img
          class="w-full object-cover h-[134px] cover"
          :src="state[6].src"
          :id="state[6].id"
          v-if="state[6]"
          @click="showPost"
          alt=""
        />
      </div>
    </div>
    <div class="flex gap-2 h-[275px] mt-2 mb-4">
      <div class="w-2/5 flex flex-col gap-2 h-full">
        <img
          class="w-full h-[134px] object-cover"
          :src="state[7].src"
          :id="state[7].id"
          @click="showPost"
          alt=""
          v-if="state[7]"
        />
        <img
          class="w-full h-[134px] object-cover"
          :src="state[8].src"
          :id="state[8].id"
          alt=""
          @click="showPost"
          v-if="state[8]"
        />
      </div>
      <div class="w-3/5">
        <img
          class="object-cover h-full"
          :src="state[9].src"
          :id="state[9].id"
          @click="showPost"
          alt=""
          v-if="state[9]"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import PostWrapperHeader from "@/components/TheExplore/PostWrapperHeader.vue";

import { ref } from "vue";

//state

const state = ref([]);
const router = useRouter();
const showExploreMode = useExploreType();
const showExploreModeType = useExploreModeType();
const exploreList = useExploreList();
const stateCalled = (e) => {
  state.value = e;
};
const showPost = (e) => {
  let id = e.target.id;
  router.push({ path: `/explore/${id}` });
};

onMounted(() => {
  state.value = exploreList.value.filter(
    (item) =>
      item.tags.includes(showExploreMode.value) ||
      item.tags.includes(showExploreModeType.value)
  );
});
</script>
