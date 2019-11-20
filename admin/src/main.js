import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false

import http from './http'
Vue.protoType.$http= http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
