<template>
  <section class="home filter border-[1px] min-h-screen px-3 bg-white">
    <Header />
    <label
      class="flex gap-2 items-center text-gray-500 text-base font-medium mt-2 mb-1 ml-2"
    >
      Gender</label
    >
    <el-radio-group v-model="state.gender" class="flex-col items-start w-full">
      <el-radio
        label="1"
        class="flex-row-reverse justify-between w-[150px]"
        size="large"
        >All</el-radio
      >
      <el-radio
        label="2"
        class="flex-row-reverse justify-between w-[150px]"
        size="large"
        >Male</el-radio
      >
      <el-radio
        label="3"
        class="flex-row-reverse justify-between w-[150px]"
        size="large"
        >Female</el-radio
      >
    </el-radio-group>
    <hr class="border-t border-gray-300 border-opacity-10" />
    <label
      class="flex gap-2 items-center text-gray-500 text-base font-medium mt-2 mb-1 ml-2"
    >
      Grade</label
    >
    <span class="pills">Grade {{ grade }}</span>
    <el-button class="border-0 w-8 h-8 text-white" :class="[grade > 1 ? 'bg-black' : 'bg-gray-300']" :disabled="grade <= 1" @click="grade--" type="info" :icon="Minus" circle />
    <el-button class="ml-1 text-white w-8 h-8" :class="[grade < 12 ? 'bg-black' : 'bg-gray-300']" type="info" :icon="Plus" circle :disabled="grade >= 12" @click="grade++" />
    <hr class="border-t border-gray-300 border-opacity-10 mt-3" />
    <label
      class="flex gap-2 items-center text-gray-500 text-base font-medium mt-2 mb-1 ml-2"
    >
      Age</label
    >
    <span class="pills">{{ age }}</span>
    <el-button class="border-0 w-8 h-8 text-white" :class="[age > 10 ? 'bg-black' : 'bg-gray-300']" :disabled="age <= 10" @click="age--" type="info" :icon="Minus" circle />
    <el-button class="ml-1 text-white w-8 h-8" :class="[age < 18 ? 'bg-black' : 'bg-gray-300']" type="info" :icon="Plus" circle :disabled="age >= 18" @click="age++" />
    <hr class="border-t border-gray-300 border-opacity-10 mt-3" />
    <label
      class="flex gap-2 items-center text-gray-500 text-base font-medium mt-2 mb-1 ml-2"
    >
      Location</label
    >
    <div
      style="
        max-width: 100%;
        list-style: none;
        transition: none;
        overflow: hidden;
        width: 500px;
        height: 185px;
      "
      class="rounded-xl"
    >
      <div
        id="display-google-map"
        style="height: 100%; width: 100%; max-width: 100%"
      >
        <iframe
          style="height: 100%; width: 100%; border: 0"
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?q=New+York,+NY,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>
      <a
        class="embed-ded-maphtml"
        href="https://www.bootstrapskins.com/themes"
        id="get-data-for-embed-map"
        >premium bootstrap themes</a
      >
    </div>

    <button
      type="button"
      class="rounded-lg w-full text-gray-700 bg-primary-500 mt-8 text-lg py-2 text-center"
    >
      Done
    </button>
  </section>
</template>
<script setup>
import Header from "@/components/TheFilter/Header.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { Plus, Minus } from "@element-plus/icons-vue";
import { ref } from "vue";

//state

const state = ref({
  gender: "",
});

// variables
const age = ref(17)
const grade = ref(1)
</script>