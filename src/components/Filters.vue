<template lang="html">
  <div class="filters">
    <div class="block city">
      <h3>Ваш город: Воронеж</h3>
    </div>
    <div class="block category">
      <h3>Категория</h3>
      <a-select mode="multiple" style="width: 100%" placeholder='Все' @change="handleChangeCategory">
        <a-select-option v-for='item in categories' :value="item.id">{{ item.name }}</a-select-option>
      </a-select>
    </div>
    <div class="block date">
      <h3>Когда</h3>
      <a-select style="width: 100%" placeholder='Все' @change="handleChangeDate">
        <a-select-option v-for='item in dates' :value="item.id">{{ item.name }}</a-select-option>
      </a-select>
    </div>
    <div class="block age">
      <h3>Возраст</h3>
      <a-select style="width: 100%" placeholder='Все' @change="handleChangeAge">
        <a-select-option v-for='item in ages' :value="item.id">{{ item.name }}</a-select-option>
      </a-select>
    </div>
    <div class="block price">
      <h3>Стоимость</h3>
      <a-checkbox  @change="handleChangePrice" :checked='priceFree'>Только бесплатные</a-checkbox>
    </div>
    <div class="buttons ">
      <button class='btn' @resetFilters>Сбросить</button>
      <button class='btn primary' @applyFilters>Принять</button>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Filters',
  props: {
    categories: Array
  },
  data(){
    return {
      dates: [{id: 'today', name: 'Сегодня'}, {id: 'tomorrow', name: 'Завтра'}, {id: 'week', name: 'На этой неделе'}, {id: 'month', name: 'В этом месяце'}],
      ages: [{id: 0, name: '0+'}, {id: 6, name: '6+'}, {id: 12, name: '12+'}, {id: 16, name: '16+'},  {id: 18, name: '18+'}],
      priceFree: false,
      filterParams: {
        city: 1,
        categories: null,
        date: null,
        age: null,
        price: null
      }
    }
  },
  methods: {
    handleChangeCategory(value){
      console.log(value);
    },
    handleChangeDate(value){
      console.log(value);
    },
    handleChangeAge(value){
      console.log(value);
    },
    handleChangePrice(value){
      this.priceFree = value.target.checked;
      console.log(value.target.checked);
    }
  },
  mounted(){
    // axios.get('https://penka.studio')
  }
}
</script>

<style lang="scss" scoped>
h3{
  font-weight: bold;
  font-size: 20px;
}
.filters{
  margin: 30px 0;
  .block{
    margin-bottom: 20px;
  }
  .buttons{
    display: flex;
    justify-content: space-around;
  }
  .btn{
    background: #FFFFFF;
    border: 1px solid #CECBCB;
    box-sizing: border-box;
    border-radius: 30px;
    padding: 8px 40px;
    &.primary{
      border: 0;
      color: #fff;
      background: linear-gradient(76.49deg, #BB63FF 0%, #8B5AF0 100%);
      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
    }
  }
}

</style>
