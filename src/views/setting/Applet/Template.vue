<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>模板消息设置</span>
    </div>
    <el-card class="box-card cardStyle">
      <el-form ref="form" :model="form" label-width="160px" label-position="left">
        <el-form-item label="订单支付成功通知">
          <el-input v-model="form.OrderPayment"></el-input>
        </el-form-item>

        <el-form-item label="订单发货通知">
          <el-input v-model="form.OrderDelivery"></el-input>
        </el-form-item>
    
        <el-form-item label="核销成功通知">
          <el-input v-model="form.WriteOff"></el-input>
        </el-form-item>
         <el-form-item label="退款成功通知">
          <el-input v-model="form.refund"></el-input>
        </el-form-item>
         <el-form-item label="团长申请成功发送通知">
          <el-input v-model="form.Apply"></el-input>
        </el-form-item>
         <el-form-item label="团长提现到账提醒">
          <el-input v-model="form.withdrawal"></el-input>
        </el-form-item>



        <el-form-item>
          <el-button class="elbuttonStyle">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        OrderPayment: "9tP_RxTj50s8J3beXXcBVrOEgQW9ENIhD9Q7Edfi1P8",
        OrderDelivery: "L4iD7s-kehoEKrviOma05V8yK-GwTTS1EkJVSzNT3YY",
        WriteOff:'xJ8QgNgG3k8ljNBt3szlGfhquS-NRoE6Pkl-dNPVg_8',
        refund:'HzB_1Sf4VPhXWbcLvECUAc7IsrZtA5iYd4vVE4R8FUk',
        Apply: 'WxpXsO4tk960SfQBKvb0oT9M0nxOEO_P3ZWaUTD7o5I',
        withdrawal: "Y3fxF8crUSJ4-fGQuBunl-5oabAky59_lroDvJquENs"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
p {
  margin: 0;
}
// .el-form-item__label {
//   padding-right: 2%;
// }
</style>
