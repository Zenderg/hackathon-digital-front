<template lang="html">
  <div class="container">
    <h2>Создание события</h2>
    <div class='illurstation'></div>
    <a-form :form="form" @submit='handleSubmit'>
        <a-form-item label="Название" >
         <a-input v-model='params.name' required
       />
       </a-form-item>

       <a-form-item label="Описание события" >
         <a-textarea v-model='params.description' required/>
      </a-form-item>

      <a-form-item label="Категория" >
        <a-select  v-model='params.category_id' required>
         <a-select-option v-for='item in categories' :value="item.id">{{ item.name }}</a-select-option>
       </a-select>
     </a-form-item>

     <a-form-item label="Дата и время" >
       <a-date-picker  @change="handleChangeDate"
           v-decorator="['date-time-picker', config]"
           show-time
           format="YYYY-MM-DD HH:mm:ss"
           style="width: 100%"
         />
    </a-form-item>

    <a-form-item label="Возрастное ограничение" >
      <a-select  v-model='params.age_limit'>
        <a-select-option v-for='item in ages' :value="item.id">{{ item.name }}+</a-select-option>
     </a-select>
   </a-form-item>


   <a-form-item label="Стоимость" >
       <a-input-number required v-model='params.price' placeholder='Бесплатно' style="width: 100%"/>
    </a-form-item>
    <div class="" v-if='validateError'>
      Заполните все поля.
    </div>
    <a-button class='btn' html-type="submit">Создать</a-button>
  </a-form>
  </div>


</template>

<script>
import axios from 'axios'
export default {
  name: 'createEvent',
  data(){
    return {
      form: this.$form.createForm(this),
      config: {
        rules: [{ type: 'object', required: false, message: 'Please select time!' }],
      },
      config2: {
        rules: [{required: true, message: 'Заполните поле' }],
      },
      categories: [],
      ages: [
          {id: 0, name: '0'},
          {id: 1, name: '6'},
          {id: 2, name: '12'},
          {id: 3, name: '16'},
          {id: 4, name: '18'}
      ],
      params: {
        name: null,
        description: null,
        category_id: null,
        date_start: null,
        age_limit: null,
        price: 0
      },
      validateError: false
    }
  },
  mounted(){
    axios.get('http://penka.studio/api/categories').then(r => {
      this.categories = r.data;
    })
  },
  methods: {
    handleChangeDate(d, date_start){
      console.log(date_start);
      this.params.date_start = date_start;
    },
    handleSubmit(e){
      e.preventDefault();
      const validate = Object.values(this.params).every(item => item !== null);
      if(validate){
        console.log(this.params)
        axios.post('http://penka.studio/api/events/create', this.params);
      } else {
        this.openNotificationWithIcon('error')
      }
    },
    openNotificationWithIcon (type) {
        this.$notification[type]({
          message: 'Ошибка',
          description: 'Заполните все поля.',
        });
      },
  }
}
</script>

<style lang="css" scoped>
.container{
  padding: 20px;
}
.btn{
  width: 100%;
  background: linear-gradient(258.89deg, #895AEF 4.22%, #BA63FF 92.82%);
  color: #ffffff;
  width: 100%;
  height: auto;
  padding: 15px;
  border: none;
  outline: none;
  cursor: pointer;
}
.ant-form-item-label:before {
    display: inline-block;
    margin-right: 4px;
    content: '*';
    font-family: SimSun;
    line-height: 1;
    font-size: 14px;
    color: #f5222d;
}
</style>
