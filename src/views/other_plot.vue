<template>
  <div>
    <v-card color="#ffffff" class="myCard" style="padding: 10px;">
      <v-row>
        <v-list-group sub-group no-action class="mr-2">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>下拉选择剧情</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="(item, i) in plot_design" :key="i" link>
            <div @click="getTasks(item[1], item[0])">
              <v-list-item-title v-text="item[0]"></v-list-item-title>
            </div>
          </v-list-item>
        </v-list-group>
      </v-row>
    </v-card>
    <v-row style="margin-top: 30px;margin-left: 50px;">
      <h1>{{curr_plot_name}}</h1>
      <v-btn @click="apply()" style="margin-left: 50px;" v-if="showApplyBtn">{{AppliBtnWords}}</v-btn>
    </v-row>
    <v-card color="#ffffff" class="myCard" v-for="(item, i) in tasks" v-bind:key="i" style="padding: 30px;">
      <v-card-title class="headline">任务标题{{i}} :{{item.name}}</v-card-title>
      <v-text-field v-bind:value="item.describes" label="任务提要" @change="changeDescribe($event)"></v-text-field>
      <v-text-field v-bind:value="item.content" label="任务内容" @change="changeContent($event)"></v-text-field>

      <form style="margin-bottom: 20px;">
        <component v-bind:is="autoComponent[item.type - 1]" :detail="item.detail" @data="getData"></component>
      </form>
      <v-row style="margin-bottom: 20px;">
        <v-img v-bind:src="item.picUrl" aspect-ratio="1"
               class="grey lighten-2 pa-2" max-width="300" max-height="200" style="margin-right: 20px;margin-left: 20px;">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <template class="pa-2" style="vertical-align: baseline;margin-right: 16px;">
          <v-file-input show-size counter small-chips multiple label="点击上传替换图片" ref="myfile"
                        v-model="files1" v-on:change="picUrlChange"></v-file-input>
        </template>
      </v-row>
      <v-btn class="mr-4" @click="submit(item.id, item.plotId, i)">提交修改</v-btn>
    </v-card>
    <v-alert type="success" style="position: fixed;top:50%;left:50%;" :value="visible">提交成功！</v-alert>
    <v-alert type="error" style="position: fixed;top:50%;left:50%;" :value="visible_error">提交失败！</v-alert>
    <v-alert type="error" style="position: fixed;top:50%;left:50%;" :value="network_error">网络错误！</v-alert>
    <v-alert border="top" colored-border="true" elevation="2" color="#4CAF50" :value="visible2"
             style="position: fixed;top:50%;left:50%;margin-left: auto;margin-right: auto;width: 300px;">
      <v-progress-circular indeterminate color="#4CAF50" style="margin-right: 20px"></v-progress-circular>
      图片上传中...
    </v-alert>
    <v-alert border="top" colored-border="true" elevation="2" color="#4CAF50" :value="visible3"
             style="position: fixed;top:50%;left:50%;margin-left: auto;margin-right: auto;width: 300px;">
      <v-progress-circular indeterminate color="#4CAF50" style="margin-right: 20px"></v-progress-circular>
      数据加载中...
    </v-alert>
  </div>
</template>

