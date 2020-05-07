
<template>
  <div class="app-container">
     <div class="position">当前位置： 
      
      <span>订单列表</span>
      </div>
    <el-card class="box-card">
      <div class="filter-container">
        <el-tabs v-model="activeName">
          <el-tab-pane label="全部订单" name="first"></el-tab-pane>
          <el-tab-pane label="待付款" name="second"></el-tab-pane>
          <el-tab-pane label="待发货" name="third"></el-tab-pane>
          <el-tab-pane label="配送中" name="fourth"></el-tab-pane>
          <el-tab-pane label="待收货" name="fifth"></el-tab-pane>
          <el-tab-pane label="已完成" name="sixth"></el-tab-pane>
          <el-tab-pane label="已取消" name="seventh"></el-tab-pane>
          <el-tab-pane label="已退款" name="eighth"></el-tab-pane>
        </el-tabs>
        <el-select
          v-model="listQuery.importance"
          placeholder="订单类型"
          clearable
          style="width: 120px"
          class="filter-item"
        >
          <el-option v-for="itemtype in importanceOptions" :key="itemtype" :label="itemtype" :value="itemtype" />
        </el-select>
        <el-select
          v-model="listQuery.importance1"
          placeholder="不按时间"
          clearable
          style="width: 120px"
          class="filter-item"
        >
          <el-option v-for="itemtime in importance1Options" :key="itemtime" :label="itemtime" :value="itemtime" />
        </el-select>
        <el-date-picker
          v-model="datevalue2"
          class="filter-item"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions"
          style="width: 280px"
        ></el-date-picker>
        <el-select
          v-model="listQuery.importance2"
          placeholder="配送方式"
          clearable
          style="width: 120px"
          class="filter-item"
        >
          <el-option v-for="itemorder in importance2Options" :key="itemorder" :label="itemorder" :value="itemorder" />
        </el-select>
        <el-select
          v-model="listQuery.importance3"
          placeholder="订单号"
          clearable
          style="width: 120px"
          class="filter-item"
        >
          <el-option v-for="itemdelivery in importance3Options" :key="itemdelivery" :label="itemdelivery" :value="itemdelivery" />
        </el-select>
        <el-input
          v-model="listQuery.title"
          placeholder="请输入关键词"
          style="width: 190px;"
          class="filter-item"
        
        />
        <el-button size="mini" type="primary"  class="filter-item">搜索</el-button>
        <el-button size="mini" type="primary" class="filter-item">导出</el-button>
        <el-button size="mini" type="primary" class="filter-item">导出数量</el-button>
      </div>

      <!-- //table -->

      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
     
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="ID" label="ID" width="60">
          <!-- <template slot-scope="scope">{{ scope.row.id }}</template> -->
          
        </el-table-column>
        <el-table-column prop="name" label="商品名称" width="220">
          <el-image 
    style="width: 50px; height: 50px"
    :src="url"
    >
  </el-image>
         <span>无抗鸡蛋（10个/盒)</span> <span>退款中</span>
        </el-table-column>
        <el-table-column prop="num" label="单价/数量" show-overflow-tooltip>
        ￥<span>2</span> x <span>1</span>
        </el-table-column>
        <el-table-column prop="num" label="买家" show-overflow-tooltip>
          <p>林晓晖</p>
          <p>15659123951</p>
          <p>
            买家:
            <span>21312</span>
          </p>
        </el-table-column>
        <el-table-column prop="num" label="支付/配送" show-overflow-tooltip>
         <p>余额支付</p>
          <p>（自提）</p>
        </el-table-column>

        <el-table-column prop="num" label="小区/团长" show-overflow-tooltip width="200">
        
         <p>林晓晖电话：15659123951</p>
          <p> <span>小区： 软件园二区 (福建省 厦门市)</span> </p>

        </el-table-column>

        <el-table-column prop="num" label="价格" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作" width="200" show-overflow-tooltip>
          <el-button type="text" size="small">查看详情</el-button>
        <el-button type="text" size="small">维权处理</el-button>
        </el-table-column>
        <el-table-column prop="state" label="状态" show-overflow-tooltip width="120">
          <p>配送中</p>
          <el-button size="mini">确认送达团长</el-button>
        </el-table-column>
        
      </el-table>

      <pagination
        v-show="total>0"
        :total="total"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"
        @pagination="getList"
      />
    </el-card>
    <el-dialog title="备注" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="temp"
        label-position="left"
        label-width="100px"
        style="width: 500px; margin-left:50px;"
      >
        <el-form-item label="备注">
          <el-input
            v-model="temp.remark"
            :autosize="{ minRows: 2, maxRows: 4}"
            type="textarea"
            placeholder="长度请控制在100字以内"
          />
        </el-form-item>
        <el-form-item label="商品简短标题" prop="小票打印机使用，请控制字数，未填写默认截取商品标题(无须打印的可以不填写)">
          <el-input v-model="temp.title" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">提交</el-button>
        <el-button @click="dialogFormVisible = false">取消</el-button>
      </div>
    </el-dialog>

    <el-dialog :visible.sync="dialogPvVisible" title="Reading statistics">
      <el-table :data="pvData" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="key" label="Channel" />
        <el-table-column prop="pv" label="Pv" />
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPvVisible = false">确认</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  fetchList,
  fetchPv,
  createArticle,
  updateArticle
} from "@/api/article";
import waves from "@/directive/waves"; // waves directive
import { parseTime } from "@/utils";
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination基于el分页的二次包

