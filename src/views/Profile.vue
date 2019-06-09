<template>
    <div class="profile">
        <div class="header">
            <img src="http://penka.studio/images/temp/avatar.jpg"
                 alt="">
            <div class="profile__info">
                <h3 class="name">Иван Иваныч</h3>
            </div>
        </div>
        <div class="my-events">
            <h3 class="title">Мои события</h3>
            <EventsList :events='myEvents'></EventsList>
        </div>
        <button class="create-event">
            Создать событие!
        </button>
    </div>
</template>

<script>
import EventsList from '@/components/EventsList'
import axios from 'axios'
    export default {
        name:"profile",
        data(){
          return{
            myEvents: []
          }
        },
        mounted(){
          axios.get('http://penka.studio/api/events').then(r => {
            this.myEvents = r.data.filter(item => item.age_limit >= 16)
          })
        },
        components: {
          EventsList
        }
    }
</script>

<style lang="scss" scoped>
    .profile {
        .header {
            padding: 25px 0 25px 25px;
            width: 100%;
            background: linear-gradient(77.07deg, #BB63FF 0%, #8B5AF0 100%);
            display: flex;
            align-items: center;

            img {
                height: 80px;
                width: 80px;
                object-fit: cover;
                border-radius: 50%;
                margin-right: 20px;
            }

            .profile__info {
                .name {
                    margin-bottom: 10px;
                    font-weight: bold;
                    color: #fff;
                }

                .age {
                    margin: 0;
                    text-align: left;
                }
            }
        }

        .my-events {
            text-align: left;
            padding: 20px 25px 0 25px;

            .title {
                display: inline;
                font-size: 20px;
            }
        }

        .create-event {
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            background: linear-gradient(258.89deg, #895AEF 4.22%, #BA63FF 92.82%);
            color: #ffffff;
            // padding: 20px 66px;
            width: 100%;
            padding: 15px;
            border: none;
            outline: none;
            cursor: pointer;
        }
    }
</style>
