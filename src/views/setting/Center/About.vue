
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>关于我们设置</span>
    </div>
    <el-card class="box-card cardStyle">
      <el-row>
        <el-col :span="24">
          <el-form ref="form" :model="form" label-width="7%" :label-position="labelPosition">
            <el-form-item label="是否开启">
               <el-radio v-model="radio" label="1">否</el-radio>
  <el-radio v-model="radio" label="2">是</el-radio>
            </el-form-item>

            <el-form-item label="关于我们">
              <div>
                <tinymce :height="300" />
              </div>
         
            </el-form-item>
            <!-- <el-form-item label="状态">
              <el-radio-group v-model="form.state">
                <el-radio label="显示"></el-radio>
                <el-radio label="隐藏"></el-radio>
              </el-radio-group>
            </el-form-item> -->
            <el-form-item>
              <el-button  class="elbuttonStyle" @click="onSubmit">提交</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>


</style>  
<script>

import Tinymce from "@/components/Tinymce";
export default {
  name: "TinymceDemo",
  components: { Tinymce },
  data() {
    return {
        radio:'1',
      labelPosition: "left",
      Grade: false,
      form: {
        name: "",

        // state: "不显示"
      }
    };
  },
  methods: {
    onSubmit() {
      this.$message({ message: "提交成功", type: "success" });
    },
    open() {
      this.Grade = !this.Grade;
    }
  }
};
</script>  
