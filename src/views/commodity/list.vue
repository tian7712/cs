
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>商品列表</span>
    </div>
    <el-card class="box-card">
      <el-tabs v-model="activeName">
        <el-tab-pane label="全部商品" name="1"></el-tab-pane>
        <el-tab-pane label="出售中" name="2"></el-tab-pane>
        <el-tab-pane label="库存预警" name="3"></el-tab-pane>
        <el-tab-pane label="已下架" name="4"></el-tab-pane>
        <el-tab-pane label="待审核" name="5"></el-tab-pane>
        <el-tab-pane label="已拒绝" name="6"></el-tab-pane>
        <el-tab-pane label="仓库" name="7"></el-tab-pane>
        <el-tab-pane label="回收站" name="8"></el-tab-pane>
      </el-tabs>
      <el-row :gutter="10" style="margin:1% 0">
        <el-col :span="3">
          <el-input v-model="inputname" placeholder="输入商品编码或者名称" size="small"></el-input>
        </el-col>
        <el-col :span="2">
          <el-select v-model="vipvalue" placeholder="不按时间" size="small">
            <!-- <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>-->
            <el-option :key="2" label="团购时间" value="1"></el-option>
          </el-select>
        </el-col>
        <el-col :span="5.5">
          <el-date-picker
          size="small"
            v-model="value2"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-col>

        <el-col :span="2">
          <el-select v-model="vipvalue2" placeholder="商品分类" size="small">
            <el-option label="水果蔬菜" value="1"></el-option>
          </el-select>
        </el-col>
        <el-col :span="2">
          <el-select v-model="vipvalue2" placeholder="全部商品" size="small">
            <el-option label="普通商品" value="1"></el-option>
          </el-select>
        </el-col>

        <el-col :span="6">
          <el-button class="elbuttonStyle2" size="small">搜索</el-button>
        </el-col>
         <el-col :span="3">
     <el-button @click="commanderAdd" style="float:right" size="mini" class="elbuttonStyle2">
          <svg-icon icon-class="jiahao" style="margin-right:1%" />添加商品
        </el-button>
        </el-col>
        
      </el-row>
      
          <el-button-group>
            <el-button size="mini">今日推荐</el-button>
            <el-button size="mini">上架</el-button>
            <el-button size="mini">下架</el-button>
            <el-button size="mini">参加满减</el-button>
            <el-button size="mini">不参加满减</el-button>
            <el-button size="mini">商品分类</el-button>
            <el-button size="mini">设置活动时间</el-button>
            <el-button size="mini">删除</el-button>
          </el-button-group>
       

      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%;"
        
        
      >
      <!-- cell-style="color:#999999"
      header-cell-style="font-weight: 400;" -->
        <!-- @selection-change="handleSelectionChange" -->
        <el-table-column type="selection" width="55"></el-table-column>

        <el-table-column label="ID" width="100">
          <template slot-scope="scope">
            <p>{{scope.row.id}}</p>
          </template>
        </el-table-column>

        <el-table-column label="	排序" width="55">
          <template slot-scope="scope">
            <p style="color:#A94442;">{{scope.row.sort}}</p>
          </template>
        </el-table-column>
        <el-table-column label="商品名称" width="250">
          <template slot-scope="scope">
            <el-row>
              <el-col :span="8">
                <el-image style="width: 50px; height: 50px" :src="scope.row.Commodityimg"></el-image>
              </el-col>

              <el-col :span="16">
                <p>{{scope.row.CommodityName}}</p>
                <p style="color:#A94442;">{{scope.row.CommodityName1}}</p>
                <p>{{scope.row.CommodityName2}}</p>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <el-table-column prop="time" label="活动时间" width="170">
          <template slot-scope="scope">
            <p>{{scope.row.startTime}}</p>
            <p>{{scope.row.entTime}}</p>
            <p style="color:#A94442;">{{scope.row.Timeover}}</p>
          </template>
        </el-table-column>
        <el-table-column label="商品类别" width="80" prop="category"></el-table-column>
        <el-table-column label="价格" width="100">
          <template slot-scope="scope">
            <p @click="editinput2" v-if="PriceON">
              ¥
              <span style="color:black;">{{scope.row.Price}}</span>
            </p>
            <el-input v-if="PriceOFF" v-model="scope.row.Price" min @blur="editinput2" />
          </template>
        </el-table-column>
        <el-table-column label="销量 " width="80">
          <template slot-scope="scope">
            <p @click="editinput" v-if="volumeON">
              <span style="color:#A94442;">{{scope.row.volume}}</span>
            </p>

            <el-input v-if="volumeOFF" v-model="scope.row.volume" min @blur="editinput" />
          </template>
        </el-table-column>
        <el-table-column label="	库存" width="80">
          <template slot-scope="scope">
            <p @click="editinput1" v-if="scopeON">
              <span style="color:#A94442;">{{scope.row.Stock}}</span>
            </p>

            <el-input v-if="scopeOFF" v-model="scope.row.Stock" min @blur="editinput1" />
          </template>
        </el-table-column>

        <el-table-column label="是否满减" width="100">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.reduction"
              active-color="#5FB878"
              class="switch"
              active-text="参加"
              inactive-text="不参加"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="是否上架/是否审核" width="100" :render-header="renderheader">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.Upper"
              active-color="#5FB878"
              class="switch"
              active-text="上架"
              inactive-text="下架"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="今日推荐" width="150">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.Recommend"
              active-color="#5FB878"
              class="switch switchplus switchplus2"
              active-text="今日推荐"
              inactive-text="未推荐"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="置顶" width="100">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.top"
              active-color="#5FB878"
              class="switch"
              active-text="置顶"
              inactive-text="未置顶"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <el-button size="mini" @click="commanderEdit" class="elbuttonStyle2" icon="el-icon-edit">编辑</el-button>
          <el-button size="mini" @click="edit" class="elbuttonStyle2" icon="el-icon-delete">删除</el-button>
        </el-table-column>
      </el-table>

      <el-pagination
        :current-page="currentPage4"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="100"
        style="margin:1%"
      ></el-pagination>
      <!--  @size-change="handleSizeChange"
      @current-change="handleCurrentChange"-->
    </el-card>

    <!-- 表单1 -->
    <el-dialog title="批量修改分组" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="会员分组" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="分组">
            <el-option label="默认分组"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary">确 定</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 表单2 -->
    <el-dialog title="批量修改等级" :visible.sync="dialogFormVisible1">
      <el-form :model="form1">
        <el-form-item label="团长等级" :label-width="formLabelWidth">
          <el-select v-model="form1.region" placeholder="普通等级">
            <el-option label="普通等级"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary">确 定</el-button>
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
      </div>
    </el-dialog>
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
.el-dialog {
  .el-form-item {
    margin-top: 5%;
  }
  .el-select {
    width: 80%;
  }
}
p {
  margin: 0;
  padding: 0;
  color: #999999;
  span {
    color: #009688;
  }
}



