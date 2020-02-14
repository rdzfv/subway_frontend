<template>

  <v-app id="inspire">
    <!-- 左侧边栏 -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <left-side></left-side>
      </v-list>
    </v-navigation-drawer>

    <!-- 顶边栏 -->
    <v-app-bar app color=#4CAF50 dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>“建设我的地铁站”设计管理平台</v-toolbar-title>
    </v-app-bar>

    <!--  中间content  -->
    <v-content>
      <breadcrumbs></breadcrumbs>
        <component :is="activeItem"></component>
    </v-content>

    <!--  底边栏  -->
    <v-footer color=#4CAF50 app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import LeftSide from './components/leftSide'
import Breadcrumbs from './components/breadcrumbs'
export default {
  components: {
    Breadcrumbs,
    LeftSide,
    mainPlot: () => import('./views/main_plot.vue'),
    otherPlot: () => import('./views/other_plot.vue'),
    buildTeamDesign: () => import('./views/buildTeam_design.vue'),
    cleanTeamDesign: () => import('./views/cleanTeam_design.vue'),
    safeTeamDesign: () => import('./views/safeTeam_design.vue'),
    serveTeamDesign: () => import('./views/serveTeam_design.vue'),
    dailyTaskDesign: () => import('./views/dailyTask_design.vue'),
    dessertStoreDesign: () => import('./views/dessertStore_design.vue'),
    clothStoreDesign: () => import('./views/clothStore_design.vue'),
    fastfoodStoreDesign: () => import('./views/fastfoodStore_design.vue'),
    souvenirStoreDesign: () => import('./views/souvenirStore_design.vue')
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    activeItem: 'mainPlot'
  }),
  watch: {
    $route (to, from) {
      const path = to.path
      let route = ''
      const pathArr = path.toString().split('/')
      for (let i = 1; i < pathArr.length; i++) {
        if (pathArr[i] === '') {
          route = 'mainPlot'
          continue
        }
        route = pathArr[i]
      }
      console.log(route)
      this.activeItem = route
    }
  }
}
</script>
