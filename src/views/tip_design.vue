<template>
  <div>
    <v-card color="#ffffff" class="myCard">
      <v-card-title class="headline">新增秘籍</v-card-title>
      <v-card-subtitle>
        <form>
          <v-row>
            <v-text-field v-model="content" class="pa-4" label="文字内容"></v-text-field>
          </v-row>
          <v-row>
            <v-btn class="mr-4" @click="addTip()">提交新增</v-btn>
          </v-row>
        </form>
      </v-card-subtitle>
    </v-card>
    <v-card color="#ffffff" class="myCard" v-for="(item, i) in tipData" v-bind:key="i">
      <v-card-title class="headline">秘籍 + {{i}}</v-card-title>
      <v-card-subtitle>
        <form>
          <v-row>
            <v-text-field v-model="item.content" class="pa-4" label="文字内容"></v-text-field>
          </v-row>
          <v-row>
            <v-btn class="mr-4" @click="submit(item.id, i)">提交修改</v-btn>
            <v-btn class="mr-4" @click="deleteTip(item.id, i)">删除秘籍</v-btn>
          </v-row>
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
  name: 'tip_design',
  data: () => ({
    visible: false, // 提交成功的弹窗
    visible2: false, // 数据加载的弹窗
    content: '',
    tipData: [],
    i: null
  }),
  methods: {
    submit (id, i) {
      const that = this
      const changedData = that.tipData[i]
      console.log(changedData)
      const content = changedData.content
      this.$http.get('http://www.xuyuyan.cn:7002/artree/vtree/updateTipsById?tipId=' + id + '&content=' + content)
        .then(function (response) {
          if (response.status === 200 && response.data.status === 'success' && response.data.data != null) {
            that.visible = true
            setTimeout(function () {
              that.visible = false
            }, 2000)
            console.log(response.data.data)
            that.tipData = response.data.data
          }
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    deleteTip (id, i) {
      console.log(id)
      const that = this
      const changedData = that.tipData[i]
      console.log(changedData)
      const content = changedData.content
      this.$http.get('http://www.xuyuyan.cn:7002/artree/vtree/deleteTipsById?tipId=' + id + '&content=' + content)
        .then(function (response) {
          if (response.status === 200 && response.data.status === 'success' && response.data.data != null) {
            that.visible = true
            setTimeout(function () {
              that.visible = false
            }, 2000)
            console.log(response.data.data)
            that.tipData = response.data.data
          }
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    addTip (i) {
      console.log(i)
      const that = this
      const content = that.content
      this.$http.get('http://www.xuyuyan.cn:7002/artree/vtree/addTip?content=' + content)
        .then(function (response) {
          if (response.status === 200 && response.data.status === 'success' && response.data.data != null) {
            that.visible = true
            setTimeout(function () {
              that.visible = false
            }, 2000)
            console.log(response.data.data)
            that.tipData = response.data.data
            that.content = ''
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
    this.$http.get('http://www.xuyuyan.cn:7002/artree/vtree/getAllTips')
      .then(function (response) {
        console.log(response.data.data)
        that.tipData = response.data.data

        that.visible2 = false
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
</script>
