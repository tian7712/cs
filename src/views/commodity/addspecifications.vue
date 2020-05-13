
<template>
  <div class="app-container">
    <div class="position">当前位置：<span>添加商品规格</span> </div>
    <el-card class="box-card">
     <el-form ref="form" :model="form" label-width="120px">
  <el-form-item label="规格名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
    <el-form-item label="规格值">
     <div :model="dynamicValidateForm" ref="dynamicValidateForm" >
                  <div
                    v-for="(domain, index) in dynamicValidateForm.domains"
                    :key="domain.key"
                    :prop="'domains.' + index + '.value'"
                    :rules="{required: true, message: '不能为空', trigger: 'blur'}"
                    style="margin-bottom:1%;"
                  
                   
                  >
                    <el-input  v-model="domain.value" style="width:80%">
                      <el-button
                        type="danger"
                        icon="el-icon-close"
                        slot="append"
                        @click.prevent="removeDomain(domain)"
                      ></el-button>
                    </el-input>
                  </div>
                </div>
  </el-form-item>

 
    <el-form-item >
    <el-button @click="add">添加规格</el-button>
  </el-form-item>
   <el-form-item >
    <el-button class="elbuttonStyle">提交</el-button>
    <el-button @click="fanhui">返回列表</el-button>
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
     form:{
       name:''
     },
      dynamicValidateForm: {
        domains: [
          {}]
      }
  }
  
    },
    methods:{
      add(){
        this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now()
      });
      },
      removeDomain(items) {
      var index = this.dynamicValidateForm.domains.indexOf(items);
      console.log(index);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    fanhui(){
       this.$router.push({ path: "/commodity/specifications" });
    }
    }
};
</script>  