
<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>添加角色</span>
    </div>
    <el-card class="box-card cardStyle">
      <el-row>
        <el-col :span="24">
          <el-form ref="form" :model="form" label-width="100px" label-position="left">
            <el-form-item label="角色">
              <el-input v-model="form.name" />
            </el-form-item>

            <el-form-item label="状态">
              <el-radio-group v-model="form.state">
                <el-radio label="启用"></el-radio>
                <el-radio label="禁用"></el-radio>
              </el-radio-group>
              <p>如果禁用，则当前角色的操作员全部会禁止使用</p>
            </el-form-item>
            <el-form-item label="可用权限">
            
              <el-collapse v-model="activeNames">
                <el-collapse-item name="1">
                  <template slot="title">
                    <el-checkbox v-model="Survey">商城概况</el-checkbox>
                  </template>
                  <el-checkbox v-model="Survey">商城概况</el-checkbox>
                  <el-checkbox v-model="Survey">统计</el-checkbox>
                </el-collapse-item>
                <el-collapse-item name="2">
                  <template slot="title">
                    <el-checkbox v-model="management">商品管理</el-checkbox>
                  </template>
                  <el-checkbox v-model="management">商品管理</el-checkbox>
                  <el-row>
                    <el-col :span="6">
                      <el-checkbox v-model="management">商品列表</el-checkbox>
                    </el-col>
                    <el-col :span="18">
                      <div class="listcheck">
                        <el-checkbox v-model="management">商品分类</el-checkbox>
                        <el-checkbox v-model="management">商品规格</el-checkbox>
                        <el-checkbox v-model="management">商品标签</el-checkbox>
                        <el-checkbox v-model="management">商品设置</el-checkbox>
                        <el-checkbox v-model="management">统一时间</el-checkbox>
                      </div>
                    </el-col>
                  </el-row>
                </el-collapse-item>
                <el-collapse-item name="3">
                  <template slot="title">
                    <el-checkbox v-model="order">订单管理</el-checkbox>
                  </template>
                  <el-checkbox v-model="order">订单管理</el-checkbox>
                  <el-row>
                    <el-col :span="6">
                      <el-checkbox v-model="order">订单列表</el-checkbox>
                    </el-col>
                    <el-col :span="18">
                      <div class="listcheck">
                        <el-checkbox v-model="order">批量发货</el-checkbox>
                        <el-checkbox v-model="order">售后管理</el-checkbox>
                        <el-checkbox v-model="order">评价列表</el-checkbox>
                        <el-checkbox v-model="order">评价设置</el-checkbox>
                        <el-checkbox v-model="order">订单设置</el-checkbox>
                      </div>
                    </el-col>
                  </el-row>
                </el-collapse-item>
                <el-collapse-item name="4">
                  <template slot="title">
                    <el-checkbox v-model="vip">会员管理</el-checkbox>
                  </template>
                  <el-checkbox v-model="vip">会员管理</el-checkbox>
                  <el-row>
                    <el-col :span="6">
                      <el-checkbox v-model="vip">会员列表</el-checkbox>
                    </el-col>
                    <el-col :span="18">
                      <div class="listcheck">
                        <el-checkbox v-model="vip">虚拟会员管理</el-checkbox>
                      </div>
                    </el-col>
                  </el-row>
                </el-collapse-item>
                <el-collapse-item name="5">
                  <template slot="title">
                    <el-checkbox v-model="commander">团长管理</el-checkbox>
                  </template>
                  <el-checkbox v-model="commander">团长设置</el-checkbox>
                  <el-row>
                    <el-col :span="6">
                      <el-checkbox v-model="commander">团长列表</el-checkbox>
                    </el-col>
                    <el-col :span="18">
                      <div class="listcheck">
                        <el-checkbox v-model="commander">团长设置</el-checkbox>
                        <el-checkbox v-model="commander">提现列表</el-checkbox>
                        <el-checkbox v-model="commander">提现设置</el-checkbox>
                      </div>
                    </el-col>
                  </el-row>
                </el-collapse-item>
                <el-collapse-item name="6">
                  <template slot="title">
                    <el-checkbox v-model="supplier">供应商管理</el-checkbox>
                  </template>
                  <el-checkbox v-model="supplier">供应商管理</el-checkbox>
                  <el-row>
                    <el-col :span="6">
                      <el-checkbox v-model="supplier">供应商列表</el-checkbox>
                    </el-col>
                    <el-col :span="18">
                      <div class="listcheck">
                        <el-checkbox v-model="supplier">基本设置</el-checkbox>
                        <el-checkbox v-model="supplier">申请页面内容</el-checkbox>
                      </div>
                    </el-col>
                  </el-row>
                </el-collapse-item>
                <el-collapse-item name="7">
                  <template slot="title">
                    <el-checkbox v-model="Marketing">营销活动</el-checkbox>
                  </template>
                  <el-checkbox v-model="Marketing">营销活动</el-checkbox>
                  <el-row>
                    <el-col :span="6">
                      <el-checkbox v-model="Marketing">优惠券管理</el-checkbox>
                    </el-col>
                    <el-col :span="18">
                      <div class="listcheck">
                        <el-checkbox v-model="Marketing">优惠券分类</el-checkbox>
                        <el-checkbox v-model="Marketing">满减</el-checkbox>
                      </div>
                    </el-col>
                  </el-row>
                </el-collapse-item>
                <el-collapse-item name="8">
                  <template slot="title">
                    <el-checkbox v-model="article">文章列表</el-checkbox>
                  </template>
                  <el-checkbox v-model="article">文章列表</el-checkbox>
                </el-collapse-item>
                <el-collapse-item name="9">
                  <template slot="title">
                    <el-checkbox v-model="Distribution">配送单管理</el-checkbox>
                  </template>
                  <el-checkbox v-model="Distribution">配送单管理</el-checkbox>
                  <el-row>
                    <el-col :span="6">
                      <el-checkbox v-model="Distribution">配送单管理</el-checkbox>
                    </el-col>
                    <el-col :span="18">
                      <div class="listcheck">
                        <el-checkbox v-model="Distribution">生成配送单</el-checkbox>
                        <el-checkbox v-model="Distribution">配送路线</el-checkbox>
                        <el-checkbox v-model="Distribution">配送人员</el-checkbox>
                      </div>
                    </el-col>
                  </el-row>
                </el-collapse-item>
                <el-collapse-item name="10">
                  <template slot="title">
                    <el-checkbox v-model="user">角色管理</el-checkbox>
                  </template>
                  <el-checkbox v-model="user">角色管理</el-checkbox>
                  <el-row>
                    <el-col :span="6">
                      <el-checkbox v-model="user">角色管理</el-checkbox>
                    </el-col>
                    <el-col :span="18">
                      <div class="listcheck">
                        <el-checkbox v-model="user">后台用户管理</el-checkbox>
                      </div>
                    </el-col>
                  </el-row>
                </el-collapse-item>
                <el-collapse-item name="11">
                  <template slot="title">
                    <el-checkbox v-model="Enclosure">附件管理</el-checkbox>
                  </template>
                  <el-checkbox v-model="Enclosure">附件管理</el-checkbox>

                  <el-checkbox v-model="Enclosure">附件设置</el-checkbox>
                </el-collapse-item>
                <el-collapse-item name="12">
                  <template slot="title">
                    <el-checkbox v-model="Setup">设置</el-checkbox>
                  </template>
                  <el-checkbox v-model="Setup">设置</el-checkbox>
                  <el-row>
                    <el-col :span="6">
                      <el-checkbox v-model="Setup">基本设置</el-checkbox>
                    </el-col>
                    <el-col :span="18">
                      <div class="listcheck">
                        <el-checkbox v-model="Setup">图片设置</el-checkbox>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="6">
                      <el-checkbox v-model="Setup">参数设置</el-checkbox>
                    </el-col>
                    <el-col :span="18">
                      <div class="listcheck">
                        <el-checkbox v-model="Setup">模板消息设置</el-checkbox>
                        <el-checkbox v-model="Setup">底部菜单设置</el-checkbox>
                      </div>
                    </el-col>
                  </el-row>
                  <el-checkbox v-model="Setup">支付设置</el-checkbox>
                  <el-row>
                    <el-col :span="6">
                      <el-checkbox v-model="Setup">幻灯片设置</el-checkbox>
                    </el-col>
                    <el-col :span="18">
                      <div class="listcheck">
                        <el-checkbox v-model="Setup">公告</el-checkbox>
                        <el-checkbox v-model="Setup">导航图标</el-checkbox>
                      </div>
                    </el-col>
                  </el-row>
                  <el-checkbox v-model="Setup">运费模板</el-checkbox>
                  <el-checkbox v-model="Setup">物流接口</el-checkbox>
                  <el-row>
                    <el-col :span="6">
                      <el-checkbox v-model="Setup">快递方式</el-checkbox>
                    </el-col>
                    <el-col :span="18">
                      <div class="listcheck">
                        <el-checkbox v-model="Setup">配送方式设置</el-checkbox>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="6">
                      <el-checkbox v-model="Setup">版权说明</el-checkbox>
                    </el-col>
                    <el-col :span="18">
                      <div class="listcheck">
                        <el-checkbox v-model="Setup">关于我们</el-checkbox>
                        <el-checkbox v-model="Setup">后台账户</el-checkbox>
                      </div>
                    </el-col>
                  </el-row>
                </el-collapse-item>
              </el-collapse>
             
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">提交</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>


p {
  color: #999999;
  margin: 0;
  padding: 0;
}
.listcheck {
  .el-checkbox {
    padding: 0;
    margin: 0;
  }
  .el-checkbox:nth-child(1) {
    padding: 0;
  }
}

</style>  
<script>
export default {
  data() {
    return {
      checked: false,
      Survey: false,
      list: false,
      order: true,
      vip: false,
      commander: false,
      supplier: false,
      Marketing: false,
      article: false,
      Distribution: false,
      user: false,
      Enclosure: false,
      Setup:false,
    

      form: {
        name: "",

        state: "禁用"
      }
    };
  },
  methods: {
    onSubmit() {
      this.$message({ message: "提交成功", type: "success" });
    },
    open() {}
  }
};
</script>  
