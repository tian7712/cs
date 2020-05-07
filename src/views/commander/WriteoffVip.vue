
<template>
  <div class="app-container">
    <div class="position">当前位置：<span>添加核销人员</span> </div>
    <el-card class="box-card">
         <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="关联会员">
          <el-input v-model="vipValue" :disabled="true">
            <el-button slot="append" @click="dialogVisible = true">选择会员</el-button>
          </el-input>
          <div v-if="hide">
            <el-image
              style="width: 100px; height: 100px; margin:1% 0 0 0;position: relative;"
              :src="url"
            ></el-image>
            <div class="p-value">{{pvalue}}</div>
            <el-button
              type="danger"
              icon="el-icon-delete"
              style="background-color: #009688;border:none;position: absolute;bottom: 25%; margin-left:0.3%"
              size="mini"
              @click="del"
            ></el-button>
          </div>
    
        </el-form-item>
        <el-row :gutter="20">
  <el-col :span="4" :offset="2">  <el-button type="primary" @click="Submission">提交</el-button></el-col>
</el-row>
            
         </el-form>
       <el-dialog title="信息" :visible.sync="dialogVisible" width="30%">
      <el-input placeholder="请输入昵称进行搜索" v-model="input3" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-table :data="tableData" style="width: 100%">
        <!-- .filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase())) -->
     
        <el-table-column>
          <template slot-scope="scope">
            <el-image style="width: 40px; height: 40px" :src="scope.row.img"></el-image>
          </template>
        </el-table-column>

        <el-table-column align="right">
          <!-- <template slot="header" slot-scope="scope">
            <el-input
          v-model="search"
          size="mini"
            placeholder="输入关键字搜索"/>
          </template>-->
          <template slot-scope="scope">
            <el-button size="mini" @click="handleClick(scope.row)">选择</el-button>
          </template>
        </el-table-column>
      </el-table>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleClick(scope.row)">确 定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
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
.p-value {
  background-color: #009688;
  width: 100px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  color: white;

  position: absolute;
  bottom: 5%;
}
p{
    margin: 0;
    padding: 0;
}
</style>  
<script>

export default {
 data() {
    return {
        pvalue:'',
     dialogVisible: false,
      hide: false,
      vipValue1: "",
      
      tableData: [
        {
          id: 132,
          img:"https://wx.qlogo.cn/mmopen/vi_32/OkFdlgbIcS0bXTEoYticjgnXR2gjOH3g4n2hicyX3Oibgg1EDIoIDLicE01Jgr1wEpfvbVjzrdcsY3T5cvzjwRzH6w/132",
          name: "君子兰"
        },
        {
          id: 265,
          img:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          name: "王小"
        }
      ]
      }
 },
 methods:{
      handleClick(row) {
      this.hide = true;
      this.dialogVisible = false;



      this.url = row.img;
      this.vipValue = row.id;
      this.pvalue = row.name;
      console.log(row.img);
    },
    del() {
      this.hide = false;
    },
    Submission(){
         this.$message({
          message: '提交成功',
          type: 'success'
        });
        this.$router.push({ path: "/commander/WriteoffList" });
    }
 }
};
</script>  
