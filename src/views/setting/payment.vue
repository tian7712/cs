<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>支付设置</span>
    </div>
    <el-card class="box-card">
      <el-form ref="form" :model="form" label-width="150px" >
        <el-form-item>
          <p>CERT证书文件</p>
          <el-input type="textarea" :rows="4" placeholder="为保证安全性，不显示证书内容。若要修改请直接输入" v-model="form.textarea"></el-input>

          <p>
            <el-tag>已上传</el-tag>从商户平台上下载支付证书，解压并取得其中的
            <span class="apiclientstyle">apiclient_cert.pem</span> 用记事本打开并复制文件内容，填至此处
          </p>
        </el-form-item>

        <el-form-item>
          <p>KEY证书秘钥</p>
          <el-input type="textarea" :rows="4" placeholder="为保证安全性，不显示证书内容。若要修改请直接输入" v-model="form.textarea1"></el-input>
          <p> <el-tag >已上传</el-tag> 从商户平台上下载支付证书，解压并取得其中的<span class="apiclientstyle">apiclient_key.pem</span>用记事本打开并复制文件内容，填至此处</p>
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
        textarea: "",
      textarea1: ""
      }
    };
  }
};
</script>
<style lang="scss" scoped>
p {
  margin: 0;
}
.el-form-item__label {
  padding-right: 2%;
}
.apiclientstyle {
//   width: 20px;
//   height: 20px;
  background-color: #F2DEDE;
}
.el-tag{
  background-color: #009688;
  color: white;
}
</style>
