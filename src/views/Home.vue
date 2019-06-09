<template>
    <div class="home">
        <div class="wrapper">
            <div v-if="loader">
                <a-spin>
                    <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
                </a-spin>
                <a-spin :indicator="indicator" />
            </div>
            <div v-if="!loader">
                <Controls @showFilter="toggleFilter"></Controls>
                <Filters v-if='isFilterShow' :categories="categories"></Filters>
                <EventsList :events="events"></EventsList>
                <Map v-if='displayMap' :events="events"></Map>
            </div>
        </div>
    </div>
</template>

<script>
    import EventsList from '@/components/EventsList.vue'
    import Filters from '@/components/Filters.vue'
    import Controls from '@/components/Controls.vue'
    import axios from 'axios'
    import bus from '../bus';
    import Map from '@/components/Map.vue'

    export default {
        name: 'home',
        data() {
            return {
                events: [],
                categories: [],
                isFilterShow: false,
                loader: false,
                indicator: '<a-icon type="loading" style="font-size: 24px" spin />'
                displayMap: false
            }
        },
        methods: {
          toggleFilter(){
            this.isFilterShow = !this.isFilterShow;
          },
          toggleMap(){
            this.displayMap = !this.displayMap;
          },
          toggleFilter() {
              this.isFilterShow = !this.isFilterShow;
          },
          filtersApply(events) {
              this.events = events;
          },
          searchApply(events) {
              this.events = events;
          }
        },
        mounted() {
            this.loader = true;
            axios.get('http://penka.studio/api/events').then((r) => {
                console.log(r.data[0].category.color);
                this.events = r.data;
                axios.get('http://penka.studio/api/categories').then((r) => {
                    this.categories = r.data;
                    this.loader = false;
                });
            });
            bus.$on("search-apply", this.searchApply);
            bus.$on("filters-apply", this.filtersApply);
            bus.$on("loader", (val) => {this.loader = val;});
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
        .wrapper {
            padding: 20px 25px 0 25px;
        }
    }
</style>
