
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>优惠券分类</span>
    </div>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="4" :offset="22">
          <el-button type="primary" icon="el-icon-plus" size="mini" @click="handleAddRole">添加分类</el-button>
        </el-col>
      </el-row>

      <el-table :data="rolesList" style="width: 100%;margin-top:30px;" stripe>
        <el-table-column align="header-center" label="ID" width="150">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="分类名称">
          <template slot-scope="scope">
            <!-- width="250" -->
            <el-input v-model="scope.row.ClassificationName"></el-input>
          </template>
        </el-table-column>

        <el-table-column align="center">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.ClassificationNameValue"
              active-color="#13ce66"
              inactive-color="#ff4949"
            ></el-switch>
            <!-- <el-button type="primary" icon="el-icon-edit" size="small" @click="handleEdit(scope)">编辑</el-button> -->
            <el-button
              type="primary"
              icon="el-icon-delete"
              size="mini"
              @click="handleDel(scope)"
              class="Classification"
            >删除</el-button>
          </template>
        </el-table-column>
        <!-- <el-table-column>
          <div :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100%">
            <div
              v-for="(domain, index) in dynamicValidateForm.domains"
              :key="domain.key"
              :prop="'domains.' + index + '.value'"
              :rules="{required: true, message: '不能为空', trigger: 'blur'}"
              style="float:left"
              class="commodityGG"
            >
              <el-input v-model="domain.value">
                <el-button
                  type="danger"
                  icon="el-icon-close"
                  slot="append"
                  @click.prevent="removeDomain(domain)"
                ></el-button>
              </el-input>
            </div>
          </div>
        </el-table-column>-->
      </el-table>
      <el-button
        style=" background-color:#009688 ; margin-top: 1%;color:white;"
        @click="Preservation"
      >保存分类</el-button>
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
      dynamicValidateForm: {},
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
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

      value: "",
      radio: "1"
    };
  },
  computed: {
    routesData() {
      return this.routes;
    }
  },
  created() {
    // Mock：从服务器获取所有路由和角色列表
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

    // 重塑路由结构，使其看起来与侧边栏相同
    generateRoutes(routes, basePath = "/") {
      const res = [];

      for (let route of routes) {
        // skip some route跳过某条路线
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

        // recursive child routes递归子路由
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
    Preservation() {
      this.$message({
        message: "保存成功",
        type: "success"
      });
    },
    handleAddRole() {
      // this.role = Object.assign({}, defaultRole);
      // if (this.$refs.tree) {
      //   // this.$refs.tree.setCheckedNodes([]);
      // }
      // this.dialogType = "new";
      // this.dialogVisible = true;
      // this.dynamicValidateForm.push(1);
    },
    handleDel(scope) {
      // this.dialogType = "edit";
      // this.dialogVisible = true;
      // this.checkStrictly = true;
      // this.role = deepClone(scope.row);
      // this.$nextTick(() => {
      //   const routes = this.generateRoutes(this.role.routes);
      //   this.$refs.tree.setCheckedNodes(this.generateArr(routes));
      //   // set checked state of a node not affects its father and child nodes
      //   this.checkStrictly = false;
      //    });
      this.$confirm("确认删除此优惠券吗？", "信息", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
      console.log(scope);
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
// 1，编辑table的某一行的时候。获取哪一行的数据给编辑的表格。

// handleEdit(index, row) {
//                 this.editFormVisible = true;
//                 this.editForm = Object.assign({}, row);
//             },
</script>

<style lang="scss" scoped>
.position {
  margin: 3% 0 1% 1%;
  span {
    font-size: 0.9em;
    color: #009688;
  }
}
.el-table {
  color: rgb(141, 138, 138);
  font-size: 0.9em;
}
.app-container {
  .roles-table {
    margin-top: 30px;
  }
  .permission-tree {
    margin-bottom: 30px;
  }
}
.Classification {
  padding: 1%;
  margin-left: 3%;
  background-color: #009688;
}
</style>
