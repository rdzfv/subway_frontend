<template>
  <div>
    <v-card color="#ffffff" class="myCard">
      <v-card-title class="headline">服装店设计 - 一级</v-card-title>
      <v-card-subtitle>
        <form>
          <v-row>
            <v-text-field v-model="level" class="pa-4" label="等级"></v-text-field>
            <v-text-field v-model="unLockedIn" class="pa-4" label="解锁等级"></v-text-field>
            <v-text-field v-model="cost" class="pa-4" label="解锁花费"></v-text-field>
            <v-text-field v-model="upExp" class="pa-4" label="获得经验"></v-text-field>
          </v-row>
          <v-row>
            <v-text-field v-model="visitor" class="pa-4" label="带来的人流量"></v-text-field>
            <v-text-field v-model="tidy" class="pa-4" label="消耗的清洁指数"></v-text-field>
            <v-text-field v-model="unCrowdedness" class="pa-4" label="消耗的畅通指数"></v-text-field>
            <v-text-field v-model="safety" class="pa-4" label="消耗的安全指数"></v-text-field>
          </v-row>
          <v-row>
            <v-text-field v-model="profit" class="pa-4" label="每秒带来的收益"></v-text-field>
            <v-text-field v-model="maxProfit" class="pa-4" label="可存储的最大收益"></v-text-field>
            <v-text-field v-model="worker" class="pa-4" label="建造所需工人数"></v-text-field>
            <v-text-field v-model="building_time" class="pa-4" label="建造耗时"></v-text-field>
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
      <v-card-title class="headline">服装店设计 - 二级</v-card-title>
      <v-card-subtitle>
        <form>
          <v-row>
            <v-text-field v-model="level2" class="pa-4" label="等级"></v-text-field>
            <v-text-field v-model="unLockedIn2" class="pa-4" label="解锁等级"></v-text-field>
            <v-text-field v-model="cost2" class="pa-4" label="解锁花费"></v-text-field>
            <v-text-field v-model="upExp2" class="pa-4" label="获得经验"></v-text-field>
          </v-row>
          <v-row>
            <v-text-field v-model="visitor2" class="pa-4" label="带来的人流量"></v-text-field>
            <v-text-field v-model="tidy2" class="pa-4" label="消耗的清洁指数"></v-text-field>
            <v-text-field v-model="unCrowdedness2" class="pa-4" label="消耗的畅通指数"></v-text-field>
            <v-text-field v-model="safety2" class="pa-4" label="消耗的安全指数"></v-text-field>
          </v-row>
          <v-row>
            <v-text-field v-model="profit2" class="pa-4" label="每秒带来的收益"></v-text-field>
            <v-text-field v-model="maxProfit2" class="pa-4" label="可存储的最大收益"></v-text-field>
            <v-text-field v-model="worker2" class="pa-4" label="建造所需工人数"></v-text-field>
            <v-text-field v-model="building_time2" class="pa-4" label="建造耗时"></v-text-field>
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
      <v-card-title class="headline">服装店设计 - 三级</v-card-title>
      <v-card-subtitle>
        <form>
          <v-row>
            <v-text-field v-model="level3" class="pa-4" label="等级"></v-text-field>
            <v-text-field v-model="unLockedIn3" class="pa-4" label="解锁等级"></v-text-field>
            <v-text-field v-model="cost3" class="pa-4" label="解锁花费"></v-text-field>
            <v-text-field v-model="upExp3" class="pa-4" label="获得经验"></v-text-field>
          </v-row>
          <v-row>
            <v-text-field v-model="visitor3" class="pa-4" label="带来的人流量"></v-text-field>
            <v-text-field v-model="tidy3" class="pa-4" label="消耗的清洁指数"></v-text-field>
            <v-text-field v-model="unCrowdedness3" class="pa-4" label="消耗的畅通指数"></v-text-field>
            <v-text-field v-model="safety3" class="pa-4" label="消耗的安全指数"></v-text-field>
          </v-row>
          <v-row>
            <v-text-field v-model="profit3" class="pa-4" label="每秒带来的收益"></v-text-field>
            <v-text-field v-model="maxProfit3" class="pa-4" label="可存储的最大收益"></v-text-field>
            <v-text-field v-model="worker3" class="pa-4" label="建造所需工人数"></v-text-field>
            <v-text-field v-model="building_time3" class="pa-4" label="建造耗时"></v-text-field>
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
    <v-alert type="success" style="position: fixed;top:50%;left:50%;" :value="visible">提交成功！</v-alert>
    <v-alert type="error" style="position: fixed;top:50%;left:50%;" :value="visible_error">提交失败！</v-alert>
    <v-alert type="error" style="position: fixed;top:50%;left:50%;" :value="network_error">网络错误！</v-alert>
    <v-alert border="top" colored-border="true" elevation="2" color="#4CAF50" :value="visible2"
             style="position: fixed;top:50%;left:50%;margin-left: auto;margin-right: auto;width: 300px;">
      <v-progress-circular indeterminate color="#4CAF50" style="margin-right: 20px"></v-progress-circular>
      图片上传中...
    </v-alert>
  </div>