<script>
export default {
  name: 'other_plot',
  data: () => ({
    plot_design: [],
    network_error: false,
    visible: false,
    visible2: false,
    visible3: false, // 数据加载
    visible_error: false,
    used_plot: null,
    curr_plot_id: null,
    curr_plot_name: null,
    tasks: [],
    showApplyBtn: false,
    AppliBtnWords: null,
    picUrl: '',
    collectControl: () => import('../components/collect_control.vue'),
    moneyControl: () => import('../components/money_control.vue'),
    peopleControl: () => import('../components/people_control.vue'),
    pointControl: () => import('../components/point_control.vue'),
    questionControl: () => import('../components/question_control.vue'),
    autoComponent: [],
    data: null,
    describe: null,
    content: null
  }),
  methods: {
    changeDescribe (value) {
      console.log(value)
      this.describe = value
    },
    changeContent (value) {
      console.log(value)
      this.content = value
    },
    picUrlChange () {
      // const that = this
      // console.log(that.files1[0])
      // if (that.files1[0]) {
      //   that.visible2 = true
      //   const data = new FormData()
      //   data.append('upfile', (that.files1)[0])
      //   // const headers = { 'Content-Type': 'multipart/form-data' }
      //   const instance = that.$http.create({
      //     withCredentials: true
      //   })
      //   // // 也可以用RequestParam根据键名去取额外参数
      //   // param.append('extraParam1', "额外参数1")
      //   // param.append('extraParam2', "额外参数2")
      //   instance.post('http://www.xuyuyan.cn:7001/trueWorld/upload/uploadFile',
      //     data,
      //     { headers: { 'Content-Type': 'multipart/form-data' } }).then(function (data) {
      //     console.log(data)
      //     if (data.status === 200 && data.data.state === 'SUCCESS') {
      //       that.visible2 = false
      //     }
      //     // that.picUrl = data.data.url
      //   }, function (err) {
      //     console.log('err------: ')
      //     console.log(err)
      //   })
      // }
    },
    getData (data) {
      console.log(data)
      this.data = data
    },
    apply (id) {
      console.log(id)
    },
    getTasks (id, name) {
      const that = this
      that.visible3 = true
      console.log(id)
      that.curr_plot_id = id
      that.curr_plot_name = name
      // 判断选中的剧情是否是已经应用的
      console.log('id=' + id + 'that.used_plot=' + that.used_plot)
      if (id + '' === that.used_plot + '') {
        that.AppliBtnWords = '已经应用此剧情'
      } else {
        that.AppliBtnWords = '应用该剧情'
      }
      this.$http.get('http://47.101.146.28:7003/game2d/plotTask/getAllTasksByPlotId?plotId=' + id)
        .then(function (response) {
          const data = response.data.data
          console.log(data)
          that.tasks = data
          that.visible3 = false
          that.showApplyBtn = true
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    submit (taskId, plotId, i) {
      const that = this
      console.log(that.describe)
      console.log(that.content)
      // 取出原来的数据
      console.log((that.tasks)[i])
      const task = (that.tasks)[i]
      if (that.describe != null) {
        task.describes = that.describe
      }
      if (that.content != null) {
        task.content = that.content
      }
      console.log(task)
      if (that.data != null) {
        // 解析data
        console.log(that.data)
        if (that.data.type === 'pointControl') {
          console.log(that.data.data)
          const datas = []
          for (var j = 0; j < that.data.data.length; j++) {
            const data = []
            data.push(that.data.data[j].pointValue)
            data.push(that.data.data[j].describeValue)
            data.push(that.data.data[j].numValue)
            datas.push(data)
          }
          console.log(datas)
          task.detail = datas
        }
      }

      // this.$http.get('localhost:7003/game2d/plotTask/updateTask
      //   .then(function (response) {
      //     const data = response.data.data
      //     console.log(data)
      //   })
      //   .catch(function (err) {
      //     console.log(err)
      //   })
      const data = new FormData()
      const json = JSON.stringify(task.detail)
      console.log(json)
      data.append('content', task.content)
      data.append('describe', task.describes)
      data.append('detail', json)
      data.append('name', task.name)
      data.append('picUrl', task.picUrl)
      data.append('plotId', plotId)
      data.append('taskId', taskId)
      data.append('type', task.type)
      // const headers = { 'Content-Type': 'multipart/form-data' }
      const instance = that.$http.create({
        withCredentials: true
      })
      instance.post('http://47.101.146.28:7003/game2d/plotTask/updateTask',
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }).then(function (res) {
        if (res.status === 200 && res.data.status === 'success' && res.data.data != null) {
          that.visible = true
          setTimeout(function () {
            that.visible = false
          }, 2000)
          const data = res.data.data
          const plotDesign = []
          for (var i = 0; i < data.length; i++) {
            const aPlot = [data[i].name, data[i].id + '']
            const test = [1, 2]
            console.log(test[1] + '')
            plotDesign.push(aPlot)
            if (data[i].isApplied === 1) {
              that.used_plot = data[i].id
              console.log(that.used_plot)
            }
          }
          that.plot_design = plotDesign
          console.log(that.plot_design)
          that.visible3 = false
        }
        console.log(data)
      }, function (err) {
        console.log('err------: ')
        console.log(err)
      })
    }
  },
  created () {
    const that = this
    that.visible3 = true
    this.$http.get('http://47.101.146.28:7003/game2d/plotTask/getAllPlot')
      .then(function (response) {
        const data = response.data.data
        const plotDesign = []
        for (var i = 0; i < data.length; i++) {
          const aPlot = [data[i].name, data[i].id + '']
          const test = [1, 2]
          console.log(test[1] + '')
          plotDesign.push(aPlot)
          if (data[i].isApplied === 1) {
            that.used_plot = data[i].id
            console.log(that.used_plot)
          }
        }
        that.plot_design = plotDesign
        console.log(that.plot_design)
        that.visible3 = false
      })
      .catch(function (err) {
        console.log(err)
      })
    // 构造autoComponent数组
    const autoComponent = []
    autoComponent.push(that.pointControl)
    autoComponent.push(that.peopleControl)
    autoComponent.push(that.moneyControl)
    autoComponent.push(that.questionControl)
    autoComponent.push(that.collectControl)
    that.autoComponent = autoComponent
  }
}
</script>

<style scoped>

</style>
