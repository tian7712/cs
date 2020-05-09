
<template>
  <div class="app-container">
    <div class="position">当前位置：<span>核销人员列表</span> </div>
    <el-card class="box-card">
      <el-row :gutter="20" style="margin:1% 0">
        <el-col :span="4">
          <el-input v-model="input" placeholder="会员名称"></el-input>
        </el-col>
        <el-col :span="2">
          <el-button  icon="el-icon-search" class="elbuttonStyle2">搜索</el-button>
        </el-col>
      </el-row>
<el-button-group>
      <el-button size="mini" @click="Prohibit">启用</el-button>
      <el-button size="mini" @click="Prohibit">禁用</el-button>

</el-button-group>
      <el-button style="float: right; padding: 3px 0" type="text" @click="add">添加核销会员</el-button>

   
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
    
           <el-table-column prop="id" label="ID" width="70"></el-table-column>
        <el-table-column prop="name" label="会员名称" width="320"></el-table-column>

       
        <el-table-column  label="状态">
          <!-- <el-switch v-model="delivery"></el-switch> -->
          <template slot-scope="scope">
          <el-switch
  v-model="scope.row.state"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
          </template>
        </el-table-column>
         <el-table-column prop="num" label="核销数量" width="420"></el-table-column>
                  <el-table-column prop="Remarks" label="备注" width="220"></el-table-column>
         
        <el-table-column label="操作" >
          <el-button size="mini" @click="see"  type="primary" plain>查看核销记录</el-button>
          <el-button size="mini" @click="del"  type="primary" plain>删除</el-button>
     
        </el-table-column>
      </el-table>
      <el-row :gutter="20">
  <el-col :span="4" :offset="22">  <el-button style="margin:1%">共0条记录</el-button></el-col>
</el-row>
      
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
.upload-demo{
  width: 50%;
}
</style>  
<script>
import Tinymce from "@/components/Tinymce";
export default {
  data() {
    return {
 
    
      tableData: [
        {
         id:7,
        name: "君子兰",
        state:true,
        num:0,
        Remarks:"后台备注"
        }
      ],
      multipleSelection: [],
      delivery: ""
    };
  },
  methods: {
   
    Prohibit() {
      this.$confirm("此操作将禁用, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "禁用成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作"
          });
        });
    },
    add(){
      this.$router.push({ path: "/commander/WriteoffVip" });
    },
    see(){
        this.$router.push({ path: "/commander/WriteoffJL" });
    }
  }
};
</script>  