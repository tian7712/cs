
<template>
  <div >
    <!-- class="app-container" -->
    <div class="position">当前位置：<span>提现申请</span> </div>
    <el-card class="box-card cardStyle">
      <el-form ref="form" :model="form" label-width="150px" label-position="left">
        <el-form-item label="最小提现金额">
           <el-input  v-model="input2">
    <template slot="append">元</template>
  </el-input>
          <p class="pstyle2">分销商的佣金达到此额度才能提现，最低0.01元</p>
        </el-form-item>

        <el-form-item label="提现手续费">

            <el-input  v-model="input2">
    <template slot="append">%</template>
  </el-input>
          <p class="pstyle2">团长提现手续费比例 </p>
        </el-form-item>
        <el-form-item label="企业付款到微信零钱">
          <el-radio v-model="form.xxRadio" label="2">关闭</el-radio>
          <el-radio v-model="form.xxRadio" label="1">开启</el-radio>
          <p class="pstyle2">只适用提现到微信的申请</p>
        </el-form-item>
        <el-form-item >
         <el-button class="elbuttonStyle">提交</el-button>
        </el-form-item>
      </el-form>



      <!-- <template slot-scope="scope">
        
      </template>-->
      <!-- <el-button @click="dianji">1</el-button> -->
    </el-card>
  </div>
</template>
<style lang="scss" scoped>


span {
  font-size: 0.9em;
  // margin-right:3% ;
}

</style>  
<script>

export default {
  data() {
    return {
      input2:'',
      form: {
        xxRadio: 1,
        vipRadio: 2,
        phoneRadio: 1
      }
    };
  },
  methods: {
    
  }
};
</script>  

