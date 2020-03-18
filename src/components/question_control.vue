<template>
  <div>
    <div style="margin-bottom: 20px;">任务类型：答题控制型</div>
    <div>
      <v-card color="#ffffff" class="myCard" style="padding: 10px;margin-bottom: 10px;" v-for="(item, i) in questions" :key="i">
        <h3 style="margin-bottom: 10px;">题目 {{i}}</h3>
        <v-text-field v-bind:value="item.content" label="题干" @change="changeQuestion($event, i)"></v-text-field>
        <v-radio-group v-model="answers[i]">
          <v-radio v-for="n in item.options" :key="n" :label="n" :value="n"></v-radio>
        </v-radio-group>
        <v-text-field v-bind:value="item.tips" label="解析" @change="changeTip($event, i)"></v-text-field>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'question_control',
  data: () => ({
    radioGroup: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    questions: [],
    num: null,
    answers: []
  }),
  detail: {
    type: String,
    default: ''
  },
  methods: {
    changeQuestion (value, i) {
      console.log(value)
      console.log(i)
      this.describe = value
      console.log(this.answers)
      // 把更新后的修改
      this.detail.questions[i].content = value
      // 把修改后的全部数据传递回父组件
      // 对象法则
      function Obj (content, options, answer, tips) {
        this.content = content
        this.options = options
        this.answer = answer
        this.tips = tips
      }
      // 构造json
      const that = this
      var objs = []
      const questions = this.detail.questions
      console.log(questions)
      for (var j = 0; j < questions.length; j++) {
        const obj = new Obj(questions[j].content, questions[j].options, that.answers[j], questions[j].tips)
        objs.push(obj)
      }
      function F (num, questions) {
        this.num = num
        this.questions = questions
      }
      const f = new F(that.num, objs)
      function Data (objs) {
        this.type = 'questionControl'
        this.data = objs
      }
      const data = new Data(f)
      this.$emit('data', data)
    },
    changeTip (value, i) {
      console.log(value)
      this.content = value
      // 把更新后的修改
      this.detail.questions[i].tips = value
      // 把修改后的全部数据传递回父组件
      // 对象法则
      function Obj (content, options, answer, tips) {
        this.content = content
        this.options = options
        this.answer = answer
        this.tips = tips
      }
      // 构造json
      const that = this
      var objs = []
      const questions = this.detail.questions
      console.log(questions)
      for (var j = 0; j < questions.length; j++) {
        const obj = new Obj(questions[j].content, questions[j].options, that.answers[j], questions[j].tips)
        objs.push(obj)
      }
      function F (num, questions) {
        this.num = num
        this.questions = questions
      }
      const f = new F(that.num, objs)
      function Data (objs) {
        this.type = 'questionControl'
        this.data = objs
      }
      const data = new Data(f)
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
    console.log(that.detail)
    console.log(that.detail.num)
    console.log(that.detail.questions)
    this.num = that.detail.num
    this.questions = that.detail.questions
    // 组建答案数组
    var answers = []
    for (var i = 0; i < (that.detail.questions).length; i++) {
      // console.log(that.detail.questions[i].answer)
      // console.log(that.detail.questions[i].options[that.detail.questions[i].answer])
      answers.push(that.detail.questions[i].answer)
    }
    console.log(answers)
    that.answers = answers
  }
}
</script>

<style scoped>

</style>
