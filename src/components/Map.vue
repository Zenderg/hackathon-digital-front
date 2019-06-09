<template>
    <div>
        <yandex-map
                :coords="[51.65,39.15]"
                zoom="13"
                style="width: 100%; height: 70vh; margin-top: 20px"
                :cluster-options="{
                  1: {clusterDisableClickZoom: false}
                }"
                :behaviors="['default']"
                :controls="['typeSelector']"
                map-type="map"
        >
            <!-- <ymap-marker v-for='marker in events'
                         :callbacks="{ click(){markerSelect(marker)} }"
                         :v-show="marker.visible"
                         :marker-id="marker.id"
                         marker-type="placemark"
                         :coords="marker.coords"
                         :hint-content="marker.name"
                         :icon="{
                            layout: 'default#image',
                            imageHref: marker.img,
                            imageSize: [50, 50]
                          }"
                         cluster-name="1"
                         :key="marker.id"
            ></ymap-marker> -->
            <ymap-marker v-for='marker in events'
                         :marker-id="marker.id"
                         marker-type="placemark"
                         :coords="(marker.ll ? marker.ll.split(',').map(i => Number(i)) : [0, 0])"
                         :hint-content="marker.name"
                         :icon="{
                            layout: 'default#image',
                            imageSize: [40, 54],
                            imageHref: `http://penka.studio/${marker.marker}`
                          }"
                         cluster-name="1"
                         :key="marker.id"
            ></ymap-marker>
        </yandex-map>
    </div>
</template>

<script>
    import Vue from 'vue'
    import YmapPlugin from 'vue-yandex-maps'

    Vue.use(YmapPlugin);

    export default {
        name: "Map",
        props: {
          events: Array
        },
        methods: {
            markerSelect(el) {
                bus.$emit("markerSelect", el);
            }
        }
    }
</script>

<style scoped></style>
