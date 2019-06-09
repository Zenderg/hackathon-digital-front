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
.event{
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
  h3{
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    padding-left: 20px;
    margin-top: 8px;
    background: #20274b69;
    margin-right: 50px;

    border-radius: 0 5px 5px 0;
    a{
      color: #fff;
    }
  }
  .flex{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .tag{
    padding: 0px 20px;
    color: #000;
    background: #fffb;
    margin-left: -10px;
    border-radius: 50px;

  }
  .bookmark{
    display: none;
    width: 16px;
    height: 16px;
    background: #fff;
    margin-right: 20px;
  }
  .date{
    padding-left: 20px;

  }
  .address{
    padding-left: 20px;

  }
  .flex.price-container{
    justify-content: flex-end;
  }
  .price{
    padding: 2px 16px;
    background: #ff0;
    color: #000;
    margin-right: 20px;
    margin-bottom: -12.5px;
    border-radius: 50px;
  }
}
</style>
