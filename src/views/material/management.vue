<template>
  <div class="app-container" style=" background-color:#F2F2F2;">
    <div class="position">当前位置：<span>物资列表</span> </div>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="4">
          <el-input placeholder="请输入内容" clearable></el-input>
        </el-col>
        <el-col :span="4">
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :value="item.value"></el-option>
          </el-select>
        </el-col>
        <el-col :span="2">
          <el-button  icon="el-icon-search">搜索</el-button>
        </el-col>

        <el-col :span="2" :offset="12">
          <el-button icon="el-icon-plus" @click="handleAddRole">添加</el-button>
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
 <template slot-scope="scope"> <el-switch v-model="scope.row.shelf"   active-color="#5FB878"
               class="switch"
      
              active-text="上架"
             inactive-text="下架"></el-switch></template>

         
      
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button icon="el-icon-edit" size="mini" @click="handleEdit">修改</el-button>
            <el-button icon="el-icon-delete" size="mini" @click="handleDelete(scope)">删除</el-button>
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
import path from "path";
import { deepClone } from "@/utils";
import {
  getRoutes,
  getRoles,
  addRole,
  deleteRole,
  updateRole
} from "@/api/role";

const defaultRole = {
  key: "",
  name: "",
  description: "",
  routes: []
};

export default {
  data() {
    return {
      fileList: [
        {
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ],
      fileList1: [
        {
          url:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        }
      ],
      dialogImageUrl: "",
      dialogVisible: false,
      role: Object.assign({}, defaultRole),
      routes: [],
      rolesList: [],
      dialogVisible: false,
      dialogType: "new",
      checkStrictly: false,
      defaultProps: {
        children: "children",
        label: "title"
      },
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
      this.routes = this.generateRoutes(res.data);
    },
    async getRoles() {
      const res = await getRoles();
      this.rolesList = res.data;
    },

    // Reshape the routes structure so that it looks the same as the sidebar重塑路由结构，使其看起来与侧边栏相同
    generateRoutes(routes, basePath = "/") {
      const res = [];

      for (let route of routes) {
        // skip some route
        if (route.hidden) {
          continue;
        }

        const onlyOneShowingChild = this.onlyOneShowingChild(
          route.children,
          route
        );

        if (route.children && onlyOneShowingChild && !route.alwaysShow) {
          route = onlyOneShowingChild;
        }

        const data = {
          path: path.resolve(basePath, route.path),
          title: route.meta && route.meta.title
        };

        // recursive child routes
        if (route.children) {
          data.children = this.generateRoutes(route.children, data.path);
        }
        res.push(data);
      }
      return res;
    },
    generateArr(routes) {
      let data = [];
      routes.forEach(route => {
        data.push(route);
        if (route.children) {
          const temp = this.generateArr(route.children);
          if (temp.length > 0) {
            data = [...data, ...temp];
          }
        }
      });
      return data;
    },
    handleAddRole() {
      this.$router.push({path:'/material/add'})
  
    },
    handleEdit() {
         this.$router.push({path:'/material/edit'})
  
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
    },
    generateTree(routes, basePath = "/", checkedKeys) {
      const res = [];

      for (const route of routes) {
        const routePath = path.resolve(basePath, route.path);

        // recursive child routes
        if (route.children) {
          route.children = this.generateTree(
            route.children,
            routePath,
            checkedKeys
          );
        }

        if (
          checkedKeys.includes(routePath) ||
          (route.children && route.children.length >= 1)
        ) {
          res.push(route);
        }
      }
      return res;
    },
    async confirmRole() {
      const isEdit = this.dialogType === "edit";

      const checkedKeys = this.$refs.tree.getCheckedKeys();
      this.role.routes = this.generateTree(
        deepClone(this.serviceRoutes),
        "/",
        checkedKeys
      );

      if (isEdit) {
        await updateRole(this.role.key, this.role);
        for (let index = 0; index < this.rolesList.length; index++) {
          if (this.rolesList[index].key === this.role.key) {
            this.rolesList.splice(index, 1, Object.assign({}, this.role));
            break;
          }
        }
      } else {
        const { data } = await addRole(this.role);
        this.role.key = data.key;
        this.rolesList.push(this.role);
      }

      const { description, key, name } = this.role;
      this.dialogVisible = false;
      this.$notify({
        title: "Success",
        dangerouslyUseHTMLString: true,
        message: `
            <div>Role Key: ${key}</div>
            <div>Role Name: ${name}</div>
            <div>Description: ${description}</div>
          `,
        type: "success"
      });
    },
    // reference: src/view/layout/components/Sidebar/SidebarItem.vue
    onlyOneShowingChild(children = [], parent) {
      let onlyOneChild = null;
      const showingChildren = children.filter(item => !item.hidden);

      // When there is only one child route, the child route is displayed by default
      if (showingChildren.length === 1) {
        onlyOneChild = showingChildren[0];
        onlyOneChild.path = path.resolve(parent.path, onlyOneChild.path);
        return onlyOneChild;
      }

      // Show parent if there are no child route to display
      if (showingChildren.length === 0) {
        onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return onlyOneChild;
      }

      return false;
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
.el-button{
  background-color: #009688;
  color: white;
}
</style>
