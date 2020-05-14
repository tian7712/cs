<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>版权说明</span>
    </div>
    <el-card class="box-card cardStyle">
      <el-form ref="form" :model="form" label-width="150px">
        <el-form-item label="底部版权说明">
          <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item>
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
      form: {
        name: "多半斤版权所有"
      }
    };
  }
};
</script>