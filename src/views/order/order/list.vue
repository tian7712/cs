
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
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
          <el-option
            v-for="itemtype in importanceOptions"
            :key="itemtype"
            :label="itemtype"
            :value="itemtype"
          />
        </el-select>
        <el-select
          v-model="listQuery.importance1"
          placeholder="不按时间"
          clearable
          style="width: 120px"
          class="filter-item"
        >
          <el-option
            v-for="itemtime in importance1Options"
            :key="itemtime"
            :label="itemtime"
            :value="itemtime"
          />
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
          <el-option
            v-for="itemorder in importance2Options"
            :key="itemorder"
            :label="itemorder"
            :value="itemorder"
          />
        </el-select>
        <el-select
          v-model="listQuery.importance3"
          placeholder="订单号"
          clearable
          style="width: 120px"
          class="filter-item"
        >
          <el-option
            v-for="itemdelivery in importance3Options"
            :key="itemdelivery"
            :label="itemdelivery"
            :value="itemdelivery"
          />
        </el-select>
        <el-input placeholder="请输入关键词" style="width: 190px;" class="filter-item" />
        <el-button size="mini" class="filter-item elbuttonStyle2">搜索</el-button>
        <el-button size="mini" class="filter-item elbuttonStyle2">导出</el-button>
        <el-button size="mini" class="filter-item elbuttonStyle2">导出数量</el-button>
      </div>

      <!-- //table -->

      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        header-cell-style="width: 100%;background-color: #f2f2f2;"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column type="expand" label="订单号" width="90">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="订单号">
                <span>{{ props.row.ordernum }}</span>
              </el-form-item>
              <el-form-item label="下单时间：">
                <span>{{ props.row.time}}</span>
              </el-form-item>
              <el-form-item>
                <el-tag style="background-color:#F0AD4E ;color:white;">{{ props.row.order }}</el-tag>
                <el-tag style="background-color:#777777 ;color:white;">{{ props.row.state }}</el-tag>
              </el-form-item>
              <el-form-item>
                <el-link :underline="false" href="https://www.baidu.com" style="color:#009688;">备注</el-link>
                <el-link :underline="false" style="color:#009688;">打印</el-link>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="id" label="ID" width="60">
          <!-- <template slot-scope="scope">{{ scope.row.id }}</template> -->
        </el-table-column>

        <el-table-column prop="name" label="商品名称" width="220">
          <template slot-scope="scope">
            <el-image style="width: 50px; height: 50px" :src="scope.row.url"></el-image>
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column prop="num" label="单价/数量">
          <template slot-scope="scope">
            <p>
              ¥
              <span>{{ scope.row.price }}</span> x
              <span>{{ scope.row.quantity }}</span>
            </p>
          </template>
        </el-table-column>
        <el-table-column prop="num" label="买家" align="center">
          <template slot-scope="scope">
            <p style="  text-align: center;">{{ scope.row.Buyer }}</p>
            <p style="  text-align: center;">{{ scope.row.phone }}</p>
            <p style="  text-align: center;cursor:pointer;" @click="vip">
              会员名:
              <span style="color:#009688;">{{ scope.row.vipName }}</span>
            </p>
          </template>
        </el-table-column>
        <el-table-column prop="num" label="支付/配送" align="center">
          <template slot-scope="scope">
            <p
              style="  text-align: center;"
              v-if="scope.row.Payment=='余额支付'"
            >{{ scope.row.Payment }}</p>
            <el-tag type="info" v-if="scope.row.Payment=='未支付'">未支付</el-tag>
            <p style="  text-align: center;">
              <span style="color:#A94442;">{{ scope.row.distribution }}</span>
            </p>
          </template>
        </el-table-column>

        <el-table-column prop="num" label="小区/团长" width="200">
          <template slot-scope="scope">
            <p>{{ scope.row.Buyer }}{{ scope.row.phone }}</p>
            <p>
              小区：
              <span style="color:#009688;">{{ scope.row.Community }}</span>
            </p>
          </template>
        </el-table-column>

        <el-table-column label="价格">
          <template slot-scope="scope">
            <p>运 费：+{{ scope.row.Freight }}</p>
            <p>
              商品小计：
              {{ scope.row.Subtotal }}
            </p>
            <p>应收总款：¥{{ scope.row.Total }}</p>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <el-button type="text" size="small" @click="details">查看详情</el-button>
          <!-- <el-button type="text" size="small">维权处理</el-button> -->
        </el-table-column>
        <el-table-column label="状态" show-overflow-tooltip>
          <template slot-scope="scope">
            {{ scope.row.state }}
            <el-button size="mini" v-if="scope.row.state=='待自提'" class="elbuttonStyle">确认收货</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        background
        style="margin:1%; float:right;"
        layout="total,prev, pager, next, jumper"
        :total="100"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
import waves from "@/directive/waves"; // waves directive
import { parseTime } from "@/utils";
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination基于el分页的二次包

import Dropzone from "dropzone";
import "dropzone/dist/dropzone.css";

Dropzone.autoDiscover = false;
// 上传图片

export default {
  data() {
    return {
      activeName: "",
      PaymentSuccess: "",
      tableData1: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        }
      ],
      tableData: [
        {
          id: 52692,
          order: "普通订单",
          ordernum: "202005111219897495497",
          url:
            "http://img.xmduobanjin.com/Uploads/image/goods/2020-03-22/5e770978791f2.jpg",
          name: "无抗鸡蛋（10个/盒)",
          orderNumber: 52692,
          price: 10.1,
          quantity: 1,
          Buyer: "林晓晖",
          phone: 15659123951,
          vipName: "火焰VS天堂 ",
          Payment: "余额支付",
          distribution: "(自提)",
          Community: "二区的软件园",
          Freight: 0,
          Subtotal: 10.1,
          Total: 10.1,
          num: "123",
          state: "待自提",
          time: " 2020-05-12  15:56:58"
        },
        {
          id: 52692,
          ordernum: "202005111219857975110",
          order: "普通订单",
          url:
            "http://img.xmduobanjin.com/Uploads/image/goods/2020-03-22/5e770978791f2.jpg",
          name: "无抗鸡蛋（10个/盒)",
          orderNumber: 52692,
          price: 10.1,
          quantity: 1,
          Buyer: "林晓晖",
          phone: 15659123951,
          vipName: "火焰VS天堂 ",
          Payment: "未支付",
          distribution: "(自提)",
          Community: "二区的软件园",
          Freight: 0,
          Subtotal: 10.1,
          Total: 10.1,
          num: "123",
          state: "交易已取消",
          time: " 2020-05-11  15:56:58"
        }
      ],

      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        importance1: undefined,
        importance2: undefined,
        importance3: undefined,

        type: undefined,
        sort: "+id"
      },
      importanceOptions: ["普通订单", "秒杀订单", "积分订单"],
      importance1Options: ["下单时间", "付款时间", "发货时间", "完成时间"],
      importance2Options: ["自提", "团长配送", "快递"],
      importance3Options: [
        "会员信息",
        "手机号",
        "收件人信息",
        "地址信息",
        "快递单号",
        "商品名称",
        "微信支付单号",
        "团长姓名",
        "小区名称",
        "供应商名称"
      ],

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

  methods: {
    vip() {
      this.$router.push({ path: "/vip/vipdetails" });
    },
    details() {
      this.$router.push({ path: "/order/details" });
    }
  }
};
</script>

<style  lang="scss"  scoped>
// *{
//   font-size: 0.9em;
// }

.drop {
  border: 1px solid gainsboro;
}
p {
  margin: 0;
  padding: 0;
}
</style>
