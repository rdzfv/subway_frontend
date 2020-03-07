<template>
  <div>
    <v-card color="#ffffff" class="myCard" v-for="(item, i) in giftData" v-bind:key="i">
      <v-card-title class="headline">浇水礼物设定 + {{i}}</v-card-title>
      <v-card-subtitle>
        <form>
          <v-row>
            <v-text-field v-model="item.content" class="pa-4" label="文字内容">{{item.content}}</v-text-field>
          </v-row>
          <v-row>
            <v-text-field v-model="item.exp" class="pa-4" label="奖励经验">{{item.exp}}</v-text-field>
            <v-text-field v-model="item.money" class="pa-4" label="奖励金币">{{item.money}}</v-text-field>
            <v-text-field v-model="item.water" class="pa-4" label="奖励水滴">{{item.water}}</v-text-field>
          </v-row>
          <v-btn class="mr-4" @click="submit(i)">提交修改</v-btn>
        </form>
      </v-card-subtitle>
    </v-card>
    <v-card color="#ffffff" class="myCard" >
      <v-card-title class="headline">新增 - 浇水礼物设定</v-card-title>
      <v-card-subtitle>
        <form>
          <v-row>
            <v-text-field v-model="content" class="pa-4" label="文字内容"></v-text-field>
          </v-row>
          <v-row>
            <v-text-field v-model="exp" class="pa-4" label="奖励经验"></v-text-field>
            <v-text-field v-model="money" class="pa-4" label="奖励金币"></v-text-field>
            <v-text-field v-model="water" class="pa-4" label="奖励水滴"></v-text-field>
          </v-row>
          <v-btn class="mr-4" @click="add()">提交新增</v-btn>
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
  name: 'waterGift_design',
  data: () => ({
    visible: false, // 提交成功的弹窗
    visible2: false, // 数据加载的弹窗
    content: '',
    exp: '',
    money: '',
    water: '',
    giftData: null,
    i: null
  }),
  methods: {
    submit (i) {
      const that = this
      const changedData = this.giftData[i]
      console.log(changedData)
      const id = changedData.id
      const exp = changedData.exp
      const money = changedData.money
      const water = changedData.water
      const content = changedData.content
      this.$http.get('http://www.xuyuyan.cn:7002/artree/vtree/updateWaterGiftt2?id=' + id + '&money=' + money + '&exp=' + exp + '&water=' + water + '&content=' + content)
        .then(function (response) {
          if (response.status === 200 && response.data.status === 'success' && response.data.data != null) {
            that.visible = true
            setTimeout(function () {
              that.visible = false
            }, 2000)
            console.log(response.data.data)
            const data = response.data.data
            that.giftData = data
            console.log('主数据' + that.giftData)
          }
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    add () {
      const that = this
      const exp = that.exp
      const money = that.money
      const water = that.water
      const content = that.content
      this.$http.get('http://www.xuyuyan.cn:7002/artree/vtree/addWaterGiftt2?money=' + money + '&exp=' + exp + '&water=' + water + '&content=' + content)
        .then(function (response) {
          if (response.status === 200 && response.data.status === 'success' && response.data.data != null) {
            that.visible = true
            setTimeout(function () {
              that.visible = false
            }, 2000)
            console.log(response.data.data)
            const data = response.data.data
            that.giftData = data
            console.log('主数据' + that.giftData)
            that.exp = null
            that.money = null
            that.water = null
            that.content = null
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
    this.$http.get('http://www.xuyuyan.cn:7002/artree/vtree/getAllWaterGiftt2')
      .then(function (response) {
        console.log(response.data.data)
        const data = response.data.data
        that.giftData = data
        console.log('主数据' + that.giftData)
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