import Dropzone from "dropzone";
import "dropzone/dist/dropzone.css";
// import { getToken } from 'api/qiniu';

Dropzone.autoDiscover = false;
// 上传图片

const calendarTypeOptions = [
  { key: "CN", display_name: "水果蔬菜" },
  { key: "US", display_name: "蛋肉禽类" },
  { key: "JP", display_name: "海鲜冻品" },
  { key: "EU", display_name: "米面盐油" }
];

// arr to obj, such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name;
  return acc;
}, {});

export default {
  name: "ComplexTable",
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "info",
        deleted: "danger"
      };
      return statusMap[status];
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type];
    }
  },
  data() {
    return {
      activeName:'',
      url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      tableData: [
        {
          ID: "2016",
          name: "王小",
          num: "123",
          state: "配送中"
        },
        {
          ID: "22016",
          name: "王2小",
          num: "1223",
          state: "申请退款中"
        }
      ],
      item1: "",
      itemdelivery:"",
      itemorder:"",
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        importance1: undefined,
        importance2: undefined,
        importance3: undefined,
        title: undefined,
        type: undefined,
        sort: "+id"
      },
      importanceOptions: ["普通订单", "秒杀订单", "积分订单"],
      importance1Options: ["下单时间", "付款时间", "发货时间", "完成时间"],
      importance2Options: ["自提", "团长配送", "快递"],
      importance3Options: ["会员信息", "手机号", "收件人信息", "地址信息","快递单号","商品名称","微信支付单号","团长姓名","小区名称","供应商名称"],
      calendarTypeOptions,
      sortOptions: [
        { label: "ID Ascending", key: "+id" },
        { label: "ID Descending", key: "-id" }
      ],
      statusOptions: ["published", "draft", "deleted"],
      showReviewer: false,
      temp: {
        id: undefined,
        importance: 1,
        remark: "",
        timestamp: new Date(),
        title: "",
        type: "",
        status: "published"
      },
      dialogFormVisible: false,
      dialogStatus: "",
      textMap: {
        update: "修改",
        create: "添加"
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        type: [
          { required: true, message: "type is required", trigger: "change" }
        ],
        timestamp: [
          {
            type: "date",
            required: true,
            message: "timestamp is required",
            trigger: "change"
          }
        ],
        title: [
          { required: true, message: "title is required", trigger: "blur" }
        ]
      },
      downloadLoading: false,
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      datevalue2: ""
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.listLoading = true;
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items;
        this.total = response.data.total;

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false;
        }, 1.5 * 1000);
      });
    }
    // ,
  //   handleFilter() {
  //     this.listQuery.page = 1;
  //     this.getList();
  //   },
  //   handleModifyStatus(row, status) {
  //     this.$message({
  //       message: "操作成功",
  //       type: "success"
  //     });
  //     row.status = status;
  //   },
  //   sortChange(data) {
  //     const { prop, order } = data;
  //     if (prop === "id") {
  //       this.sortByID(order);
  //     }
  //   },
  //   sortByID(order) {
  //     if (order === "ascending") {
  //       this.listQuery.sort = "+id";
  //     } else {
  //       this.listQuery.sort = "-id";
  //     }
  //     this.handleFilter();
  //   },
  //   resetTemp() {
  //     this.temp = {
  //       id: undefined,
  //       importance: 1,
  //       remark: "",
  //       timestamp: new Date(),
  //       title: "",
  //       status: "published",
  //       type: ""
  //     };
  //   },
  //   handleCreate() {
  //     this.resetTemp();
  //     this.dialogStatus = "create";
  //     this.dialogFormVisible = true;
  //     this.$nextTick(() => {
  //       this.$refs["dataForm"].clearValidate();
  //     });
  //   },
  //   createData() {
  //     this.$refs["dataForm"].validate(valid => {
  //       if (valid) {
  //         this.temp.id = parseInt(Math.random() * 100) + 1024; // mock a id
  //         this.temp.author = "vue-element-admin";
  //         createArticle(this.temp).then(() => {
  //           this.list.unshift(this.temp);
  //           this.dialogFormVisible = false;
  //           this.$notify({
  //             title: "添加商品",
  //             message: "添加成功",
  //             type: "success",
  //             duration: 2000
  //           });
  //         });
  //       }
  //     });
  //   },
  //   handleUpdate(row) {
  //     this.temp = Object.assign({}, row); // copy obj
  //     this.temp.timestamp = new Date(this.temp.timestamp);
  //     this.dialogStatus = "update";
  //     this.dialogFormVisible = true;
  //     this.$nextTick(() => {
  //       this.$refs["dataForm"].clearValidate();
  //     });
  //   },
  //   updateData() {
  //     this.$refs["dataForm"].validate(valid => {
  //       if (valid) {
  //         const tempData = Object.assign({}, this.temp);
  //         tempData.timestamp = +new Date(tempData.timestamp); // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
  //         updateArticle(tempData).then(() => {
  //           const index = this.list.findIndex(v => v.id === this.temp.id);
  //           this.list.splice(index, 1, this.temp);
  //           this.dialogFormVisible = false;
  //           this.$notify({
  //             title: "修改",
  //             message: "修改成功",
  //             type: "success",
  //             duration: 2000
  //           });
  //         });
  //       }
  //     });
  //   },
  //   handleDelete(row, index) {
  //     this.$notify({
  //       title: "删除",
  //       message: "删除成功",
  //       type: "success",
  //       duration: 2000
  //     });
  //     this.list.splice(index, 1);
  //   },
  //   handleFetchPv(pv) {
  //     fetchPv(pv).then(response => {
  //       this.pvData = response.data.pvData;
  //       this.dialogPvVisible = true;
  //     });
  //   },
  //   handleDownload() {
  //     this.downloadLoading = true;
  //     import("@/vendor/Export2Excel").then(excel => {
  //       const tHeader = ["timestamp", "title", "type", "importance", "status"];
  //       const filterVal = [
  //         "timestamp",
  //         "title",
  //         "type",
  //         "importance",
  //         "status"
  //       ];
  //       const data = this.formatJson(filterVal);
  //       excel.export_json_to_excel({
  //         header: tHeader,
  //         data,
  //         filename: "table-list"
  //       });
  //       this.downloadLoading = false;
  //     });
  //   },
  //   formatJson(filterVal) {
  //     return this.list.map(v =>
  //       filterVal.map(j => {
  //         if (j === "timestamp") {
  //           return parseTime(v[j]);
  //         } else {
  //           return v[j];
  //         }
  //       })
  //     );
  //   },
  //   getSortClass: function(key) {
  //     const sort = this.listQuery.sort;
  //     return sort === `+${key}` ? "ascending" : "descending";
  //   }
  }
}
</script>

<style  lang="scss"  scoped>
*{
  font-size: 0.9em;
}
.position {
  margin: 3% 0 1% 1%;
  span{
    color: #009688;
  }
}
.drop {
  border: 1px solid gainsboro;
}
p{
  margin: 0;
  padding: 0;
  span{
   color: rgb(97, 206, 97);
  }
}

</style>
