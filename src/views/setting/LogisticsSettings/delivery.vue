
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>快递方式</span>
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
      >添加快递</el-button>

      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"  header-cell-style="width: 100%;background-color: #f2f2f2;">
        <!-- @selection-change="handleSelectionChange" -->
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
     
        <el-table-column prop="name" label="快递名称" width="120"></el-table-column>

        <el-table-column prop="express" label="快递类型" width>

        </el-table-column>
            <el-table-column prop="code" label="快递简码" width>

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
         
            name:'1',
            express:'系统快递',
            code:5
          
          
        }
      ],
      multipleSelection: [],
      delivery: "",
      currentPage4: 4
    };
  },
  methods: {
    add() {
      this.$router.push({ path: "/setting/LogisticsSettings/addDelivery" });
    },
    edit() {
      this.$router.push({ path: "/setting/LogisticsSettings/editDelivery" });
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