
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>配送单管理</span>
    </div>
    <el-card class="box-card">
      <el-row :gutter="20" style="margin:1% 0">
        <el-col :span="3">
          <el-select v-model="vipvalue" placeholder="不按时间">
            <!-- <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>-->
            <el-option label="创建清单时间" value="1"></el-option>
            <el-option label="配送时间" value="2"></el-option>
            <el-option label="送达时间" value="3"></el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-date-picker
            v-model="timeValue"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </el-col>
        <el-col :span="3">
          <el-input placeholder="输入编号/团长姓名"></el-input>
        </el-col>

        <el-col :span="6">
          <el-button-group>
            <el-button @click="del" style="background-color: #009688;color:white;">搜索</el-button>
            <el-button>导出商品总单</el-button>
            <el-button>导出配送总单</el-button>
          </el-button-group>
        </el-col>
      </el-row>

      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        header-cell-style="width: 100%;background-color: #f2f2f2;"
      >
        <!-- @selection-change="handleSelectionChange" -->
        <el-table-column type="selection" width="55"></el-table-column>

        <el-table-column prop="id" label="ID" width="80"></el-table-column>

        <el-table-column prop="BillNo" label="清单编号" width></el-table-column>
        <el-table-column prop="Residential" label="	小区" width="150"></el-table-column>
        <el-table-column label="团长/手机" width="150">
          <template slot-scope="scope">
            <!-- <el-image style="width: 40px; height: 40px" :src="scope.row.img"></el-image> -->
            <p>{{scope.row.commander}}</p>

            <p>{{scope.row.commanderPhone}}</p>
          </template>
        </el-table-column>
        <el-table-column label="线路名称" width="120" prop="LineName"></el-table-column>
        <el-table-column prop="Situation" label="	配送员/手机" width="120" :render-header="renderheader">
          <template slot-scope="scope">
            <p>{{scope.row.person}}</p>

            <p>{{scope.row.personPhone}}</p>
          </template>
        </el-table-column>
        <el-table-column
          prop="Situation"
          label="	商品数量/订单数量"
          width="100"
          :render-header="renderheader"
        >
          <template slot-scope="scope">
            <p>{{scope.row.ProductNum}}</p>

            <p style="color:#009688">{{scope.row.orderNum}}</p>
          </template>
        </el-table-column>
        <el-table-column prop="time" label="	生成时间/配送时间" width="150" :render-header="renderheader">
          <template slot-scope="scope">
            <p style="color:#009688">{{scope.row.addTime}}</p>

            <p>{{scope.row.endTime}}</p>
          </template>
        </el-table-column>

        <el-table-column label="操作" width="500" align="right">
          <div class="statebutton">
            <el-tooltip class="item" effect="dark" content="点击配送" placement="top">
              <el-button size="mini" @click="deliver">点击配送</el-button>
            </el-tooltip>

            <el-tooltip class="item" effect="dark" content="查看商品清单" placement="top">
              <el-button size="mini" @click="seelist">查看商品清单</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="导出配送清单" placement="top">
              <el-button size="mini" @click="edit">导出配送清单</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="导出相关订单" placement="top">
              <el-button size="mini" @click="del">导出相关订单</el-button>
            </el-tooltip>
          </div>
          <!-- show-overflow-tooltip -->
        </el-table-column>
      </el-table>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="100"
        style="margin-top:2%"
      ></el-pagination>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.statebutton {
  .el-button {
    background-color: #009688;
    color: white;
    margin: 1%;
  }
}
.text-item {
  width: 80%;
  height: 50px;
  border: 1px solid gainsboro;
  margin: 1%;
  border-radius: 10px;
  padding: 1%;
  font-size: 0.8em;
}
.item-button {
  float: right;
}
.drop-div {
  width: 60%;
  border: 1px solid gainsboro;
  display: flex;
  // justify-content: center;
  align-items: center;
  padding: 1%;
}
.upload-demo {
  width: 50%;
}
</style>  
<script>
import Tinymce from "@/components/Tinymce";
export default {
  data() {
    return {
      name: "TinymceDemo",
      components: { Tinymce },
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
      timeValue: "",

      list: false,
      vipvalue: "",
      vipvalue2: "",
      inputname: "",
      textMap: {
        update: "修改",
        create: "添加"
      },
      form: {
        region: ""
      },
      formLabelWidth: "20%",
      form1: {
        region: ""
      },

      tableData: [
        {
          id: "12210",
          BillNo: 2020031222956559849,
          Residential: "槟榔东里51号",

          commander: "叶招旭",
          commanderPhone: 18050064050,
          LineName: "",
          person: "",
          personPhone: "",
          ProductNum: 4,
          orderNum: 1,
          addTime: "2020-03-12 08:43:36",
          endTime: "2020-03-13 02:42:32"
        }
      ],
      multipleSelection: [],
      delivery: "",
      currentPage4: 4
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    add() {
      this.dialogFormVisible = true;

      //   this.dialogStatus = create;
      this.dialogStatus = "create";
      //    this.resetTemp();

      //   this.$nextTick(() => {
      //     this.$refs["dataForm"].clearValidate();
      //   });
    },
    edit() {
      this.dialogFormVisible = true;
      this.dialogStatus = "update";
    },
    del() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
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

    deliver() {
      this.$confirm("确认配送吗", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    },
    seelist() {
      this.$router.push({ path: "/delivery/delivery-managementList" });
    },
    renderheader(h, { column, $index }) {
      return h("span", {}, [
        h("span", {}, column.label.split("/")[0]),
        h("br"),
        h("span", {}, column.label.split("/")[1])
      ]);
    }
  }
};
</script>  