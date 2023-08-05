<template>
  <GoogleMap
      :api-key="key"
      style="width: 100%; height: 500px"
      :center="center"
      ref="map"
      :zoom="10"
  >
    <Marker @dragend="changeMarker" :options="markerOptions" ref="marker">
    </Marker>
  </GoogleMap>
</template>

<script setup>
const emits = defineEmits()

const map = ref('')
const key = ref('AIzaSyBpu_9EUr9u8u0tcYgrwHIwHFgzWNZLlV4')
const marker = ref('')
const center = ref({lat: 40.689247, lng: -74.044502})
const city = ref('')
const markerOptions = { position: center.value, label: "L", title: "LADY LIBERTY", draggable: true };

const changeMarker = async (e) => {
  let location = {lat: e.latLng.lat(), lng: e.latLng.lng()}
  let result = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.lat}&longitude=${location.lng}`)
  result = await result.json()
  console.log(result)
  emits('changeCity', result.city)
  console.log('change city')
}
</script>

<style scoped>

</style>