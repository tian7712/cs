<template>
  <div >
    <!-- class="app-container" -->
    <div class="position">
      当前位置：
      <span>申请页面内容</span>
    </div>
    <el-card class="box-card">
     



      <el-row>
  <el-col :span="3"><div >供应商申请页面内容</div></el-col>
  <el-col :span="21"> <div>
        

        <tinymce :height="300" />
      </div>
      <el-button class="elbuttonStyle">提交</el-button></el-col>
</el-row>
    </el-card>
  </div>
</template>

<script>
// import {
//   fetchList,
//   fetchPv,
//   createArticle,
//   updateArticle
// } from "@/api/article";
// import waves from "@/directive/waves"; // waves directive
// import { parseTime } from "@/utils";
// import Pagination from "@/components/Pagination"; // secondary package based on el-pagination基于el分页的二次包

// import Dropzone from "dropzone";
// import "dropzone/dist/dropzone.css";
// import { getToken } from 'api/qiniu';
import Tinymce from "@/components/Tinymce";
// Dropzone.autoDiscover = false;
// 上传图片

export default {
  name: "TinymceDemo",

  components: { Tinymce },

  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.position {
  margin: 2% 0 1% 1%;
  font-size: 1em;
  span {
    color: rgb(76, 153, 89);
  }
}
.box-card{
  padding:  1% 0.5%;
  .el-button{
    margin-top: 0.7%;
  }

}
</style>
