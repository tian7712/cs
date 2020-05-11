<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>物流接口</span>
    </div>
    <el-card class="box-card">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="快递鸟商户ID">
          <el-input v-model="form.name"></el-input>
          <p style="margin:0;">用于获取物流信息， <el-link style="color:#009688;" :underline="false">快递鸟接口申请</el-link></p>
        </el-form-item>
        <el-form-item label="快递鸟API KEY">
          <el-input v-model="form.key"></el-input>
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
            id:'',
            key:''
        }
    };
  }
};
</script>