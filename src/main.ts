import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import wait from './plugins/wait'
import './plugins/buefy'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  wait,
  render: h => h(App)
}).$mount('#app')
