
<template>
  <div class="app-container">
    <div class="position">当前位置：
      <span>团长设置</span>
      </div>
    <el-card class="box-card cardStyle">
      <el-row>
        <el-col :span="24">
          <el-form ref="form" :model="form" label-width="10%" :label-position="labelPosition">
            <el-form-item label="团长佣金类型">
               <!-- <el-radio-group v-model="form.moneyvalue"></el-radio-group> -->
           
                <el-radio label="金额" v-model="form.moneyvalue"></el-radio>
              
                 <p>金额：团长可得佣金=设置金额</p>
            </el-form-item>
         <el-form-item label="社区距离限制">
              <el-input v-model="form.name">       <template slot="append">公里</template></el-input>
              <p>社区列表限制某个距离内显示，0代表不限制</p>
            </el-form-item>
            <el-form-item label="推荐现金奖励">
              <el-input v-model="form.name"><template slot="append">元</template></el-input>
            </el-form-item>
            <el-form-item label="团长邀请用户抽成">
              <el-input v-model="form.name"><template slot="append">%</template></el-input>
              <p> 通过首页与详情页分享，与该团长绑定关系，会员在其他团购买，团长享有固定抽成，建议设置为5%的倍数，以便于金额小数点后两位为正常值</p>
            </el-form-item>
            
            <el-form-item label="前端添加核销会员">
              <el-radio-group v-model="form.volume">
                <el-radio label="不显示"></el-radio>
                <el-radio label="显示"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="团长分销等级">
              <el-radio-group v-model="form.dengji">
                <el-radio label="不显示" @change="open"></el-radio>
                <el-radio label="显示" @change="open"></el-radio>
              </el-radio-group>
            </el-form-item>
              <el-form-item label="1级" v-if="Grade">
                <el-input v-model="form.name" placeholder="1"><template slot="append">%</template></el-input>
                <p>1级分佣比例</p>
            </el-form-item>

            <el-form-item label="团长申请页面内容">
              <div>
                <tinymce :height="300" />
              </div>
         
            </el-form-item>
            <el-form-item>
              <el-button @click="onSubmit" class="elbuttonStyle">提交</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>



p{
  color: rgb(163, 161, 161);
    margin:  0 ;
}
</style>  
<script>
// import ArticleDetail from './components/ArticleDetail'
import Tinymce from "@/components/Tinymce";
export default {
  name: "TinymceDemo",
  components: { Tinymce },
  
  data() {
    return {
      labelPosition: "left",
      Grade:false,
      form: {
        name: "20",
        record: "",
        evaluate: "",
        down: "",
        moneyvalue:'金额',
        volume: "",
        vip: "",
        dengji:"不显示"
      }
    };
  },
  methods: {
    onSubmit() {
      this.$message({ message: "提交成功", type: "success" });
    },
    open(){
      this.Grade=!this.Grade;
    }
  }
};
</script>  
