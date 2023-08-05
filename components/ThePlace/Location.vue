<template>
  <div class="location mb-4">
    <h5 class="font-medium text-base text-gray-700 my-2 px-3">Location</h5>
    <div
      style="
        max-width: 100%;
        list-style: none;
        transition: none;
        overflow: hidden;
        width: 500px;
        height: 185px;
      "
      class="rounded-xl"
    >
      <div
        id="display-google-map"
        style="height: 100%; width: 100%; max-width: 100%"
      >
        <iframe
          style="height: 100%; width: 100%; border: 0"
          frameborder="0"
          :src="`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=+${geoLocations[randomNumber]}&zoom=10`"
        ></iframe>
      </div>
      <a
        class="embed-ded-maphtml"
        href="https://www.bootstrapskins.com/themes"
        id="get-data-for-embed-map"
        >premium bootstrap themes</a
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  randomNumber: {
    default: ''
  }
})
const geoLocations = ref(['New York', 'Seatel', 'Paris', 'Dobay', 'Egypt', 'Hamburg', 'New York'])
const randomNumber = computed(()=> {
  let random = props.randomNumber ? props.randomNumber : Math.random()
  let number = Math.floor( random* geoLocations.value.length)
  console.log(number)
  return number
})
</script>