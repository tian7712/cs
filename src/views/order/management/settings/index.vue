
<template>
  <div class="app-container">
    <div class="position">当前位置：<span>订单设置</span> </div>
    <el-card class="box-card">
      <el-row>
        <el-col :span="24">
          <el-form ref="form" :model="form" label-width="120px" :label-position="labelPosition">
            <el-form-item label="限制购买距离">
              <el-radio label="1" @change="km" v-model="radiokm">不限制</el-radio>
              <el-radio label="2" @change="km" v-model="radiokm">限制</el-radio>

              <el-input v-if="kmchange">
                <template slot="append">KM</template>
              </el-input>
            </el-form-item>
            <el-form-item label="自动取消未支付订单">
              <el-radio label="开启" @change="off" v-model="radiooff"></el-radio>
              <el-radio label="关闭" @change="off" v-model="radiooff"></el-radio>

              <p>订单生成后，用户在x小时内未支付，系统自动取消</p>
              <el-input v-if="offchange" placeholder="默认(0.25)">
                <template slot="append">小时</template>
              </el-input>
            </el-form-item>
            <el-form-item label="减库存方式">
              <el-radio-group v-model="form.stock">
                <el-radio label="下单减库存"></el-radio>
                <el-radio label="付款后减库存"></el-radio>
              </el-radio-group>
              <p>用户下单减库存，取消订单将返还库存数量</p>
            </el-form-item>
            <el-form-item label="满多少可以下单">
              <el-radio label="开启" @change="full" v-model="radioFull"></el-radio>
              <el-radio label="关闭" @change="full" v-model="radioFull"></el-radio>

              <p>购物车满多少才可以下单购买</p>
              <el-input v-if="fullChange" />
            </el-form-item>
            <el-form-item label="开启redis模式">
              <el-radio label="关闭" @change="redis" v-model="radioRedis"></el-radio>
              <el-radio label="开启" @change="redis" v-model="radioRedis"></el-radio>
              <!-- <el-input v-if="redisChange"/> -->
              <p>更精确控制高并发下，商品超库存问题，请确保安装php_redis控制，否则无法启用</p>
              <p style="color:red;">开启redis,建议使用下单减库存方式</p>
            </el-form-item>
            <div v-if="redisChange">
              <el-form-item label="redis-host">
                <el-input placeholder="默认127.0.0.1" class="inputRedis" v-model="host"></el-input>
              </el-form-item>
              <el-form-item label="redis-post">
                <el-input placeholder="默认6379" class="inputRedis" v-model="post" ></el-input>
              </el-form-item>
              <el-form-item label="redis-auth">
                <el-input class="inputRedis" v-model="auth"></el-input>
                <p>redis不需要验证可以不填写auth</p>
              </el-form-item>
            </div>

            <el-form-item label="订单提醒开关">
              <el-radio-group v-model="form.remind">
                <el-radio label="关闭"></el-radio>
                <el-radio label="开启"></el-radio>
              </el-radio-group>
              <p>首页、商品详情页订单提醒开关</p>
            </el-form-item>
            <el-form-item label="付款后分享">
              <el-radio-group v-model="form.share">
                <el-radio label="关闭"></el-radio>
                <el-radio label="开启"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="付款后分享图片">
              <el-input v-model="Shareimg">
                <el-button slot="append" @click="dialogFormVisible = true">选择图片</el-button>
              </el-input>
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                  :file-list="fileList1"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                style="margin:1%"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt />
              </el-dialog>
              <p>不传则使用默认商品分享图，比列：5：4</p>
            </el-form-item>
            <el-form-item label="小票打印">
              <el-radio label="开启飞鹅打印机" @change="printing" v-model="radioPrinting"></el-radio>
              <el-radio label="开启易联云打印机" @change="printing" v-model="radioPrinting"></el-radio>
              <el-radio label="关闭" @change="printing" v-model="radioPrinting"></el-radio>
              <el-row v-if="printingChange">
                <el-col :span="8">
                  <el-input v-model="print">
                    <template slot="prepend">sn:</template>
                  </el-input>
                </el-col>
                <el-col :span="8">
                  <el-input v-model="print">
                    <template slot="prepend">key:</template>
                  </el-input>
                </el-col>
                <el-col :span="8">
                  <el-input v-model="print">
                    <template slot="prepend">打印联数：</template>
                  </el-input>
                </el-col>
              </el-row>
              <el-row v-if="printingChange1">
                <el-col :span="12">
                  <el-input v-model="print">
                    <template slot="prepend">应用id::</template>
                  </el-input>
                </el-col>
                <el-col :span="12">
                  <el-input v-model="print">
                    <template slot="prepend">应用密钥:</template>
                  </el-input>
                </el-col>

                <el-col :span="8">
                  <el-input v-model="print">
                    <template slot="prepend">打印机终端号:</template>
                  </el-input>
                </el-col>
                <el-col :span="8">
                  <el-input v-model="print">
                    <template slot="prepend">终端密钥:</template>
                  </el-input>
                </el-col>
                <el-col :span="8">
                  <el-input v-model="print">
                    <template slot="prepend">打印联数：</template>
                  </el-input>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item label="订单留言">
              <el-radio-group v-model="form.leaving">
                <el-radio label="关闭"></el-radio>
                <el-radio label="开启"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="开启余额支付">
              <el-radio-group v-model="form.payment">
                <el-radio label="关闭"></el-radio>
                <el-radio label="开启"></el-radio>
              </el-radio-group>
              <p>开启后会员中心默认开启余额充值</p>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">提交</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>

      <el-dialog title="图片" :visible.sync="dialogFormVisible">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="平台" name="first">
            <el-row :gutter="10">
              
              <el-col :span="8" offset="16">
                <el-button type="danger" icon="el-icon-delete" style="margin:2%" size="small">删除</el-button>
                <el-dropdown split-button type="primary" @click="handleClick" size="small">
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
                  :on-change="handleChange"
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
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
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
                <el-dropdown split-button type="primary" @click="handleClick" size="small">
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
                  :on-change="handleChange"
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
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
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
<style lang="scss" scoped>
.position {
  margin: 3% 0 1% 1%;
  span {
    color: rgb(76, 153, 89);
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

p {
  color: gray;
  margin: 0;
  padding: 0;
}
.inputRedis {
  width: 20%;
}
.upload-demo {
  display: inline;
}
</style>  
<script>
export default {
  data() {
    return {
      host:'127.0.0.1',
      post:'6379',
      auth:'',
      Shareimg:'',
      fileList: [
        {
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          url:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        },
        {
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
         {
          url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
        },
         {
          url: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg'
        }
     
      ],
      fileList1: [
        {
          url:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        }
      ],
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      currentPage3: 2,
      options: [
        {
          value: "选项1",
          label: "2020"
        },
        {
          value: "选项2",
          label: "2019"
        },
        {
          value: "选项3",
          label: "2018"
        },
        {
          value: "选项4",
          label: "2017"
        },
        {
          value: "选项5",
          label: "2016"
        }
      ],
      value: "",
      options1: [
        {
          value: "选项1",
          label: "1"
        },
        {
          value: "选项2",
          label: "2"
        },
        {
          value: "选项3",
          label: "3"
        },
        {
          value: "选项4",
          label: "4"
        },
        {
          value: "选项5",
          label: "5"
        }
      ],
      value1: "",
      activeName: "first",
      print: "",
      labelPosition: "left",
      dialogFormVisible: false,
      kmchange: false,
      offchange: true,
      fullChange: false,
      redisChange: true,
      printingChange: false,
      printingChange1: false,
      radiokm: "1",
      radiooff: "开启",
      radioFull: "关闭",
      radioRedis: "开启",
      radioPrinting: "关闭",
      // radioPrinting1: "",
      form: {
        name: "20",
        share: "关闭",
        remind: "开启",
        leaving: "开启",
        payment: "开启",
        stock: "下单减库存"
      }
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    onSubmit() {
      this.$message({ message: "提交成功", type: "success" });
    },
    km() {
      this.kmchange = !this.kmchange;
    },
    off() {
      this.offchange = !this.offchange;
    },
    full() {
      this.fullChange = !this.fullChange;
    },
    redis() {
      this.redisChange = !this.redisChange;
    },
    printing() {
      // console.log(this.radioPrinting)
      if (this.radioPrinting == "开启飞鹅打印机") {
        this.printingChange = true;
        this.printingChange1 = false;
        console.log(this.radioPrinting);
      } else if (this.radioPrinting == "开启易联云打印机") {
        this.printingChange = false;
        this.printingChange1 = true;

        console.log(this.radioPrinting);
      } else {
        this.printingChange = false;
        this.printingChange1 = false;
      }
      // this.printingChange= !this.printingChange;
    },
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