<template>
  <v-card class="mx-auto" width="300">
    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-group sub-group no-action>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>任务设计</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item v-for="(task_design, i) in task_design" :key="i" link>
          <router-link tag="div" v-bind:to="task_design[1]">
            <v-list-item-title v-text="task_design[0]"></v-list-item-title>
          </router-link>
        </v-list-item>
      </v-list-group>

      <v-list-group sub-group no-action>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>设定设计</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item v-for="(setting_design, i) in setting_design" :key="i" link>
          <router-link tag="div" v-bind:to="setting_design[1]">
            <v-list-item-title v-text="setting_design[0]"></v-list-item-title>
          </router-link>
        </v-list-item>
      </v-list-group>

      <v-list-group sub-group no-action>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>礼物设计</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item v-for="(gift_design, i) in gift_design" :key="i" link>
          <router-link tag="div" v-bind:to="gift_design[1]">
            <v-list-item-title v-text="gift_design[0]"></v-list-item-title>
          </router-link>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    task_design: [
      ['剧情任务设计', '/otherPlot'],
      ['剧情任务添加', '/addPlot'],
      ['每日任务设计', '/dailyTaskDesign']
    ],
    setting_design: [
      ['甜品店设定设计', '/dessertStoreDesign'],
      ['服装店设定设计', '/clothStoreDesign'],
      ['快餐店设定设计', '/fastfoodStoreDesign'],
      ['纪念品店设定设计', '/souvenirStoreDesign'],
      ['建筑团队设定设计', '/buildTeamDesign'],
      ['清洁团队设定设计', '/cleanTeamDesign'],
      ['服务团队设定设计', '/serveTeamDesign'],
      ['安保团队设定设计', '/safeTeamDesign']
    ],
    gift_design: [
      ['种树浇水普通礼物设计', '/waterGiftDesign'],
      ['种树秘籍设计', '/tipDesign']
    ]
  })
}
</script>

<style>
  a {
    text-decoration: none;
  }

  .router-link-active {
    text-decoration: none;
  }
</style>
