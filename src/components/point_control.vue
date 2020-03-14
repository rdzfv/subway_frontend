<template>
    <div style="margin-top: 20px;">
      <div>任务类型：指数控制型</div>
      <v-row v-for="(item, i) in detail" v-bind:key="i">
        <v-select class="pa-3" :items="points" v-bind:label="item[0]" solo @change="changePoints(i, $event)"></v-select>
        <v-select class="pa-3" :items="describes" v-bind:label="item[1]" solo @change="changeDescribes(i, $event)"></v-select>
        <v-select class="pa-3" :items="nums" v-bind:label="item[2]" solo @change="changeNums(i, $event)"></v-select>
      </v-row>
      <h3>新增：</h3>
      <v-row>
        <v-select class="pa-4" :items="points" label="指数类型" solo @change="addPoints($event)"></v-select>
        <v-select class="pa-4" :items="describes" label="操作" solo @change="addDescribes($event)"></v-select>
        <v-select class="pa-4" :items="nums" label="数值" solo @change="addNums($event)"></v-select>
<!--        <v-btn class="pa-4" @click="add()" style="margin-left: 50px;margin-top: 20px;">添加条件</v-btn>-->
        <v-btn class="mr-4" @click="add" style="margin-top: 20px;">添加条件</v-btn>
      </v-row>
    </div>
</template>

<script>
export default {
  name: 'point_control.vue',
  detail: {
    type: String,
    default: ''
  },
  data: () => ({
    points: ['安全指数', '清洁指数', '畅通指数'],
    describes: ['大于', '小于'],
    nums: [60, 70, 80, 90, 100],
    detail: null,
    pointValue: '',
    describeValue: null,
    numValue: null,
    test: ''
  }),
  methods: {
    addPoints (value) {
      this.pointValue = value
      console.log(this.pointValue)
    },
    addDescribes (value) {
      this.describeValue = value
      console.log(this.describeValue)
    },
    addNums (value) {
      this.numValue = value
      console.log(this.numValue)
    },
    add () {
      const newObj = [this.pointValue, this.describeValue, this.numValue]
      console.log(newObj)
      const detail = this.detail
      detail.push(newObj)
      // emit到父组件
      // 对象法则
      function Obj (pointValue, describeValue, numValue) {
        this.pointValue = pointValue
        this.describeValue = describeValue
        this.numValue = numValue
      }
      // 构造json
      var objs = []
      for (var j = 0; j < detail.length; j++) {
        const obj = new Obj(detail[j][0], detail[j][1], detail[j][2])
        objs.push(obj)
      }
      function Data (objs) {
        this.type = 'pointControl'
        this.data = objs
      }
      const data = new Data(objs)
      this.$emit('data', data)
    },
    changePoints (i, value) { // i代表第几组
      const that = this
      console.log(value)
      // 修改原值
      const detail = that.detail
      detail[i][0] = value
      // 对象法则
      function Obj (pointValue, describeValue, numValue) {
        this.pointValue = pointValue
        this.describeValue = describeValue
        this.numValue = numValue
      }
      // 构造json
      var objs = []
      for (var j = 0; j < detail.length; j++) {
        const obj = new Obj(detail[j][0], detail[j][1], detail[j][2])
        objs.push(obj)
      }
      function Data (objs) {
        this.type = 'pointControl'
        this.data = objs
      }
      const data = new Data(objs)
      this.$emit('data', data)
    },
    changeDescribes (i, value) {
      const that = this
      console.log(value)
      // 修改原值
      const detail = that.detail
      detail[i][1] = value
      // 对象法则
      function Obj (pointValue, describeValue, numValue) {
        this.pointValue = pointValue
        this.describeValue = describeValue
        this.numValue = numValue
      }
      // 构造json
      var objs = []
      for (var j = 0; j < detail.length; j++) {
        const obj = new Obj(detail[j][0], detail[j][1], detail[j][2])
        objs.push(obj)
      }
      function Data (objs) {
        this.type = 'pointControl'
        this.data = objs
      }
      const data = new Data(objs)
      this.$emit('data', data)
    },
    changeNums (i, value) {
      const that = this
      console.log(value)
      // 修改原值
      const detail = that.detail
      detail[i][1] = value
      // 对象法则
      function Obj (pointValue, describeValue, numValue) {
        this.pointValue = pointValue
        this.describeValue = describeValue
        this.numValue = numValue
      }
      // 构造json
      var objs = []
      for (var j = 0; j < detail.length; j++) {
        const obj = new Obj(detail[j][0], detail[j][1], detail[j][2])
        objs.push(obj)
      }
      function Data (objs) {
        this.type = 'pointControl'
        this.data = objs
      }
      const data = new Data(objs)
      this.$emit('data', data)
    }
  },
  props: {
    detail: {
      type: String,
      default: ''
    }
  },
  created () {
    const that = this
    const detailJson = JSON.parse(that.detail)
    console.log(detailJson)
    that.detail = detailJson
  }
}
</script>

<style scoped>

</style>
