<template>
    <div class="event">
        <div class="wrapper">
            <p class="category">
                {{event.category ? event.category.name : ""}}
            </p>
            <div class="info">
                <div class="name-age">
                    <p class="name">
                        {{ event.name || "" }}
                    </p>
                    <p class="age">
                        <span>+{{ event.age_limit }}</span>
                    </p>
                </div>
                <hr>
                <div class="desc">
                    <p>{{ event.description }}</p>
                </div>
                <div class="short-info">
                    <img class="icon" src="../assets/time.svg" alt="">
                    <p class="text">{{ event.created_at }}</p>
                </div>
                <div class="short-info">
                    <img class="icon" src="../assets/map_point.svg" alt="">
                    <p class="text">{{ event.address }}</p>
                </div>
                <div class="short-info">
                    <!-- <img class="icon" src="../assets/phone.svg" alt=""> -->
                    <!-- <p class="text">event.phone</p> -->
                </div>
                <button class="price">
                    {{event.price ? (event.price | 0) + " Р" : 'бесплатно' }}
                </button>
            </div>
        </div>
        <div class="map">
            <img src="../assets/map_event.svg" alt="">
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "event",
        data(){
          return {
              event:{}
          }
        },
        mounted() {
            axios.get("http://penka.studio/api/events/"+this.$route.params.id).then((r) => {
                console.log(r.data);
                this.event = {...r.data};
            })
        }
    }
</script>

<style scoped lang="scss">
.event{
    // background: linear-gradient(86.82deg, #40C6DD 0%, #A2E4EF 100%);
    color: #444;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
    .wrapper{
        padding: 15px 30px 24px 30px;
        .category{
            background: rgb(45, 118, 255);
            color: #fff;
            padding: 5px 15px;
            border-radius: 30px;
            display: inline;
        }
        .info{
            margin-top: 25px;
            .name-age{
                margin-bottom: 10px;
                width: 100%;
                display: flex;
                .name{
                    font-size: 24px;
                    margin: 0;
                    font-weight: bold;
                    // color: #FFFFFF;
                }
                .age{
                    color: #FFFFFF;
                    background-color: #555;
                    border: 2px solid #555;
                    height: 35px;
                    width: 35px;
                    min-height: 35px;
                    min-width: 35px;
                    text-align: center;
                    border-radius: 50%;
                    display: flex;
                    font-size: 12px;
                    font-weight: bold;
                    margin-bottom: 0;
                    margin-right: 0;
                    margin-left: auto;
                    span{
                        margin: auto;
                    }
                }
            }
            .desc{
                max-width: 450px;
                margin-bottom: 20px;
                p{
                    // color:#ffffff;
                }
            }
            .short-info{
                display: flex;
                margin-bottom: 8px;
                align-items: center;
                .text{
                    margin-bottom: 0;
                    margin-left: 6px;
                    color: #888;
                    font-size: 14px;
                }
            }
            .price{
                margin-top: 16px;
                padding: 8px 25px;
                background: #F9FF00;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
                border-radius: 22px;
                font-size: 16px;
                font-weight: bold;

                border: none;
                cursor: pointer;
                outline: none;
            }
        }
    }
    .map{
        img{
            width: 100%;
        }
    }
}
</style>
