
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>会员列表</span>
    </div>
    <el-card class="box-card">
      <el-row :gutter="20" style="margin:1% 0">
        <el-col :span="3">
          <el-input v-model="inputname" placeholder="请输入昵称"></el-input>
        </el-col>
        <el-col :span="3">
          <el-select v-model="vipvalue" placeholder="会员等级">
            <!-- <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>-->
            <el-option label="会员等级" value="1"></el-option>
          </el-select>
        </el-col>
        <el-col :span="3">
          <el-select v-model="vipvalue2" placeholder="会员分组">
            <el-option label="会员分组" value="1"></el-option>
          </el-select>
        </el-col>

        <el-col :span="2">
          <el-button type="primary">搜索</el-button>
        </el-col>
      </el-row>
      <el-button-group>
        <el-button size="mini" @click="del">删除</el-button>
        <el-button size="mini" @click="dialogFormVisible = true">修改分组</el-button>
        <el-button size="mini" @click="dialogFormVisible1 = true">修改等级</el-button>
      </el-button-group>
      <!-- <el-button style="float: right; padding: 3px 0" type="text" @click="add">添加分类</el-button> -->

      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
        <!-- @selection-change="handleSelectionChange" -->
        <el-table-column type="selection" width="55"></el-table-column>

        <el-table-column prop="id" label="ID" width="120"></el-table-column>
        <el-table-column width="50">
          <template slot-scope="scope">
            <el-avatar :src="scope.row.url"></el-avatar>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="	用户名" width></el-table-column>
        <el-table-column prop="Invited" label="	邀请人" width="150"></el-table-column>
        <el-table-column label="等级/分组" width="150">
          <template slot-scope="scope">
            <!-- <el-image style="width: 40px; height: 40px" :src="scope.row.img"></el-image> -->
            <p>{{scope.row.Grade}}</p>

            <p>{{scope.row.group}}</p>
          </template>
        </el-table-column>
        <el-table-column label="	积分/余额" width="150">
          <template slot-scope="scope">
            <p>
              积分:
              <span style="color:blue">{{scope.row.Points}}</span>
            </p>

            <p>余额:{{scope.row.balance}}</p>
          </template>
        </el-table-column>
        <el-table-column prop="Situation" label="	订单情况" width="200">
          <template slot-scope="scope">
            <p>订单:{{scope.row.Order}}</p>

            <p>金额:{{scope.row.amount}}</p>
          </template>
        </el-table-column>
        <el-table-column prop="time" label="	注册时间" width="150"></el-table-column>

        <el-table-column label="操作" width="400" align="center">
          <div class="statebutton">
            <el-button size="mini" @click="vipdetails">会员详情</el-button>
            <el-button size="mini" @click="edit">会员订单</el-button>
            <el-button size="mini" @click="edit">余额流水</el-button>

            <el-button size="mini" @click="del">删除会员</el-button>
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

    <!-- 表单1 -->
    <el-dialog title="批量修改分组" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="会员分组" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="分组">
            <el-option label="默认分组"></el-option>
            <!-- <el-option label="普通等级二" value="beijing"></el-option> -->
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
            <!-- <el-option label="普通等级二" ></el-option> -->
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
.position {
  margin: 3% 0 1% 1%;
  span {
    color: rgb(76, 153, 89);
  }
}
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
.el-dialog {
  .el-form-item {
    margin-top: 5%;
  }
  .el-select {
    width: 80%;
  }
}
</style>  
<script>
import Tinymce from "@/components/Tinymce";
export default {
  data() {
    return {
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
          url:
            "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK7jXQaIib1W5AYAgiaxrT3fUHx02KGFBjO0iaAHWPFZxk09d0vic0vqtu4gNT31cicgmMNDTzHm0vbjTg/132",
          name: "萍",
          Invited: "暂无",
          Grade: "普通会员 ",
          group: "默认分组",
          Points: 0,
          balance: 0,
          Order: 0,
          amount: 0,

          time: "2020-03-25 16:40:16"
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
    dig() {
      this.$confirm("确定要将选中会员移动到 普通等级 吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "移动成功!"
          });
          this.dialogFormVisible1 = false;
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消移动"
          });
        });
    },
    dig2() {
      this.$confirm("确定要将选中会员移动到 默认分组 吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "移动成功!"
          });
          this.dialogFormVisible1 = false;
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消移动"
          });
        });
    },
    vipdetails() {
      this.$router.push({ path: "/vip/vipdetails" });
    }
  }
};
</script>  