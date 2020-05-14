
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>编辑用户</span>
    </div>
    <el-card class="box-card cardStyle">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="用户登录名" style="width:75%">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="登录密码" style="width:75%">
          <el-input v-model="form.name"></el-input>
          <p class="pstyle2">如果您编辑密码，不填写，则不修改</p>
        </el-form-item>
        <el-form-item label="所属角色" style="width:75%">
          <el-input v-model="pvalue" :disabled="true">
            <template slot="append">
              <el-button @click="dialogTableVisible = true" class="elbuttonwhite">选择角色</el-button>
              <el-button @click="clear" class="elbuttonred">清除选择</el-button>
            </template>
          </el-input>
          <p class="pstyle2">如果您选择了角色，则此用户本身就继承了此角色的所有权限</p>
        </el-form-item>
        <el-form-item label="管理员姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="管理员电话">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="管理员状态">
          <el-radio v-model="radio" label="1">启用</el-radio>
          <el-radio v-model="radio" label="2">禁用</el-radio>
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
      <el-table :data="gridData" style="margin:0% 2%; width:96%">
        <el-table-column property="name"></el-table-column>

        <el-table-column align="right">
          <template slot-scope="scope">
            <el-button type="text" @click="handleClick(scope.row)">选择</el-button>
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">关闭</el-button>
      </span>
    </el-dialog>
    <!-- dig1 -->
  </div>
</template>
<style lang="scss" scoped>
</style>  
<script>
export default {
  data() {
    return {
      radio: "1",
      pvalue: "",

      items: [],
      itemss: "",

      form: {
        name: ""
      },
      gridData: [
        {
          name: "后台管理员"
        },
        {
          name: "运营"
        }
      ],
      dialogTableVisible: false
    };
  },
  methods: {
    handleClick(row) {
      this.hide = true;
      this.dialogTableVisible = false;

      this.pvalue = row.name;
    },
    clear() {
      this.pvalue = "";
    }
  }
};
</script>  