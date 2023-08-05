<template>
  <section class="add-skill border-[1px] min-h-screen px-3 bg-white">
    <div class="mb-[15px]">
      <iframe
        class="w-full rounded-2xl"
        height="315"
        :src="state.video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <div class="form-item">
      <label
        class="flex gap-2 items-center text-gray-500 text-base font-normal mb-1 ml-2"
        ><Icon name="caption-writing" /> Caption</label
      >
      <el-input v-model="state.caption" />
    </div>
    <div class="form-item">
      <label
        class="flex gap-2 items-center text-gray-500 text-base font-normal mb-1 ml-2"
        ><Icon name="location-gray-bg" /> Location</label
      >

      <div
        style="
          max-width: 100%;
          list-style: none;
          transition: none;
          overflow: hidden;
          width: 500px;
          height: 132px;
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
    </div>
    <div class="form-item">
      <label
        class="flex gap-2 items-center text-gray-500 text-base font-normal mb-1 ml-2"
        ><Icon name="tag" /> Tags</label
      >
      <el-input v-model="state.tag" />
    </div>
    <div class="form-item">
      <label
        class="flex gap-2 items-center text-gray-500 text-base font-normal mb-1 ml-2"
        ><Icon name="more" /> More</label
      >
      <div class="w-full flex justify-between items-center mb-2">
        <label
          class="flex gap-2 items-center text-gray-500 text-base font-light ml-2"
          >Turn off commenting</label
        >
        <Checkbox v-model="state.isCommentingTurnOff" />
      </div>
      <div class="w-full flex justify-between items-center mb-2">
        <label
          class="flex gap-2 items-center text-gray-500 text-base font-light ml-2"
          >Hide like counts on this post</label
        >
        <Checkbox v-model="state.isLikeCountHide" />
      </div>
      <div class="w-full flex justify-between items-center">
        <label
          class="flex gap-2 items-center text-gray-500 text-base font-light ml-2"
          >Hide view counts on this post</label
        >
        <Checkbox v-model="state.isViewCountHide" />
      </div>
    </div>
    <button
      type="button"
      class="rounded-lg w-full text-gray-700 bg-primary-500 mt-2 text-lg py-2 text-center"
    >
      <span class="w-[33px] block m-auto">
        <Icon name="upload-cloud" />
      </span>
    </button>
  </section>
</template>
<script setup>
import Icon from "@/components/TheIcon/Icon.vue";
import Checkbox from "@/components/Base/Checkbox/Checkbox";

import { ref } from "vue";

//state

const state = ref({
  video: "https://www.youtube.com/embed/--DiygSPius?start=3",
  caption: "",
  tag: "",
  isCommentingTurnOff: false,
  isLikeCountHide: false,
  isViewCountHide: false,
});
</script>