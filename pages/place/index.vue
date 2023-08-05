<template>
  <section class="place max-w-[414px] m-auto border-[1px] min-h-screen px-3">
    <Header class="z-10" />
    <Location :random-number="randomNumber"/>

    <div class="modes">
      <el-radio-group
        class="gap-2 justify-between flex-nowrap"
        v-model="sortType"
        @change="changeMode"
      >
        <el-radio-button
          :class="sortType === 'Top' ? 'active' : ''"
          label="Top"
        />
        <el-radio-button
          :class="sortType === 'Recent' ? 'active' : ''"
          label="Recent"
        />
      </el-radio-group>
    </div>
    <PlaceList @placeClicked="changeLocation" :key="counter" v-if="images.length" :state="images" />
  </section>
</template>

<script setup>
import Header from "@/components/ThePlace/Header.vue";
import Location from "@/components/ThePlace/Location.vue";
import PlaceList from "@/components/ThePlace/PlaceList.vue";

import { ref } from "vue";

//state

const sortType = ref("Top");
const placeList = usePlaceImageList();
const images = ref([]);
const counter = ref(0);
const randomNumber = ref('')

onMounted(() => {
  images.value = placeList.value.filter((item) =>
    item.tags.includes(sortType.value)
  );
});

//methods

const changeMode = () => {
  images.value = placeList.value.filter((item) =>
    item.tags.includes(sortType.value)
  );
  counter.value++;
};
const changeLocation = () => {
  randomNumber.value = Math.random()
}
</script>