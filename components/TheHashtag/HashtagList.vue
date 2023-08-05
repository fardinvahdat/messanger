<template>
  <section @click="openImage">
    <div class="flex gap-2 max-h-[275px] mt-2">
      <div class="w-3/5">
        <img
          class="object-cover h-full w-full"
          :src="posts[0].image"
          :value="posts[0].image"
          alt=""
        />
      </div>
      <div class="w-2/5 flex flex-col gap-2 max-h-full">
        <div>
          <img
            class="h-full w-full max-h-[134px] object-cover"
            :src="posts[2].image"
            :value="posts[2].image"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-full w-full max-h-[134px] object-cover"
            :src="posts[3].image"
            :value="posts[3].image"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="h-full w-full mt-2">
      <img
        class="object-cover mx-0 h-full w-full"
        :src="posts[4].image"
        :value="posts[4].image"
        alt=""
      />
    </div>
    <div class="h-full w-full flex gap-2 mt-2">
      <div class="w-1/3">
        <img
          class="h-full w-full max-h-[134px] object-cover"
          :src="posts[5].image"
          :value="posts[5].image"
          alt=""
        />
      </div>
      <div class="w-1/3">
        <img
          class="h-full w-full max-h-[134px] object-cover"
          :src="posts[6].image"
          :value="posts[6].image"
          alt=""
        />
      </div>
      <div class="w-1/3">
        <img
          class="h-full w-full max-h-[134px] object-cover"
          :src="posts[7].image"
          :value="posts[7].image"
          alt=""
        />
      </div>
    </div>
    <div class="flex gap-2 max-h-[275px] mt-2">
      <div class="w-2/5">
        <img
          class="h-full w-full object-cover"
          :src="posts[8].image"
          :value="posts[8].image"
          alt=""
        />
      </div>
      <div class="w-3/5">
        <img
          class="object-cover h-full w-full"
          :src="posts[9].image"
          :value="posts[9].image"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const emits = defineEmits();
const posts = usePosts();
const openImage = (e) => {
  if (e.target.src) {
    let element = e.target;
    let src = element.getAttribute("value");
    let post = posts.value.find((item) => item.image == src);
    emits("change", post.id);
  }
};
</script>
