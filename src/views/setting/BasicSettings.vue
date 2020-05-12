<template>
  <div class="app-container" style=" background-color:#F2F2F2;">
    <div class="position">
      当前位置：
      <span>商城设置</span>
    </div>
    <el-card class="box-card">
      <el-form ref="form" :model="form" label-width="175px" style=" padding-right:3%;">
        <el-form-item label="开团状态">
          <el-radio v-model="radio" label="1">开启</el-radio>
          <el-radio v-model="radio" label="2">关闭</el-radio>
        </el-form-item>
        <el-form-item label="退款状态">
          <el-radio v-model="radio" label="1">开启</el-radio>
          <el-radio v-model="radio" label="2">关闭</el-radio>
        </el-form-item>
        <el-form-item label="商城名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="商城LOGO">
          <el-input v-model="input2">
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
        <el-form-item label="网址">
          <el-input v-model="form.name"></el-input>
          <p class="pstyle">示例：https://域名,未配置https 需要配置https</p>
        </el-form-item>
        <el-form-item label="首页分享标题">
          <el-input v-model="form.name"></el-input>
          <p class="pstyle">未填写将默认使用商城名称作为分享标题</p>
        </el-form-item>
        <el-form-item label="首页分享图片">
          <el-input v-model="input2">
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
          <p class="pstyle">支持PNG及JPG，显示图片长宽比是 5:4。</p>
        </el-form-item>
        <el-form-item label="首页商品排序">
          <el-radio v-model="radio" label="1">小图</el-radio>
          <el-radio v-model="radio" label="2">大图</el-radio>
        </el-form-item>
        <el-form-item label="页面导航条背景颜色">
          <el-row :gutter="20">
            <el-col :span="2">
              <el-input v-model="color1"></el-input>
            </el-col>
            <el-col :span="12">
              <el-color-picker v-model="color1"></el-color-picker>
            </el-col>
          </el-row>
          <p class="pstyle">
            背景颜色值，有效值为十六进制颜色。默认色值：
            <span class="pspan">#F75451</span>
          </p>
        </el-form-item>
        <el-form-item label="页面导航条前景颜色">
          <el-radio v-model="radio" label="1">白色</el-radio>
          <el-radio v-model="radio" label="2">黑色</el-radio>
          <p class="pstyle">前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000</p>
          <p class="pstyle">为避免重复请求，采用缓存机制，有效时长为十分钟，如需马上生效可删除小程序重新进入</p>
        </el-form-item>
        <el-form-item label="腾讯地图Appkey">
          <el-input v-model="form.name"></el-input>
          <p class="pstyle">
            <el-link :underline="false">点击申请</el-link>用于地图定位、显示社区团长位置
            <el-link :underline="false">地图申请示例</el-link>
            <el-link :underline="false">小程序域名设置示例</el-link>
          </p>
        </el-form-item>
        <el-form-item label="群体名称">
          <el-input v-model="form.name"></el-input>
          <p class="pstyle">默认：社区</p>
        </el-form-item>
        <el-form-item label="群主名称">
          <el-input v-model="form.name"></el-input>
          <p class="pstyle">默认：团长</p>
        </el-form-item>
        <el-form-item label="首页顶部背景">
          <el-radio v-model="radio" label="1">隐藏</el-radio>
          <el-radio v-model="radio" label="2">显示</el-radio>
        </el-form-item>
        <el-form-item label="首页分享按钮">
          <el-radio v-model="radio" label="1">隐藏</el-radio>
          <el-radio v-model="radio" label="2">显示</el-radio>
        </el-form-item>
        <el-form-item label="首页抢购切换">
          <el-radio v-model="radio" label="1">关闭</el-radio>
          <el-radio v-model="radio" label="2">开启</el-radio>
        </el-form-item>
        <el-form-item label="首页、详情页客服按钮">
          <el-radio v-model="radio" label="1">关闭</el-radio>
          <el-radio v-model="radio" label="2">开启</el-radio>
        </el-form-item>
        <el-form-item label="首页搜索框">
          <el-radio v-model="radio" label="1">关闭</el-radio>
          <el-radio v-model="radio" label="2">开启</el-radio>
        </el-form-item>
        <el-form-item label="积分系统">
          <el-radio v-model="radio" label="1">关闭</el-radio>
          <el-radio v-model="radio" label="2">开启</el-radio>
        </el-form-item>
        <el-form-item label="页面导航条背景颜色">
          <el-row :gutter="20">
            <el-col :span="2">
              <el-input v-model="color2"></el-input>
            </el-col>
            <el-col :span="12">
              <el-color-picker v-model="color2"></el-color-picker>
            </el-col>
          </el-row>
          <p class="pstyle">默认色值：白色</p>
        </el-form-item>
        <el-form-item>
          <el-button class="elbuttonStyle">提交</el-button>
        </el-form-item>
      </el-form>
      <!-- //dig -->
      <el-dialog title="图片" :visible.sync="dialogFormVisible">
        <el-tabs v-model="activeName">
          <el-tab-pane label="平台" name="first">
            <el-row :gutter="20">
              <el-col :span="12" :offset="14">
                <el-button type="danger" icon="el-icon-delete" style="margin:2%" size="small">删除</el-button>
                <el-dropdown split-button type="primary" size="small">
                  移1动
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>1</el-dropdown-item>
                    <el-dropdown-item>2</el-dropdown-item>
                    <el-dropdown-item>3</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-remove="handleRemove"
                  :file-list="fileList"
                  list-type="text"
                  mulitiply
                  :show-file-list="false"
                >
                  <el-button size="small" class="elbuttonStyle">上传图片</el-button>

                  <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24" :offset="2">
                <!-- <el-upload
                  class="upload-demo"
                  :on-change="handleChange"
                  :file-list="fileList"
                  list-type="picture-card"
                  action="https://jsonplaceholder.typicode.com/posts/"
                >
                  <i slot="default" class="el-icon-plus"></i>
              <p> 上传图片</p> 
                </el-upload>-->
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
                  <!--  :on-change="handleChange" -->
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
          <el-button @click="dialogFormVisible = false" class="elbuttonStyle">确 定</el-button>
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
      color1: "#F75451",
      color2: "#ffffff",
      radio: "1",
      fileList: [
        {
          url:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        }
      ],
      options: [1, 2, 3, 4, 5, 6],
      options1: [1, 2, 3, 4, 5, 6],
      value: "",
      value1: "",
      input2: "",
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
    }
  }
};
</script>

<style lang="scss" >
// scoped
.position {
  margin: 2% 0 1% 1%;
  span {
    color: rgb(76, 153, 89);
    font-size: 0.95em;
  }
}

.box {
  display: flex;
  justify-content: center;

  width: 100%;
  height: 300px;

  p {
    text-align: center;
    padding: 30% 0 1% 0;
    color: gray;
    font-weight: 200;
    font-size: 1.3em;
  }
  .inner {
    width: 50%;
    .el-button {
      position: relative;
      left: 40%;
      margin-top: 3%;
    }
  }
}
.upload-demo {
  // width:25%;
  // float: left;
  // .el-upload-list,.el-upload-list__item{
  display: inline-block;

  // }
}
.elbuttonStyle {
  background-color: #3071a9;
  color: white;
}

.el-form-item__label {
  padding-right: 3%;
}
.pstyle {
  margin: 0;
  padding: 0;
  .pspan {
    color: #f75451;
    margin: 0;
    padding: 0;
  }
  .el-link {
    color: #009688;
    margin-bottom: 0.2%;
    padding: 0% 0.2%;
  }
}
</style>
