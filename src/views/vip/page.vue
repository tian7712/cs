<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>虚拟会员</span>
    </div>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="4">
          <el-input placeholder="请输入内容" clearable size="mini"></el-input>
        </el-col>

        <el-col :span="2">
          <el-button  icon="el-icon-search" class="elbuttonStyle2" size="mini">搜索</el-button>
        </el-col>

        <el-col :span="2"  ></el-col>
 
          <!-- handleAddRole -->
        
      </el-row>
      
         <el-button  @click="add" class="elbuttonStyle2" size="mini" style="float:right;">
           <svg-icon icon-class="jiahao" style="margin-right:1%"/>添加虚拟会员</el-button>
   <div style="margin-top:1%; ">
      <el-button size="mini">删除</el-button>
   </div>
      
        
 <el-table
    ref="multipleTable"
  :data="rolesList"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
  
     <el-table-column align="center" label="ID" width="150">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>

        <el-table-column align="header-center" label="虚拟会员名" width="150">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column align="left" label="头像" width="700">
          <template slot-scope="scope">
            <el-image :src="scope.row.img" style="width: 50px; height:50px;">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </template>
        </el-table-column>
        <el-table-column align="header-center" label="手机号">
          <template slot-scope="scope">{{ scope.row.phone}}</template>
        </el-table-column>

        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button icon="el-icon-edit" size="mini" @click="edit" class="elbuttonStyle2">修改</el-button>
            <el-button icon="el-icon-delete" size="mini" @click="handleDelete(scope)" class="elbuttonStyle2">删除</el-button>
          </template>
        </el-table-column>

    
  </el-table>






<!-- {{ scope.row.code}} -->



      <el-row :gutter="20">
        <el-col :span="4" :offset="21">
            <el-button style="margin:4%">
            
            <span>共1条记录</span>
        
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
      checked:'',
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

      value: "",
      radio: "1",
      swvalue: true
    };
  },
  computed: {
    routesData() {
      return this.routes;
      //  return this.roles;
    }
  },
  created() {
    // Mock: get all routes and roles list from server Mock：从服务器获取所有路由和角色列表
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
    add() {
 this.$router.push({ path: "/vip/addpage" });
 
    },
    edit() {
 this.$router.push({ path: "/vip/editpage" });
    },

    // Reshape the routes structure so that it looks the same as the sidebar重塑路由结构，使其看起来与侧边栏相同
    generateRoutes(routes, basePath = "/") {
      const res = [];

      for (let route of routes) {
        // skip some route跳过某些路由
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
    },
    generateTree(routes, basePath = "/", checkedKeys) {
      const res = [];

      for (const route of routes) {
        const routePath = path.resolve(basePath, route.path);

        // recursive child routes递归子路由
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

      // When there is only one child route, the child route is displayed by default只有一个子路由时，默认显示子路由
      if (showingChildren.length === 1) {
        onlyOneChild = showingChildren[0];
        onlyOneChild.path = path.resolve(parent.path, onlyOneChild.path);
        return onlyOneChild;
      }

      // Show parent if there are no child route to display如果没有要显示的子路由，则显示父路由
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
</style>
