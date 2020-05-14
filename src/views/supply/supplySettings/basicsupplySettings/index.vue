
<template>
  <div>
    <div class="position">
      当前位置：
      <span>供应商基本设置</span>
    </div>
    <el-card class="box-card cardStyle">
      <el-form ref="form" :model="form" label-width="150px" label-position="left">
        <el-form-item label="供应商后台入口">
          <a
            href="http://www.xmduobanjin.com/seller.php?s=/Supply/login"
            style="color:#009688"
          >http://www.xmduobanjin.com/seller.php?s=/Supply/login</a>
        </el-form-item>
        <el-form-item label="前端申请">
          <el-radio v-model="radio" label="1">开启</el-radio>
          <el-radio v-model="radio" label="2">关闭</el-radio>
        </el-form-item>
        <el-form-item label="上架商品需要审核">
          <el-radio v-model="radio2" label="2">不需要</el-radio>
          <el-radio v-model="radio2" label="1">需要</el-radio>
        </el-form-item>
        <el-form-item label="编辑商品需要审核">
          <el-radio v-model="radio3" label="2">不需要</el-radio>
          <el-radio v-model="radio3" label="1">需要</el-radio>
        </el-form-item>
        <el-form-item label="供应商独立打印订单">
          <el-radio v-model="radio4" label="2">关闭</el-radio>
          <el-radio v-model="radio4" label="1">开启</el-radio>
        </el-form-item>
        <el-form-item>
          <el-button class="elbuttonStyle">提交</el-button>
        </el-form-item>
      </el-form>
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
// .box-card {
//   padding: 2%;
// }
</style>  
<script>
export default {
  data() {
    return {
      radio: "1",
      radio2: "2",
      radio3: "2",
      radio4: "1",

      form: {
        name: ""
      }
    };
  }
};
</script>  

