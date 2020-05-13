
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>幻灯片管理</span>
    </div>
    <el-card class="box-card">
      <el-row :gutter="20" style="margin:1% 0">
        <el-col :span="3">
          <el-select v-model="vipvalue" placeholder="状态" size="small">
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
          <el-input v-model="inputname" placeholder="请输入关键词" size="small"></el-input>
        </el-col>

        <el-col :span="2">
          <el-button class="elbuttonStyle2" size="small">搜索</el-button>
        </el-col>
      </el-row>
      <el-button-group>
        <el-button size="mini" @click="Enable">显示</el-button>
        <el-button size="mini">隐藏</el-button>
        <el-button size="mini">删除</el-button>
      </el-button-group>
      <el-button
        style="float: right;margin: 1%;"
      size="small"
      type="success"
        @click="add"
      >
       <svg-icon icon-class="jiahao" style="margin-right:1%" />添加幻灯片</el-button>

      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"  header-cell-style="width: 100%;background-color: #f2f2f2;">
        <!-- @selection-change="handleSelectionChange" -->
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
      <el-table-column prop="id" label="ID" width="70"></el-table-column>
        <el-table-column prop="name" label="幻灯片名称" width="120"></el-table-column>

        <el-table-column prop="img" label="	图片" width>
<templte slot-scope="scope">

              <el-image
      style="width: 70px; height: 70px"
      :src="scope.row.img"
     ></el-image>
     </templte>
        </el-table-column>
<el-table-column prop="link" label="链接" width></el-table-column>
        <el-table-column label="状态" prop="state">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.state" active-color="#5FB878" 
              class="switch "
              active-text="显示"
             inactive-text="隐藏"></el-switch>
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

      <el-pagination
       
        :current-page="currentPage4"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="100"
        style="margin-top:2%"
      ></el-pagination>
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
            id:29,
            name:'招供应商',
            img:'http://dev.xmduobanjin.com/Uploads/image/cache/goods/2020-03-23/5e789019b654a-100x100.jpg',
            link:1,
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
      this.$router.push({ path: "/setting/indexSetting/addslide" });
    },
    edit() {
      this.$router.push({ path: "/setting/indexSetting/editslide" });
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