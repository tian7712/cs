<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>编辑优惠券</span>
    </div>
    <el-card class="box-card">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="排序">
          <el-input v-model="form.name"></el-input>
          <p>数字越大，排名越靠前</p>
        </el-form-item>
        <el-form-item label="优惠券名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="分类">
          <el-select v-model="sortValue" placeholder="请选择" style="width:100%">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="缩略图">
          <el-input v-model="vipValue" :disabled="true">
            <el-button slot="append" @click="dialogVisible = true">选择图片</el-button>
          </el-input>
          <div v-if="hide">
            <el-image
              style="width: 100px; height: 100px; margin:1% 0 0 0;position: relative;border:1px solid #F2F2F2"
              :src="url"
            ></el-image>

            <el-button
              type="danger"
              icon="el-icon-delete"
              style="background-color: #009688;border:none;position: absolute;bottom: 25%; margin-left:0.3%"
              size="mini"
              @click="del"
            ></el-button>
          </div>
        </el-form-item>

        <el-form-item label="使用条件">
          <el-input v-model="form.name"></el-input>
          <P>消费满多少可用, 空或0 不限制</P>
        </el-form-item>
        <el-form-item label="使用时间限制">
          <el-row>
            <el-col :span="24">
              <el-input v-model="input2" style="width:30%;margin-bottom:1%;">
                <template slot="prepend">
                  <el-radio v-model="conditionRadio" label="1">获得后</el-radio>
                </template>
                <template slot="append">天内有效(空为不限时间使用)</template>
              </el-input>
            </el-col>
          </el-row>

          <el-input v-model="input2" style="width:20%">
            <template slot="prepend">
              <el-radio v-model="conditionRadio" label="2">在日期</el-radio>
            </template>
            <template slot="append">天内有效</template>
          </el-input>
        </el-form-item>
        <el-form-item label="首页领取">
          <el-radio v-model="homeRadio" label="1">是</el-radio>
          <el-radio v-model="homeRadio" label="2">否</el-radio>
        </el-form-item>
        <el-form-item label="优惠方式">
          <el-radio v-model="reductionRadio" label="1">立减</el-radio>
          <el-input v-model="input2" style="width:20%">
            <template slot="prepend">立减</template>
            <template slot="append">元</template>
          </el-input>
        </el-form-item>
        <el-form-item label="每人限领">
          <el-input v-model="input2"></el-input>
          <p>优惠券每人限制领取数量，0不限制张数</p>
        </el-form-item>
        <el-form-item label="发放总数">
          <el-input v-model="input2"></el-input>
          <p>优惠券总数量，没有不能领取或发放,-1 为不限制张数</p>
        </el-form-item>
        <el-form-item label="可使用商品">
          <el-radio v-model="commodityRadio" label="1">商城所有商品</el-radio>
          <el-radio v-model="commodityRadio" label="2">指定商品</el-radio>
        </el-form-item>
      </el-form>
    </el-card>
    <el-dialog title="信息" :visible.sync="dialogVisible" width="30%">
      <el-input placeholder="请输入昵称进行搜索" v-model="searchInput" class="input-with-select">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      input2: "",
      radio: "",
      conditionRadio:"1",
      homeRadio:"1",
      reductionRadio:"1",
      commodityRadio:"1",
      disabled: false,
      url: "http://dev.xmduobanjin.com/static/images/default-pic.jpg",
      dialogVisible: false,
      searchInput: "",
      pvalue: "",
      hide: true,
      vipValue: "",
      form: {
        name: ""
      },
      options: [
        {
          value: "选项1",
          label: "88礼券免费领"
        },
        {
          value: "选项2",
          label: "新人送券"
        }
      ],
      sortValue: "",

      tableData: [
        {
          img:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        },
        {
          img:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        }
      ]
    };
  },
  methods: {
    handleClick(row) {
      this.hide = true;
      this.dialogVisible = false;

      this.url = row.img;
      this.vipValue = row.id;
      this.pvalue = row.name;
      console.log(row.img);
    },
    del() {
      this.hide = false;
    }
  }
};
</script>

<style lang="scss" scoped>


p {
  padding: 0;
  margin: 0;
  color: rgb(177, 175, 175);
  font-size: 0.9em;
}
</style>
