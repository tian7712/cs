<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>添加团长</span>
    </div>
    <el-card class="box-card cardStyle">
      <el-form ref="form" :model="form" label-width="100px" label-position="left">
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
        <el-form-item label="上级团长">
          <el-input v-model="vipValue1" :disabled="true">
            <el-button slot="append" @click="dialogVisible1 = true">选择团长</el-button>
          </el-input>
          <div v-if="hide1">
            <el-image
              style="width: 100px; height: 100px; margin:1% 0 0 0;position: relative;"
              :src="url1"
            ></el-image>
            <div class="p-value">{{pvalue1}}</div>
            <el-button
              type="danger"
              icon="el-icon-delete"
              style="background-color: #009688;border:none;position: absolute;bottom: 25%; margin-left:0.3%"
              size="mini"
              @click="del1"
            ></el-button>
          </div>
        </el-form-item>
        <el-form-item label="团长名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="代码">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="ID码">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="团长手机号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="小区名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="地址">
          <el-select v-model="value" placeholder="请选择省份">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="value" placeholder="请选择城市">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="value" placeholder="请选择区域">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="value" placeholder="请选择街道/镇">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="提货详细地址">
          <el-input v-model="form.name" style="width:20%"></el-input>
          <el-button>搜索地图</el-button>
        </el-form-item>
        <el-form-item label="经纬度">
          <el-input v-model="form.name" style="width:7%" :disabled="true"></el-input>
          <el-input v-model="form.name" style="width:7%" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="地图定位">
          <baidu-map class="bm-view" ak="YOUR_APP_KEY"></baidu-map>
        </el-form-item>
        <el-form-item label="申请状态">
          <el-radio v-model="radio" label="1">通过</el-radio>
          <el-radio v-model="radio" label="2">未审核</el-radio>
          <el-radio v-model="radio" label="3">已拒绝</el-radio>
        </el-form-item>
        <el-form-item label="银行卡名称">
          <el-input v-model="form.name"></el-input>
          <p>例如农行、微信、支付宝，需有关联会员此处设置才有效</p>
        </el-form-item>
        <el-form-item label="卡号">
          <el-input v-model="form.name"></el-input>
          <p>需有关联会员此处设置才有效</p>
        </el-form-item>
        <el-form-item label="持卡人姓名">
          <el-input v-model="form.name"></el-input>
          <p>需有关联会员此处设置才有效</p>
        </el-form-item>
        <el-row :gutter="20">
  <el-col :span="12" :offset="2"> <el-button type="primary">提交</el-button></el-col>
</el-row>
    
      </el-form>
    </el-card>
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

    <el-dialog title="信息1" :visible.sync="dialogVisible1" width="30%">
      <!-- :before-close="handleClose" -->
      <el-input placeholder="请输入昵称进行搜索" v-model="input3" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-table :data="tableData1" style="width: 100%">
        <!-- .filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase())) -->
        <el-table-column>
          <template slot-scope="scope">
            <el-image style="width: 40px; height: 40px" :src="scope.row.img"></el-image>
          </template>
        </el-table-column>

        <el-table-column align="right">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleClick1(scope.row)">选择</el-button>
          </template>
        </el-table-column>
      </el-table>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleClick(scope.row)">确 定</el-button>
        <el-button @click="dialogVisible1 = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "",
      input3: "",
      vipValue: "",
      hide: false,
      vipValue1: "",
      hide1: false,
value:"",
      dialogVisible: false,
      dialogVisible1: false,
      form: [
        {
          name: ""
        }
      ],
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        }
      ],

      tableData: [
        {
          id: 132,
          img:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          name: "王小虎"
        },
        {
          id: 265,
          img:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          name: "王小"
        }
      ],
      tableData1: [
        {
          id: 1321,
          img:
            "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKBrqTKvvrFictbhPvRb5nQ1saesHU4ic6cxS9lNwGoKic25dKGENWEO3H9gnB462icwOMtQpocYcdjJg/132",
          name: "火焰"
        },
        {
          id: 2651,
          img:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          name: "王小1"
        }
      ]
    };
  },
  methods: {
    // selectImg(index) {
    //   this.dialogVisible = false;
    //   console.log(this.tableData);

    //   //   var el = event.currentTarget;
    //   //   console.log(el.innerHTML);
    //   //   console.log(event)
    // },
    handleClick(row) {
      this.hide = true;
      this.dialogVisible = false;

      //    if(row.id==row.id){ }

      this.url = row.img;
      this.vipValue = row.id;
      this.pvalue = row.name;
      console.log(row.img);
    },
    del() {
      this.hide = false;
    },
    // 2

    handleClick1(row) {
      this.hide1 = true;
      this.dialogVisible1 = false;
      this.url1 = row.img;
      this.vipValue1 = row.id;
      this.pvalue1 = row.name;
      console.log(row.img);
    },
    del1() {
      this.hide1 = false;
    }
  }
};
</script>

<style lang="scss" scoped>

.bm-view {
  width: 50%;
  height: 300px;
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
