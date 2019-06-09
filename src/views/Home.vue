<template>
    <div class="home">
        <div class="wrapper">
            <Controls @showFilter="toggleFilter" @showMap='toggleMap'></Controls>
            <Filters v-if='isFilterShow' :categories="categories"></Filters>
            <EventsList  v-if='!displayMap' :events="events"></EventsList>
            <Map v-if='displayMap' :events="events"></Map>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import EventsList from '@/components/EventsList.vue'
    import Filters from '@/components/Filters.vue'
    import Controls from '@/components/Controls.vue'
    import axios from 'axios'
    import Map from '@/components/Map.vue'

    export default {
        name: 'home',
        data() {
            return {
                events: [],
                categories: [],
                isFilterShow: false,
                displayMap: false
            }
        },
        methods: {
          toggleFilter(){
            this.isFilterShow = !this.isFilterShow;
          },
          toggleMap(){
            this.displayMap = !this.displayMap;
          }
        },
        mounted() {
            axios.get('http://penka.studio/api/events').then((r) => {
                console.log(r.data[0].category.color);
                this.events = r.data;
            });
            axios.get('http://penka.studio/api/categories').then((r) => {
                console.log(r.data);
              this.categories = r.data;
            })
        },
        components: {
            EventsList,
            Filters,
            Controls,
            Map
        }
    }
</script>

<style lang="scss" scoped>
    .home {
        .wrapper{
            padding: 20px 25px 0 25px;
        }
    }
</style>