</template>

<script>
export default {
  name: 'buildTeam_design',
  data: () => ({
    network_error: false,
    visible: false,
    visible2: false,
    visible_error: false,
    level: 1,
    unLockedIn: 1,
    cost: 1,
    upExp: 1,
    visitor: 1,
    tidy: 1,
    unCrowdedness: 1,
    safety: 1,
    profit: 1,
    maxProfit: 1,
    worker: 1,
    building_time: 1,
    picUrl: '',
    files1: '',
    level2: 1,
    unLockedIn2: 1,
    cost2: 1,
    upExp2: 1,
    visitor2: 1,
    tidy2: 1,
    unCrowdedness2: 1,
    safety2: 1,
    profit2: 1,
    maxProfit2: 1,
    worker2: 1,
    building_time2: 1,
    picUrl2: '',
    files2: '',
    level3: 1,
    unLockedIn3: 1,
    cost3: 1,
    upExp3: 1,
    visitor3: 1,
    tidy3: 1,
    unCrowdedness3: 1,
    safety3: 1,
    profit3: 1,
    maxProfit3: 1,
    worker3: 1,
    building_time3: 1,
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
      data.append('type', 3)
      data.append('cost', that.cost)
      data.append('increaseTidy', that.increaseTidy)
      data.append('increaseUncrowded', that.increaseUncrowded)
      data.append('increaseSafe', that.increaseSafe)
      data.append('level', 1)
      data.append('picUrl', that.picUrl)
      data.append('unlockedIn', that.unLockedIn)
      data.append('upExp', that.upExp)
      data.append('visitor', that.visitor)
      data.append('tidy', that.tidy)
      data.append('unCrowdedness', that.unCrowdedness)
      data.append('safety', that.safety)
      data.append('profit', that.profit)
      data.append('maxProfit', that.maxProfit)
      data.append('building_time', that.building_time)
      data.append('worker', that.worker)
      // const headers = { 'Content-Type': 'multipart/form-data' }
      const instance = that.$http.create({
        withCredentials: true
      })
      // // 也可以用RequestParam根据键名去取额外参数
      // param.append('extraParam1', "额外参数1")
      // param.append('extraParam2', "额外参数2")
      instance.post('http://47.101.146.28:7003/game2d/vstationstore/updateStoreTypeInfo',
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }).then(function (data) {
        if (data.status === 200 && data.data.status === 'success' && data.data.data != null) {
          that.visible = true
          setTimeout(function () {
            that.visible = false
          }, 2000)
        } else {
          that.visible_error = true
          setTimeout(function () {
            that.visible_error = false
          }, 2000)
        }
      }, function (err) {
        console.log('err------: ')
        console.log(err)
      })
    },
    submit2 () {
      const that = this
      const data = new FormData()
      data.append('type', 3)
      data.append('cost', that.cost2)
      data.append('increaseTidy', that.increaseTidy2)
      data.append('increaseUncrowded', that.increaseUncrowded2)
      data.append('increaseSafe', that.increaseSafe2)
      data.append('level', 2)
      data.append('picUrl', that.picUrl2)
      data.append('unlockedIn', that.unLockedIn2)
      data.append('upExp', that.upExp2)
      data.append('visitor', that.visitor2)
      data.append('tidy', that.tidy2)
      data.append('unCrowdedness', that.unCrowdedness2)
      data.append('safety', that.safety2)
      data.append('profit', that.profit2)
      data.append('maxProfit', that.maxProfit2)
      data.append('building_time', that.building_time2)
      data.append('worker', that.worker2)
      // const headers = { 'Content-Type': 'multipart/form-data' }
      const instance = that.$http.create({
        withCredentials: true
      })
      // // 也可以用RequestParam根据键名去取额外参数
      // param.append('extraParam1', "额外参数1")
      // param.append('extraParam2', "额外参数2")
      instance.post('http://47.101.146.28:7003/game2d/vstationteam/updateOtherTeamTypeInfo',
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }).then(function (data) {
        if (data.status === 200 && data.data.status === 'success' && data.data.data != null) {
          that.visible = true
          setTimeout(function () {
            that.visible = false
          }, 2000)
        } else {
          that.visible_error = true
          setTimeout(function () {
            that.visible_error = false
          }, 2000)
        }
      }, function (err) {
        console.log('err------: ')
        console.log(err)
      })
    },
    submit3 () {
      const that = this
      const data = new FormData()
      data.append('type', 3)
      data.append('cost', that.cost3)
      data.append('increaseTidy', that.increaseTidy3)
      data.append('increaseUncrowded', that.increaseUncrowded3)
      data.append('increaseSafe', that.increaseSafe3)
      data.append('level', 3)
      data.append('picUrl', that.picUrl3)
      data.append('unlockedIn', that.unLockedIn3)
      data.append('upExp', that.upExp3)
      data.append('visitor', that.visitor3)
      data.append('tidy', that.tidy3)
      data.append('unCrowdedness', that.unCrowdedness3)
      data.append('safety', that.safety3)
      data.append('profit', that.profit3)
      data.append('maxProfit', that.maxProfit3)
      data.append('building_time', that.building_time3)
      data.append('worker', that.worker3)
      // const headers = { 'Content-Type': 'multipart/form-data' }
      const instance = that.$http.create({
        withCredentials: true
      })
      // // 也可以用RequestParam根据键名去取额外参数
      // param.append('extraParam1', "额外参数1")
      // param.append('extraParam2', "额外参数2")
      instance.post('http://47.101.146.28:7003/game2d/vstationteam/updateOtherTeamTypeInfo',
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }).then(function (data) {
        if (data.status === 200 && data.data.status === 'success' && data.data.data != null) {
          that.visible = true
          setTimeout(function () {
            that.visible = false
          }, 2000)
        } else {
          that.visible_error = true
          setTimeout(function () {
            that.visible_error = false
          }, 2000)
        }
      }, function (err) {
        console.log('err------: ')
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
          console.log(data)
          if (data.status === 200 && data.data.state === 'SUCCESS') {
            that.visible2 = false
          } else {
            that.network_error = true
            setTimeout(function () {
              that.network_error = false
            }, 2000)
          }
          that.picUrl = data.data.url
        }, function (err) {
          console.log('err------: ')
          console.log(err)
        })
      }
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
        if (data.status === 200 && data.data.state === 'SUCCESS') {
          that.visible2 = false
        } else {
          that.network_error = true
          setTimeout(function () {
            that.network_error = false
          }, 2000)
        }
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
        if (data.status === 200 && data.data.state === 'SUCCESS') {
          that.visible2 = false
        } else {
          that.network_error = true
          setTimeout(function () {
            that.network_error = false
          }, 2000)
        }
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
    this.$http.get('http://47.101.146.28:7003/game2d/vstationstore/getVStationStoreTypeInfoById?id=3')
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
        that.tidy = detailJson[0].tidy
        that.tidy2 = detailJson[1].tidy
        that.tidy3 = detailJson[2].tidy
        that.unCrowdedness = detailJson[0].unCrowdedness
        that.unCrowdedness2 = detailJson[1].unCrowdedness
        that.unCrowdedness3 = detailJson[2].unCrowdedness
        that.safety = detailJson[0].safety
        that.safety2 = detailJson[1].safety
        that.safety3 = detailJson[2].safety
        that.profit = detailJson[0].profit
        that.profit2 = detailJson[1].profit
        that.profit3 = detailJson[2].profit
        that.maxProfit = detailJson[0].maxProfit
        that.maxProfit2 = detailJson[1].maxProfit
        that.maxProfit3 = detailJson[2].maxProfit
        that.worker = detailJson[0].worker
        that.worker2 = detailJson[1].worker
        that.worker3 = detailJson[2].worker
        that.building_time = detailJson[0].building_time
        that.building_time2 = detailJson[1].building_time
        that.building_time3 = detailJson[2].building_time
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
