<template>
  <section>
    <h3 class="font-bold my-2 pb-4">Suggested</h3>
    <Swiper :slides-per-view="2">
      <SwiperSlide
          v-for="(item, index) in hashtags"
          :key="index"
          class="text-center my-2"
          @click="showHashtag(item)"
      >
        <div class="grid grid-cols-1 gap-2">
          <section class="flex justify-center">
            <span class="h-[60px] w-[60px] rounded-full border-2 flex items-center justify-center border-dashed border-primary-500">
              <Icon name="hashtag"/>
            </span>
          </section>
          <div>
            <h6 class="text-gray-700 text-base mb-0">{{ item.title }}</h6>
          </div>
        </div>
        <section class="flex items-center gap-3 mt-2 justify-center">
          <el-button class="btn text-xs px-3 py-2 border-none text-gray-700" @click.stop="item.isFollowed = !item.isFollowed"
                     :disabled="item.isFollowed"
                     :class="[item.isFollowed ? 'bg-gray-300' : 'bg-primary-500']">
            {{ item.isFollowed ? 'Followed' : 'Follow' }}
          </el-button>
          <el-button class="btn btn-primary text-white text-xs px-3 py-2 border-none text-gray-700" @click.stop="item.isFollowed = false" v-if="item.isFollowed">
            Unfollow
          </el-button>
        </section>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import Icon from "@/components/TheIcon/Icon.vue";
const router = useRouter()
const hashtags = useHashtags();
const hashtag = useHashtag();

const showHashtag = (item) => {
  hashtag.value = item;
  router.push("/hashtag");
}
</script>

<style scoped>

</style>