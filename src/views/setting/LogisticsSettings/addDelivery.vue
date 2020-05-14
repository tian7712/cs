<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>添加快递</span>
    </div>
    <el-card class="box-card cardStyle">
      <el-form ref="form" :model="form" label-width="120px" label-position="left">
        <el-form-item label="快递名称">
          <el-input v-model="form.name"></el-input>
  
        </el-form-item>
        <el-form-item label="快递简码">
          <el-input v-model="form.key"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button class="elbuttonStyle">提交</el-button>
          <el-button @click="fanhui">返回列表</el-button>
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
  },
  methods:{
      fanhui(){
           this.$router.push({ path: "/setting/LogisticsSettings/delivery" });  
      }
  }
};
</script>