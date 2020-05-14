
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>添加配送线路管理</span>
    </div>
    <el-card class="box-card cardStyle">
      <el-form ref="form" :model="form" label-width="100px" label-position="left">
        <el-form-item label="线路名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="关联配送员">
          <el-input v-model="pvalue" :disabled="true">
            <template slot="append">
              <el-button @click="dialogTableVisible = true">选择配送员</el-button>
            </template>
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
        <el-form-item label="选择小区">
          <el-input v-model="form.name" :disabled="true">
            <template slot="append">
              <el-button @click="dialogResidential = true">选择小区</el-button>
            </template>
          </el-input>
          <div v-if="ResidentialHide">
            <el-input
              type="text"
              v-for="(item,index) in items"
              v-model="itemss"
              :key="index"
              :disabled="true"
              class="ResidentialStyle"
            >
              <template slot="append">
                <el-button icon="el-icon-close" @click="off(index)"></el-button>
              </template>
            </el-input>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button class="elbuttonStyle">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- dig -->
    <el-dialog title="信息" :visible.sync="dialogTableVisible">
      <el-input placeholder="请输入昵称进行搜索">
        <template slot="append">
          <el-button @click="dialogTableVisible = true">搜索</el-button>
        </template>
      </el-input>
      <el-table :data="gridData">
        <el-table-column width="40">
          <template slot-scope="scope">
            <el-image style="width: 30px; height: 30px" :src="scope.row.img">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </template>
        </el-table-column>
        <el-table-column property="name"></el-table-column>
        <el-table-column property="phone"></el-table-column>
        <el-table-column align="right">
          <template slot-scope="scope">
            <el-button type="text" @click="handleClick(scope.row)">选择</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
    <!-- dig1 -->

    <el-dialog title="信息" :visible.sync="dialogResidential">
      <el-input placeholder="请输入昵称进行搜索">
        <template slot="append">
          <el-button @click="dialogResidential = true">搜索</el-button>
        </template>
      </el-input>
      <el-table :data="gridData">
        <el-table-column width="140" prop="Residential"></el-table-column>
        <el-table-column property="commander"></el-table-column>
        <el-table-column property="commanderPhone"></el-table-column>
        <el-table-column property="address"></el-table-column>
        <el-table-column align="right">
          <template slot-scope="scope">
            <el-button type="text" @click="ResidentialClick(scope.row)">选择</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>

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
.ResidentialStyle {
  padding: 0;
  width: 13%;
  margin: 1% 0% 0% 1%;
}
</style>  
<script>
export default {
  data() {
    return {
      url: " ",
      pvalue: "",
      hide: false,
      items: [],
      itemss: "",
      ResidentialUrl: "",
      ResidentialValue: "",
      ResidentialHide: false,
      form: {
        name: ""
      },
      gridData: [
        {
          img:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          name: "王小虎",
          phone: 12346752432,
          Residential: "槟榔东里51号	",
          commander: "叶招旭	",
          commanderPhone: "18050064050",
          address: "镇东明路槟榔花园(槟榔东里123~125号附近)"
        },
        {
          img:
            "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
          name: "123",
          phone: 12323352432,
          Residential: "海沧星河花园	",
          commander: "晏维红		",
          commanderPhone: "18965170167",
          address: "	镇滨湖北路633号星河花园(海沧区沧林三路516~556)"
        }
      ],
      dialogTableVisible: false,
      dialogResidential: false
    };
  },
  methods: {
    handleClick(row) {
      this.hide = true;
      this.dialogTableVisible = false;

      this.url = row.img;

      this.pvalue = row.name;
    },
    del() {
      this.hide = false;
    },
    ResidentialClick(row,index) {
     
      this.ResidentialHide = true;
      this.dialogResidential = false;
      console.log(this.items);
      console.log(row.Residential);
      this.itemss= row.Residential;
      this.items.push("");
    },
    
    Residentialdel() {
      this.ResidentialHide = false;
    },
    off(index) {
  this.items.splice(index, 1);
  
}
  }
};
</script>  