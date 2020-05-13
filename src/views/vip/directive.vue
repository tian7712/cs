
<template>
  <div class="app-container">
    <!-- class="app-container" -->
    <div class="position">当前位置：
      <span> 评价设置</span>
     </div>
    <el-card class="box-card">
      <el-form ref="form" :model="form" label-width="10%">
        <el-form-item label="手机号授权：">
          <el-radio v-model="form.phoneRadio" label="2">否</el-radio>
          <el-radio v-model="form.phoneRadio" label="1">是</el-radio>
        </el-form-item>

        <el-form-item label="会员是否需要审核：">
          <el-radio v-model="form.vipRadio" label="2">不需要</el-radio>
          <el-radio v-model="form.vipRadio" label="1">需要</el-radio>
        </el-form-item>
        <el-form-item label="是否收集表单信息：">
          <el-radio v-model="form.xxRadio" label="2">不需要</el-radio>
          <el-radio v-model="form.xxRadio" label="1">需要</el-radio>
        </el-form-item>
          <el-form-item >
           <el-button  class="elbuttonStyle" >提交</el-button>
        </el-form-item>
      </el-form>

      <!-- <template slot-scope="scope">
        
      </template>-->
    
    </el-card>
  </div>
</template>
<style lang="scss" scoped>

p {
  color: rgb(148, 140, 140);
  font-size: 0.8em;
}
span {
  font-size: 0.9em;
  // margin-right:3% ;
}
.box-card {
  padding: 2%;
}
</style>  
<script>

export default {
  data() {
    return {
      form: {
        xxRadio: '1',
        vipRadio: '2',
        phoneRadio: '1'
      }
    };
  },
  
  methods: {
  
  }
};
</script>  
