import Vue from 'vue'
import VueRouter from 'vue-router'
import mainPlot from '../views/main_plot.vue'
import otherPlot from '../views/other_plot.vue'
import buildTeamDesign from '../views/buildTeam_design.vue'
import cleanTeamDesign from '../views/cleanTeam_design.vue'
import safeTeamDesign from '../views/safeTeam_design.vue'
import serveTeamDesign from '../views/serveTeam_design.vue'
import dessertStoreDesign from '../views/dessertStore_design.vue'
import fastfoodStoreDesign from '../views/fastfoodStore_design.vue'
import souvenirStoreDesign from '../views/souvenirStore_design.vue'
import dailyTaskDesign from '../views/dailyTask_design.vue'
import waterGiftDesign from '../views/waterGift_design.vue'
import tipDesign from '../views/tip_design.vue'

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
  },
  {
    path: '/',
    name: 'buildTeamDesign',
    component: buildTeamDesign
  },
  {
    path: '/',
    name: 'cleanTeamDesign',
    component: cleanTeamDesign
  },
  {
    path: '/',
    name: 'safeTeamDesign',
    component: safeTeamDesign
  },
  {
    path: '/',
    name: 'serveTeamDesign',
    component: serveTeamDesign
  },
  {
    path: '/',
    name: 'dessertStoreDesign',
    component: dessertStoreDesign
  },
  {
    path: '/',
    name: 'dessertStoreDesign',
    component: dessertStoreDesign
  },
  {
    path: '/',
    name: 'fastfoodStoreDesign',
    component: fastfoodStoreDesign
  },
  {
    path: '/',
    name: 'souvenirStoreDesign',
    component: souvenirStoreDesign
  },
  {
    path: '/',
    name: 'dailyTaskDesign',
    component: dailyTaskDesign
  },
  {
    path: '/',
    name: 'waterGiftDesign',
    component: waterGiftDesign
  },
  {
    path: '/',
    name: 'tipDesign',
    component: tipDesign
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
