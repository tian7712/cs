
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>添加虚拟会员</span>
    </div>
    <el-card class="box-card">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="虚拟会员名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
         <el-form-item label="手机号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="头像">
          <el-input v-model="pvalue" :disabled="true">
            <template slot="append">
              <el-button @click="dialogTableVisible = true" class="elbuttonStyle">选择图片</el-button>
            </template>
          </el-input>
          <div v-if="hide">
            <el-image
              style="width: 100px; height: 100px; margin:1% 0 0 0;position: relative;border:1px solid #D2D2D2;"
              :src="url"
            ></el-image>
         
            <el-button
              type="danger"
              icon="el-icon-delete"
              style="background-color: #009688;border:none;position: absolute;bottom: 25%; margin-left:0.3%"
              size="mini"
              @click="del"
            ></el-button>
          </div>
        </el-form-item>
       
        <el-form-item>
          <el-button class="elbuttonStyle">提交</el-button>
            <el-button @click="fanhui">返回列表</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- dig -->
    <el-dialog title="图片" :visible.sync="dialogTableVisible">
      <el-tabs v-model="activeName" >
          <el-tab-pane label="平台" name="first">
            <el-row :gutter="10">
              <el-col :span="8" :offset="18">
                <el-button type="danger" icon="el-icon-delete" style="margin:2%;border:none;" class="elbuttonred" size="small">删除</el-button>
                <el-dropdown split-button type="primary"  size="small">
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
                  <!-- :on-change="handleChange" -->
                </el-upload>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12" :offset="6">
                <el-pagination
              
                  :page-size="100"
                  layout="prev, pager, next, jumper"
                  :total="100"
                ></el-pagination>
         
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="本地服务器" name="second">
            <el-row :gutter="10">
              
              <!-- 1 -->
            <el-col :span="5">
              <el-select v-model="yearValue" placeholder="不限年份" size="mini">
                <el-option label="不限年份" value="item"></el-option>
                <el-option v-for="item of list" :key="item" :label="item" :value="item"></el-option>
              </el-select>
            </el-col>
            <el-col :span="5">
              <el-select v-model="monthValue" placeholder="不限月份" size="mini">
                <el-option label="不限月份" value="item"></el-option>
                <el-option v-for="item of list" :key="item" :label="item" :value="item"></el-option>
              </el-select>
            </el-col>
         
       

              <el-col :span="8" :offset="6">
                <el-button type="danger" icon="el-icon-delete" style="margin:2%;border:none;" size="small" class="elbuttonred">删除</el-button>
                <el-dropdown split-button type="primary" size="small">
                  移动
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>1</el-dropdown-item>
                    <el-dropdown-item>2</el-dropdown-item>
                    <el-dropdown-item>3</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>

                <el-button size="small" class="elbuttonStyle">点击上传</el-button>
                 <!-- :on-change="handleChange" -->
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
                  <!-- :on-change="handleChange" -->
                  <i slot="default" class="el-icon-plus"></i>
                </el-upload>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12" :offset="6">
                <el-pagination
                 
                  :page-size="100"
                  layout="prev, pager, next, jumper"
                  :total="100"
                ></el-pagination>
                <!-- @current-change="handleCurrentChange"
                -->
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
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>

.p-value {
  background-color: #009688;
  width: 100px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  color: white;

  position: absolute;
  bottom: 5%;
}
.ResidentialStyle {
  padding: 0;
  width: 13%;
  margin: 1% 0% 0% 1%;
}

.el-upload{
    margin: 1% 10%;
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

</style>  
<script>
export default {
  data() {
    return {
      url: "http://dev.xmduobanjin.com/static/images/default-pic.jpg",
      pvalue: "",
      hide: true,
      activeName: "first",
      yearValue: "",
      monthValue: "",
      form: {
        name: ""
      },

      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      fileList: [
        {
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ],
      gridData: [
        {
          img:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          name: "王小虎",
          phone: 12346752432,
          Residential: "槟榔东里51号	",
          commander: "叶招旭	",
          commanderPhone: "18050064050",
          address: "镇东明路槟榔花园(槟榔东里123~125号附近)"
        }
      ],
      dialogTableVisible: false
    };
  },
  methods: {
    handleClick(row) {
      this.hide = true;
      this.dialogTableVisible = false;

      this.url = row.img;

      this.pvalue = row.name;
    },
    del() {
      this.hide = false;
    },
    fanhui(){
this.$router.push({ path: "/vip/page" });
    },
    off(index) {
      this.items.splice(index, 1);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>  