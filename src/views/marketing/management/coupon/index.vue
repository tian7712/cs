
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>优惠券管理</span>
    </div>
    <el-card class="box-card">
      <el-row :gutter="20" style="margin-bottom:1%">
        <el-col :span="2">
          <el-select v-model="vipvalue" placeholder="首页显示" size="small">
            <!-- <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>-->
            <el-option label="会员等级" value="1"></el-option>
          </el-select>
        </el-col>

        <el-col :span="2">
          <el-select v-model="vipvalue2" placeholder="分类" size="small">
            <el-option label="团长等级" value="1"></el-option>
          </el-select>
        </el-col>
        <el-col :span="4">
          <el-input placeholder="优惠券名称"  size="small"/>
        </el-col>

        <el-col :span="6">
          <el-button  class="elbuttonStyle2" size="small">搜索</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin:1% 0 1% 0%">
        <el-col :span="6">
          <el-button size="small" @click="del" icon="el-icon-delete" >删除</el-button>
        </el-col>
        <el-button
        
          size="mini"
          @click="commanderAdd"
          style="float:right"
          type="success"
        >
         <svg-icon icon-class="jiahao" style="margin-right:1%" />
        添加优惠券</el-button>
   
      </el-row>

      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%; "
        :unique-opened="true"
          header-cell-style="width: 100%;background-color: #f2f2f2;font-weight: 400;"
        cell-style="color:#999999;"
 
        
       
      >
        <el-table-column type="selection" width="55"></el-table-column>

        <el-table-column label="ID" width="100">
          <template slot-scope="scope">
            <p>{{scope.row.id}}</p>
          </template>
        </el-table-column>
        <el-table-column label="排序" width="80">
          <template slot-scope="scope">{{scope.row.sort}}</template>
        </el-table-column>

        <el-table-column label="优惠券名称" width="250">
          <template slot-scope="scope">
            <p >{{scope.row.name}}</p>
            <el-tag type="success" style=" background-color: #009688;color:white;" v-if="scope.row.namestate">购物</el-tag>
          </template>
        </el-table-column>

        <el-table-column
          label="优惠/使用条件"
          width="200"
          :render-header="renderheader"
          prop="SuperiorLeader"
        >
          <template slot-scope="scope">
            <p>{{scope.row.Discount }}</p>
            <p style="color:#A94442;">{{scope.row.ServiceConditions}}</p>
          </template>
        </el-table-column>

        <el-table-column label="剩余数量/已使用/已发出" width="250" prop="Quantityofgoods">
          <template slot-scope="scope">
          <p>剩余:{{scope.row.Remaining}}</p>
          <p>已使用:{{scope.row.used}}</p>
          <p>已发出:{{scope.row.issued}}</p>
          
          </template>

        </el-table-column>

        

        <el-table-column label="首页领券" width="100">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.state"  active-color="#5FB878" 
              class="switch"
              active-text="显示"
             inactive-text="隐藏" @change="Coupon"></el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="time" label="创建时间" width="150">
          <template slot-scope="scope">
            <p>{{scope.row.time}}</p>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <!-- <template slot-scope="scope"></template> -->

          <el-button size="mini" @click="commanderEdit"  type="primary" icon="el-icon-edit">编辑</el-button>
          <el-button size="mini" @click="del" type="danger"  icon="el-icon-delete">删除  </el-button>
          <el-button size="mini" @click="open" type="warning"  icon="el-icon-share">赠送</el-button>

      
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
      ></el-pagination> -->
    </el-card>

  
  </div>
</template>
<style lang="scss" scoped>

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
      namestate:"",
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
          id: "12210",
          sort: 1,
          name: "1",
          namestate:true,
          Discount: "1.00 元",
          time:"2020-05-07 11:53",
          ServiceConditions: "满1.00可用",
          Remaining:0,
          used:3,
          issued:12,
        }
      ],
      multipleSelection: [],
      delivery: "",
      currentPage4: 4
    };
  },
  methods: {
 open() {
        this.$prompt('请输入用户ID', '赠送', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
         
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '赠送的用户是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
    Coupon(){
  this.$message({
    message: '操作成功',
          type: 'success'
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