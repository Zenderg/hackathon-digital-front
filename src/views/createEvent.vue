<template lang="html">
  <div class="container">
    <h2>Создание события</h2>
    <div class='illurstation'></div>
    <a-form>
        <a-form-item label="Название" >
         <a-input/>
       </a-form-item>

       <a-form-item label="Описание события" >
         <a-textarea />
      </a-form-item>

      <a-form-item label="Категория" >
        <a-select defaultValue="lucy" @change="handleChange">
         <a-select-option value="jack">Jack</a-select-option>
       </a-select>
     </a-form-item>

     <a-form-item label="Дата и время" >
       <a-date-picker
           v-decorator="['date-time-picker', config]"
           show-time
           format="YYYY-MM-DD HH:mm:ss"
           style="width: 100%"
         />
    </a-form-item>

    <a-form-item label="Возрастное ограничение" >
      <a-select defaultValue="lucy" @change="handleChange">
       <a-select-option value="jack">Jack</a-select-option>
     </a-select>
   </a-form-item>


   <a-form-item label="Стоимость" >
       <a-input-number style="width: 100%"/>
    </a-form-item>
    </a-form>
    <button class='btn'>Создать</button>
  </div>


</template>

<script>
export default {
  name: 'createEvent',
  data(){
    return {
      config: {
        rules: [{ type: 'object', required: true, message: 'Please select time!' }],
      },
    }
  },
  methods: {
    handleChange(){

    }
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
  padding: 15px;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
