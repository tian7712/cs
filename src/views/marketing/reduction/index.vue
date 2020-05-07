  <template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>满减设置</span>
    </div>
    <el-card class="box-card">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="是否开启">
          <el-radio v-model="radio" label="1" @change="openRadio">关闭</el-radio>
          <el-radio v-model="radio" label="2" @change="openRadio">开启</el-radio>
        </el-form-item>
        <el-form-item label="满" v-if="open">
         <!-- <el-input-group> </el-input-group> -->
              <el-input  v-model="input1">
                <template slot="append">元</template>
              </el-input>
           
              <el-input  v-model="input2">
                <template slot="prepend">减</template>
                <template slot="append">元</template>
              </el-input>
              
        
        </el-form-item>
        <el-form-item>
          <el-button type="primary">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.position {
  margin: 3% 0 1% 1%;
  span {
    font-size: 0.9em;
    color: #009688;
  }
}
.el-input{
width:13%;
padding: 0;
margin: -0.1%;

}
</style>
<script>
export default {
  data() {
    return {
      open:false,
      input1: "",
      input2: "",
      radio: "1",
      form: {
        name: ""
      }
    };
  },
  methods:{
    openRadio(){
       this.open=!this.open
    }
  }
};
</script>