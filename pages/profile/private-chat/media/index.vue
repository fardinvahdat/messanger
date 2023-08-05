<template>
  <section>
    <Header />
    <section class="px-4">
      <Tabs v-model:activeTab="activeTab" />
      <hr class="my-2 border border-gray-300 border-opacity-10" />
      <template v-if="activeTab == 'Image'">
        <ImageTab />
      </template>
      <template v-if="activeTab == 'Video'">
        <VideoTab />
      </template>
      <template v-else-if="activeTab == 'Music'">
        <MusicTab />
      </template>
      <template v-else-if="activeTab == 'Audio'">
        <AudioTab />
      </template>
    </section>
  </section>
</template>

<script setup>
import Header from "@/components/TheProfile/Chat/Header.vue";
import Tabs from "@/components/TheProfile/Chat/Media/Tabs.vue";
import ImageTab from "@/components/TheProfile/Chat/Media/ImageTab.vue";
import VideoTab from "@/components/TheProfile/Chat/Media/VideoTab.vue";
import MusicTab from "@/components/TheProfile/Chat/Media/MusicTab.vue";
import AudioTab from "@/components/TheProfile/Chat/Media/AudioTab.vue";
const activeTab = ref("Image");
</script>

<style scoped></style>
