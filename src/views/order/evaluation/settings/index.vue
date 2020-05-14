
<template>
  <div class="app-container1">
    <!-- class="app-container" -->
    <div class="position">当前位置：
      <span>评价设置</span>
      </div>
    <el-card class="box-card">
   

<el-row :gutter="10">
  <el-col :span="2"><span>评价审核：</span></el-col>
  <el-col :span="6">
     <el-radio v-model="radio" label="1">开启</el-radio>
  <el-radio v-model="radio" label="2">关闭</el-radio>
<p style="color: rgb(148, 140, 140);font-size: 0.8em;">审核：审核通过才显示。不审核，评价完成直接显示</p>
<el-button class="elbuttonStyle">提交</el-button></el-col>
</el-row>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>

.box-card{
  padding: 2%;
}
</style>  
<script>

export default {
  data(){
    return{
      radio:'1'
    }
  }
 
};
</script>  
