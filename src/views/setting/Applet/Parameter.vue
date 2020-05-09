<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>小程序设置</span>
    </div>
    <el-card class="box-card">
        <el-form ref="form" :model="form" label-width="120px" style=" padding-right:3%;">
  <el-form-item label="小程序APPID">
    <el-input v-model="form.appid"></el-input>
    <p>mp.weixin.qq.com 开发-开发配置</p>
  </el-form-item>
  
 <el-form-item label="小程序APPSECRET">
    <el-input v-model="form.appsecret"></el-input>
    <p>mp.weixin.qq.com 开发-开发配置</p>
  </el-form-item>
  <el-form-item label="商户ID">
    <el-input v-model="form.MerchantID"></el-input>
  
  </el-form-item>
  <el-form-item label="支付秘钥">
    <el-input v-model="form.PaymentKey"></el-input>
<p>pay.weixin.qq.com 账户中心-api安全</p>

  </el-form-item>
 
 <el-form-item >
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
      form:{
        appid:'wxd4d4bfd4a7455072',
        appsecret:'b8a1c892cd545266b103cf0373dfa2a8',
        MerchantID:1564964781 ,
        PaymentKey:'dbj88888888888888888888888888888',
      }
    }
  }
}
</script>
<style lang="scss" >
p{
margin: 0;
}
.el-form-item__label {
  padding-right: 3%;
}
</style>
