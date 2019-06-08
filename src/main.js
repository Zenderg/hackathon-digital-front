import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'ant-design-vue/dist/antd.css';
import Ant from 'ant-design-vue';
Vue.use(Ant);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
