
<template>
 <!-- class="app-container" -->
  <div>
    <div class="position">当前位置：
      <span>供应商列表</span>
      </div>
    <el-card class="box-card">
      <el-row :gutter="5">
        
        <el-col :span="4">
          <el-select v-model="selectvalue" placeholder="状态">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>

        <el-col :span="4">
          <el-input placeholder="店铺姓名/手机号/供应商名称"></el-input>
        </el-col>
        <el-col :span="6">
    
          <el-button-group>
  <el-button type="primary" size="small">搜索</el-button>
          <el-button type="success" size="small">导出</el-button>
</el-button-group>
        </el-col>
      </el-row>
      
      
<div style="margin:0.5% 0 0 0.7%">
       <el-row :gutter="20">
  <el-col :span="4">

    
        <!-- <el-checkbox v-model="checked"></el-checkbox> -->

        <el-button-group>
          <el-button size="mini">审核通过</el-button>
          <el-button size="mini">取消审核</el-button>
        </el-button-group>
      
  </el-col>
  <el-col :span="4" :offset="16"> <el-button size="mini" icon="el-icon-plus" type="primary">添加供应商</el-button></el-col>
</el-row>
</div>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column>

        <el-table-column label="ID" width="120">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
             <el-table-column prop="type" label="供应商类型" width="120"></el-table-column>
        <el-table-column prop="name" label="供应商名称" width="120"></el-table-column>
   
        <el-table-column  label="供应商标志" width="150">
  <template slot-scope="scope"><el-image
      style="width: 70px; height: 70px"
      :src="scope.row.logo"
      :fit="fit"></el-image></template>


        </el-table-column>
        <el-table-column label="供应商联系人" width="250">
          <template slot-scope="scope">
            <div class="bankdata">
              <p>{{ scope.row. contact }}</p>
           
            </div>
          </template>
        </el-table-column>
        <el-table-column label="联系方式" width="120" >
          <template slot-scope="scope">
            <div class="bankdata">
              <p>{{ scope.row.phone }}</p>

           
            </div>
          </template>
        </el-table-column>
        <el-table-column label="商品数量" width="120">
          <template slot-scope="scope">
            <div class="bankdata">
              <p>{{ scope.row.quantity }}</p>

           
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="time" label="申请时间/审核时间" width="220" :render-header="renderheader">
          <template slot-scope="scope">
            <div>
              <p>{{ scope.row.appiytime }}</p>
              <p>{{ scope.row.examine }}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="状态" width="120">
          <template slot-scope="scope">
          
            <el-switch
              v-model="scope.row.stateswitch"
              active-color="#13ce66"
              inactive-color="#ff4949"
              @change="stateopen()"
              v-if="STswitch"
            ></el-switch>
           

            <p style="color:#a94442;" v-if="statedata">{{ scope.row.state }}</p>
          </template>
        </el-table-column>

        <el-table-column prop="operation" label="操作" show-overflow-tooltip>
          <el-button type="primary">编辑</el-button>
  
        </el-table-column>
      </el-table>

      <el-pagination
        style="margin:2%"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
      ></el-pagination>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.position {
  margin: 2% 0 0.5% 0.5%;
  span{
    font-size: 0.9em;
    color:#009688;
  }
}
.box-card {
  padding: 2%;
  margin: 1%;
}
p {
  color: rgb(163, 161, 161);
  margin: 0;
}
.bankdata {
  p:nth-child(2) {
    color: #009688;
  }
  p:nth-child(3) {
    color: #a94442;
  }
}
</style>  
<script>
export default {
  data() {
    return {
      checked: false,
      currentPage4: 1,
      STswitch: true,
      statedata: false,

      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      options: [
        {
          value: "选项1",
          label: "未审核"
        },
        {
          value: "选项2",
          label: "已审核"
        }
      ],
      selectvalue: "",
      list: [{ value: 1 }, { value: 1 }],
      value2: "",
      tableData: [
        {
          id: 91,
          name: "	乐颐",
          type: "平台供应商",
          phone: 18059892299,
          contact: "黄志杰",
      
          logo:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          quantity: "0",
          
          appiytime: "2020-03-24 07:26:04 ",
          examine: "2020-03-25 18:19:34"
     
       
        },
        {
          id: 92,

          name: "圣农",
          type: "平台供应商",
          phone: 18059892299,
          contact: "王照福",
      
          logo:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          quantity: "0",
          
          appiytime: "2020-03-24 07:26:04 ",
          examine: "2020-03-25 18:19:34"
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    renderheader(h, { column, $index }) {
      return h("span", {}, [
        h("span", {}, column.label.split("/")[0]),
        h("br"),
        h("span", {}, column.label.split("/")[1]),
        h("br"),
        h("span", {}, column.label.split("/")[2])
      ]);
    }, // lable 换行

    // stateopen() {
    //   // console.log(this)

    //   console.log(this.tableData.length);

    //   if (this.STswitch == true) {
    //     this.statedata = true;
    //     this.STswitch = false;
    //   }
    // }
  }
};
</script>  

