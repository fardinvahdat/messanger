<template>
  <section class="grid grid-cols-1 gap-2">
    <Header :has-back-emit="true" @back="router.go(-1)" />
    <section class="flex justify-between gap-2 flex-col">
      <video
        class="h-[200px] w-full"
        controls
        src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
        id="1"
      >
        Sorry, your browser doesn't support embedded videos, but don't worry,
        you can
        <a href="https://archive.org/details/BigBuckBunny_124">download it</a>
        and watch it with your favorite video player!
      </video>
      <video
        class="h-[200px] w-full"
        id="2"
        controls
        poster="https://media.geeksforgeeks.org/wp-content/uploads/20190627130930/a218.png"
      >
        <source
          src="https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4"
          type="video/mp4"
        />
        <source
          src="https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.ogg"
          type="video/ogg"
        />
      </video>
      <video
        class="h-[200px] w-full"
        controls
        poster="https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg"
        id="3"
      >
        <source
          src="https://archive.org/download/ElephantsDream/ed_hd.ogv"
          type="video/ogg"
        />
        <source
          src="https://archive.org/download/ElephantsDream/ed_hd.avi"
          type="video/avi"
        />
        <source
          src="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
          type="video/mp4"
        />

        Sorry, your browser doesn't support embedded videos, but don't worry,
        you can
        <a href="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4">
          download the MP4
        </a>
        and watch it with your favorite video player!
      </video>
      <video
        class="h-[200px] w-full"
        controls
        src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
        id="4"
      >
        Sorry, your browser doesn't support embedded videos, but don't worry,
        you can
        <a href="https://archive.org/details/BigBuckBunny_124">download it</a>
        and watch it with your favorite video player!
      </video>
    </section>
  </section>
</template>

<script setup>
import Header from "@/components/Chat/Header.vue";
const router = useRouter();
</script>

<style scoped></style>
