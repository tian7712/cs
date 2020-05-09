
<template>
 <!-- class="app-container" -->
  <div>
    <div class="position">当前位置：
      <span>佣金申请列表</span>
      </div>
    <el-card class="box-card">
      <el-row :gutter="5">
        <el-col :span="6">
          <el-date-picker
            v-model="value2"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </el-col>
        <el-col :span="4">
          <el-select v-model="selectvalue" placeholder="状态">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>

        <el-col :span="4">
          <el-input placeholder="申请订单id"></el-input>
        </el-col>
        <el-col :span="6">
          <el-button type="primary">搜索</el-button>
          <el-button type="primary">导出</el-button>
        </el-col>
      </el-row>
      <div style="margin:1% 0 0 0.7%">
        <!-- <el-checkbox v-model="checked"></el-checkbox> -->

        <el-button-group>
          <el-button size="mini">审核通过</el-button>
          <el-button size="mini">拒绝通过</el-button>
        </el-button-group>
      </div>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column>

        <el-table-column label="ID" width="120">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column prop="name" label="小区名称" width="120"></el-table-column>
        <el-table-column prop="commander" label="团长" width="120"></el-table-column>
        <el-table-column prop="phone" label="联系方式	" width="120"></el-table-column>
        <el-table-column label="打款银行/打款账户/真实姓名" width="250" :render-header="renderheader">
          <template slot-scope="scope">
            <div class="bankdata">
              <p>{{ scope.row.bank }}</p>
              <p>{{ scope.row.account }}</p>
              <p>{{ scope.row.bankname }}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="申请提现金额/手续费/到账金额" width="120" :render-header="renderheader">
          <template slot-scope="scope">
            <div class="bankdata">
              <p>{{ scope.row.withdrawalMoney }}</p>

              <p>{{ scope.row.charge }}</p>
              <p>{{ scope.row.received }}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="time" label="申请时间/审核时间" width="220" :render-header="renderheader">
          <template slot-scope="scope">
            <div>
              <p>{{ scope.row.appiytime }}</p>
              <p>{{ scope.row.examine }}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="状态" width="120">
          <template slot-scope="scope">
            <!-- v-model="tableData.stateswitch" -->
            <!-- <p>{{ scope.row.state }}</p> -->
            <el-switch
              v-model="scope.row.stateswitch"
              active-color="#13ce66"
              inactive-color="#ff4949"
              @change="stateopen()"
              v-if="STswitch"
            ></el-switch>
            <!-- <el-switch v-for="(item, key) in list" v-model="item.value" :key="key"  :active-value="1" :inactive-value="0" active-text="确定" inactive-text="取消"></el-switch> -->
            <!-- v-for="item on tabData" -->

            <p style="color:#a94442;" v-if="statedata">{{ scope.row.state }}</p>
          </template>
        </el-table-column>

        <el-table-column prop="operation" label="操作" show-overflow-tooltip>
          <el-button type="text">推广订单</el-button>
          <el-button type="text">查看在售商品</el-button>
        </el-table-column>
      </el-table>

      <el-pagination
        style="margin:2%"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
      ></el-pagination>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>

.box-card {
  padding: 2%;
}
p {
  color: rgb(163, 161, 161);
  margin: 0;
}
.bankdata {
  p:nth-child(2) {
    color: #009688;
  }
  p:nth-child(3) {
    color: #a94442;
  }
}
</style>  
<script>
export default {
  data() {
    return {
      checked: false,
      currentPage4: 1,
      STswitch: true,
      statedata: false,

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
      options: [
        {
          value: "选项1",
          label: "未审核"
        },
        {
          value: "选项2",
          label: "已审核"
        },
        {
          value: "选项3",
          label: "拒绝通过"
        }
      ],
      selectvalue: "",
      list: [{ value: 1 }, { value: 1 }],
      value2: "",
      tableData: [
        {
          id: 91,
          name: "海沧滨海上城",
          commander: "李萱",
          phone: 18059892299,
          bank: "支付宝",
          account: " Kgdghd-1116@163.com ",
          bankname: "李萱",
          // money: "  ",
          withdrawalMoney: "100.00",
          charge: "0",
          received: "100",
          appiytime: "2020-03-24 07:26:04 ",
          examine: "2020-03-25 18:19:34",
          state: "已打款",
          stateswitch: true,
          operation: ""
        },
        {
          id: 92,
          name: "海沧滨海上城",
          commander: "李",
          phone: 18059892298,
          bank: "支付宝",
          account: " Kgd5d-11616@163.com ",
          bankname: "李萱",
          // money: "  ",
          withdrawalMoney: "190.00",
          charge: "0",
          received: "100",
          appiytime: "2020-03-24 07:26:04 ",
          examine: "2020-03-25 18:19:34",
          state: "未付款",
          stateswitch: false,
          operation: ""
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    renderheader(h, { column, $index }) {
      return h("span", {}, [
        h("span", {}, column.label.split("/")[0]),
        h("br"),
        h("span", {}, column.label.split("/")[1]),
        h("br"),
        h("span", {}, column.label.split("/")[2])
      ]);
    }, // lable 换行

    stateopen() {
      // console.log(this)

      console.log(this.tableData.length);

      if (this.STswitch == true) {
        this.statedata = true;
        this.STswitch = false;
      }
    }
  }
};
</script>  

