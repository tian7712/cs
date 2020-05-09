
<template>
  <div class="app-container">
    <div class="position">当前位置：<span>文章管理</span> </div>
    <el-card class="box-card">
      <el-row :gutter="20" style="margin:1% 0">
       <el-col :span="3">
  <el-select v-model="selectvalue" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
       </el-col>
        <el-col :span="4">
          <el-input v-model="input" placeholder="输入关键词回车"></el-input>
        </el-col>
        <el-col :span="2">
          <el-button  class="elbuttonStyle2" icon="el-icon-search">搜索</el-button>
        </el-col>
      </el-row>
<el-button-group>
      <el-button size="mini" @click="Prohibit">显示</el-button>
           <el-button size="mini" @click="Prohibit">隐藏</el-button>
      <el-button size="mini" @click="Prohibit">删除</el-button>

</el-button-group>
      <el-button style="float: right;" icon="el-icon-plus"  class="elbuttonStyle2" @click="add">添加文章</el-button>

   
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
    
           <el-table-column prop="id" label="ID" width="70"></el-table-column>
        <el-table-column prop="name" label="标题" width="320"></el-table-column>

       
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
         <el-table-column prop="num" label="排序" width="420"></el-table-column>
         
        <el-table-column label="操作" align="center">
          <el-button size="mini" @click="see"   class="elbuttonStyle2" >查看</el-button>
          <el-button size="mini" @click="del"   class="elbuttonStyle2" >删除</el-button>
     
        </el-table-column>
      </el-table>
      <el-row :gutter="20">
  <el-col :span="4" :offset="22">  <el-button style="margin:1%">共0条记录</el-button></el-col>
</el-row>
      
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.position {
  margin: 3% 0 1% 1%;
  span {
    color: rgb(76, 153, 89);
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
.upload-demo{
  width: 50%;
}
</style>  
<script>
import Tinymce from "@/components/Tinymce";
export default {
  data() {
    return {
        selectvalue:"状态",
 
     options: [{
          value: '选项1',
          label: '状态'
        }, {
          value: '选项2',
          label: '显示'
        }, {
          value: '选项3',
          label: '隐藏'
        }],
      tableData: [
        {
         id:7,
        name: "sad",
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
      this.$router.push({ path: "/article/articleadd" });
    },
    see(){
        this.$alert('这是一段内容', '查看文章', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
    }
  }
};
</script>  