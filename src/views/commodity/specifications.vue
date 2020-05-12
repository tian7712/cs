
<template>
  <div class="app-container">
    <div class="position">当前位置：<span>商品规格</span> </div>
    <el-card class="box-card">
      
      <el-button style="float: right;" class="elbuttonStyle2" @click="add" ><svg-icon icon-class="jiahao" style="margin-right:1%"/> 添加商品规格</el-button>

      
      <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
   >
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <!-- <el-table-column
      label="日期"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column> -->
    <el-table-column
      prop="name"
      label="规格名称"
      width="120">
    </el-table-column>
    
    <el-table-column
    prop="zhi"
      label="具体值"
      >
    </el-table-column>
    <el-table-column
      label="操作"
      width="200">
      <el-button size="mini" @click="edit" class="elbuttonStyle2" icon="el-icon-edit">修改</el-button>
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

</style>  
<script>

export default {
  data() {
    return {
      dialogStatus:'',
    
     
      fileList: [
        {
          name: "默认图片.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ],
      list: false,
    
      
      form: {
        name: "全部商品",
        radio: true,
        id: 2,
        img1: "",
        img2: ""
       
      },
      formLabelWidth: "120px",
       tableData: [{
          
          name: '重量',
          zhi: '400g,500g,1kg,1.5kg,2kg,2.5kg,3kg'
        }],
        multipleSelection: [],
        
    };
  },
  methods: {
      add() {
      this.$router.push({ path: "/commodity/addspecifications" });
    },
    edit() {
      this.$router.push({ path: "/commodity/editspecifications" });
    },
      del() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    }
};
</script>  