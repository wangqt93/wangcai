import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//全局组件
import Nav from './views/Nav.vue'
import Layout from './components/layout'
import Type from './components/type'
Vue.component('Nav',Nav)
Vue.component('Layout', Layout)
Vue.component('Type',Type)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
