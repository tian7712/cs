
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>一键设置商品时间</span>
    </div>
    <el-card class="box-card cardStyle">
      <el-row :gutter="20">
        <el-col :span="2" :offset="2"><div class="filter-time">团购时间</div></el-col>
        <el-col :span="5">
          <el-date-picker
            v-model="datevalue2"
            class="filter-item"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
 
          ></el-date-picker>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6" :offset="6">
          <el-button  class="elbuttonStyle" size="medium">提交</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>

.box-card{
    .filter-time{
        height: 40px;
        line-height: 40px;
    }
    .el-row{
        padding: 10px;
        
        
        font-size: 0.75em;
    }
}
</style>  
<script>
export default {
  data() {
    return {
      datevalue2: ""
    };
  }
};
</script>  