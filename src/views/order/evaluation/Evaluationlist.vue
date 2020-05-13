
<template>
  <div>
    <div class="position">
      当前位置：
      <span>评价列表</span>
    </div>
    <el-card class="box-card">
      <el-row :gutter="20" style="margin:1% 0">
        <el-col :span="4">
          <el-input v-model="inputenter" placeholder="输入关键词回车" size="mini"></el-input>
        </el-col>
        <el-col :span="2">
          <el-button size="mini" class="elbuttonStyle2" icon="el-icon-search">搜索</el-button>
        </el-col>
      </el-row>
      <el-button-group>
        <el-button size="mini" @click="del">启用</el-button>
        <el-button size="mini" @click="del">禁用</el-button>
        <el-button size="mini" @click="del">删除</el-button>
      </el-button-group>
      <el-button style="float: right;" class="elbuttonStyle2" @click="add" size="mini">
        <svg-icon icon-class="jiahao" style="margin-right:1%" />添加虚拟评价
      </el-button>

      <!-- <div v-for="item in 5" :key="item" class="text-item">
        {{'[ID: ' + item +']'}} 全部商品
        <div class="item-button">
          <el-switch v-model="list" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          <el-button size="mini" @click="dialogFormVisible = true">修改</el-button>
          <el-button size="mini" @click="dialogFormVisible = true">删除</el-button>
        </div>
      </div>-->
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column>
        <!-- <el-table-column
      label="日期"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>-->
        <el-table-column prop="name" label="商品/订单号" width="220"></el-table-column>

        <el-table-column prop="zhi" label="评价者" width="220"></el-table-column>
        <el-table-column prop="zhi" label="评价内容" width="220"></el-table-column>
        <el-table-column prop="zhi" label="星级" width="180"></el-table-column>
        <el-table-column prop="zhi" label="评价时间" width="180"></el-table-column>

        <el-table-column prop="state" label="审核状态">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.delivery"
              class="switch"
              active-color="#5FB878"
              active-text="通过"
              inactive-text="不通过"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200">
          <el-button size="mini" @click="edit" class="elbuttonStyle2">编辑</el-button>
          <el-button size="mini" @click="del" class="elbuttonStyle2">删除</el-button>
          <!-- show-overflow-tooltip -->
        </el-table-column>
      </el-table>
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
.el-image {
  width: 80px;
  height: 80px;
}
.el-form {
  width: 90%;
  margin-right: 5%;
}
</style>  
<script>
export default {
  data() {
    return {
      dialogStatus: "",
      create: "",
      textarea2: "",
      inputenter: "",

      list: false,

      form: {
        name: "全部商品",

        star: "",
        star1: "",
        star2: "",
        id: 2,
        img1: "",
        img2: ""
      },
      formLabelWidth: "120px",
      tableData: [
        {
          name: "1",
          zhi: "2"
        }
      ],
      multipleSelection: [],
      delivery: ""
    };
  },
  methods: {
    add() {
      this.$router.push({
        path: "/order/EvaluationManagement/addEvaluationlist"
      });
    },
    edit() {
      this.$router.push({
        path: "/order/EvaluationManagement/editEvaluationlist"
      });
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
    }
  }
};
</script>  
