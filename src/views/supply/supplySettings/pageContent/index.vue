<template>
  <div>
    <!-- class="app-container" -->
    <div class="position">
      当前位置：
      <span>申请页面内容</span>
    </div>
    <el-card class="box-card cardStyle">
      <el-form ref="form" :model="form" label-width="160px" label-position="left">
        <el-form-item label="供应商申请页面内容">
          <div>
            <tinymce :height="300" />
          </div>
        </el-form-item>
        <el-form-item>
          <el-button class="elbuttonStyle">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";

export default {
  name: "TinymceDemo",

  components: { Tinymce },

  data() {
    return {
      form: {
      
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
