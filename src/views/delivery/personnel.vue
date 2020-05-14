
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>配送人员管理</span>
    </div>
    <el-card class="box-card">
      <el-row :gutter="20" style="margin:1% 0">
        <el-col :span="3">
          <el-input placeholder="输入关键词然后回车" size="mini"></el-input>
        </el-col>

        <el-col :span="6">
          <el-button @click="del" type="success" size="mini">搜索</el-button>
        </el-col>
      </el-row>
      <el-button style="margin:0.5%;" size="mini">删除</el-button>
      <el-button style="float:right;" @click="addPersonnel" class="elbuttonStyle2" size="mini"><svg-icon icon-class="jiahao" style="margin-right:1%"/>添加配送人员</el-button>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark">
    
        <el-table-column type="selection" width="55"></el-table-column>

        <el-table-column prop="id" label="ID" width="80"></el-table-column>

        <el-table-column prop="LineName" label="线路名称" width="280"></el-table-column>

        <el-table-column label="配送员" width="120" prop="Delivery"></el-table-column>

        <el-table-column prop="DeliveryPhone" label="	配送员手机号" width="250">
     
        </el-table-column>

        <el-table-column label="配送社区" width="250" prop="community">
          <template slot-scope="scope">
           {{scope.row.community}} ->  {{scope.row.community1}}
          </template>
        </el-table-column>

        <el-table-column label="操作" align="center">
          <div class="statebutton">
            <el-button size="mini"  @click="editPersonnel" type="success" icon="el-icon-edit">编辑</el-button>
            <el-button size="mini" @click="deliver" type="danger" icon="el-icon-delete">删除</el-button>
     
          </div>
         
        </el-table-column>
      </el-table>
      <el-button style="float:right;margin:1%">
        共
        <span></span>条记录
      </el-button>
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
</style>  
<script>
import Tinymce from "@/components/Tinymce";
export default {
  data() {
    return {
      name: "TinymceDemo",
      components: { Tinymce },

      timeValue: "",

      list: false,
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
          id: "12210",

          community: "软件园二期",
           community1: "贡香城",
          LineName: "1",
          Delivery: "叶招旭",
          DeliveryPhone: 18050064050
        }
      ],
      multipleSelection: [],
      delivery: "",
      currentPage4: 4
    };
  },
  methods: {
   
    
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

    deliver() {
      this.$confirm("确认配送吗", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    },
    seelist() {
      this.$router.push({ path: "/delivery/delivery-managementList" });
    },
    addPersonnel() {
      this.$router.push({ path: "/delivery/delivery-addPersonnel" });
    },
    editPersonnel() {
      this.$router.push({ path: "/delivery/delivery-editPersonnel" });
    },
    
  }
};
</script>  