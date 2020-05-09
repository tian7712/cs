  <template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>余额满送设置</span>
    </div>
    <el-card class="box-card" body-style="padding:2% 0 0 0;">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="满">
          <el-input v-model="input1">
            <template slot="append">元</template>
          </el-input>

          <el-input v-model="input2">
            <template slot="prepend">减</template>
            <template slot="append">元</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button  class="elbuttonStyle" size="small">提交</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" style="width: 100%；margin:0" header-cell-style="background-color:#F5F7FA;">
        <el-table-column prop="id" label="ID" width="180"></el-table-column>
        <el-table-column prop="money" label="充值金额满" width="180"></el-table-column>
        <el-table-column prop="give" label="送多少"></el-table-column>
        <el-table-column label="注">
          <template slot-scope="scope">
            <p>充值满 {{scope.row.money}}送{{scope.row.give}}</p>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="del">删除</el-button>
        </el-table-column>
      </el-table>
    </el-card>
    
  </div>
</template>
<style lang="scss" scoped>

.el-input {
  width: 13%;
  padding: 0;
  margin: -0.2%;
}

.box-card{
  padding: 0;
}
</style>
<script>
export default {
  data() {
    return {
      input1: "",
      input2: "",
      radio: "1",
      form: {
        name: ""
      },
      tableData: [
        {
          id: 1,
          money: 99.9,
          give: 12
        }
      ]
    };
  },
  methods: {
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
    }
  }
};
</script>
