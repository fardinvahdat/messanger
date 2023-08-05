<template>
  <section @click="placeClicked">
  <div class="flex gap-2 max-h-[275px] mt-2" v-if="state.length">
    <div class="w-3/5">
      <img class="object-cover h-[275px]" :src="state[0].src" alt="" />
    </div>
    <div class="w-2/5 flex flex-col gap-2 max-h-full">
      <div>
        <img class="w-full h-[134px] object-cover" :src="state[1].src" alt="" />
      </div>
      <div>
        <img class="w-full h-[134px] object-cover" :src="state[2].src" alt="" />
      </div>
    </div>
  </div>
  <div class="w-full mt-2">
    <img :src="state[3].src" alt="" class="object-cover h-[275px]" />
  </div>
  </section>
</template>

<script setup>
const props = defineProps({
  state: {
    default: [],
  },
});
const { state } = props;
const emits = defineEmits()
const placeClicked = (e) => {
  emits('placeClicked', e.target)
}
</script>