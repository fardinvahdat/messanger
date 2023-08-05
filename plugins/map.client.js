import {GoogleMap, Marker, MarkerCluster, CustomMarker, InfoWindow} from 'vue3-google-map'
export default defineNuxtPlugin(nuxt => {
    nuxt.vueApp.component('GoogleMap', GoogleMap)
    nuxt.vueApp.component('Marker', Marker)
    nuxt.vueApp.component('MarkerCluster ', MarkerCluster )
    nuxt.vueApp.component('InfoWindow ', InfoWindow )
    nuxt.vueApp.component('CustomMarker ', CustomMarker )
})