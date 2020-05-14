
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>会员等级</span>
    </div>
    <el-card class="box-card">
      <el-row  style="margin:1% 0">
        <el-col :span="3">
          <el-input v-model="inputname" placeholder="输入关键词然后回车" size="mini"></el-input>
        </el-col>

        <el-col :span="2">
          <el-button class="elbuttonStyle2" icon="el-icon-search" size="mini">搜索</el-button>
        </el-col>
      </el-row>

      <el-button size="mini" @click="del">删除</el-button>
      <el-button size="mini" class="elbuttonStyle2" @click="dialogVisible = true" style="float:right;">
        <svg-icon icon-class="jiahao" style="margin-right:1%"/>添加会员等级</el-button>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        header-cell-style="font-weight: 400"
        cell-style="color:#999999"
        stripe
        
      >
      <!-- @selection-change="handleSelectionChange" -->
        <el-table-column type="selection" width="55"></el-table-column>

        <el-table-column prop="id" label="ID" width="120"></el-table-column>

        <el-table-column prop="name" label="等级">
          <!-- <template slot-scope="scope">{{ scope.row.phone}}</template> -->
        </el-table-column>

        <el-table-column prop="Invitation" label="等级名称" width="200"></el-table-column>
        <el-table-column prop="Grade" label="折扣" width="150"></el-table-column>
        <el-table-column prop="integral" label="	会员升级金额" width="150"></el-table-column>
        <el-table-column prop="Situation" label="	会员数量" width="200"></el-table-column>

        <el-table-column label="操作" width="200">
           <!-- <template slot-scope="scope"></template> -->
          <el-button size="mini" @click="viplist">等级会员</el-button>
           
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog title="添加标签组" :visible.sync="dialogVisible" width="30%" >
      <el-form ref="form" :model="form" label-width="100px" label-position="left"  class="cardStyle">
        <el-form-item label="等级">
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in 10" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="等级名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="等级折扣">
          <el-input v-model="form.Discount"></el-input>
          <p>请输入1~100之间的数字,值为空代表不设置折扣. 例如：填写80，即为打8折，会员价=商品价格*80%</p>
        </el-form-item>
        <el-form-item label="等级升级金额">
          <el-input v-model="form.money"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
                <el-button class="elbuttonStyle" @click="dialogVisible = false" >提交</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>

      </span>
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
.el-input {
  width: 80%;
}
p{
  margin: 0;
  padding: 0;
  color:#999999;
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
import { getRoutes, getRoles } from "@/api/role";

export default {
  data() {
    return {
      value: "",
      // options: [{
      //   value: '选项1',
      //   label: '黄金糕'
      // }],
      form: {
        name: "",
        Discount:"",
        money:""
      },
      dialogVisible: false,
      name: "TinymceDemo",
      components: { Tinymce },
      // dialogFormVisible: false,
      // dialogFormVisible1: false,
      list: false,
      vipvalue: "",
      vipvalue2: "",
      inputname: "",

      tableData: [
        {
          id: "0",
          name: "0",
          Invitation: "普通等级【默认等级】",
          Grade: "100%",
          integral: " 0",
          Situation: "132",
          time: "2020-03-25 16:40:16"
        }
      ],
      multipleSelection: [],
      delivery: "",
      currentPage4: 4
    };
  },
  // created() {
  //   // Mock: get all routes and roles list from server
  //   this.getRoutes();
  //   this.getRoles();
  // },

  methods: {
    async getRoles() {
      const res = await getRoles();
      this.rolesList = res.data;
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
    viplist(){
        this.$router.push({ path: "/vip/viplist" });
    }
  }
};
</script>  