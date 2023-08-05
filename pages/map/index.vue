<template>
  {{ center }}
  <GoogleMap api-key=AIzaSyBpu_9EUr9u8u0tcYgrwHIwHFgzWNZLlV4 style="width: 100%; height: 500px" :center="center" :zoom="15">
  </GoogleMap>
</template>

<script setup>
const center = { lat: 40.689247, lng: -74.044502 };
</script>

<style scoped>

</style>