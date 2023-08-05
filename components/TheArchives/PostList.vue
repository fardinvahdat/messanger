<template>
  <div v-if="state?.length">
    <div class="flex gap-2 h-[275px] mt-2">
      <div class="w-3/5">
        <img
          class="object-cover h-full"
          :src="state[0].src"
          @click="showPost"
          :id="state[0].id"
          alt=""
        />
      </div>
      <div class="w-2/5 flex flex-col gap-2 h-full">
        <div>
          <img
            class="w-full h-[134px] object-cover"
            :src="state[1].src"
            @click="showPost"
            :id="state[1].id"
            alt=""
          />
        </div>
        <div>
          <img
            class="w-full h-[134px] object-cover"
            :src="state[2].src"
            @click="showPost"
            :id="state[2].id"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="w-full mt-2">
      <img
        class="object-cover h-[200px] mx-0 w-full"
        :src="state[3].src"
        @click="showPost"
        :id="state[3].id"
        alt=""
      />
    </div>
    <div class="w-full flex gap-2 mt-2">
      <div class="w-1/3">
        <img
          class="w-full object-cover h-[134px] cover"
          :src="state[4].src"
          @click="showPost"
          :id="state[4].id"
          alt=""
        />
      </div>
      <div class="w-1/3">
        <img
          class="w-full object-cover h-[134px] cover"
          :src="state[5].src"
          @click="showPost"
          :id="state[5].id"
          alt=""
        />
      </div>
      <div class="w-1/3">
        <img
          class="w-full object-cover h-[134px] cover"
          :src="state[11].src"
          @click="showPost"
          :id="state[11].id"
          alt=""
        />
      </div>
    </div>
    <div class="flex gap-2 h-[275px] mt-2 mb-4">
      <div class="w-2/5 flex flex-col gap-2 h-full">
        <img
          class="w-full h-[134px] object-cover"
          :src="state[6].src"
          @click="showPost"
          :id="state[6].id"
          alt=""
        />
        <img
          class="w-full h-[134px] object-cover"
          :src="state[7].src"
          @click="showPost"
          :id="state[7].id"
          alt=""
        />
      </div>
      <div class="w-3/5">
        <img
          class="object-cover h-full"
          :src="state[8].src"
          @click="showPost"
          :id="state[8].id"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

//state

const state = useArchiveList();
const router = useRouter();

//methods

const showPost = (e) => {
  console.log(e.target.id);
  let id = e.target.id;
  router.push({ path: `/archives/${id}` });
};
</script>
