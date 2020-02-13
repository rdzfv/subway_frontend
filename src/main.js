import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import leftSide from './components/leftSide.vue'
import breadcrumbs from './components/breadcrumbs.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  leftSide,
  vuetify,
  breadcrumbs
}).$mount('#app')
