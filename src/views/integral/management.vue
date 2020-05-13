<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>商品管理</span>
    </div>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="4">
          <el-input placeholder="请输入内容" clearable size="small"></el-input>
        </el-col>
        <el-col :span="4">
          <el-select v-model="value" placeholder="请选择" size="small">
            <el-option v-for="item in options" :key="item.value" :value="item.value"></el-option>
          </el-select>
        </el-col>
        <el-col :span="2">
          <el-button icon="el-icon-search" size="small">搜索</el-button>
        </el-col>

        <el-col :span="2" :offset="12">
          <el-button size="small" @click="handleAddRole">
            <svg-icon icon-class="jiahao" style="margin-right:1%" />添加
          </el-button>
        </el-col>
      </el-row>

      <el-table :data="rolesList" style="width: 100%;margin-top:30px;">
        <el-table-column align="center" label="ID" width="50">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column align="center" label="图片">
          <template slot-scope="scope">
            <el-image :src="scope.row.img" style="width: 60px; height:60px;">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </template>
        </el-table-column>
        <el-table-column align="header-center" label="名称">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column align="header-center" label="售价">
          <template slot-scope="scope">{{ scope.row.price }}</template>
        </el-table-column>
        <el-table-column align="header-center" label="销量" width="70">
          <template slot-scope="scope">{{ scope.row.Salesvolume }}</template>
        </el-table-column>
        <el-table-column align="header-center" label="库存" width="70">
          <template slot-scope="scope">{{ scope.row.stock }}</template>
        </el-table-column>
        <el-table-column align="header-center" label="是否上架">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.shelf"
              active-color="#5FB878"
              class="switch"
              active-text="上架"
              inactive-text="下架"
            ></el-switch>
          </template>
          <!-- <el-switch v-model="off" active-color="#13ce66" inactive-color="#ff4949"></el-switch> -->
        </el-table-column>
        <el-table-column align="center" label="操作">
          <!-- <template slot-scope="scope">  </template> -->
          <el-button icon="el-icon-edit" size="small" @click="handleEdit">修改</el-button>
          <el-button icon="el-icon-delete" size="small" @click="handleDelete(scope)">删除</el-button>
        </el-table-column>
      </el-table>

      <el-row :gutter="20">
        <el-col :span="4" :offset="21">
          <el-button style="margin:4%;background:none;color:#009688;">
            共
            <span>1</span>条记录
          </el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
// import path from "path";
// import { deepClone } from "@/utils";
import { getRoutes, getRoles } from "@/api/role";

const defaultRole = {
  key: "",
  name: "",
  description: "",
  routes: []
};

export default {
  data() {
    return {
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      // role: Object.assign({}, defaultRole),
      routes: [],
      rolesList: [],

      options: [
        {
          value: "上架",
          label: "上架"
        },
        {
          value: "下架",
          label: "下架"
        }
      ],
      value: "",
      radio: "1",
      off: false
    };
  },
  computed: {
    routesData() {
      return this.routes;
    }
  },
  created() {
    // Mock: 从服务器获取所有路由和角色列表
    this.getRoutes();
    this.getRoles();
  },
  methods: {
    async getRoutes() {
      const res = await getRoutes();
      this.serviceRoutes = res.data;
      // this.routes = this.generateRoutes(res.data);
    },
    async getRoles() {
      const res = await getRoles();
      this.rolesList = res.data;
    },

    handleAddRole() {
      this.$router.push({ path: "/integral/add" });
    },
    handleEdit() {
      this.$router.push({ path: "/integral/edit" });
    },
    handleDelete({ $index, row }) {
      this.$confirm("确定要删除吗?", "警告", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          await deleteRole(row.key);
          this.rolesList.splice($index, 1);
          this.$message({
            type: "success",
            message: "Delete succed!"
          });
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  .roles-table {
    margin-top: 30px;
  }
  .permission-tree {
    margin-bottom: 30px;
  }
}
.el-button {
  background-color: #009688;
  color: white;
}
</style>
