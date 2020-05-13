
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>商品标签</span>
    </div>
    <el-card class="box-card">
      <el-row :gutter="20" style="margin:1% 0">
        <el-col :span="4">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="2">
          <el-button class="elbuttonStyle2" icon="el-icon-search">搜索</el-button>
        </el-col>
      </el-row>
      <el-button-group>
        <el-button size="mini" @click="del">启用</el-button>
        <el-button size="mini" @click="del">禁用</el-button>
        <el-button size="mini" @click="del">删除</el-button>
      </el-button-group>
      <el-button style="float: right;" class="elbuttonStyle2" size="mini" @click="add">
        <svg-icon icon-class="jiahao" style="margin-right:1%" />添加分类
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
        <el-table-column prop="name" label="标签名称" width="320"></el-table-column>

        <el-table-column prop="zhi" label="标签内容" width="420"></el-table-column>
        <el-table-column prop="state" label="状态">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.delivery"
              active-color="#5FB878"
              class="switch"
              active-text="启用"
              inactive-text="禁用"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200">
          <el-button size="mini" @click="edit" class="elbuttonStyle2" icon="el-icon-edit">编辑</el-button>
          <el-button size="mini" @click="del" class="elbuttonStyle2" icon="el-icon-delete">删除</el-button>
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
</style>  
<script>
export default {
  data() {
    return {
      input: "",

      list: false,

      form: {
        name: "全部商品",
        radio: true,
        id: 2,
        img1: "",
        img2: ""
      },
      formLabelWidth: "120px",
      tableData: [
        {
          name: "食品",
          zhi: "生食"
        }
      ],
      multipleSelection: [],
      delivery: ""
    };
  },
  methods: {
    add() {
      this.$router.push({ path: "/commodity/addlabel" });
    },
    edit() {
      this.$router.push({ path: "/commodity/editlabel" });
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
