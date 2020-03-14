<template>
  <div>
    <div>任务类型：金币控制型</div>
  </div>
</template>

<script>
export default {
  name: 'money_control',
  data: () => ({
    goodsId: null,
    kindList: [{ name: '小可爱', id: 1 }, { name: '小仙女', id: 2 }, { name: '小宝龙', id: 3 }]
  }),
  props: {
    detail: {
      type: String,
      default: ''
    }
  },
  created () {
  }
}
</script>

<style scoped>

</style>
