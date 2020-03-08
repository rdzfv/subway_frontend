<template>
  <div>
    <v-card color="#ffffff" class="myCard">
      <v-card-title class="headline">签到任务</v-card-title>
      <v-card-subtitle>
        <form>
          <v-row>
            <v-text-field v-model="words0" class="pa-4" label="文字内容"></v-text-field>
          </v-row>
          <v-row>
            <v-text-field v-model="expADay0" class="pa-4" label="每一天的经验奖励"></v-text-field>
            <v-text-field v-model="moneyADay0" class="pa-4" label="每一天的金币奖励"></v-text-field>
            <v-text-field v-model="maxExp0" class="pa-4" label="最大奖励经验"></v-text-field>
            <v-text-field v-model="maxMoney0" class="pa-4" label="最大奖励金币"></v-text-field>
          </v-row>
          <v-btn class="mr-4" @click="submit0()">提交修改</v-btn>
        </form>
      </v-card-subtitle>
    </v-card>
    <v-card color="#ffffff" class="myCard" v-for="(item, i) in taskData" v-bind:key="i">
      <v-card-title class="headline">每日任务 + {{i}}</v-card-title>
      <v-card-subtitle>
        <form>
          <v-row>
            <v-text-field v-model="item.words" class="pa-4" label="文字内容">{{item.words}}</v-text-field>
          </v-row>
          <v-row>
            <v-text-field v-model="item.exp" class="pa-4" label="奖励经验">{{item.exp}}</v-text-field>
            <v-text-field v-model="item.money" class="pa-4" label="奖励金币">{{item.money}}</v-text-field>
          </v-row>
          <v-btn class="mr-4" @click="submit(i)">提交修改</v-btn>
        </form>
      </v-card-subtitle>
    </v-card>
    <v-alert type="success" style="position: fixed;top:50%;left:50%;" :value="visible">提交成功！</v-alert>
    <v-alert border="top" colored-border="true" elevation="2" color="#4CAF50" :value="visible2"
             style="position: fixed;top:50%;left:50%;margin-left: auto;margin-right: auto;width: 300px;">
      <v-progress-circular indeterminate color="#4CAF50" style="margin-right: 20px"></v-progress-circular>
      数据加载中...
    </v-alert>
  </div>
</template>

<script>
export default {
  name: 'dailyTask_design',
  data: () => ({
    visible: false, // 提交成功的弹窗
    visible2: false, // 数据加载的弹窗
    maxExp0: null,
    expADay0: null,
    moneyADay0: null,
    maxMoney0: null,
    words0: '',
    taskData: [],
    taskData0: null,
    i: null
  }),
  methods: {
    submit (i) {
      const that = this
      const changedData = this.taskData[i]
      console.log(changedData)
      const exp = changedData.exp
      const money = changedData.money
      this.$http.get('http://47.101.146.28:7003/game2d/dailyTask/updateOtherTask?id=' + (i + 2) + '&awardMoney=' + money + '&awardExp=' + exp)
        .then(function (response) {
          if (response.status === 200 && response.data.status === 'success' && response.data.data != null) {
            that.visible = true
            setTimeout(function () {
              that.visible = false
            }, 2000)
            console.log(response.data.data)
            const data = response.data.data
            const other = data.slice(1, data.length)

            // 其他任务xp
            for (var i = 0; i < other.length; i++) {
              const content = other[i].content
              const detailJson = JSON.parse(content)
              var exp = detailJson.awardExp
              var money = detailJson.awardMoney
              var words = other[i].words
              // eslint-disable-next-line no-inner-declarations
              function Task (exp, money, words) {
                this.exp = exp
                this.money = money
                this.words = words
              }
              const task = new Task(exp, money, words)
              const taskData = that.taskData
              console.log(taskData)
              taskData.push(task)
              that.taskData = taskData
            }
          }
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    submit0 () {
      const that = this
      const changedData = null
      console.log(changedData)
      const expADay0 = that.expADay0
      const moneyADay0 = that.moneyADay0
      const maxExp0 = that.maxExp0
      const maxMoney0 = that.maxMoney0
      this.$http.get('http://47.101.146.28:7003/game2d/dailyTask/updateSignTask?expADay=' + expADay0 + '&maxExp=' + maxExp0 + '&maxMoney=' + maxMoney0 + '&moneyADay=' + moneyADay0)
        .then(function (response) {
          if (response.status === 200 && response.data.status === 'success' && response.data.data != null) {
            that.visible = true
            setTimeout(function () {
              that.visible = false
            }, 2000)
            console.log(response.data.data)
            const taskData0 = (response.data.data)[0]
            const taskDataContent0 = taskData0.content
            const taskDataWords0 = taskData0.words
            console.log('文字' + taskDataWords0)
            console.log('解析前的字符串' + taskDataContent0)
            const detailJson = JSON.parse(taskDataContent0)
            console.log('解析后的json' + detailJson)
            console.log('exp' + detailJson.maxExp)
            that.maxExp0 = detailJson.maxExp
            that.expADay0 = detailJson.expADay
            that.moneyADay0 = detailJson.moneyADay
            that.maxMoney0 = detailJson.maxMoney
            that.words0 = taskDataWords0
          }
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  },
  created () {
    const that = this
    that.visible2 = true
    this.$http.get('http://47.101.146.28:7003/game2d/dailyTask/getAllDailyTasks')
      .then(function (response) {
        console.log(response.data.data)
        const data = response.data.data
        const other = data.slice(1, data.length)

        // 其他任务
        for (var i = 0; i < other.length; i++) {
          const content = other[i].content
          const detailJson = JSON.parse(content)
          var exp = detailJson.awardExp
          var money = detailJson.awardMoney
          var words = other[i].words
          // eslint-disable-next-line no-inner-declarations
          function Task (exp, money, words) {
            this.exp = exp
            this.money = money
            this.words = words
          }
          const task = new Task(exp, money, words)
          const taskData = that.taskData
          console.log(taskData)
          taskData.push(task)
          that.taskData = taskData
        }

        // 签到任务
        const taskData0 = (response.data.data)[0]
        const taskDataContent0 = taskData0.content
        const taskDataWords0 = taskData0.words
        const detailJson = JSON.parse(taskDataContent0)
        that.maxExp0 = detailJson.maxExp
        that.expADay0 = detailJson.expADay
        that.moneyADay0 = detailJson.moneyADay
        that.maxMoney0 = detailJson.maxMoney
        that.words0 = taskDataWords0

        that.visible2 = false
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
</script>

<style scoped>

</style>