</style>  
<script>
import Tinymce from "@/components/Tinymce";

export default {
  data() {
    return {
      operation: "",
      volumeinput: "",
      volumeInput: "",
      name: "TinymceDemo",
      components: { Tinymce },
      dialogFormVisible: false,
      dialogFormVisible1: false,
      list: false,
      vipvalue: "",
      value2: "",
      vipvalue2: "",
      inputname: "",
      volumeON: true,
      volumeOFF: false,
      scopeON: true,
      scopeOFF: false,
      PriceON: true,
      PriceOFF: false,
      form: {
        region: ""
      },
      formLabelWidth: "20%",
      form1: {
        region: ""
      },
      activeName: "1",
      tableData: [
        {
          id: "12210",
          sort: 81,
          CommodityName: "无抗鸡蛋（10个/盒）",
          CommodityName1: "[肉蛋禽类]",
          CommodityName2: "[所有团长可售]",
          Commodityimg:
            "http://dev.xmduobanjin.com/Uploads/image/cache/goods/2020-03-22/5e770978791f2-100x100.jpg",
          category: "普通商品	",
          Price: " 4.99",
          volume: 12,
          Stock: 456,
          reduction: "",
          Upper: true,
          Recommend: false,
          top: false,
          startTime: "2020-03-25 15:38:46",
          entTime: "2020-03-30 11:55:39",
          Timeover: "活动结束"
        }
      ],
      multipleSelection: [],
      delivery: "",
      currentPage4: 4
    };
  },
  methods: {
    add() {
      this.dialogFormVisible = true;

      //   this.dialogStatus = create;
      this.dialogStatus = "create";
      //    this.resetTemp();

      //   this.$nextTick(() => {
      //     this.$refs["dataForm"].clearValidate();
      //   });
    },
    edit() {
      this.dialogFormVisible = true;
      this.dialogStatus = "update";
    },
    editinput() {
      this.volumeON = !this.volumeON;
      this.volumeOFF = !this.volumeOFF;
    },

    editinput1() {
      this.scopeON = !this.scopeON;
      this.scopeOFF = !this.scopeOFF;
    },
    editinput2() {
      this.PriceON = !this.PriceON;
      this.PriceOFF = !this.PriceOFF;
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
    },

    operationoff() {
      this.$message("操作成功");
      console.log(this.operation);
      this.operation = !this.operation;
    },
    renderheader(h, { column, $index }) {
      return h("span", {}, [
        h("span", {}, column.label.split("/")[0]),
        h("br"),
        h("span", {}, column.label.split("/")[1]),
        h("br"),
        h("span", {}, column.label.split("/")[2])
      ]);
    },

    commanderAdd() {
      this.$router.push({ path: "/integral/add" });
    },
    commanderEdit() {
      this.$router.push({ path: "/integral/edit" });
    },
    commanderSale() {
      this.$router.push({ path: "/commander/commanderSale" });
    },
    WriteoffList() {
      this.$router.push({ path: "/commander/WriteoffList" });
    }
  }
};
</script>  