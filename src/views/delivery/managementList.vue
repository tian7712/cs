
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>配送单商品管理</span>
    </div>
    <el-card class="box-card">
        <h2 style="font-weight:400;">配送信息</h2>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="" label="团长名称" width="180"></el-table-column>
        <el-table-column prop="" label="团长电话" width="180"></el-table-column>
        <el-table-column prop="" label="配送员"></el-table-column>
        <el-table-column prop="" label="路径信息"></el-table-column>
      </el-table>

      <el-button type="primary" @click="commanderAdd" style="float:right;margin-top:1%;background-color: #3071A9;">导出配货单</el-button>

      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%; "
        header-row-style="background-color:F2F2F2;"
        header-cell-style="font-weight: 400;"
        cell-style="color:#999999"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>

        <el-table-column label="ID" width="70">
          <template slot-scope="scope">
            <p>{{scope.row.id}}</p>
          </template>
        </el-table-column>
        <el-table-column label="" width="400">
          <!-- <template slot-scope="scope">{{scope.row.sort}}</template> -->

             <el-image
      style="width: 70px; height: 70px"
      :src="url"
      ></el-image>
        </el-table-column>

        <el-table-column label="商品名称" width="750">
          <template slot-scope="scope">
            <p>{{scope.row.name}}</p>
            <el-tag type="success" v-if="scope.row.namestate">购物</el-tag>
          </template>
        </el-table-column>

        <el-table-column
          label="商品规格"
          width="200"
         
          prop="SuperiorLeader"
        >
          <template slot-scope="scope">
            <p>{{scope.row.Discount }}</p>
            <p style="color:#A94442;">{{scope.row.ServiceConditions}}</p>
          </template>
        </el-table-column>

        <el-table-column label="商品数量"  prop="Quantityofgoods">
          <template slot-scope="scope">
            <p>{{scope.row.commodityNum}}</p>
          
          </template>
        </el-table-column>

      
        
     
       
      </el-table>

      <!-- <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="100"
        style="margin:1%"
      ></el-pagination>-->
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.position {
  margin: 3% 0 1% 1%;
  span {
    color: #009688;
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

p {
  margin: 0;
  padding: 0;
  color: #999999;
  span {
    color: #009688;
  }
}
.buttonstyle {
  .el-button {
    margin: 1% 0;
    padding: 2%;
  }
}
</style>  
<script>
import Tinymce from "@/components/Tinymce";

export default {
  data() {
    return {
        url:'http://img.xmduobanjin.com/Uploads/image/goods/2020-03-10/5e673b9bcfff0.jpg',
      namestate: "",
      operation: "",
      name: "TinymceDemo",
      components: { Tinymce },
      dialogFormVisible: false,
      dialogFormVisible1: false,
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
          id: 1891,
          sort: 1,
commodityNum:1 ,        
name: "叉烧包（9个/包）",
       
        }
      ],
      multipleSelection: [],
      delivery: "",
      currentPage4: 4
    };
  },
  methods: {
    open() {
      this.$prompt("请输入用户ID", "赠送", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "赠送的用户是: " + value
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    Coupon() {
      this.$message({
        message: "操作成功",
        type: "success"
      });
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
      this.$confirm("确定要删光该优惠劵吗, 是否继续?", "删除", {
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

    operationoff() {
      this.$message("操作成功");
      console.log(this.operation);
      this.operation = !this.operation;
    },
    renderheader(h, { column, $index }) {
      return h("span", {}, [
        h("span", {}, column.label.split("/")[0]),
        h("br"),
        h("span", {}, column.label.split("/")[1]),
        h("br"),
        h("span", {}, column.label.split("/")[2])
      ]);
    },

    commanderAdd() {
      this.$router.push({ path: "/marketing/CouponManagement/couponadd" });
    },
    commanderEdit() {
      this.$router.push({ path: "/marketing/CouponManagement/couponEdit" });
    },
    commanderSale() {
      this.$router.push({ path: "/commander/commanderSale" });
    },
    WriteoffList() {
      this.$router.push({ path: "/commander/WriteoffList" });
    }
  }
};
</script>  