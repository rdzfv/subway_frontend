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
      <v-container class="fill-height" fluid>
      </v-container>
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
  components: { Breadcrumbs, LeftSide },
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
}
</script>
