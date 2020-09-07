import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const cookie = require('js-cookie');
const jsonString = require('./data');

function createVue (jsonString) {
  cookie.set('members', jsonString);

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')

  Vue.use(BootstrapVue)
  Vue.config.productionTip = false
}
createVue(jsonString);

