
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>运费模板</span>
    </div>
    <el-card class="box-card">
      <el-row :gutter="20" style="margin:1% 0">
       
        <el-col :span="3">
          <el-input v-model="inputname" placeholder="请输入关键词"></el-input>
        </el-col>

        <el-col :span="2">
          <el-button class="elbuttonStyle2">搜索</el-button>
        </el-col>
      </el-row>

       
        <el-button size="mini">删除</el-button>
     
      <el-button
        style="float: right;margin: 1%;"
        class="elbuttonStyle2"
        icon="el-icon-plus"
        @click="add"
      >添加运费模板</el-button>

      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"  header-cell-style="width: 100%;background-color: #f2f2f2;">
        <!-- @selection-change="handleSelectionChange" -->
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
     
        <el-table-column prop="name" label="名称" width="120"></el-table-column>

        <el-table-column prop="img" label="计量方式" width>

        </el-table-column>
<el-table-column prop="link" label="首重(首件)价格" width></el-table-column>
<el-table-column prop="link" label="续重(续件)价格	" width></el-table-column>

        <el-table-column label="状态" prop="state">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.state" active-color="#5FB878" 
              class="switch"
              active-text="显示"
             inactive-text="隐藏"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="默认" prop="state">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.state" active-color="#5FB878" 
              class="switch switchmini"
              active-text="是"
             inactive-text="否"></el-switch>
          </template>
        </el-table-column>
 <el-table-column label="排序" prop="sort">
       
        </el-table-column>
        <el-table-column label="操作" width="400" align="center">
          <div class="statebutton">
            <el-button size="mini" @click="edit" icon="el-icon-edit">编辑</el-button>

            <el-button size="mini" @click="del" icon="el-icon-delete">删除</el-button>
          </div>
          <!-- show-overflow-tooltip -->
        </el-table-column>
      </el-table>

   
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
export default {
  data() {
    return {
      state: "",
      dialogFormVisible: false,
      dialogFormVisible1: false,
      list: false,
      value: "",
      vipvalue: "",
      vipvalue2: "",
      inputname: "",

      form: {
        region: ""
      },
      formLabelWidth: "20%",
      form1: {
        region: ""
      },

      tableData: [
        {
         
            name:'团长配送',
            img:'按件计费',
            link:'5.00',
            sort:15,
          state: true,
          
        }
      ],
      multipleSelection: [],
      delivery: "",
      currentPage4: 4
    };
  },
  methods: {
    add() {
      this.$router.push({ path: "/setting/LogisticsSettings/addFreightTemplate" });
    },
    edit() {
      this.$router.push({ path: "/setting/LogisticsSettings/editFreightTemplate" });
    },
    del() {
      this.$confirm("确定要删除吗, 是否继续?", "信息", {
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
    Enable(){
          this.$message('操作成功');

    }
  }
};
</script>  