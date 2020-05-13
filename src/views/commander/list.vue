
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>团长列表</span>
    
    </div>
    <el-card class="box-card">
      <el-row :gutter="20" style="margin:1% 0">
        <el-col :span="2">
          <el-select v-model="vipvalue" placeholder="状态" size="small">
            <!-- <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>-->
            <el-option :key="2" :label="会员等级" :value="1"></el-option>
          </el-select>
        </el-col>
        <el-col :span="3">
          <el-input v-model="inputname" placeholder="会员昵称/团长姓名/手机号" size="small"></el-input>
        </el-col>
        <el-col :span="3">
          <el-input v-model="inputname" placeholder="搜索区域" size="small"></el-input>
        </el-col>
        <el-col :span="2">
          <el-select v-model="vipvalue2" placeholder="团长等级" size="small">
            <el-option :key="1" :label="团长等级" :value="1"></el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-date-picker
          size="small"
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

        <el-col :span="6">
          <el-button size="small" class="elbuttonStyle2">搜索</el-button>
          <el-button size="small" class="elbuttonStyle2">导出</el-button>
          <el-button size="small" class="elbuttonStyle2">导出配货单</el-button>
          <el-button size="small" class="elbuttonStyle2">导出总单</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-button-group>
            <el-button size="mini" @click="del">审核通过</el-button>
            <el-button size="mini" @click="dialogFormVisible = true">拒绝通过</el-button>
            <el-button size="mini" @click="dialogFormVisible1 = true">修改等级</el-button>
          </el-button-group>
        </el-col>
        <el-col >
          <el-button size="mini" class="elbuttonStyle2" @click="commanderAdd" style="float:right;">
            <svg-icon icon-class="jiahao" style="margin-right:1%"/>添加团长</el-button>
        </el-col>
      </el-row>

      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        header-cell-style="font-weight: 400;"
        cell-style="color:#999999"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>

        <el-table-column label="ID" width="100">
          <template slot-scope="scope">
            <p>{{scope.row.id}}</p>
          </template>
        </el-table-column>

        <el-table-column label="	小区名称" width>
          <template slot-scope="scope">
            <p>{{scope.row.CellName}}</p>
          </template>
        </el-table-column>
        <el-table-column label="团长" width="250">
          <template slot-scope="scope">
            <el-row>
              <el-col :span="5">
                <el-avatar :src="scope.row.commanderimg"></el-avatar>
              </el-col>
              <!-- commanderimghttps://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png -->
              <el-col :span="16">
                <p>
                  ID：
                  <span>{{scope.row.commanderID}}</span>
                </p>
                <p>姓名：{{scope.row.commanderName}}</p>
                <p>昵称：{{scope.row.commanderNickname}}</p>
                <p>
                  当前团员数量：
                  <span>{{scope.row.currentMembersNumber}}</span>
                </p>
                <p>
                  当前邀请数量：
                  <span>{{scope.row.invitationsNumber}}</span>
                </p>
                <p>
                  团员消费人数：
                  <span>{{scope.row. consumedNumber}}</span>
                </p>
                <p>
                  团员消费金额：
                  <span>{{scope.row.amount}}</span>
                </p>
                <p>
                  等级：
                  <span>{{scope.row.grade}}</span>
                </p>
              </el-col>
            </el-row>
          </template>
        </el-table-column>

        <el-table-column label="上级团长" width="120" prop="SuperiorLeader"></el-table-column>
        <el-table-column label="联系方式" width="120" prop="phone"></el-table-column>
        <el-table-column label="商品数量" width="50" prop="Quantityofgoods"></el-table-column>
        <el-table-column label="	佣金情况" width="120">
          <template slot-scope="scope">
            <p>待确认：{{scope.row.confirmed}}</p>
            <p>可提现：{{scope.row.Withdrawable}}</p>
            <p>已打款：{{scope.row.Paid}}</p>
            <p>提现中：{{scope.row.Withdrawing}}</p>
            <p>
              总收入：
              <span style="color:red;">{{scope.row.revenue}}</span>
            </p>
          </template>
        </el-table-column>
        <el-table-column label="提货地址" width="100" prop="address"></el-table-column>
        <el-table-column prop="time" label="申请时间/审核时间" :render-header="renderheader" width="100">
          <template slot-scope="scope">
            <p>{{scope.row.ApplicationTime}}</p>
            <p>{{scope.row.AuditTime}}</p>
          </template>
        </el-table-column>
        <el-table-column label="是否休息" width="100">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.rest" active-color="#5FB878" class="switch switchmini"
              active-text="是"
             inactive-text="否"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="状态" width="100">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.state" active-color="#5FB878" class="switch switchplus"
              active-text="已审核"
             inactive-text="未审核"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="300" align="center">
          <template slot-scope="scope">
            <el-row class="buttonstyle">
              <el-button size="mini" @click="commanderEdit" class="elbuttonStyle2" plain>编辑</el-button>
              <el-button size="mini"  class="elbuttonStyle2" plain>推广订单</el-button>
              <el-button size="mini" @click="commanderSale" class="elbuttonStyle2" plain>查看在售商品</el-button>
            </el-row>

            <el-row class="buttonstyle">
              <el-button size="mini" @click="WriteoffList" class="elbuttonStyle2" plain>查看核销人员</el-button>

              <el-switch
                v-model="scope.row.operation"
              active-color="#5FB878" 
              class="switch switchplus switchplus1"
              active-text="已启用"
             inactive-text="未启用"
                @change="operationoff"
              ></el-switch>

              <el-button size="mini" @click="del" class="elbuttonStyle2" plain>删除</el-button>
            </el-row>
          </template>
          <!-- <el-switch v-model="tableData.operation" active-color="#13ce66" inactive-color="#ff4949" @change="operationoff"></el-switch> -->
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
        style="margin:1%"
      ></el-pagination>
      
    </el-card>

    <!-- 表单1 -->
    <el-dialog title="批量修改分组" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="会员分组" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="分组">
            <el-option label="默认分组"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dig2">确 定</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 表单2 -->
    <el-dialog title="批量修改等级" :visible.sync="dialogFormVisible1">
      <el-form :model="form1">
        <el-form-item label="团长等级" :label-width="formLabelWidth">
          <el-select v-model="form1.region" placeholder="普通等级">
            <el-option label="普通等级"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dig">确 定</el-button>
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
      </div>
    </el-dialog>
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
.el-dialog {
  .el-form-item {
    margin-top: 5%;
  }
  .el-select {
    width: 80%;
  }
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
import { fetchList } from '@/api/article';

export default {
  data() {
    return {
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

          CellName: "软件园二区",
          SuperiorLeader: "暂无上级",
          phone: 15659123951,
          Quantityofgoods: 397,
          confirmed: 369.4,
          commanderimg:
            "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKBrqTKvvrFictbhPvRb5nQ1saesHU4ic6cxS9lNwGoKic25dKGENWEO3H9gnB462icwOMtQpocYcdjJg/132",
          Withdrawable: 0.0,
          Paid: 0.0,
          Withdrawing: 0.0,
          revenue: 0,
          address: "福建省厦门市思明区观日路4号软件园二期",
          ApplicationTime: "2020-03-25 15:38:46",
          AuditTime: "2020-03-30 11:55:39",
          rest: true,
          state: false,
          operation: true,
          commanderID: 0,
          commanderName: "林晓晖",
          commanderNickname: "火焰VS天堂",
          currentMembersNumber: 1,
          invitationsNumber: 1,
          consumedNumber: 0,
          amount: 893.14,
          grade: ""
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

    commanderAdd(){
      this.$router.push({ path: "/commander/commanderAdd" });
    },
     commanderEdit(){
      this.$router.push({ path: "/commander/commanderEdit" });
    },
    commanderSale(){
      this.$router.push({ path: "/commander/commanderSale" });
    },
     WriteoffList(){
      this.$router.push({ path: "/commander/WriteoffList" });
    }
    
  }
};
</script>  