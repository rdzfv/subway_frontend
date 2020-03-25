<template>
  <div>
    <div style="margin-bottom: 20px;">任务类型：答题控制型</div>
    <div>
      <v-text-field v-bind:value="num" label="答题数量" @change="changeNum($event)"></v-text-field>
      <v-card color="#ffffff" class="myCard" style="padding: 10px;margin-bottom: 10px;" v-for="(item, i) in questions" :key="i">
        <div>
          <h3 style="display: inline-block;margin-bottom: 10px;margin-left: 10px;margin-top: 20px;">题目 {{i}}</h3>
          <v-btn style="display: inline-block;float: right;right: 20px;top: 20px;position: absolute;" @click="delQuestion(i)" color="error">删除题目</v-btn>
        </div>
        <v-text-field v-bind:value="item.content" label="题干" @change="changeQuestion($event, i)"></v-text-field>
        <v-radio-group v-model="answers[i]">
          <v-radio v-for="n in item.options" :key="n" :label="n" :value="n"></v-radio>
        </v-radio-group>
        <v-text-field v-bind:value="item.tips" label="解析" @change="changeTip($event, i)"></v-text-field>
      </v-card>
    </div>
    <v-card color="#ffffff" class="myCard" style="padding: 10px;margin-bottom: 10px;">
      <h3 style="margin-bottom: 10px;">新增题目</h3>
      <v-text-field v-bind:value="content" label="题干" @change="addChangeContent($event)"></v-text-field>
      <v-text-field v-bind:value="options" label="选项(不同的选项请用逗号隔开)" @change="addchangeOptions($event)"></v-text-field>
      <v-text-field v-bind:value="rightAnswer" label="正确选项内容(正确选项的完整内容)" @change="addchangeRightAnswer($event)"></v-text-field>
      <v-text-field v-bind:value="tip" label="解析" @change="addChangeTip($event)"></v-text-field>
      <v-btn class="mr-4" style="margin-bottom: 20px;margin-top: 10px;" @click="addQuestion()">新增题目</v-btn>
    </v-card>
    <v-alert type="success" style="position: fixed;top:50%;left:50%;" :value="visibleAddQuestionSuccess">新的题目已保存！请点击“提交修改”！</v-alert>
    <v-alert type="success" style="position: fixed;top:50%;left:50%;" :value="visibleDelQuestionSuccess">题目已删除！请点击“提交修改”！</v-alert>
  </div>
</template>

<script>
export default {
  name: 'question_control',
  data: () => ({
    radioGroup: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    questions: [],
    num: null,
    answers: [],
    content: '',
    options: '',
    rightAnswer: '',
    tip: '',
    visibleAddQuestionSuccess: 0,
    visibleDelQuestionSuccess: 0
  }),
  detail: {
    type: String,
    default: ''
  },
  methods: {
    delQuestion (i) {
      console.log(i)
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
        if (j === i) continue
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
      // 弹框
      that.visibleDelQuestionSuccess = true
      setTimeout(function () {
        that.visibleDelQuestionSuccess = false
      }, 2000)
    },
    addChangeContent (value) {
      console.log(value)
      this.content = value
    },
    addchangeOptions (value) {
      console.log(value)
      this.options = value
    },
    addchangeRightAnswer (value) {
      console.log(value)
      this.rightAnswer = value
    },
    addChangeTip (value) {
      console.log(value)
      this.tip = value
    },
    addQuestion () {
      console.log('题干：' + this.content)
      console.log('选项：' + this.options)
      console.log('正确选项：' + this.rightAnswer)
      console.log('提示：' + this.tip)
      const options = this.options.split(',')
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
      let questions = this.detail.questions
      console.log(questions)
      if (questions === undefined || questions === null || questions === '') {
        questions = []
      }
      for (var j = 0; j < questions.length; j++) {
        const obj = new Obj(questions[j].content, questions[j].options, that.answers[j], questions[j].tips)
        objs.push(obj)
      }
      const obj = new Obj(that.content, options, that.rightAnswer, that.tip)
      objs.push(obj)
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
      // 弹框
      that.visibleAddQuestionSuccess = true
      setTimeout(function () {
        that.visibleAddQuestionSuccess = false
      }, 2000)
    },
    changeNum (value) {
      console.log(value)
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
