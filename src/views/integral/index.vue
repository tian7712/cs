<template>
  <div>
    <div class="position">
      当前位置：
      <span>签到设置</span>
    </div>
    <el-card class="box-card">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="连续签到天数" width="180"></el-table-column>
        <el-table-column label="获得积分" width="180">
          <template slot-scope="scope">
            <el-input placeholder="请输入内容" v-model="scope.row.inputJF" clearable></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="huoCoupon" label="获得卡券"></el-table-column>
        <el-table-column prop="xuanCoupon" label="选择卡券">
             <template slot-scope="scope">
               
           <el-select v-model="scope.row.selectvalue" placeholder="请选择" focus>
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
            ></el-option>
          </el-select>
          </template>
        
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { Input } from "element-ui";
export default {
  data() {
    return {
      inputJF: "",
      selectvalue: "",
      options: [
        {
          selectvalue: "选项1",
          label: "请选择"
        },
        {
          value: "选项2",
          label: "不赠送"
        }
      ],
      selectvalue: "",
      tableData: [
        {
          date: 12,
          integral: 2,
          huoCoupon: "无",
          xuanCoupon: "1"
        }
      ],
      input: ""
    };
  }
};
</script>


<style lang="scss" scoped>
.position {
  margin: 2% 0 1% 1%;
  font-size: 1em;
  span {
    color: rgb(76, 153, 89);
  }
}
.box-card {
  margin: 1%;
  margin-top: 1%;
  padding: 2%;
}
</style>
