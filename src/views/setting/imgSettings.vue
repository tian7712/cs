<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>图片设置</span>
    </div>
    <el-card class="box-card">
      <el-form ref="form" :model="form" label-width="195px" style=" padding-right:3%;">
      

        <el-form-item label="截团图片">
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
      
        
        <el-form-item label="后台登录图片">
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
         <el-form-item label="XXX|管理后台图片">
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
         <el-form-item label="首页商品列表加载图片">
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
         <el-form-item label="商品详情价格区域背景图">
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
         <el-form-item label="首页分享二维码背景图片">
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
        <el-form-item label="二维码颜色">
          <el-row :gutter="20">
            <el-col :span="2">
              <el-input v-model="color1"></el-input>
            </el-col>
            <el-col :span="12">
              <el-color-picker v-model="color1"></el-color-picker>
            </el-col>
          </el-row>
          <p class="pstyle">
            二维码颜色自定义，不设置则默认红色
           
          </p>
        </el-form-item>
       
    
        
      
     
        
       
        <el-form-item label="海报头像圆角填充颜色">
          <el-row :gutter="20">
            <el-col :span="2">
              <el-input v-model="color2"></el-input>
            </el-col>
            <el-col :span="12">
              <el-color-picker v-model="color2"></el-color-picker>
            </el-col>
          </el-row>
          <p class="pstyle">二维码颜色自定义，不设置则默认黄色</p>
        </el-form-item>
<el-form-item label="首页二维码自定义时分">
          <el-input></el-input>
          <p>例如：08:00，用于首页海报显示的固定时分，日期随着每天改变</p>
        </el-form-item>
         <el-form-item label="首页底部图片">
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
          <p class="pstyle">原尺寸：250*56</p>
        </el-form-item>
         <el-form-item label="首页商品列表顶部图">
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
          <p class="pstyle">原尺寸：332*88 <span style="margin:0% 2%">关闭默认 </span>   <el-radio v-model="radio" label="1">关闭</el-radio>
          <el-radio v-model="radio" label="2">开启</el-radio></p>
        </el-form-item>
         <el-form-item label="商品详情页声明顶上图">
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
          <p class="pstyle">原尺寸：184*48</p>
        </el-form-item>
         <el-form-item label="首页引导加入我的小程序">
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
          <p class="pstyle">原尺寸：750*1208</p>
        </el-form-item>
         <el-form-item label="页头公共背景图">
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
          <p class="pstyle">尺寸：750*340</p>
        </el-form-item>
         <el-form-item label="授权登录背景">
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
          <p class="pstyle">建议尺寸：750*1500</p>
        </el-form-item>
         <el-form-item label="更新会员核销二维码">
         <el-link :underline="false" style="color:#009688;">立即更新</el-link>
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
      color1: "#ff0000",
      color2: "#ffac07",
      radio: "1",
      fileList: [
        {
          url:
            "http://dev.xmduobanjin.com/static/images/default-pic.jpg"
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
