<template>
  <div>
    <!-- class="app-container" -->
    <div class="position">
      当前位置：
      <span>申请页面内容</span>
    </div>
    <el-card class="box-card">
      <el-row>
        <el-col :span="3">
          <div>供应商申请页面内容</div>
        </el-col>
        <el-col :span="21">
          <div>
            <tinymce :height="300" />
          </div>
          <el-button class="elbuttonStyle">提交</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";

export default {
  name: "TinymceDemo",

  components: { Tinymce },

  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.box-card {
  padding: 1% 0.5%;
  .el-button {
    margin-top: 0.7%;
  }
}
</style>
