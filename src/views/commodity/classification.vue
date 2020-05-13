
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>商品分类</span>
    </div>
    <el-card class="box-card">
      <el-button style="float: right; " class="elbuttonStyle2" @click="add" size="mini">
        <svg-icon icon-class="jiahao" style="margin-right:1%" />添加分类
      </el-button>
    
      <div v-for="(item,key) in commodity" :key="key" class="text-item">
        <span>{{'[ID: ' + item.commodityid +']'+item.value}}</span>
        <div class="item-button">
          <el-switch
            v-model="item.key"
            active-color="#5FB878"
            class="switch"
            active-text="显示"
            inactive-text="隐藏"
            style="padding-right:2%;"
          ></el-switch>
          <el-tooltip class="item" effect="dark" content="修改" placement="top">
            <el-button size="mini" @click="edit">修改</el-button>
          </el-tooltip>

          <el-button size="mini" @click="del">删除</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.text-item {
  width: 60%;
  height: 40px;
  border: 1px solid gainsboro;
  margin: 1%;
  border-radius: 10px;
  // padding: 1%;
  font-size: 0.8em;
  span {
    line-height: 40px;
    margin-left: 2%;
  }
}
.item-button {
  float: right;
  // width: 80%;
  height: 40px;
  display: flex;
  padding: 1%;
  // justify-content: center; /* 水平居中 */
  align-items: center;
}
</style>  
<script>
export default {
  data() {
    return {
      url: "",
      id1: 2,
      list: false,

      form: {
        name: "全部商品",
        radio: true,
        id: 2,
        img1: "",
        img2: ""
      },
      formLabelWidth: "120px",
      commodity: [
        {
          commodityid: 1,
          value: "全部商品",
          key: true
        },
        {
          commodityid: 2,
          value: "水果蔬菜",
          key: false
        }
      ]
    };
  },
  methods: {
    add() {
      this.$router.push({ path: "/commodity/addclassification" });
    },
    edit() {
      this.$router.push({ path: "/commodity/editclassification" });
    },
    del() {
      this.$router.push({ path: "/commodity/editclassification" });
    }
  }
};
</script>  