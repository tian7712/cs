
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>添加文章</span>
    </div>
    <el-card class="box-card">
      <el-row>
        <el-col :span="24">
          <el-form ref="form" :model="form" label-width="10%" :label-position="labelPosition">
            <el-form-item label="文章标题">
              <el-input v-model="form.name" />
            </el-form-item>

            <el-form-item label="文章面内容">
              <div>
                <tinymce :height="300" />
              </div>
              <!-- <p>数字越大，排名越靠前</p> -->
            </el-form-item>
            <el-form-item label="状态">
              <el-radio-group v-model="form.state">
                <el-radio label="显示"></el-radio>
                <el-radio label="隐藏"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">提交</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.position {
  margin: 3% 0 1% 1%;
  span {
    font-size: 0.9em;
    color: #009688;
  }
}
.box-card {
  padding: 2%;
}
p {
  color: #999999;
  margin: 0;
  padding: 0;
}
</style>  
<script>
// import ArticleDetail from './components/ArticleDetail'
import Tinymce from "@/components/Tinymce";
export default {
  name: "TinymceDemo",
  components: { Tinymce },

  //    name: 'CreateArticle',
  //   components: { ArticleDetail },
  data() {
    return {
      labelPosition: "left",
      Grade: false,
      form: {
        name: "",

        state: "不显示"
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
