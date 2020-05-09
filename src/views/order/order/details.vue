<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>订单详情</span>
    </div>
    <el-card class="box-card">
      <el-timeline :reverse="reverse">
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :timestamp="activity.content"
        >
          <span class="spanstyle">{{activity.timestamp}}</span>
          <span v-if="activity.Delivery!=='已付款待备货'" class="tag1">{{activity.Delivery}}</span>
          <span v-if="activity.Delivery=='已付款待备货'" class="tag2">{{activity.Delivery}}</span>
        </el-timeline-item>
      </el-timeline>
      <el-row>
        <el-col :span="12">
          <el-form ref="form" :model="form" label-width="120px" class="fromstyle" size="mini">
            <el-form-item label="订单编号：">{{form.name}}</el-form-item>
            <el-form-item label="付款方式："></el-form-item>
            <el-form-item label="买家："></el-form-item>
            <el-form-item label="配送方式："></el-form-item>
            <el-form-item label="收货人："></el-form-item>
            <el-form-item label="团长："></el-form-item>
            <el-form-item label="取货地址："></el-form-item>
          </el-form>
          <!-- <div class="fromstyle">
      <p>订单编号：<span></span></p>
      <p>付款方式：<span></span></p>
      <p>买 家：<span style="color: #009688;">22</span></p>
      <p>配送方式：<span></span></p>
      <p>收 货 人：<span></span></p>
      <p>团长： <span></span></p>
      <p>取货地址：<span></span></p>
          </div>-->
        </el-col>
        <el-col :span="12">
          <div class="fromstyle">
            <p>订单状态：</p>
            <p>交易单号：</p>
            <p>发货时间：</p>
            <p>团长接货时间：</p>
            <el-button size="mini">确认收货</el-button>
            <p>查看备注</p>
            <p>友情提示： 请及时关注物流状态，确保买家及时收到商品; 如果买家未收到货物或有退换货请求，请及时联系买家妥善处理</p>
          </div>
        </el-col>
      </el-row>

      <h3>商品信息</h3>
      <el-table
        :data="tableData"
        border
        height="200"
        :summary-method="getSummaries"
        show-summary
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column prop="id" label="ID" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="amount1" label="数值 1（元）"></el-table-column>
        <el-table-column prop="amount2" label="数值 2（元）"></el-table-column>
        <el-table-column prop="amount3" label="数值 3（元）"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reverse: true,
      activities: [
        {
          content: "后台操作，确认送达团长",
          timestamp: "2020-05-09 13:39:21 ",
          Delivery: "待自提"
        },
        {
          content: "后台操作，确认开始配送货物",
          timestamp: "2020-05-09 13:38:56",
          Delivery: "配送中"
        },
        {
          content: "买家已付款",
          timestamp: "2020-05-09 13:36:19 ",
          Delivery: "已付款待备货"
        },
        {
          content: "创建订单",
          timestamp: "2020-05-09 13:36:19",
          Delivery: "待付款"
        }
      ],
      form: [
        {
          name: 1
        }
      ],
      tableData: [
        {
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10
        }
      ]
    };
  },
  methods:{
      
          getSummaries(param) {
//         const { columns, data } = param;
//         const sums = [];
// //         columns.forEach((column, index) => {
// //           if (index === 0) {
//             sums[index] = '1';
//             return;
//           }
//           const values = data.map(item => Number(item[column.property]));
//           if (!values.every(value => isNaN(value))) {
//             sums[index] = values.reduce((prev, curr) => {
//               const value = Number(curr);
//               if (!isNaN(value)) {
//                 return prev + curr;
//               } else {
//                 return prev;
//               }
//             }, 0);
//             ' 元' +=sums[index] ;
//           } 
//         });
// // console.log(sums[index])
//         return sums;
      }
  }
};
</script>
<style lang="scss" >
.tag1 {
  background-color: #009688;
  color: white;
  margin-left: 0.5%;
  padding: 0.2%;
  font-size: 0.8em;
}
.tag2 {
  background-color: #ff5722;
  color: white;
  margin-left: 0.5%;
  padding: 0.2%;
  font-size: 0.8em;
}
.spanstyle {
  font-weight: 500;
  color: #333;
  font-size: 1.2em;
}
.fromstyle {
  border: 1px solid gainsboro;
  padding: 3%;
  font-size: 0.9em;
  height: 250px;
  padding: 0;
  // margin: 0;
  .el-form-item {
    padding: 0;
    margin: 0;
  }
}

el-form-item {
  padding: 0;
  margin: 0;
}
</style>