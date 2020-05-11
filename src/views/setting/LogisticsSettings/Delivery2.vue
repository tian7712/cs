<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>配送方式设置</span>
    </div>
    <el-card class="box-card">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="自提">
        <el-radio v-model="extracting" label="1">关闭</el-radio>
  <el-radio v-model="extracting" label="2">开启</el-radio>
  
        </el-form-item>
        <el-form-item label="快递">
      <el-radio v-model="express" label="1">关闭</el-radio>
  <el-radio v-model="express" label="2">开启</el-radio>
        </el-form-item>
         <el-form-item label="团长配送">
             <el-radio v-model="delivery" label="1" @change="offOn">关闭</el-radio>
  <el-radio v-model="delivery" label="2" @change="offOn" >开启</el-radio>
          <el-input v-model="form.key" v-if="key" style="width:10%"></el-input>
          <p class="pstyle1">开启请填写团长配送每单配送费(元)</p>
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
        key:false,
          extracting:'1',
            express:'2',
             delivery:'1',
        form:{
          key:''
        }
    };
  },
  methods:{
      fanhui(){
           this.$router.push({ path: "/setting/LogisticsSettings/delivery" });  
      },
      offOn(){
          this.key=!this.key;
      }
  }
};
</script>