<template>
  <div>
    <v-card color="#ffffff" class="myCard">
      <v-card-title class="headline">建筑团队设计 - 一级</v-card-title>
      <v-card-subtitle>
        <form>
          <v-row>
            <v-text-field v-model="level" class="pa-4" label="等级"></v-text-field>
            <v-text-field v-model="unLockedIn" class="pa-4" label="解锁等级"></v-text-field>
            <v-text-field v-model="cost" class="pa-4" label="解锁花费"></v-text-field>
          </v-row>
          <v-row>
            <v-text-field v-model="upExp" class="pa-4" label="获得经验"></v-text-field>
            <v-text-field v-model="visitor" class="pa-4" label="带来的人流量"></v-text-field>
            <v-text-field v-model="increaseWorker" class="pa-4" label="增加的工人数"></v-text-field>
          </v-row>
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
                            v-model="files1" v-on:change="picUrlChange"></v-file-input>
            </template>
          </v-row>
<!--          <v-select v-model="select" :items="items" label="Item" @change="$v.select.$touch()" @blur="$v.select.$touch()"></v-select>-->
<!--          <v-checkbox v-model="checkbox" label="Do you agree?" @change="$v.checkbox.$touch()" @blur="$v.checkbox.$touch()"></v-checkbox>-->
          <v-btn class="mr-4" @click="submit1">提交修改</v-btn>
        </form>
      </v-card-subtitle>
    </v-card>
    <v-card color="#ffffff" class="myCard">
      <v-card-title class="headline">建筑团队设计 - 二级</v-card-title>
      <v-card-subtitle>
        <form>
          <v-row>
            <v-text-field v-model="level2" class="pa-4" label="等级"></v-text-field>
            <v-text-field v-model="unLockedIn2" class="pa-4" label="解锁等级"></v-text-field>
            <v-text-field v-model="cost2" class="pa-4" label="解锁花费"></v-text-field>
          </v-row>
          <v-row>
            <v-text-field v-model="upExp2" class="pa-4" label="获得经验"></v-text-field>
            <v-text-field v-model="visitor2" class="pa-4" label="带来的人流量"></v-text-field>
            <v-text-field v-model="increaseWorker2" class="pa-4" label="增加的工人数"></v-text-field>
          </v-row>
          <v-row style="margin-bottom: 20px;">
            <v-img v-bind:src="picUrl2" aspect-ratio="1"
                   class="grey lighten-2 pa-2" max-width="300" max-height="200" style="margin-right: 20px;margin-left: 20px;">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <template class="pa-2" style="vertical-align: baseline;margin-right: 16px;">
              <v-file-input show-size counter small-chips multiple label="点击上传替换图片" ref="myfile"
                            v-model="files2" v-on:change="picUrlChange2"></v-file-input>
            </template>
          </v-row>
          <!--          <v-select v-model="select" :items="items" label="Item" @change="$v.select.$touch()" @blur="$v.select.$touch()"></v-select>-->
          <!--          <v-checkbox v-model="checkbox" label="Do you agree?" @change="$v.checkbox.$touch()" @blur="$v.checkbox.$touch()"></v-checkbox>-->
          <v-btn class="mr-4" @click="submit2">提交修改</v-btn>
        </form>
      </v-card-subtitle>
    </v-card>
    <v-card color="#ffffff" class="myCard">
      <v-card-title class="headline">建筑团队设计 - 三级</v-card-title>
      <v-card-subtitle>
        <form>
          <v-row>
            <v-text-field v-model="level3" class="pa-4" label="等级"></v-text-field>
            <v-text-field v-model="unLockedIn3" class="pa-4" label="解锁等级"></v-text-field>
            <v-text-field v-model="cost3" class="pa-4" label="解锁花费"></v-text-field>
          </v-row>
          <v-row>
            <v-text-field v-model="upExp3" class="pa-4" label="获得经验"></v-text-field>
            <v-text-field v-model="visitor3" class="pa-4" label="带来的人流量"></v-text-field>
            <v-text-field v-model="increaseWorker3" class="pa-4" label="增加的工人数"></v-text-field>
          </v-row>
          <v-row style="margin-bottom: 20px;">
            <v-img v-bind:src="picUrl3" aspect-ratio="1"
                   class="grey lighten-2 pa-2" max-width="300" max-height="200" style="margin-right: 20px;margin-left: 20px;">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <template class="pa-2" style="vertical-align: baseline;margin-right: 16px;">
              <v-file-input show-size counter small-chips multiple label="点击上传替换图片" ref="myfile"
                            v-model="files3" v-on:change="picUrlChange3"></v-file-input>
            </template>
          </v-row>
          <!--          <v-select v-model="select" :items="items" label="Item" @change="$v.select.$touch()" @blur="$v.select.$touch()"></v-select>-->
          <!--          <v-checkbox v-model="checkbox" label="Do you agree?" @change="$v.checkbox.$touch()" @blur="$v.checkbox.$touch()"></v-checkbox>-->
          <v-btn class="mr-4" @click="submit3">提交修改</v-btn>
        </form>
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'buildTeam_design',
  data: () => ({
    level: '1',
    unLockedIn: '1',
    cost: '500',
    upExp: '50',
    visitor: '20',
    increaseWorker: '1',
    picUrl: '',
    files1: '',
    level2: '2',
    unLockedIn2: '10',
    cost2: '2000',
    upExp2: '100',
    visitor2: '80',
    increaseWorker2: '2',
    picUrl2: '',
    files2: '',
    level3: '3',
    unLockedIn3: '25',
    cost3: '10000',
    upExp3: '200',
    visitor3: '200',
    increaseWorker3: '4',
    picUrl3: '',
    files3: '',
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
    checkbox: false
  }),

  computed: {
  },

  methods: {
    submit1 () {
      const that = this
      const data = new FormData()
      console.log(that.increaseWorker)
      data.append('cost', that.cost)
      data.append('increaseWorker', that.increaseWorker)
      data.append('level', that.level)
      data.append('picUrl', that.picUrl)
      data.append('unlockedIn', that.unLockedIn)
      data.append('upExp', that.upExp)
      data.append('visitor', that.visitor)
      // const headers = { 'Content-Type': 'multipart/form-data' }
      const instance = that.$http.create({
        withCredentials: true
      })
      // // 也可以用RequestParam根据键名去取额外参数
      // param.append('extraParam1', "额外参数1")
      // param.append('extraParam2', "额外参数2")
      instance.post('http://www.test.com:7003/game2d/vstationteam/updateBuildingTeamTypeInfo',
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }).then(function (data) {
        console.log(data)
      }, function (err) {
        console.log('err------: ')
        console.log(err)
      })
    },
    submit2 () {
      const that = this
      const data = new FormData()
      data.append('cost', that.cost2)
      data.append('increaseWorker', that.increaseWorker2)
      data.append('level', that.level2)
      data.append('picUrl', that.picUrl2)
      data.append('unlockedIn', that.unLockedIn2)
      data.append('upExp', that.upExp2)
      data.append('visitor', that.visitor2)
      // const headers = { 'Content-Type': 'multipart/form-data' }
      const instance = that.$http.create({
        withCredentials: true
      })
      // // 也可以用RequestParam根据键名去取额外参数
      // param.append('extraParam1', "额外参数1")
      // param.append('extraParam2', "额外参数2")
      instance.post('http://www.test.com:7003/game2d/vstationteam/updateBuildingTeamTypeInfo',
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }).then(function (data) {
        console.log(data)
      }, function (err) {
        console.log('err------: ')
        console.log(err)
      })
    },
    submit3 () {
      const that = this
      const data = new FormData()
      data.append('cost', that.cost3)
      data.append('increaseWorker', that.increaseWorker3)
      data.append('level', that.level3)
      data.append('picUrl', that.picUrl3)
      data.append('unlockedIn', that.unLockedIn3)
      data.append('upExp', that.upExp3)
      data.append('visitor', that.visitor3)
      // const headers = { 'Content-Type': 'multipart/form-data' }
      const instance = that.$http.create({
        withCredentials: true
      })
      // // 也可以用RequestParam根据键名去取额外参数
      // param.append('extraParam1', "额外参数1")
      // param.append('extraParam2', "额外参数2")
      instance.post('http://www.test.com:7003/game2d/vstationteam/updateBuildingTeamTypeInfo',
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }).then(function (data) {
        console.log(data)
      }, function (err) {
        console.log('err------: ')
        console.log(err)
      })
    },
    picUrlChange () {
      const that = this
      const data = new FormData()
      data.append('upfile', (that.files1)[0])
      // const headers = { 'Content-Type': 'multipart/form-data' }
      const instance = that.$http.create({
        withCredentials: true
      })
      // // 也可以用RequestParam根据键名去取额外参数
      // param.append('extraParam1', "额外参数1")
      // param.append('extraParam2', "额外参数2")
      instance.post('http://www.xuyuyan.cn:7001/trueWorld/upload/uploadFile',
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }).then(function (data) {
        console.log(data.data.url)
        that.picUrl = data.data.url
      }, function (err) {
        console.log('err------: ')
        console.log(err)
      })
    },
    picUrlChange2 () {
      const that = this
      const data = new FormData()
      data.append('upfile', (that.files2)[0])
      // const headers = { 'Content-Type': 'multipart/form-data' }
      const instance = that.$http.create({
        withCredentials: true
      })
      // // 也可以用RequestParam根据键名去取额外参数
      // param.append('extraParam1', "额外参数1")
      // param.append('extraParam2', "额外参数2")
      instance.post('http://www.xuyuyan.cn:7001/trueWorld/upload/uploadFile',
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }).then(function (data) {
        console.log(data.data.url)
        that.picUrl2 = data.data.url
      }, function (err) {
        console.log('err------: ')
        console.log(err)
      })
    },
    picUrlChange3 () {
      const that = this
      const data = new FormData()
      data.append('upfile', (that.files3)[0])
      // const headers = { 'Content-Type': 'multipart/form-data' }
      const instance = that.$http.create({
        withCredentials: true
      })
      // // 也可以用RequestParam根据键名去取额外参数
      // param.append('extraParam1', "额外参数1")
      // param.append('extraParam2', "额外参数2")
      instance.post('http://www.xuyuyan.cn:7001/trueWorld/upload/uploadFile',
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }).then(function (data) {
        console.log(data.data.url)
        that.picUrl3 = data.data.url
      }, function (err) {
        console.log('err------: ')
        console.log(err)
      })
    }
  },
  created () {
    const that = this
    console.log(this)
    this.$http.get('http://47.101.146.28:7003/game2d/vstationteam/getVStationTeamTypeInfoById?id=1')
      .then(function (response) {
        const detail = response.data.data.detail
        const detailJson = JSON.parse(detail)
        console.log(detailJson[0].unlockedIn)
        that.unLockedIn = detailJson[0].unlockedIn
        that.unLockedIn2 = detailJson[1].unlockedIn
        that.unLockedIn3 = detailJson[2].unlockedIn
        that.cost = detailJson[0].cost
        that.cost2 = detailJson[1].cost
        that.cost3 = detailJson[2].cost
        that.upExp = detailJson[0].upExp
        that.upExp2 = detailJson[1].upExp
        that.upExp3 = detailJson[2].upExp
        that.visitor = detailJson[0].visitor
        that.visitor2 = detailJson[1].visitor
        that.visitor3 = detailJson[2].visitor
        that.increaseWorker = detailJson[0].increaseWorker
        that.increaseWorker2 = detailJson[1].increaseWorker
        that.increaseWorker3 = detailJson[2].increaseWorker
        that.picUrl = detailJson[0].picUrl
        that.picUrl2 = detailJson[1].picUrl
        that.picUrl3 = detailJson[2].picUrl
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
</script>

<style scoped>
  .myCard {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    padding-right: 20px;
  }
</style>
