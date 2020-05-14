<template>
  <div class="app-container">
    <div class="position">
      <span>当前位置：添加标签</span>
    </div>
    <el-card class="box-card cardStyle">
      <el-form ref="form" :model="form" label-width="100px" label-position="left" >  
        <el-form-item label="标题名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="标签类型">
          <el-radio v-model="labelradio" label="1" @change="textimg">文字</el-radio>
          <el-radio v-model="labelradio" label="2" @change="textimg">图片</el-radio>
        </el-form-item>
        <el-form-item label="标签内容" v-if="labeltype">
          <el-input v-model="input2"></el-input>
        </el-form-item>
        <el-form-item label="标签图片" v-if="labelimg">
          <el-input placeholder="请输入内容" v-model="input2">
            <el-button slot="append" @click="dialogFormVisible = true" class="elbuttonStyle">选择图片</el-button>
          </el-input>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :file-list="fileList"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            style="margin:1%"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>

        <el-form-item label="排序">
          <el-input v-model="input2"></el-input>
        </el-form-item>
        <el-form-item label="是否启用">
          <el-radio v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio" label="2">否</el-radio>
        </el-form-item>

        <el-form-item>
          <el-button class="elbuttonStyle">提交</el-button>
          <el-button @click="fanhui">返回列表</el-button>
        </el-form-item>
      </el-form>
      <!-- //dig -->
      <el-dialog title="图片" :visible.sync="dialogFormVisible">
        <el-tabs v-model="activeName">
          <el-tab-pane label="平台" name="first">
            <el-row :gutter="10">
              <el-col :span="8" :offset="16">
                <el-button type="danger" icon="el-icon-delete" style="margin:2%" size="small">删除</el-button>
                <el-dropdown split-button type="primary" size="small">
                  移动
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>1</el-dropdown-item>
                    <el-dropdown-item>2</el-dropdown-item>
                    <el-dropdown-item>3</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24" :offset="2">
                <el-upload
                  class="upload-demo"
                  :file-list="fileList"
                  list-type="picture-card"
                  action="https://jsonplaceholder.typicode.com/posts/"
                >
                  <i slot="default" class="el-icon-plus"></i>
                  <!-- <p> 上传图片</p> -->
                </el-upload>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12" :offset="6">
                <el-pagination
                  :current-page.sync="currentPage3"
                  :page-size="100"
                  layout="prev, pager, next, jumper"
                  :total="1000"
                ></el-pagination>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="本地服务器" name="second">
            <el-row :gutter="10">
              <el-col :span="16">
                <el-select v-model="value" placeholder="不限年份">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <el-select v-model="value1" placeholder="不限月份">
                  <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
                <el-button icon="el-icon-search"></el-button>
              </el-col>
              <el-col :span="8">
                <el-button type="danger" icon="el-icon-delete" style="margin:2%" size="small">删除</el-button>
                <el-dropdown split-button type="primary" size="small">
                  移动
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>1</el-dropdown-item>
                    <el-dropdown-item>2</el-dropdown-item>
                    <el-dropdown-item>3</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>

                <!-- <el-button size="small" type="primary" :on-change="handleChange">点击上传</el-button> -->
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24" :offset="2">
                <el-upload
                  class="upload-demo"
                  :file-list="fileList"
                  list-type="picture-card"
                  action="https://jsonplaceholder.typicode.com/posts/"
                >
                  <i slot="default" class="el-icon-plus"></i>
                </el-upload>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12" :offset="6">
                <el-pagination
                  :current-page.sync="currentPage3"
                  :page-size="100"
                  layout="prev, pager, next, jumper"
                  :total="1000"
                ></el-pagination>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="提取网络图片" name="third">
            <div class="box">
              <div class="inner">
                <p>输入图片链接</p>

                <el-input placeholder="图片链接"></el-input>
                <el-button>转化</el-button>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>

        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
        </div>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labeltype: true,
      labelimg: false,
      input2: "",
      value: "",
      value1: "",
      options: [],
      options1: [],
      radio: "2",
      labelradio:'1',
      fileList: [
        {
          url: "http://dev.xmduobanjin.com/static/images/default-pic.jpg"
        }
      ],
      dialogImageUrl: "",
      dialogVisible: false,
      dialogFormVisible: false,
      activeName: "first",
      currentPage3: 2,
      form: {
        name: "",
        region: ""
      }
    };
  },
  methods: {
    // img
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    fanhui() {
      this.$router.push({ path: "/commodity/lable" });
    },
    textimg() {
      this.labeltype = !this.labeltype;
      this.labelimg = !this.labelimg;
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: center;

  width: 100%;
  height: 300px;

  .inner {
    width: 50%;
    .el-button {
      position: relative;
      left: 40%;
      margin-top: 3%;
    }
  }
}
.loginstyle {
  width: 98%;
  height: 50px;
  line-height: 50px;
  background-color: #f2f2f2;
  border-left: 6px solid #009688;
  padding-left: 1%;
  margin: 1% 2%;
}
</style>
