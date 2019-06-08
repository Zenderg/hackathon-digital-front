<template>
  <div class="container">
    <div class="events" >
      <router-link class="event" v-for='item in events' :key="item.id" :to="'/events/'+item.id" >
      <!-- <div class="event" v-for='item in events'> -->
          <div class='flex'>
            <div class="tag">{{ item.category.name }}</div>
            <div class='bookmark'></div>
          </div>
          <h3> {{ item.name }} </h3>
          <div class="date">
            {{ new Date(item.created_at).toLocaleDateString('ru') }}
          </div>
          <div class="address">
            {{ item.address }}
          </div>
          <div class="flex price-container">
            <div class="price">
              {{item.price ? (item.price | 0) + " Р" : 'Бесплатно' }}
            </div>
          </div>

      <!-- </div> -->
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventsList',
  props: {
    events: Array
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
  background: linear-gradient(259.03deg, #56EC3E 6.39%, #019F2D 98.14%);
  border-radius: 10px;
  color: #fff;
  padding-top: 10px;
  h3{
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    margin-left: 20px;
    margin-top: 8px;
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
    width: 16px;
    height: 16px;
    background: #fff;
    margin-right: 20px;
  }
  .date{
    margin-left: 20px;

  }
  .address{
    margin-left: 20px;
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
