import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from "axios";
import VueI18n from 'vue-i18n'
import i18n from './i18n'
Vue.use(VueI18n)
axios.defaults.baseURL = 'https://ocean.defichain.com/v0/mainnet/';
Vue.config.productionTip = false

new Vue({
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
