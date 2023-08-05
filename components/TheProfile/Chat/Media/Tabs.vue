<template>
  <section class="flex items-center justify-between">
    <template v-for="tab in tabs">
      <section
        class="px-5 rounded-full py-1 bg-primary-300"
        @click="activeTab = tab"
        :class="[
          tab == activeTab ? 'text-gray-700' : 'bg-opacity-30 text-gray-500',
        ]"
      >
        <p
          class="text-sm"
          :class="[tab == activeTab ? 'font-medium' : 'font-normal']"
        >
          {{ tab }}
        </p>
      </section>
    </template>
  </section>
</template>

<script setup>
const props = defineProps({
  activeTab: {
    default: "",
  },
});
const emits = defineEmits();
const activeTab = computed({
  set(value) {
    emits("update:activeTab", value);
  },
  get() {
    return props.activeTab;
  },
});
const tabs = ref(["Image", "Video", "Music", "Audio"]);
</script>

<style scoped></style>
