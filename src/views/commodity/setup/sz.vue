
<template>
  <div class="app-container">
    <div class="position">当前位置：商品设置</div>
    <el-card class="box-card">
      <el-row>
        <el-col :span="24">
          <el-form ref="form" :model="form" label-width="120px" :label-position="labelPosition">
            <el-form-item label="商品库存预警">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="购买记录">
              <el-radio-group v-model="form.record">
                <el-radio label="不显示"></el-radio>
                <el-radio label="显示"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="商品评价">
              <el-radio-group v-model="form.evaluate">
                <el-radio label="不显示"></el-radio>
                <el-radio label="显示"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="首页商品倒计时">
              <el-radio-group v-model="form.down">
                <el-radio label="不显示"></el-radio>
                <el-radio label="显示"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="首页商品销量">
              <el-radio-group v-model="form.volume">
                <el-radio label="不显示"></el-radio>
                <el-radio label="显示"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="新人专享">
              <el-radio-group v-model="form.vip">
                <el-radio label="不显示"></el-radio>
                <el-radio label="显示"></el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="服务说明">
              <div>
                <tinymce :height="300" />
              </div>
              <!-- <div class="editor-content" v-html="content" /> -->
              <!-- <div>
<article-detail :is-edit="false" />
              </div>-->
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
}
</style>  
<script>
// import ArticleDetail from './components/ArticleDetail'
import Tinymce from "@/components/Tinymce";
export default {
  name: "TinymceDemo",
  components: { Tinymce },
  // 
  //  name: 'CreateArticle',
  // components: { ArticleDetail },
  data() {
    return {
      labelPosition: "left",

      form: {
        name: "20",
        record: "",
        evaluate: "",
        down: "",
        volume: "",
        vip: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$message({ message: "提交成功", type: "success" });
    }
  }
};
</script>  