<template>
  <section class="base-switch" :class="[model ? 'active' : 'deactive']">
  <label class="switch">
    <input type="checkbox" v-model="model">
    <div>
      <span></span>
    </div>
  </label>
  </section>
</template>

<script setup>
const props = defineProps({
  'modelValue': {
    default: false
  }
})
const emits = defineEmits()
const model = computed({
  set(value) {
    emits('update:modelValue', value)
  },
  get() {
    return props.modelValue
  }
})
</script>

<style scoped>

</style>