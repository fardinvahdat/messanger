<template>
  <section>
    <h3 class="font-bold my-2 pb-4">Suggested</h3>
    <Swiper :slides-per-view="2">
      <SwiperSlide
          v-for="(item, index) in users"
          :key="index"
          class="text-center my-2"
          @click.prevent="showMore(item)"
      >
        <div class="grid grid-cols-1 gap-2">
          <img
              :src="item.avatar"
              class="object-cover rounded-full h-[60px] w-[60px] mx-auto"
          />
          <div>
            <h6 class="text-gray-700 text-base mb-0">{{ item.title }}</h6>
            <p class="text-gray-500 text-sm">
              {{ item.description.slice(0, 20) }}
            </p>
          </div>
        </div>
        <section class="flex items-center gap-3 justify-center mt-2">
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
const router = useRouter()
const users = useUsers();
const account = useAccount();
const showMore = (item) => {
  account.value = item;
  router.push("/account");
};
</script>

<style scoped>

</style>