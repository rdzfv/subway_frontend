import Vue from 'vue'
import VueRouter from 'vue-router'
import mainPlot from '../views/main_plot.vue'
import otherPlot from '../views/other_plot.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mainPlot',
    component: mainPlot
  },
  {
    path: '/',
    name: 'otherPlot',
    component: otherPlot
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
