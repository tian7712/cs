<template>
  <div style="padding:30px;">
    <div class="position">当前位置： 
      
      <span>批量发货</span>
      </div>
    <el-card class="box-card">
      <el-tabs v-model="activeName">
         <!-- @tab-click="handleClick" -->
        <el-tab-pane label="批量发货到团长" name="first">
          <p>批量发货到团长</p>
          <p>功能介绍: 使用excel快速导入进行订单发货</p>
          <p>如重复导入数据将以最新导入数据为准，请谨慎使用</p>
          <p>数据导入订单状态自动修改为配送中</p>
          <p>一次导入的数据不要太多,大量数据请分批导入,建议在服务器负载低的时候进行</p>
          <p>使用方法:</p>
          <p>1. 下载Excel模板文件并录入信息</p>
          <p>2. 上传Excel导入</p>
          <p>格式要求： Excel第一列必须为订单编号</p>
          <p>EXCEL</p>
          <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" />
          <!-- <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
      <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
          </el-table>-->
          <p class="p-last">如果遇到数据重复则将进行数据更新</p>
          <el-divider></el-divider>
          <el-button style="margin:0 0 20px 20px;" type="primary">确认导入</el-button>
          <el-button
            
            style="margin:0 0 20px 20px;"
            type="primary"
            icon="el-icon-document"
            
          >下载Excel模板文件</el-button>
          <!-- :loading="downloadLoading" -->
        </el-tab-pane>
        <el-tab-pane label="批量快递发货到会员" name="second">
          <p>批量快递发货到会员</p>
          <p>功能介绍: 使用excel快速导入进行订单发货</p>
          <p>如重复导入数据将以最新导入数据为准，请谨慎使用</p>
          <p>数据导入订单状态自动修改为已发货</p>
          <p>一次导入的数据不要太多,大量数据请分批导入,建议在服务器负载低的时候进行</p>
          <p>使用方法:</p>
          <p>1. 下载Excel模板文件并录入信息</p>
          <p>2. 选择快递公司</p>
          <p>3. 上传Excel导入</p>
          <p>格式要求： Excel第一列必须为订单编号，第二列必须为快递单号，第三列必须为快递编号快递公司</p>
          <p>快递公司</p>
          <el-select v-model="value" clearable placeholder="请选择快递公司">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <p>EXCEL</p>
          <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" />

          <p class="p-last">如果遇到数据重复则将进行数据更新</p>
          <el-divider></el-divider>
          <el-button style="margin:0 0 20px 20px;" type="primary">确认导入</el-button>
          <el-button
          
            style="margin:0 0 20px 20px;"
            type="primary"
            icon="el-icon-document"
        
          >下载Excel模板文件</el-button>
        </el-tab-pane>
        <el-tab-pane label="订单批量团长签收" name="third">
          <p>订单批量团长签收</p>
          <p>功能介绍: 使用excel快速导入配送中订单进行团长批量签收</p>
          <p>如重复导入数据将以最新导入数据为准，请谨慎使用</p>
          <p>数据导入订单状态自动修改为已送达团长</p>
          <p>一次导入的数据不要太多,大量数据请分批导入,建议在服务器负载低的时候进行</p>
          <p>使用方法:</p>
          <p>1. 下载Excel模板文件并录入信息</p>
          <p>2. 上传Excel导入</p>
          <p>格式要求： Excel第一列必须为订单编号</p>
          <p>EXCEL</p>
           <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" />

          <p class="p-last">如果遇到数据重复则将进行数据更新</p>
            <el-divider></el-divider>
          <el-button style="margin:0 0 20px 20px;" type="primary">
        确认导入
      </el-button>
          <el-button style="margin:0 0 20px 20px;" type="primary" icon="el-icon-document">
        下载Excel模板文件
      </el-button>
  
        </el-tab-pane>
        <el-tab-pane label="订单批量确认收货" name="fourth">
          <p>订单批量确认收货</p>
          <p>功能介绍: 使用excel快速导入 待收货的订单进行批量用户确认收货</p>
          <p>如重复导入数据将以最新导入数据为准，请谨慎使用</p>
          <p>数据导入订单状态自动修改为确认收货，并进行团长佣金结算</p>
          <p>一次导入的数据不要太多,大量数据请分批导入,建议在服务器负载低的时候进行</p>
          <p>使用方法:</p>
          <p>1. 下载Excel模板文件并录入信息</p>
          <p>2. 上传Excel导入</p>
          <p>格式要求： Excel第一列必须为订单编号</p>
          <p>EXCEL</p>
          <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" />

          <p class="p-last">如果遇到数据重复则将进行数据更新</p>
            <el-divider></el-divider>
          <el-button style="margin:0 0 20px 20px;" type="primary">
        确认导入
      </el-button>
          <el-button  style="margin:0 0 20px 20px;" type="primary" icon="el-icon-document">
        下载Excel模板文件
      </el-button>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
import UploadExcelComponent from "@/components/UploadExcel/index.vue";
export default {
  name: "UploadExcel",
  components: { UploadExcelComponent },
  data() {
    return {
      activeName: "first",
      tableData: [],
      tableHeader: [],
      options: [
        {
          value: "选项1",
          label: "顺丰快递"
        },
        {
          value: "选项2",
          label: "圆通快递"
        }
      ],
      value: ""
    };
  },
  methods: {
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1;

      if (isLt1M) {
        return true;
      }

      this.$message({
        message: "Please do not upload files larger than 1m in size.",
        type: "warning"
      });
      return false;
    },
    handleSuccess({ results, header }) {
      this.tableData = results;
      this.tableHeader = header;
    }
  }
};
</script>
<style lang="scss" scoped>

p {
  font-size: 0.8em;
  margin: 1%;
  
}
.p-last {
  color: gray;
  margin: 1%;
  // padding: 0;
}
.el-divider {
  margin: 1%;
  padding: 0;
}
</style>
