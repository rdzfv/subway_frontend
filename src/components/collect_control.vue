<template>
  <div>
    <div>任务类型：收集控制型</div>
    <v-text-field v-bind:value="num" label="收集数量" @change="changeNum($event)"></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'collect_control',
  props: {
    detail: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    radioGroup: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    questions: [],
    num: null,
    answers: []
  }),
  methods: {
    changeNum (value) {
      console.log(value)
      this.num = value
      // 把修改后的全部数据传递回父组件
      function Data (objs) {
        this.type = 'collectControl'
        this.data = objs
      }
      const data = new Data(value)
      this.$emit('data', data)
    }
  },
  created () {
    const that = this
    console.log(that.detail)
    console.log(that.detail.num)
    this.num = that.detail.num
  }
}
</script>

<style scoped>

</style>
