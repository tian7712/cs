
<template>
  <div>
    <!-- class="app-container" -->
    <div class="position">当前位置：<span>提现申请</span> </div>
    <el-card class="box-card">
      <el-form ref="form" :model="form" label-width="10%">
        <el-form-item label="最小提现金额">
           <el-input placeholder="请输入内容" v-model="input2">
    <template slot="append">元</template>
  </el-input>
          <p>分销商的佣金达到此额度才能提现，最低0.01元</p>
        </el-form-item>

        <el-form-item label="提现手续费">

            <el-input placeholder="请输入内容" v-model="input2">
    <template slot="append">%</template>
  </el-input>
          <p>团长提现手续费比例 </p>
        </el-form-item>
        <el-form-item label="企业付款到微信零钱">
          <el-radio v-model="form.xxRadio" label="2">关闭</el-radio>
          <el-radio v-model="form.xxRadio" label="1">开启</el-radio>
          <p>只适用提现到微信的申请</p>
        </el-form-item>
        
      </el-form>
<el-row :gutter="20">
  <el-col :span="4" :offset="2"><el-button type="primary">提交</el-button></el-col>
</el-row>
      <!-- <template slot-scope="scope">
        
      </template>-->
      <!-- <el-button @click="dianji">1</el-button> -->
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.position {
   margin: 3% 0 1% 1%;
  font-size: 1em;
  span {
    color: rgb(76, 153, 89);
  }
}
p {
  color: rgb(148, 140, 140);
  font-size: 0.8em;
}
span {
  font-size: 0.9em;
  // margin-right:3% ;
}
.box-card {
  padding: 2%;
}
</style>  
<script>
import {
  getRoutes,
  getRoles,
  addRole,
  deleteRole,
  updateRole
} from "@/api/role";
export default {
  data() {
    return {
      form: {
        xxRadio: 1,
        vipRadio: 2,
        phoneRadio: 1
      }
    };
  },
  created() {
    // Mock: get all routes and roles list from server
    this.getRoutes();
    this.getRoles();
  },
  methods: {
    async dianji() {
      const res = await getRoles();
      this.rolesList = res.data;

      console.log(res);
    }
  }
};
</script>  

