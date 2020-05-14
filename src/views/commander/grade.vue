
    

     <template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>团长等级</span>
    </div>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="4" :offset="22">
          <el-button
            icon="el-icon-plus"
            size="mini"
            @click="handleAddRole"
            class="elbuttonStyle2"
          >添加新等级</el-button>
        </el-col>
      </el-row>

      <el-table :data="rolesList" style="width: 100%;margin-top:30px;" stripe>
        <el-table-column align="center" label="等级名称" width="250">
          <template slot-scope="scope">{{ scope.row.dengjiname }}</template>
        </el-table-column>

        <el-table-column align="header-center" label="团长提成金额" width="650">
          <template slot-scope="scope">{{ scope.row.money }}</template>
        </el-table-column>

        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button
              class="elbuttonStyle2"
              icon="el-icon-edit"
              size="mini"
              @click="handleEdit(scope)"
            >编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog
      :visible.sync="dialogVisible"
      :title="dialogType==='edit'?'编辑团长等级':'添加团长等级'"
      width="35%"
    >
      <el-form :model="role" label-width="120px" label-position="left" class="cardStyle">
        <p style="color:red;">此操作将启用等级全局提成，原商品比例失效，可到商品编辑“等级/分销”单独设置</p>

        <el-form-item label="等级名称">
          <el-input v-model="role.dengjiname" placeholder="等级名称" />
        </el-form-item>

        <el-form-item label="团长提成金额">
          <el-input v-model="role.money" placeholder="团长提成金额">
            <template slot="append">元</template>
          </el-input>
        </el-form-item>
      </el-form>
      <div style="text-align:right;">
        <el-button class="elbuttonStyle">确认</el-button>
        <el-button @click="dialogVisible=false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import path from "path";
import { deepClone } from "@/utils";
import { getRoutes, getRoles } from "@/api/role";
// addRole,
//   deleteRole,
//   updateRole
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
      // this.routes = this.generateRoutes(res.data);
    },
    async getRoles() {
      const res = await getRoles();
      this.rolesList = res.data;
    },

    handleAddRole() {
      this.role = Object.assign({}, defaultRole);
      if (this.$refs.tree) {
        // this.$refs.tree.setCheckedNodes([]);
      }
      this.dialogType = "new";
      this.dialogVisible = true;
    },
    handleEdit(scope) {
      this.dialogType = "edit";
      this.dialogVisible = true;
      this.checkStrictly = true;
      this.role = deepClone(scope.row);
      this.$nextTick(() => {
        // const routes = this.generateRoutes(this.role.routes);
        // this.$refs.tree.setCheckedNodes(this.generateArr(routes));
        // set checked state of a node not affects its father and child nodes
        this.checkStrictly = false;
      });
    }
   
  }
};
</script>

<style lang="scss" scoped>
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
</style>
