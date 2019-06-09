<template>
    <div class="container">
        <div class="events">
            <div class="event" v-for='item in events' :key="item.id"
                 :style="{backgroundImage: `url(http://penka.studio/${item.category.image}), linear-gradient(${item.category.color})`}">
                <!-- <div class="event" v-for='item in events'> -->
                <div class='flex'>
                    <div class="tag">{{ item.category.name }}</div>
                    <!--              :key="item.id" @click="bookmarkActive = !bookmarkActive" :class="{ active: bookmarkActive}"&ndash;&gt;-->
                    <div class='bookmark'>
                        <img src="../assets/heart.svg" alt="">
                        <img src="../assets/heart_active.svg" alt="" class="hidden-icon">
                    </div>
                </div>
                <h3>
                    <router-link :to="'/events/'+item.id">
                        {{ item.name }}
                    </router-link>
                </h3>
                <div class="date">
                    {{ new Date(item.date_start).toLocaleDateString('ru') }}
                </div>
                <div class="address">
                    {{ item.address }}
                </div>
                <div class="flex price-container">
                    <div class="price">
                        {{Number(item.price) ? (item.price | 0) + " Р" : 'бесплатно' }}
                    </div>
                </div>

                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'EventsList',
        props: {
            events: Array,
        },
        data() {
            return {
                bookmarkActive: false
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .event {
        display: block;
        // width: 100%;
        margin: 20px 0 30px 0;
        text-align: left;
        background-color: #333;
        border-radius: 10px;
        color: #fff;
        padding-top: 10px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: right;

        h3 {
            font-weight: bold;
            font-size: 16px;
            margin-left: 20px;
            margin-top: 8px;

            a {
                color: #fff;
                position: relative;

                &::before {
                    content: '';
                    position: absolute;
                    bottom: -3px;
                    left: 0;
                    width: 0;
                    height: 1px;
                    background-color: #fff;
                    transition: width .3s;
                }
            }

            a:hover::before {
                width: 100%;
            }
        }

        .flex {
            display: flex;
            width: 100%;
            justify-content: space-between;
        }

        .tag {
            padding: 0px 20px;
            color: #000;
            background: #fffb;
            margin-left: -10px;
            border-radius: 50px;
        }

        .bookmark {
            width: 16px;
            height: 16px;
            margin-right: 20px;
            z-index: 10;
            position: relative;

            .hidden-icon {
                transition: opacity .3s;
                opacity: 0;
                position: absolute;
                top: 5px;
                left: 1px;

            }

            &.active {
                .hidden-icon {
                    opacity: 1;
                }
            }
        }

        .date {
            margin-left: 20px;

        }

        .address {
            margin-left: 20px;
        }

        .flex.price-container {
            justify-content: flex-end;
        }

        .price {
            padding: 2px 16px;
            background: #ff0;
            color: #000;
            margin-right: 20px;
            margin-bottom: -12.5px;
            border-radius: 50px;
        }
    }
</style>
