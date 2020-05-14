
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>添加运费模板</span>
    </div>
    <el-card class="box-card cardStyle">
      <el-form ref="form" :model="form" label-width="150px" label-position="left">
        <el-form-item label="配送方式名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model="form.num"></el-input>
        </el-form-item>
        <el-form-item label="是否默认" prop="state">
          <el-radio v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio" label="2">否</el-radio>
        </el-form-item>
        <el-form-item label="计件方式" prop="state">
          <el-radio v-model="radio" label="1">按重量计费</el-radio>
          <el-radio v-model="radio" label="2">按件计费</el-radio>
        </el-form-item>
        <el-form-item label="全局规则" prop="Globalrules">
          <el-row>
            <el-col :span="12">
              运送到
              <p>全国 [默认运费]</p>
            </el-col>
            <el-col :span="3">
              首重(克)
              <el-input class="GlobalrulesInput"></el-input>
            </el-col>
            <el-col :span="3">
              首费(元)
              <el-input class="GlobalrulesInput"></el-input>
            </el-col>
            <el-col :span="3">
              续重(克)
              <el-input class="GlobalrulesInput"></el-input>
            </el-col>
            <el-col :span="3">
              续费(元)
              <el-input class="GlobalrulesInput"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="运费规则" prop="state">
          <el-button icon="el-icon-plus" @click="dialogVisible = true">新增配送区域</el-button>
          <p class="pstyle1">根据重量来计算运费，当物品不足《首重重量》时，按照《首重费用》计算，超过部分按照《续重重量》和《续重费用》乘积来计算</p>
        </el-form-item>
        <el-form-item>
          <el-button class="elbuttonStyle">提交</el-button>
        </el-form-item>
      </el-form>
      <el-dialog title="选择区域" :visible.sync="dialogVisible" width="50%">
        <el-row :gutter="20">
          <el-col :span="12">
            <p>首重(克) ：</p>
            <el-input-number v-model="num" controls-position="right" :min="1" :max="10"></el-input-number>
          </el-col>
          <el-col :span="12">
            <p>首费(元) ：</p>
            <el-input-number v-model="num1" controls-position="right" :min="1" :max="10"></el-input-number>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <p>续重(克) ：</p>
            <el-input-number v-model="num2" controls-position="right" :min="1" :max="10"></el-input-number>
          </el-col>
          <el-col :span="12">
            <p>续费（元）：</p>
            <el-input-number v-model="num3" controls-position="right" :min="1" :max="10"></el-input-number>
          </el-col>
        </el-row>
        <el-card
          
          @mouseenter.native="elcheckboxState"
          @mouseleave.native="elcheckboxState1"
          class="cardstyle"
        >
          <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange"
          >福建省</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group
            v-model="checkedCities"
            @change="handleCheckedCitiesChange"
            v-if="checkboxState"
          >
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </el-card>
        <el-card
          
          @mouseenter.native="elcheckboxState"
          @mouseleave.native="elcheckboxState1"
          class="cardstyle"
        >
          <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange"
          >山东省</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group
            v-model="checkedCities"
            @change="handleCheckedCitiesChange"
            v-if="checkboxState"
          >
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </el-card>
        <el-card
         
          @mouseenter.native="elcheckboxState"
          @mouseleave.native="elcheckboxState1"
          class="cardstyle"
        >
          <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange"
          >安徽省</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group
            v-model="checkedCities"
            @change="handleCheckedCitiesChange"
            v-if="checkboxState"
          >
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </el-card>
        <el-card
          
          @mouseenter.native="elcheckboxState"
          @mouseleave.native="elcheckboxState1"
          class="cardstyle"
        >
          <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange"
          >北京市</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group
            v-model="checkedCities"
            @change="handleCheckedCitiesChange"
            v-if="checkboxState"
          >
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </el-card>
           <el-card
          
          @mouseenter.native="elcheckboxState"
          @mouseleave.native="elcheckboxState1"
          class="cardstyle"
        >
          <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange"
          >浙江省</el-checkbox>
       

          <div style="margin: 15px 0;"></div>
          <el-checkbox-group
            v-model="checkedCities"
            @change="handleCheckedCitiesChange"
            v-if="checkboxState"
          >
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </el-card>
        <span slot="footer" class="dialog-footer">
                 <el-button class="elbuttonStyle" @click="dialogVisible = false">确 定</el-button>
          <el-button @click="dialogVisible = false">取 消</el-button>
     
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.GlobalrulesInput {
  display: block;
  width: 50%;
}
.cardstyle{
    width: 20%;
    height: 130px;
    padding: 0;
    margin: 0.5%;
    display:inline-block;
     box-shadow:none;
     border: none;
    .el-checkbox{
         padding: 0;
    }
}
</style>  
<script>
const cityOptions = ["泉州市", "厦门市", "漳州市"];
// const cityOptions1 = ["菏泽市", "济南市"];
// const cityOptions2 = ["合肥市"];
// const cityOptions3 = ["东城区"];
// const cityOptions4 = ["温州市"];
export default {
  data() {
    return {
      
      checkboxState: false,
      checkAll: '1',
      
      checkedCities: ["泉州市"],
      cities: cityOptions,
    //   cities1: cityOptions1,
    //   cities2: cityOptions2,
    //   cities3: cityOptions3,
    //   cities4: cityOptions4,
      
      isIndeterminate: true,
      num: 1,
      num1: 0,
      num2: 1,
      num3: 0,
      dialogVisible: false,
      radio: "1",
      form: {
        name: "",
        state: "",
        num: "",
        Globalrules: ""
      }
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
   
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
        //    console.log(value)
    },
    elcheckboxState() {
//         if(){
  this.checkboxState = true;
//         }
    //  console.log(this.)
      
 
    },
    elcheckboxState1() {
      this.checkboxState = false;
    }
  }
};
</script>  