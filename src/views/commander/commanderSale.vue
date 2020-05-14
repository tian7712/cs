
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>团长在售商品管理</span>
    </div>
    <el-card class="box-card">
      <el-row :gutter="20" style="margin:1% 0">
        <el-col :span="4">
          <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
        </el-col>
        <el-col :span="4">
          <el-select v-model="value" placeholder="请选择" size="small">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>

        <el-col :span="4">
          <el-button type="success" icon="el-icon-search" size="small">搜索</el-button>
        </el-col>
      </el-row>
      <el-button size="mini" @click="del">取消售卖</el-button>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        header-cell-style="font-weight: 400;"
        cell-style="color:#999999"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="id" label="ID" width="80"></el-table-column>
        <el-table-column width="200">
          <template slot-scope="scope">
            <el-image style="width: 70px; height: 70px" :src="scope.row.img"></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="Commodityname" label="	商品名称" width="250"></el-table-column>
        <el-table-column label="分类">
          <template slot-scope="scope">
            <span style="color:#A94442">{{scope.row.classification}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="Price" label="价格" width="100"></el-table-column>
        <el-table-column prop="Commission" label="佣金" width="100"></el-table-column>
        <el-table-column prop="volume" label="销量" width="100"></el-table-column>
        <el-table-column prop="Stock" label="库存" width="100"></el-table-column>
        <el-table-column label="操作" width="200" prop="state"></el-table-column>
      </el-table>
      <el-pagination
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="10"
        style="margin:1%;"
      ></el-pagination>
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
      currentPage4: 1,
      value:'',

      tableData: [
        {
          id: 1289,
          img:
            "http://dev.xmduobanjin.com/Uploads/image/cache/goods/2020-03-25/5e7b033798a83-200x200.jpg",
          Commodityname: "提拉米苏-8寸（混合口味）",
          classification: "	[乳制饮品]",
          Price: "¥ 69.90	",
          Commission: "0.00%",
          volume: "0	",
          Stock: "100	",
          state: "全网售卖"
        }
      ],
       options: [{
          value: '选项1',
          label: '全部商品'
        }],
      multipleSelection: [],
      delivery: ""
    };
  },
  methods: {
    del() {
      this.$confirm("是否取消售卖, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "取消成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "退出操作"
          });
        });
    }
  }
};
</script>  