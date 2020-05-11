
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>添加公告</span>
    </div>
    <el-card class="box-card">
    <el-form ref="form" :model="form" label-width="150px">
  <el-form-item label="公告内容">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
   <el-form-item label="排序">
    <el-input v-model="form.num"></el-input>
    <p class="pstyle1">数字越大，排名越靠前</p>
  </el-form-item>
    <el-form-item label="状态" prop="state">
    <el-radio v-model="radio" label="1">显示</el-radio>
  <el-radio v-model="radio" label="2">隐藏</el-radio>
  </el-form-item>
    <el-form-item >
 <el-button class="elbuttonStyle">提交</el-button>
  </el-form-item>
    </el-form>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>


</style>  
<script>
export default {
  data() {
    return {
      radio:'1',
    form:{
      name:'',
      state:'',
      num:''
    }
    };
  },
  methods: {
   
  }
};
</script>  