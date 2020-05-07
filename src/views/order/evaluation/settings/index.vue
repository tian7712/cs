
<template>
  <div class="app-container">
    <div class="position">当前位置：评价设置</div>
    <el-card class="box-card">
   

<el-row :gutter="20">
  <el-col :span="2"><span>评价审核：</span></el-col>
  <el-col :span="6">
     <el-radio v-model="radio" label="1">开启</el-radio>
  <el-radio v-model="radio" label="2">关闭</el-radio>
<p>审核：审核通过才显示。不审核，评价完成直接显示</p>
<el-button type="primary">提交</el-button></el-col>
</el-row>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.position {
  margin: 3% 0 1% 1%;
}
p{
  color: rgb(148, 140, 140);
  font-size: 0.8em;
}
span{
  font-size: 0.9em;
  // margin-right:3% ;
}
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
