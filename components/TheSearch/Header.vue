<template>
  <div class="header pt-6 pb-2 border-b-[1px] sticky top-0 z-40 bg-white">
    <section>
      <section class="flex justify-between">
        <div class="left">
          <h3
            class="text-lg font-bold flex gap-2 items-center"
            @click="makeIsSearchModeFalse"
          >
            <span class="relative bottom-[2px]"
              ><Icon name="arrow-angle-left"
            /></span>
            Search
          </h3>
        </div>
        <div class="right">
          <span @click="isFilterModeToggler">
            <Icon name="filter" />
          </span>
        </div>
      </section>
      <el-input v-model="search" class="w-full mt-2 h-[44px]">
        <template #suffix><Icon name="arrow-angle-right-blue" /></template>
        <template #prefix><Icon name="search" /></template>
      </el-input>
      <div class="tags">
        <el-radio-group
          class="gap-2 justify-between flex-nowrap overflow-x-scroll max-w-full scrollbar-hide scroll-m-0"
          v-model="showResultMode"
        >
          <el-radio-button
            :class="showResultMode === 'Account' ? 'active' : ''"
            label="Account"
          />
          <el-radio-button
            :class="showResultMode === 'Top' ? 'active' : ''"
            label="Top"
          />
          <el-radio-button
            :class="showResultMode === 'Tags' ? 'active' : ''"
            label="Tags"
          />
          <el-radio-button
            :class="showResultMode === 'Hashtags' ? 'active' : ''"
            label="Hashtags"
          />
          <el-radio-button
            :class="showResultMode === 'Places' ? 'active' : ''"
            label="Places"
          />
          <el-radio-button
              :class="showResultMode === 'Posts' ? 'active' : ''"
              label="Posts"
          />
          <el-radio-button
              :class="showResultMode === 'Skills' ? 'active' : ''"
              label="Skills"
          />
          <el-radio-button
              :class="showResultMode === 'Questions' ? 'active' : ''"
              label="Questions"
          />
        </el-radio-group>
      </div>
    </section>
  </div>
</template>
<script setup>
import Icon from "@/components/TheIcon/Icon.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

//state

const showResultMode = useSearchType();
const showExploreMode = useExploreType();
const router = useRouter();
const search = ref('')

//methods

const makeIsSearchModeFalse = () => {
  router.push("/home");
};
const isFilterModeToggler = () => {
  router.push("/filter");
};
</script>