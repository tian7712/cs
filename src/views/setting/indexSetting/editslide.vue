<template>
  <div class="app-container" style=" background-color:#F2F2F2;">
    <div class="position">
      当前位置：
      <span>编辑幻灯片</span>
    </div>
    <el-card class="box-card">
      <el-form ref="form" :model="form" label-width="175px" style=" padding-right:3%;">
        
        <el-form-item label="幻灯片名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

  
        <el-form-item label="首页分享图片">
          <el-input v-model="input2">
            <el-button slot="append" @click="dialogFormVisible = true">选择图片</el-button>
          </el-input>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :file-list="fileList"
           
         
            style="margin:1%"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
          <p class="pstyle">建议尺寸:710 * 320或同比例, 请将所有幻灯片图片尺寸保持一致</p>
        </el-form-item>
      <el-form-item label="链接类型">
        <el-radio v-model="radio" label="1">webview外链</el-radio>
  <el-radio v-model="radio" label="2">本小程序链接</el-radio>
    <el-radio v-model="radio" label="3">外部小程序链接</el-radio>
 
        </el-form-item>
         <el-form-item label="链接">
      <el-input v-model="link">
            <el-button slot="append" @click="dialogLinkVisible = true">选择链接</el-button>
      </el-input>
        </el-form-item>
         <el-form-item label="排序">
      <el-input></el-input>
      <p style="margin:0;">数字越大，排名越靠前</p>
        </el-form-item>
         <el-form-item label="状态">
        <el-radio v-model="radio" label="1">显示</el-radio>
  <el-radio v-model="radio" label="2">隐藏</el-radio>
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
                  移动
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>1</el-dropdown-item>
                    <el-dropdown-item>2</el-dropdown-item>
                    <el-dropdown-item>3</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                 
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
          <el-button @click="dialogFormVisible = false" class="elbuttonStyle" >确 定</el-button>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
        </div>
      </el-dialog>
       <!-- //dig -->
      <el-dialog title="信息" :visible.sync="dialogLinkVisible">
        <el-tabs v-model="activeName">
          <el-tab-pane label="商城" name="first">
            <el-input placeholder="请输入链接名称进行搜索">
                     <el-button slot="append" >搜索</el-button>
            </el-input>
            <p ><i class="el-icon-folder-opened"></i> 商城页面</p>
              <el-button size="small" value="1" @click="linkValue" v-model="linkindex">商城首页</el-button>
                <el-button size="small" value="2">购物车</el-button>
                  <el-button size="small">团长申请页面</el-button>
                    <el-button size="small">团长申请介绍页面</el-button>
                      <el-button size="small">供应商申请页面</el-button>
                        <el-button size="small">供应商介绍申请页面地址</el-button>
                          <el-button size="small">分类页</el-button>
                          <p ><i class="el-icon-folder-opened"></i> 会员中心</p>
                          <el-button size="small">会员中心</el-button>
                          <el-button size="small">订单列表</el-button>
          </el-tab-pane>
          <el-tab-pane label="商品" name="second">
          <el-input placeholder="请输入商品名称进行搜索">
                   <el-button slot="append">搜索</el-button>
          </el-input>
            
         
          </el-tab-pane>
          <el-tab-pane label="文章" name="third">
            <el-input placeholder="请输入文章名称进行搜索">
                     <el-button slot="append" >搜索</el-button>
            </el-input>
          </el-tab-pane>
        </el-tabs>

     
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
        link:'',
        linkindex:'/application/pages/index/index',
      color1: "#F75451",
      color2: "#ffffff",
      radio: "1",
      fileList: [
        {
          url:
            "http://img.xmduobanjin.com/Uploads/image/goods/2020-03-23/5e789019b654a.jpg"
        }
      ],
      options: [1, 2, 3, 4, 5, 6],
      options1: [1, 2, 3, 4, 5, 6],
      value: "",
      value1: "",
      input2: "",
      dialogImageUrl: "",
     dialogVisible:false,
      dialogFormVisible: false,
      dialogLinkVisible:false,
      activeName: "first",
      currentPage3: 2,
      form: {
        name: "",
        region: ""
      }
    };
  },
  methods: {
  
  linkValue(){
   
    
     this.link=this.linkindex;
      this.dialogLinkVisible=false;
  }

    // handlePictureCardPreview(file) {
    //   this.dialogImageUrl = file.url;
    //   this.dialogVisible = true;
    // },
  
    
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
