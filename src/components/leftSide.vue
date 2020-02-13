<template>
  <v-card class="mx-auto" width="300">
    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-group no-action sub-group>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>剧情设计</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="(plot_design, i) in plot_design" :key="i" link>
          <router-link tag="div" v-bind:to="plot_design[1]">
            <v-list-item-title v-text="plot_design[0]"></v-list-item-title>
          </router-link>
        </v-list-item>
      </v-list-group>

      <v-list-group sub-group no-action>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>设定设计</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item v-for="(setting_design, i) in setting_design" :key="i">
          <v-list-item-title v-text="setting_design[0]"></v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group sub-group no-action>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>任务设计</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item v-for="(task_design, i) in task_design" :key="i">
          <v-list-item-title v-text="task_design[0]"></v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    plot_design: [
      ['主线剧情设计', '/mainPlot'],
      ['支线剧情设计', '/otherPlot']
    ],
    setting_design: [
      ['甜品店设定设计', ''],
      ['服装店设定设计', ''],
      ['快餐店设定设计', ''],
      ['纪念品店设定设计', ''],
      ['建筑团队设定设计', ''],
      ['清洁团队设定设计', ''],
      ['服务团队设定设计', ''],
      ['安保团队设定设计', '']
    ],
    task_design: [
      ['每日任务设计', '']
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
