<template>
  <div class="app-container">
    <el-card class="box-card">
      <div class="filter-container">
        <el-input
          v-model="listQuery.title"
          placeholder="输入商品编码或名称"
          style="width: 190px;"
          class="filter-item"
          @keyup.enter.native="handleFilter"
        />
        <el-select
          v-model="listQuery.importance"
          placeholder="不按时间"
          clearable
          style="width: 120px"
          class="filter-item"
        >
          <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item" />
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
        ></el-date-picker>
        <el-select
          v-model="listQuery.importance"
          placeholder="商品分类"
          clearable
          style="width: 120px"
          class="filter-item"
        >
          <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item" />
        </el-select>
        <el-select
          v-model="listQuery.importance"
          placeholder="全部商品"
          clearable
          style="width: 120px"
          class="filter-item"
        >
          <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item" />
        </el-select>
        <el-button
          v-waves
          class="filter-item"
          type="primary"
          icon="el-icon-search"
          @click="handleFilter"
        >搜索</el-button>
        <el-button
          class="filter-item"
          style="margin-left: 10px;"
          type="primary"
          icon="el-icon-edit"
          @click="handleCreate"
        >添加</el-button>
      </div>

      <el-table
        :key="tableKey"
        v-loading="listLoading"
        :data="list"
        fit
        highlight-current-row
        style="width: 100%;"
        @sort-change="sortChange"
      >
        <el-table-column
          label="ID"
          prop="id"
          sortable="custom"
          align="center"
          width="80"
          :class-name="getSortClass('id')"
        >
          <template slot-scope="{row}">
            <span>{{ row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="排序" width="100px" align="center">
          <template slot-scope="{row}">
            <span>{{ row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
          </template>
        </el-table-column>
        <el-table-column label="商品名称" min-width="150px">
          <template slot-scope="{row}">
            <span class="link-type" @click="handleUpdate(row)">{{ row.title }}</span>
            <el-tag>{{ row.type | typeFilter }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="活动时间" width="150px" align="center">
          <template slot-scope="{row}">
            <span>{{ row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
          </template>
        </el-table-column>
        <el-table-column label="商品类别" width="110px" align="center">
          <template slot-scope="{row}">
            <span>{{ row.author }}</span>
          </template>
        </el-table-column>
        <el-table-column v-if="showReviewer" label="价格" width="110px" align="center">
          <template slot-scope="{row}">
            <span style="color:red;">{{ row.reviewer }}</span>
          </template>
        </el-table-column>
        <el-table-column label="销量" width="80px">
          <template slot-scope="{row}">
            <span
              v-if="row.pageviews"
              class="link-type"
              @click="handleFetchPv(row.pageviews)"
            >{{ row.pageviews }}</span>
            <span v-else>0</span>
          </template>
        </el-table-column>
        <el-table-column label="库存" align="center" width="95">
          <template slot-scope="{row}">
            <span
              v-if="row.pageviews"
              class="link-type"
              @click="handleFetchPv(row.pageviews)"
            >{{ row.pageviews }}</span>
            <span v-else>0</span>
          </template>
        </el-table-column>
        <el-table-column label="是否上架" class-name="status-col" width="100">
          <el-switch v-model="temp" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-table-column>
        <el-table-column label="今日推荐" width="100px" align="center">
          <!-- <template slot-scope="{row}">
          <span>{{ row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
          </template>-->
          <el-switch v-model="item1" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-table-column>
        <el-table-column label="置顶" width="100px" align="center">
          <el-switch v-model="temp" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          width="150"
          class-name="small-padding fixed-width"
        >
          <template slot-scope="{row,$index}">
            <el-button type="primary" size="mini" @click="handleUpdate(row)">修改</el-button>
            <!-- <el-button v-if="row.status!='published'" size="mini" type="success" @click="handleModifyStatus(row,'published')">
            Publish
          </el-button>
          <el-button v-if="row.status!='draft'" size="mini" @click="handleModifyStatus(row,'draft')">
            Draft
            </el-button>-->
            <el-button
              v-if="row.status!='deleted'"
              size="mini"
              type="danger"
              @click="handleDelete(row,$index)"
            >删除</el-button>
          </template>
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
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-row :gutter="20">
        <el-col :span="6" :offset="20">
          <el-button type="text" @click="dialogStatus==='create'?createData():updateData()">提交</el-button>
          <el-button type="text" @click="dialogFormVisible = false">返回列表</el-button>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">确认</el-button>
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
import Tinymce from "@/components/Tinymce";
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
  // name: "ComplexTable",
  // components: { Pagination },
  name: "TinymceDemo",
  components: { Tinymce },
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
      classifier:'',
      weightinput:'',
      dynamicValidateForm: {
        domains: [
          {
            value: ""
          }
        ]
      },
      dynamicValidateForm1: {
        domains: [
          {
            value: ""
          }
        ]
      },
      specifications: false,
      specifications1: false,
      homestate: "1",
      sxstate: "1",
      thtime: "",
      items: [],
      checked1: "",
      checked: "",
      fileList: [
        {
          name: "默认图片.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ],
      options: [
        {
          value: "选项1",
          label: "重量"
        },
        {
          value: "选项2",
          label: "量词"
        }
      ],
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      value1: [],
      activeName: "first",
      item1: "",
      item: "",
      off: false,
      dataA: false,
      GGinput: false,
      ZLchange: false,
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+id"
      },
      importanceOptions: [1, 2, 3],
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
    Specifications() {
      if (
        this.value1 == "选项1"
        
      ) {
        this.specifications = true;  
        this.specifications1 = false;
      } else if (
        this.value1 == "选项2"
   
      ) {
        this.specifications = false;
        this.specifications1 = true;
      }  else if(
        this.value1 == "选项1,选项2" ||
        this.value1 == "选项2,选项1"){
        this.specifications = true;
        this.specifications1 = true;
      }
      else {
        this.specifications = false;
        this.specifications1 = false;
      }
 
      console.log(this.value1);
    },
  
    addGG() {
      this.items.push("");
    },

    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now()
      });
    },
    
    addDomain1() {
      this.dynamicValidateForm1.domains.push({
        value: "",
        key: Date.now()
      });
    },
    removeDomain(items) {
      var index = this.dynamicValidateForm.domains.indexOf(items);
      console.log(index);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
     removeDomain1(items) {
      var index = this.dynamicValidateForm1.domains.indexOf(items);
      console.log(index);
      if (index !== -1) {
        this.dynamicValidateForm1.domains.splice(index, 1);
      }
    },

    TZChange() {
      // // alert(111);
      // dataA = false;
      this.dataA = !this.dataA;
      console.log(this.dataA);
    },
    // ZLchange() {
    //   alert(111);
    //   this.ZLinput = !this.ZLinput;
    // },
    delGG() {
      this.$confirm("确认要删除此规格, 是否继续?", "提示", {
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
    },
    boxChange() {
      // alert("checked");
      this.off = !this.off;
      this.GGinput = !this.GGinput;
          this.specifications = false;
        this.specifications1 = false;
        this.value1='';
    },

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
    },
    handleFilter() {
      this.listQuery.page = 1;
      this.getList();
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: "操作成功",
        type: "success"
      });
      row.status = status;
    },
    sortChange(data) {
      const { prop, order } = data;
      if (prop === "id") {
        this.sortByID(order);
      }
    },
    sortByID(order) {
      if (order === "ascending") {
        this.listQuery.sort = "+id";
      } else {
        this.listQuery.sort = "-id";
      }
      this.handleFilter();
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        importance: 1,
        remark: "",
        timestamp: new Date(),
        title: "",
        status: "published",
        type: ""
      };
    },
    handleCreate() {
      // this.resetTemp();
      // this.dialogStatus = "create";
      // this.dialogFormVisible = true;
      // this.$nextTick(() => {
      //   this.$refs["dataForm"].clearValidate();
      // });
       this.$router.push({ path: "/integral/add" });
    },
    createData() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          this.temp.id = parseInt(Math.random() * 100) + 1024; // mock a id
          this.temp.author = "vue-element-admin";
          createArticle(this.temp).then(() => {
            this.list.unshift(this.temp);
            this.dialogFormVisible = false;
            this.$notify({
              title: "添加商品",
              message: "添加成功",
              type: "success",
              duration: 2000
            });
          });
        }
      });
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row); // copy obj
      this.temp.timestamp = new Date(this.temp.timestamp);
      this.dialogStatus = "update";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    },
    updateData() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          const tempData = Object.assign({}, this.temp);
          tempData.timestamp = +new Date(tempData.timestamp); // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          updateArticle(tempData).then(() => {
            const index = this.list.findIndex(v => v.id === this.temp.id);
            this.list.splice(index, 1, this.temp);
            this.dialogFormVisible = false;
            this.$notify({
              title: "修改",
              message: "修改成功",
              type: "success",
              duration: 2000
            });
          });
        }
      });
    },
    handleDelete(row, index) {
      this.$notify({
        title: "删除",
        message: "删除成功",
        type: "success",
        duration: 2000
      });
      this.list.splice(index, 1);
    },
    handleFetchPv(pv) {
      fetchPv(pv).then(response => {
        this.pvData = response.data.pvData;
        this.dialogPvVisible = true;
      });
    },
    handleDownload() {
      this.downloadLoading = true;
      import("@/vendor/Export2Excel").then(excel => {
        const tHeader = ["timestamp", "title", "type", "importance", "status"];
        const filterVal = [
          "timestamp",
          "title",
          "type",
          "importance",
          "status"
        ];
        const data = this.formatJson(filterVal);
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: "table-list"
        });
        this.downloadLoading = false;
      });
    },
    formatJson(filterVal) {
      return this.list.map(v =>
        filterVal.map(j => {
          if (j === "timestamp") {
            return parseTime(v[j]);
          } else {
            return v[j];
          }
        })
      );
    },
    getSortClass: function(key) {
      const sort = this.listQuery.sort;
      return sort === `+${key}` ? "ascending" : "descending";
    }
  }
};
</script>

<style scoped>
.GGweight {
  border: 1px solid gainsboro;
  border-radius: 2px;
  padding: 1%;
  box-shadow: none;
  margin-top: 2%;
}
.drop {
  border: 1px solid gainsboro;
}
span {
  color: rgb(177, 175, 175);
  font-size: 0.8em;
}
.commodityGG {
  width: 20%;
  margin: 1%;
}
</style>
