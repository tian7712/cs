<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>会员详情</span>
    </div>
    <el-card class="box-card">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="用户">
          <!-- <template slot-scope="scope"></template> -->
          <!-- <div style="width: 100px; height: 50px;line-height:50px"> </div> -->
          <el-image style="width: 50px; height: 50px;" :src="form.url"></el-image>
          <span style=" ">{{form.user}}</span>
        </el-form-item>
        <el-form-item label="OPENID">
          <el-input v-model="form.openID"></el-input>
        </el-form-item>
        <el-form-item label="会员等级">
          <el-select v-model="Gradelvalue" placeholder="普通会员">
            <el-option label="普通会员"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="会员分组">
          <el-select v-model="Groupingvalue" placeholder="默认分组">
            <el-option label="默认分组"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="真实姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="手机号">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="积分">
          {{form.integral}}
          <el-button type="text">充值</el-button>
        </el-form-item>
        <el-form-item label="余额">
          {{form.balance}}
          <el-button type="text">充值</el-button>
        </el-form-item>
        <el-form-item label="注册时间">
          <!-- prop="form.time" -->
          {{form.time}}
        </el-form-item>
        <el-form-item label="状态">
          <el-radio v-model="radio" label="1">禁用</el-radio>
          <el-radio v-model="radio" label="2">启用</el-radio>
          <p>设置禁用后，此会员无法访问商城</p>
        </el-form-item>
        <el-form-item label="成交订单数">{{form.ordersNumber}}</el-form-item>
        <el-form-item label="成交金额">{{form.amount}} 元</el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
        </el-form-item>
        <el-button type="primary">提交</el-button>
        <el-button>返回列表</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: "",
      radio: "",
      Gradelvalue: "",
      Groupingvalue: "",
      form: {
        url:
          "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK7jXQaIib1W5AYAgiaxrT3fUHx02KGFBjO0iaAHWPFZxk09d0vic0vqtu4gNT31cicgmMNDTzHm0vbjTg/132",
        user: "萍",
        openID: "o9oQC5cFK1WHXj9DaGXjQKVkIT1U",
        Grade: "普通会员",
        Grouping: "",
        integral: 0,
        balance: "0.00",
        ordersNumber: 0,
        amount: 0,
        time: "2020-03-25 16:40:16",
        name: "",
        phone: ""
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.position {
  margin: 3% 0 1% 1%;
  span {
    color: rgb(76, 153, 89);
  }
}
.el-select {
  width: 100%;
}

p {
  color: #999999;
  margin: 0;
  padding: 0;
}
// .el-form-item__label{
//   margin-left:5% ;
// }
</style>
