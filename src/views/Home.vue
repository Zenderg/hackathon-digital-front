<template>
    <div class="home">
        <div class="wrapper">
            <Controls @showFilter="toggleFilter"></Controls>
            <Filters v-if='isFilterShow' :categories="categories"></Filters>
            <EventsList :events="events"></EventsList>
        </div>
    </div>
</template>

<script>
    import EventsList from '@/components/EventsList.vue'
    import Filters from '@/components/Filters.vue'
    import Controls from '@/components/Controls.vue'
    import axios from 'axios'
    import bus from '../bus';

    export default {
        name: 'home',
        data() {
            return {
                events: [],
                categories: [],
                isFilterShow: false
            }
        },
        methods: {
          toggleFilter(){
            this.isFilterShow = !this.isFilterShow;
          },
          filtersApply(events){
              this.events = events;
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
            });
            bus.$on("filters-apply", this.filtersApply)
        },
        components: {
            EventsList,
            Filters,
            Controls
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
