<template>
    <div class="home">
        <div class="header">
            <p class="title">

            </p>
            <router-link to="/profile" class="profile" href="">
                <img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500" alt="">
            </router-link>
        </div>
        <div class="wrapper">
            <Controls @showFilter="toggleFilter"></Controls>
            <Filters v-if='isFilterShow' :categories="categories"></Filters>
            <EventsList  :events="events"></EventsList>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import EventsList from '@/components/EventsList.vue'
    import Filters from '@/components/Filters.vue'
    import Controls from '@/components/Controls.vue'
    import axios from 'axios'

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
          }
        },
        mounted() {
            axios.get('http://penka.studio/api/events').then((r) => {
                console.log(r);
                this.events = r.data;
            });
            axios.get('http://penka.studio/api/categories').then((r) => {
              this.categories = r.data;
            })
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
        .header {
            width: 100%;
            background: linear-gradient(75.3deg, #5E48E1 0%, #BCA3EF 100%);
            padding: 31px 0 31px 28px;
            display: flex;
            align-items: center;

            .title {
                color: #ffffff;
                margin: 0;
            }

            .profile{
                margin-left: auto;
                margin-right: 26px;
                img{
                    height: 34px;
                    width: 34px;
                    object-fit: cover;
                    border-radius: 50%;
                }
            }
        }
        .wrapper{
            padding: 20px 25px 0 25px;
        }
    }
</style>
