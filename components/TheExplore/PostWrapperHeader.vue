<template>
  <header class="header">
    <div class="tags">
      <el-radio-group
        class="gap-2 justify-between flex-nowrap overflow-x-scroll max-w-full scrollbar-hide scroll-m-0"
        v-model="showExploreMode"
        @change="changeCategory"
      >
        <el-radio-button
          :class="showExploreMode === 'Posts' ? 'active' : ''"
          label="Posts"
        />
        <el-radio-button
          :class="showExploreMode === 'Skills' ? 'active' : ''"
          label="Skills"
        />
        <el-radio-button
          :class="showExploreMode === 'Questions' ? 'active' : ''"
          label="Questions"
        />
      </el-radio-group>
    </div>
    <el-divider class="my-2" />

    <div class="tags">
      <el-radio-group
        class="gap-2 justify-between flex-nowrap overflow-x-scroll max-w-full scrollbar-hide scroll-m-0"
        v-model="showExploreModeType"
        @change="changeCategory"
      >
        <el-radio-button
          :class="showExploreModeType === 'Music' ? 'active' : ''"
          label="Music"
        />
        <el-radio-button
          :class="showExploreModeType === 'Food' ? 'active' : ''"
          label="Food"
        />
        <el-radio-button
          :class="showExploreModeType === 'Fashion' ? 'active' : ''"
          label="Fashion"
        />
        <el-radio-button
          :class="showExploreModeType === 'life style' ? 'active' : ''"
          label="life style"
        />
        <el-radio-button
          :class="showExploreModeType === 'connections' ? 'active' : ''"
          label="connections"
        />
      </el-radio-group>
    </div>
    <el-divider class="my-2" />
  </header>
</template>

<script setup>
import Icon from "@/components/TheIcon/Icon.vue";
import { ref, computed } from "vue";

//state

const search = ref("");
const showExploreMode = useExploreType();
const showExploreModeType = useExploreModeType();
const exploreList = useExploreList();

//emits

const emit = defineEmits("state");

//methods

const changeCategory = (e) => {
  emit(
    "state",
    shuffle(
      exploreList.value.filter((item) => {
        return (
          item.tags.includes(showExploreMode.value) ||
          item.tags.includes(showExploreModeType.value)
        );
      })
    )
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

onMounted(() => {
});
</script>
