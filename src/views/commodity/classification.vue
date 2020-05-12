
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>商品分类</span>
    </div>
    <el-card class="box-card">
      <el-button style="float: right; " class="elbuttonStyle2" @click="add" size="mini"><svg-icon icon-class="jiahao" style="margin-right:1%"/>添加分类</el-button>
      <!-- (item, key) in list" v-model="item.is" :key="key"   -->
      <div v-for="item in commodity" :key="item" class="text-item">
        {{'[ID: ' + item.commodityid +']'+item.value}}
        <div class="item-button">
          <el-switch
            v-model="item.key"
              active-color="#5FB878"
               class="switch "
      
            active-text="显示"
            inactive-text="隐藏"
          ></el-switch>
          <el-button size="mini" @click="edit">修改</el-button>
          <el-button size="mini" @click="del">删除</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.text-item {
  width: 80%;
  height: 50px;
  border: 1px solid gainsboro;
  margin: 1%;
  border-radius: 10px;
  padding: 1%;
  font-size: 0.8em;
}
.item-button {
  float: right;
}
.drop-div {
  width: 60%;
  border: 1px solid gainsboro;
  display: flex;
  // justify-content: center;
  align-items: center;
  padding: 1%;
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