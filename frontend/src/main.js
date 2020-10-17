import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import axios from 'axios';


//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-vue/dist/bootstrap-vue.css'; import "bootswatch/dist/[theme]/bootstrap.min.css"; 

//import "bootswatch/dist/pulse/bootstrap.min.css";

axios.defaults.baseURL=  'https://api.shortn.cc/api/' 

Vue.config.productionTip = true

//Vue.use(BootstrapVue);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#page')
