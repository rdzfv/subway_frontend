<template>
  <div>
    <v-card color="#ffffff" class="myCard" style="padding: 30px;">
      <v-text-field v-bind:value="plotTitle" label="剧情标题" @change="changePlotTitile($event)"></v-text-field>
      <v-text-field v-bind:value="plotContent" label="剧情提要" @change="changePlotContent($event)"></v-text-field>
      <v-row style="margin-bottom: 20px;">
        <v-img v-bind:src="picUrl" aspect-ratio="1"
               class="grey lighten-2 pa-2" max-width="300" max-height="200" style="margin-right: 20px;margin-left: 20px;">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <template class="pa-2" style="vertical-align: baseline;margin-right: 16px;">
          <v-file-input show-size counter small-chips multiple label="点击上传替换图片" ref="myfile"
                        v-model="files1" v-on:change="picUrlChange(i)"></v-file-input>
        </template>
      </v-row>
      <v-btn class="mr-4" @click="addPlot(i)">提交剧情</v-btn>
    </v-card>
    <v-card color="#ffffff" class="myCard" style="padding: 30px;" v-for="(item, i) in taskCount" :key="i">
      <v-card-subtitle>添加剧情</v-card-subtitle>
      <v-select :items="taskTypes" v-bind:label="taskSelectTip" solo @change="changetaskType($event, i)"></v-select>
      <v-text-field v-bind:value="taskTitle[i]" label="任务标题" @change="changeTaskTitle($event, i)"></v-text-field>
      <v-text-field v-bind:value="taskDescribe[i]" label="任务提要" @change="changeTaskDescribe($event, i)"></v-text-field>
      <v-text-field v-bind:value="taskContent[i]" label="任务内容" @change="changeTaskContent($event, i)"></v-text-field>
      <v-row style="margin-bottom: 20px;">
        <v-img v-bind:src="taskPicUrl[i]" aspect-ratio="1"
               class="grey lighten-2 pa-2" max-width="300" max-height="200" style="margin-right: 20px;margin-left: 20px;">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <template class="pa-2" style="vertical-align: baseline;margin-right: 16px;">
          <v-file-input show-size counter small-chips multiple label="点击上传替换图片" ref="myfile"
                        v-model="files2" v-on:change="taskPicUrlChange(i)"></v-file-input>
        </template>
      </v-row>
      <form style="margin-bottom: 20px;">
        <component v-bind:is="autoComponentList[i]" :detail="detail[i]" @data="getData"></component>
      </form>
      <v-btn class="mr-4" @click="addTask(i)">提交任务</v-btn>
    </v-card>
    <!-- alert系列 -->
    <v-alert type="success" style="position: fixed;top:50%;left:50%;" :value="visible">提交成功！请在“剧情任务设计”查看！</v-alert>
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
  name: 'addPlot_design.vue',
  data: () => ({
    plotTitle: '',
    plotContent: '',
    picUrl: '',
    files1: [], // 临时储存上传的文件（剧情）
    taskTitle: [],
    taskContent: [],
    taskPicUrl: [],
    taskDescribe: [],
    files2: [], // 临时储存上传的文件（任务）
    visible: 0,
    visible2: 0,
    visible3: 0,
    network_error: 0,
    visible_error: 0,
    taskTypes: ['金币控制型任务', '人流量控制型任务', '指数控制型任务', '问答型任务', '收集型任务'],
    taskSelectTip: '下拉选择任务类型',
    taskCount: 1,
    collectControl: () => import('../components/collect_control.vue'),
    moneyControl: () => import('../components/money_control.vue'),
    peopleControl: () => import('../components/people_control.vue'),
    pointControl: () => import('../components/point_control.vue'),
    questionControl: () => import('../components/question_control.vue'),
    autoComponent: [],
    autoComponentList: [],
    detail: [], // 转发至子组件的信息
    plotId: null,
    data: null, // 子组件传回的信息
    taskDetail: null, // 存储任务细节
    taskType: null
  }),
  methods: {
    addTask (i) {
      const that = this
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
        that.taskDetail = datas
        that.taskType = 1
      }
      if (that.data.type === 'moneyControl') {
        console.log(that.data.data)
        const datas = []
        for (var k = 0; k < that.data.data.length; k++) {
          const data = []
          data.push(that.data.data[k].placeValue)
          data.push(that.data.data[k].describeValue)
          data.push(that.data.data[k].numValue)
          datas.push(data)
        }
        console.log(datas)
        that.taskDetail = datas
        that.taskType = 3
      }
      if (that.data.type === 'questionControl') {
        console.log(that.data.data)
        that.taskDetail = that.data.data
        that.taskType = 4
      }
      if (that.data.type === 'collectControl') {
        console.log(that.data.data)
        // eslint-disable-next-line no-inner-declarations
        function F (num) {
          this.num = num
        }
        const f = new F(that.data.data)
        that.taskDetail = f
        that.taskType = 5
      }
      const data = new FormData()
      const json = JSON.stringify(that.taskDetail)
      // console.log('任务细节' + json)
      // console.log('任务content' + that.taskContent)
      // console.log('任务describe' + that.taskDescribe)
      // console.log('任务name' + that.taskTitle)
      // console.log('任务picUrl' + that.taskPicUrl)
      // console.log('剧情plotId' + that.plotId)
      // console.log('任务类型' + that.taskType)

      data.append('content', that.taskContent[i])
      data.append('describe', that.taskDescribe[i])
      data.append('detail', json)
      data.append('name', that.taskTitle[i])
      data.append('picUrl', that.taskPicUrl[i])
      data.append('plotId', that.plotId)
      data.append('type', that.taskType)
      // const headers = { 'Content-Type': 'multipart/form-data' }
      const instance = that.$http.create({
        withCredentials: true
      })
      instance.post('http://47.101.146.28:7003/game2d/plotTask/addTask',
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }).then(function (res) {
        if (res.status === 200 && res.data.status === 'success' && res.data.data != null) {
          that.visible = true
          setTimeout(function () {
            that.visible = false
          }, 2000)

          that.visible3 = false
        }
        console.log(data)
      }, function (err) {
        console.log('err------: ')
        console.log(err)
      })
    },
    changetaskType (value, i) {
      const that = this
      console.log(value)
      console.log(i)
      if (i === that.taskCount - 1) {
        that.taskCount++
      }
      switch (value) {
        case '金币控制型任务': {
          that.autoComponentList.push(that.autoComponent[2])
          const info = []
          const aInfo = ['地点', '操作', '数值']
          info.push(aInfo)
          break
        }
        case '人流量控制型任务': {
          that.autoComponentList.push(that.autoComponent[1])
          break
        }
        case '指数控制型任务': {
          that.autoComponentList.push(that.autoComponent[0])
          break
        }
        case '问答型任务': {
          that.autoComponentList.push(that.autoComponent[3])
          break
        }
        case '收集型任务': {
          that.autoComponentList.push(that.autoComponent[4])
          break
        }
      }
    },
    getData (data) {
      console.log(data)
      this.data = data
    },
    changePlotTitile (value) {
      console.log(value)
      this.plotTitle = value
    },
    changeTaskTitle (value, i) {
      console.log(value)
      console.log(i)
      this.taskTitle[i] = value
    },
    changePlotContent (value) {
      console.log(value)
      this.plotContent = value
    },
    changeTaskContent (value, i) {
      console.log(value)
      console.log(i)
      this.taskContent[i] = value
    },
    changeTaskDescribe (value, i) {
      console.log(value)
      console.log(i)
      this.taskDescribe[i] = value
    },
    addPlot () {
      const that = this
      that.visible3 = true
      console.log('剧情标题' + this.plotTitle)
      console.log('剧情详情' + this.plotContent)
      console.log('剧情图片' + this.picUrl)
      this.$http.get('http://47.101.146.28:7003/game2d/plotTask/addPlot?describe=' + that.plotContent + '&name=' + that.plotTitle + '&picUrl=' + that.picUrl)
        .then(function (response) {
          const data = response.data.data
          console.log(data)
          console.log(data.id)
          that.plotId = data.id
          that.visible3 = false
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    picUrlChange () {
      const that = this
      console.log(that.files1[0])
      if (that.files1[0]) {
        that.visible2 = true
        const data = new FormData()
        data.append('upfile', (that.files1)[0])
        const instance = that.$http.create({
          withCredentials: true
        })
        instance.post('http://www.xuyuyan.cn:7001/trueWorld/upload/uploadFile',
          data,
          { headers: { 'Content-Type': 'multipart/form-data' } }).then(function (data) {
          console.log(data)
          if (data.status === 200 && data.data.state === 'SUCCESS') {
            that.visible2 = false
            that.picUrl = data.data.url
          }
        }, function (err) {
          console.log('err------: ')
          console.log(err)
        })
      }
    },
    taskPicUrlChange (i) {
      const that = this
      console.log(i)
      console.log(that.files2[0])
      if (that.files2[0]) {
        that.visible2 = true
        const data = new FormData()
        data.append('upfile', (that.files2)[0])
        const instance = that.$http.create({
          withCredentials: true
        })
        instance.post('http://www.xuyuyan.cn:7001/trueWorld/upload/uploadFile',
          data,
          { headers: { 'Content-Type': 'multipart/form-data' } }).then(function (data) {
          console.log(data)
          if (data.status === 200 && data.data.state === 'SUCCESS') {
            that.visible2 = false
            that.taskPicUrl[i] = data.data.url
            console.log(that.taskPicUrl)
          }
        }, function (err) {
          console.log('err------: ')
          console.log(err)
        })
      }
    }
  },
  created () {
    const that = this
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
