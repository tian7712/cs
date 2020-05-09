
<template>
  <div>
    <div class="position">当前位置：评价列表</div>
    <el-card class="box-card">
      <el-row :gutter="20" style="margin:1% 0">
        <el-col :span="4">
          <el-input v-model="inputenter" placeholder="输入关键词回车"></el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-col>
      </el-row>

      <el-button size="mini" @click="del">启用</el-button>
      <el-button size="mini" @click="del">禁用</el-button>
      <el-button size="mini" @click="del">删除</el-button>
      <el-button style="float: right; padding: 3px 0" type="text" @click="add">添加虚拟评价</el-button>

      <!-- <div v-for="item in 5" :key="item" class="text-item">
        {{'[ID: ' + item +']'}} 全部商品
        <div class="item-button">
          <el-switch v-model="list" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          <el-button size="mini" @click="dialogFormVisible = true">修改</el-button>
          <el-button size="mini" @click="dialogFormVisible = true">删除</el-button>
        </div>
      </div>-->
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <!-- <el-table-column
      label="日期"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>-->
        <el-table-column prop="name" label="商品/订单号" width="220"></el-table-column>

        <el-table-column prop="zhi" label="评价者" width="220"></el-table-column>
        <el-table-column prop="zhi" label="评价内容" width="220"></el-table-column>
        <el-table-column prop="zhi" label="星级" width="180"></el-table-column>
        <el-table-column prop="zhi" label="评价时间" width="180"></el-table-column>

        <el-table-column prop="state" label="审核状态">
          <el-switch v-model="delivery"></el-switch>
        </el-table-column>
        <el-table-column label="操作" width="200">
          <el-button size="mini" @click="edit">编辑</el-button>
          <el-button size="mini" @click="del">删除</el-button>
          <!-- show-overflow-tooltip -->
        </el-table-column>
      </el-table>

      <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
        <!-- :title="textMap[dialogStatus]" -->
        <el-form :model="form">
          <el-form-item label="评价内容" :label-width="formLabelWidth">
            <!-- <el-input v-model="form.name" autocomplete="off"></el-input> -->
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="请输入内容"
              v-model="textarea2"
            ></el-input>
            <p>评论内容请控制在200字以内</p>
          </el-form-item>

          <el-form-item label="描述等级" :label-width="formLabelWidth">
            <el-radio v-model="form.star" label="1">1星</el-radio>
            <el-radio v-model="form.star" label="2">2星</el-radio>
            <el-radio v-model="form.star" label="3">3星</el-radio>
            <el-radio v-model="form.star" label="4">4星</el-radio>
            <el-radio v-model="form.star" label="5">5星</el-radio>
          </el-form-item>
          <el-form-item label="价格合理等级" :label-width="formLabelWidth">
            <el-radio v-model="form.star1" label="1">1星</el-radio>
            <el-radio v-model="form.star1" label="2">2星</el-radio>
            <el-radio v-model="form.star1" label="3">3星</el-radio>
            <el-radio v-model="form.star1" label="4">4星</el-radio>
            <el-radio v-model="form.star1" label="5">5星</el-radio>
          </el-form-item>
          <el-form-item label="质量满意等级" :label-width="formLabelWidth">
            <el-radio v-model="form.star2" label="1">1星</el-radio>
            <el-radio v-model="form.star2" label="2">2星</el-radio>
            <el-radio v-model="form.star2" label="3">3星</el-radio>
            <el-radio v-model="form.star2" label="4">4星</el-radio>
            <el-radio v-model="form.star2" label="5">5星</el-radio>
          </el-form-item>
          <el-form-item label="分类图" :label-width="formLabelWidth">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :file-list="fileList"
              list-type="picture"
            >
              <!--:on-preview="handlePreview" :on-remove="handleRemove" -->
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="LOGO" :label-width="formLabelWidth">
            <!-- <div :id="id" :ref="id" :action="url" class="dropzone drop-div">
              <input type="file" name="file" />
              <el-image style="width: 70px; height: 70px" :src="url"></el-image>
            </div>-->

            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :file-list="fileList"
              list-type="picture"
            >
              <!--:on-preview="handlePreview" :on-remove="handleRemove" -->
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="选择机器人" :label-width="formLabelWidth">
            <!-- <el-input v-model="form.name" autocomplete="off"></el-input> -->
            <el-input :disabled="true">
              <!-- v-model="input" -->
              <el-button slot="append">选择会员</el-button>
            </el-input>
          </el-form-item>
          <el-form-item label="选择评价商品" :label-width="formLabelWidth">
            <el-input :disabled="true">
              <el-button slot="append">选择商品</el-button>
            </el-input>
          </el-form-item>
          <el-form-item label="评价图片" :label-width="formLabelWidth">
            <el-image></el-image>
          </el-form-item>
          <el-form-item label="评价时间" :label-width="formLabelWidth"></el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogFormVisible = true">提交</el-button>
          <el-button @click="dialogFormVisible = false">返回列表</el-button>
        </div>
      </el-dialog>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>

.text-item {
  width: 80%;
  height: 50px;
  border: 1px solid gainsboro;
  margin: 1%;
  border-radius: 10px;
  padding: 1%;
  font-size: 0.8em;
}
.item-button {
  float: right;
}
.drop-div {
  width: 60%;
  border: 1px solid gainsboro;
  display: flex;
  // justify-content: center;
  align-items: center;
  padding: 1%;
}
.upload-demo {
  width: 50%;
}
.el-image {
  width: 80px;
  height: 80px;
}
.el-form{
  width: 90%;
  margin-right: 5%;
}
</style>  
<script>
import Tinymce from "@/components/Tinymce";
export default {
  data() {
    return {
      dialogStatus:'',
      create:'',
      textarea2:'',
      inputenter:'',
      name: "TinymceDemo",
      components: { Tinymce },
      fileList: [
        {
          name: "默认图片.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ],
      list: false,
      dialogTableVisible: false,
      dialogFormVisible: false,
      textMap: {
        update: "修改",
        create: "添加"
      },
      form: {
        name: "全部商品",

        star: "",
        star1: "",
        star2: "",
        id: 2,
        img1: "",
        img2: ""
      },
      formLabelWidth: "120px",
      tableData: [
        {
          name: "1",
          zhi: "2"
        }
      ],
      multipleSelection: [],
      delivery: ""
    };
  },
  methods: {
    add() {
      this.dialogFormVisible = true;

        // this.dialogStatus = create;
      this.dialogStatus = "create";
        //  this.resetTemp();

        // this.$nextTick(() => {
        //   this.$refs["dataForm"].clearValidate();
        // });
    },
    edit() {
      this.dialogFormVisible = true;
      this.dialogStatus = "update";
    },
    del() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>  
