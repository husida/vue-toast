import Vue from 'vue'
import App from './App.vue'
import Toast from './lib/index'

Vue.use(Toast);
new Vue({
  el: '#app',
  render: h => h(App)
})
