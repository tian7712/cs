
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>附件设置</span>
    </div>
    <el-card class="box-card">
      <el-row>
        <el-col :span="24">
          <el-form ref="form" :model="form" label-width="120px" :label-position="labelPosition">
            <el-form-item label="远程附件">
              <el-radio label="关闭" @change="printing" v-model="radioPrinting"></el-radio>
              <el-radio label="七牛云存储" @change="printing" v-model="radioPrinting"></el-radio>
              <el-radio label="阿里云OSS" @change="printing" v-model="radioPrinting"></el-radio>

              <!-- <el-row ></el-row> -->

              <el-form ref="form" :model="form" label-width="120px" v-if="printingChange">
                <el-form-item>
                  <p>启用七牛云存储后，请把/Uploads目录（包括此目录）下的子文件及子目录上传至七牛云存储 ：</p>
                  <p>七牛云存储</p>
                </el-form-item>

                <el-form-item label="Accesskey">
                  <el-input v-model="form.name"></el-input>
                  <p>用于签名的公钥</p>
                </el-form-item>
                <el-form-item label="Secretkey">
                  <el-input v-model="form.name"></el-input>
                  <p>用于签名的私钥</p>
                </el-form-item>
                <el-form-item label="Bucket">
                  <el-input v-model="form.name"></el-input>
                  <p>请保证bucket为可公共读取的</p>
                </el-form-item>
                <el-form-item label="Url">
                  <el-input v-model="form.name"></el-input>
                  <p>七牛支持用户自定义访问域名。注：url开头加http://或https://结尾加 ‘/’例：http://abc.com/</p>
                </el-form-item>
              </el-form>

              <!-- 2 -->
              <el-form ref="form" :model="form" label-width="120px" v-if="printingChange1">
                <el-form-item>
                  <p>启用阿里oss后，请把/Uploads目录（包括此目录）下的子文件及子目录上传至阿里云oss, 相关工具：</p>
                  <p>官方推荐工具</p>
                </el-form-item>

                <el-form-item label="Access Key ID">
                  <el-input v-model="form.name"></el-input>
                  <p>Access Key ID是您访问阿里云API的密钥，具有该账户完全的权限，请您妥善保管。</p>
                </el-form-item>
                <el-form-item label="Access Key Secret">
                  <el-input v-model="form.name"></el-input>
                  <p>Access Key Secret是您访问阿里云API的密钥，具有该账户完全的权限，请您妥善保管。(填写完Access Key ID 和 Access Key Secret 后请选择bucket)</p>
                </el-form-item>
                <el-form-item label="Bucket">
                  <el-input v-model="form.name"></el-input>
                  <p>请保证bucket为可公共读取的</p>
                </el-form-item>
                <el-form-item label="内网上传">
                  <el-radio v-model="radio" label="1">是</el-radio>
                  <el-radio v-model="radio" label="2">否</el-radio>
                  <p>如果此站点使用的是阿里云ecs服务器，并且服务器与bucket在同一地区（如：同在华北一区），您可以选择通过内网上传的方式上传附件，以加快上传速度、节省带宽。</p>
                </el-form-item>
                <el-form-item label="Url">
                  <el-input v-model="form.name"></el-input>
                  <p>阿里云oss支持用户自定义访问域名，如果自定义了URL则用自定义的URL，如果未自定义，则用系统生成出来的URL。 注：自定义url开头加http://或https://结尾加 ‘/’例：http://abc.com/</p>
                </el-form-item>
              </el-form>
            </el-form-item>

            <el-form-item>
              <el-button class="elbuttonStyle"  @click="onSubmit">提交</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>

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
</style>  
<script>
export default {
  data() {
    return {
      value: "",

      value1: "",
radio:'1',
      print: "",
      labelPosition: "left",
      dialogFormVisible: false,

      printingChange: false,
      printingChange1: false,
      radiokm: "1",
      radiooff: "开启",
      radioFull: "关闭",
      radioRedis: "开启",
      radioPrinting: "关闭",
      form: {
        name: ""
      }
    };
  },
  methods: {
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
      if (this.radioPrinting == "七牛云存储") {
        this.printingChange = true;
        this.printingChange1 = false;
        console.log(this.radioPrinting);
      } else if (this.radioPrinting == "阿里云OSS") {
        this.printingChange = false;
        this.printingChange1 = true;

        console.log(this.radioPrinting);
      } else {
        this.printingChange = false;
        this.printingChange1 = false;
      }
      // this.printingChange= !this.printingChange;
    }
  }
};
</script>  