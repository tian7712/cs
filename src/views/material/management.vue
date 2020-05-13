<template>
  <div class="app-container" style=" background-color:#F2F2F2;">
    <div class="position">
      当前位置：
      <span>物资列表</span>
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
          <el-button icon="el-icon-search" type="success" size="small">搜索</el-button>
        </el-col>

        <el-col :span="2" :offset="12">
          <el-button size="small" @click="handleAddRole" class="elbuttonStyle2">
            <svg-icon icon-class="jiahao" style="margin-right:1%" />添加商品
          </el-button>
        </el-col>
      </el-row>

      <el-table :data="rolesList" style="width: 100%;margin-top:30px;">
        <el-table-column align="center" label="ID" width="50">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column align="center" label="图片" width="200">
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

        <el-table-column align="header-center" label="规格" width="120">
          <template>1</template>
        </el-table-column>
        <el-table-column align="header-center" label="是否上架" width="100">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.shelf"
              active-color="#5FB878"
              class="switch"
              active-text="上架"
              inactive-text="下架"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button icon="el-icon-edit" class="elbuttonStyle2" size="mini" @click="handleEdit">修改</el-button>
            <el-button
              icon="el-icon-delete"
              class="elbuttonStyle2"
              size="mini"
              @click="handleDelete(scope)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row :gutter="20">
        <el-col :span="4" :offset="21">
          <el-button style="margin:4% ;background:none;color:#009688;">
            共
            <span>1</span>条记录
          </el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { getRoutes, getRoles } from "@/api/role";

export default {
  data() {
    return {
      routes: [],
      rolesList: [],
rolesList1: [],
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
      swvalue: true
    };
  },
  computed: {
    routesData() {
      return this.routes;
    }
  },
  created() {
    // Mock: get all routes and roles list from server
    this.getRoutes();
    this.getRoles();
  
  },
  methods: {
    async getRoutes() {
      const res = await getRoutes();
      this.serviceRoutes = res.data;
    },
    async getRoles() {
      const res = await getRoles();
      this.rolesList = res.data;
    },
    // async getRolecopy() {
    //   const res = await getRolecopy();
    //   this.rolesList1 = res.data;
    //   console.log(this.rolesList1)
    // },
    handleAddRole() {
      this.$router.push({ path: "/material/add" });
    },
    handleEdit() {
      this.$router.push({ path: "/material/edit" });
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
</style>
