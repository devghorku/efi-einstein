import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from "axios";
axios.defaults.baseURL = 'https://ocean.defichain.com/v0/mainnet/';
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
