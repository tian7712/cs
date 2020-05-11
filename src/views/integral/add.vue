<template>
  <div class="app-container">
    <div class="position">
      当前位置：
      <span>添加商品</span>
    </div>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="4" :offset="21">
          <el-button class="elbuttonStyle" @click="create">提交</el-button>
          <el-button  @click="fanhui">返回列表</el-button>
        </el-col>
      </el-row>

      <el-tabs v-model="activeName">
        <el-tab-pane label="基本信息" name="first">
          <el-form
            ref="dataForm"
            :rules="rules"
            :model="temp"
            label-position="left"
            label-width="100px"
            style="width: 90%; margin:5%;"
          >
            <el-form-item label="商品名称 " prop="title">
              <el-input v-model="temp.title" />
            </el-form-item>
            <el-form-item label="商品排序" prop="title">
              <el-input v-model="temp.title" />
            </el-form-item>
            <el-form-item label="商品类别" prop="type">
              <el-radio v-model="category" label="1">普通商品</el-radio>
              <el-radio v-model="category" label="2">秒杀商品</el-radio>
            </el-form-item>
            <el-form-item label="商品分类" prop="type">
              <el-select v-model="temp.type" class="filter-item" placeholder="全部分类">
                <el-option
                  v-for="item in calendarTypeOptions"
                  :key="item.key"
                  :label="item.display_name"
                  :value="item.key"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="时间" prop="timestamp">
              <el-date-picker
                v-model="temp.timestamp"
                type="datetime"
                placeholder="Please pick a date"
              />
            </el-form-item>
            <el-form-item label="商品简介">
              <el-input
                v-model="temp.remark"
                :autosize="{ minRows: 2, maxRows: 4}"
                type="textarea"
                placeholder="长度请控制在100字以内"
              />
              <p>副标题的长度请控制在100字以内</p>
            </el-form-item>
            <el-form-item label="商品简短标题">
              <el-input v-model="temp.title" />
              <p>小票打印机使用，请控制字数，未填写默认截取商品标题(无须打印的可以不填写</p>
            </el-form-item>
            <!-- </el-form-item> -->
            <el-form-item label="首页商品图片（1）" prop>
              <el-input placeholder="请输入内容" v-model="input2">
                <el-button slot="append" @click="dialogFormVisible = true">选择图片</el-button>
              </el-input>
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :file-list="fileList1"
                style="margin:1%"
              >
                <!-- :on-remove="handleRemove" -->
                <!-- :on-preview="handlePictureCardPreview" -->
                <i class="el-icon-plus"></i>
              </el-upload>
              <p>此图为首页商品大图模式封面图，最佳尺寸:680*380</p>
            </el-form-item>
            <el-form-item label="首页商品图片（2）" prop>
              <el-input placeholder="请输入内容" v-model="input2">
                <el-button slot="append" @click="dialogFormVisible = true">选择图片</el-button>
              </el-input>
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :file-list="fileList1"
                style="margin:1%"
              >
                <!-- :on-remove="handleRemove" -->
                <!-- :on-preview="handlePictureCardPreview" -->
                <i class="el-icon-plus"></i>
              </el-upload>

              <p>此图为首页商品大图模式封面图，最佳尺寸:680*380</p>
            </el-form-item>
            <el-form-item label="商品图片">
              <el-input :disabled="true" placeholder="批量上传图片">
                <el-button slot="append" @click="dialogFormVisible = true">选择图片</el-button>
              </el-input>
              <p>第一张为缩略图，建议为正方型图片，其他为详情页面图片，尺寸建议宽度为640，并保持图片大小一致</p>
            </el-form-item>
            <el-form-item label="分享标题 " prop>
              <el-input v-model="temp.title" />
            </el-form-item>
            <el-form-item label="分享图片 " prop>
              <el-input placeholder="请输入内容" v-model="input2">
                <el-button slot="append" @click="dialogFormVisible = true">选择图片</el-button>
              </el-input>
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :file-list="fileList1"
                style="margin:1%"
              >
                <!-- :on-remove="handleRemove" -->
                <!-- :on-preview="handlePictureCardPreview" -->
                <i class="el-icon-plus"></i>
              </el-upload>
              <p>此图为商品详情页分享图片（比例为长宽比5:4）</p>
            </el-form-item>
            <el-form-item label="商品状态 " prop>
              <el-radio v-model="sxstate" label="1">上架</el-radio>
              <el-radio v-model="sxstate" label="2">下架</el-radio>
            </el-form-item>
            <el-form-item label="首页推荐 " prop>
              <el-radio v-model="homestate" label="1">是</el-radio>
              <el-radio v-model="homestate" label="2">否</el-radio>
            </el-form-item>
            <el-form-item label="商品价格 " prop>
              <el-row>
                <el-col :span="12">
                  <el-input v-model="input2">
                    <template slot="append">元 原价</template>
                  </el-input>
                </el-col>
                <el-col :span="12">
                  <el-input v-model="input1">
                    <template slot="append">元</template>
                  </el-input>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item label="赠送积分 " prop>
              <el-input v-model="input1">
                <template slot="append">备注：用户订单交易完成后赠送积分</template>
              </el-input>
            </el-form-item>
            <el-form-item label="已出售数 " prop>
              <el-input v-model="input1">
                <template slot="append">备注：前台销量=虚拟销量+实际销量</template>
              </el-input>
            </el-form-item>

            <el-form-item label="提货时间 " prop>
              <el-radio v-model="thtime" label="当日达" @change="Custom">当日达</el-radio>
              <el-radio v-model="thtime" label="次日达" @change="Custom">次日达</el-radio>
              <el-radio v-model="thtime" label="隔日达" @change="Custom">隔日达</el-radio>
              <el-radio v-model="thtime" label="自定义时间" @change="Custom">
                自定义
                <el-input v-if="timeCustom" v-model="custom" placeholder="请输入自定义时间" />
              </el-radio>
              <!-- v-model="thtime" -->
              <p>
                <span>系统会根据当前日期自动生成具体提货时间，或直接显示自定义内容</span>
              </p>
            </el-form-item>
            <el-form-item label="自定义标签" prop>
              <el-input v-model="temp.title" :disabled="true">
                <el-button slot="append" @click="dialoginformation = true">选择标签</el-button>
              </el-input>
              <el-dialog title="信息" :visible.sync="dialoginformation">
                <div style="margin: 3%;">
                  <el-input placeholder="请输入内容" v-model="input2">
                    <el-button slot="append">搜索</el-button>
                  </el-input>
                  <p style="text-align: center;">没有找到</p>
                </div>
              </el-dialog>
            </el-form-item>
            <el-form-item label="团购时间">
              <el-date-picker
                v-model="TGtime"
                type="datetimerange"
                :picker-options="pickerOptions"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                align="right"
              ></el-date-picker>
            </el-form-item>

            <el-form-item label="单次限购">
              <el-input v-model="temp.title" />

              <p>用户单次提交订单最多可购买数，默认为0表示不限制</p>
            </el-form-item>

            <el-form-item label="历史限购">
              <el-input v-model="temp.title" />
              <p>用户历史累积最多可购买数，默认为0表示不限制</p>
            </el-form-item>

            <el-form-item label="新人专享">
              <el-checkbox v-model="people"></el-checkbox>
              <p>未付款过的用户</p>
            </el-form-item>

            <el-form-item label="选择供应商">
              <el-input v-model="pvalue" :disabled="true">
                <el-button slot="append" @click="dialogVisible = true">选择供应商</el-button>
              </el-input>
              <div v-if="hide">
                <el-image
                  style="width: 100px; height: 100px; margin:1% 0 0 0;position: relative;border:1px solid #F2F2F2"
                  :src="url"
                ></el-image>
                <div class="p-value">{{pvalue}}</div>
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  style="background-color: #009688;border:none;position: absolute;bottom: 25%; margin-left:0.3%"
                  size="mini"
                  @click="del"
                ></el-button>
              </div>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="规格库存" name="second">
          <el-form
            ref="dataForm"
            :rules="rules"
            :model="temp"
            label-position="left"
            label-width="100px"
            style="width: 90%; margin:5%;"
          >
            <el-row :gutter="20">
              <el-col :span="2">
                <span style="color:black;">规格库存</span>
              </el-col>
              <el-col :span="12">
                <el-form-item label="商品编码" prop>
                  <el-input v-model="temp.title" />
                  <p>商品编码 用部分商家用于统计</p>
                </el-form-item>

                <el-form-item label="重量">
                  <el-input v-model="temp.title" :disabled="off">
                    <template slot="append">克</template>
                  </el-input>
                </el-form-item>
                <el-form-item label="库存" prop>
                  <el-input v-model="temp.title" :disabled="off" />
                  <p>商品的剩余数量, 如启用多规格，则此处设置无效.</p>
                </el-form-item>
              </el-col>
            </el-row>

            <el-form-item label="规格" prop>
              <el-checkbox v-model="checked" @change="boxChange">启用商品规格</el-checkbox>
              <p>
                <span>启用商品规格后，商品的价格及库存以商品规格为准,库存设置为0则会到”已售罄“中，手机也不会显示, -1为不限制</span>
              </p>
              <!-- 、/ -->

              <el-card class="box-card GGweight" v-if="specifications">
                <el-input placeholder="重量" v-model="weightinput">
                  <el-button
                    type="primary"
                    icon="el-icon-plus"
                    slot="append"
                    style="background-color: skyblue;color:white;"
                    @click="addDomain"
                  >添加规格项</el-button>
                  <el-button
                    type="danger"
                    icon="el-icon-close"
                    slot="append"
                    @click="delGG"
                    style="background-color: red;color:white;"
                  ></el-button>
                </el-input>
                <div :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100%">
                  <div
                    v-for="(domain, index) in dynamicValidateForm.domains"
                    :key="domain.key"
                    :prop="'domains.' + index + '.value'"
                    :rules="{required: true, message: '不能为空', trigger: 'blur'}"
                    style="float:left"
                    class="commodityGG"
                  >
                    <el-input placeholder="自定义" v-model="domain.value">
                      <el-button
                        type="danger"
                        icon="el-icon-close"
                        slot="append"
                        @click.prevent="removeDomain(domain)"
                      ></el-button>
                    </el-input>
                  </div>
                </div>
              </el-card>

              <!-- 量词 -->
              <el-card class="box-card GGweight" v-if="specifications1">
                <el-input placeholder="量词">
                  <!-- v-model="classifier" -->
                  <el-button
                    type="primary"
                    icon="el-icon-plus"
                    slot="append"
                    style="background-color: skyblue;color:white;"
                    @click="addDomain1"
                  >添加规格项</el-button>
                  <el-button
                    type="danger"
                    icon="el-icon-close"
                    slot="append"
                    @click="delGG"
                    style="background-color: red;color:white;"
                  ></el-button>
                </el-input>
                <div :model="dynamicValidateForm1" ref="dynamicValidateForm1" label-width="100%">
                  <div
                    v-for="(domain, index) in dynamicValidateForm1.domains"
                    :key="domain.key"
                    :prop="'domains.' + index + '.value'"
                    :rules="{required: true, message: '不能为空', trigger: 'blur'}"
                    style="float:left"
                    class="commodityGG"
                  >
                    <el-input placeholder="自定义" v-model="domain.value">
                      <el-button
                        type="danger"
                        icon="el-icon-close"
                        slot="append"
                        @click.prevent="removeDomain1(domain)"
                      ></el-button>
                    </el-input>
                  </div>
                </div>
              </el-card>

              <!-- /、 -->

              <div v-if="GGinput">
                <!-- <el-divider></el-divider> -->
                <el-form-item label="选择规格" prop style="margin:1%">
                  <el-select v-model="value1" multiple placeholder="请选择" @change="Specifications">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-divider></el-divider>
                <el-button class="elbuttonStyle" icon="el-icon-plus" style="margin:1%">添加规格</el-button>
                <!-- tab表格 -->
                <el-table :data="tableData" style="width: 100%" v-if="specifications1">
                  <el-table-column prop="classifier" label="量词" width="50"></el-table-column>
                  <el-table-column label="库存">
                    <el-table-column prop="stock" label="库存">
                      <template slot="header" slot-scope="scope">
                        <el-input v-model="search" size="mini">
                          <el-button slot="append" @click="assignment">
                            <svg-icon icon-class="down1" class-name="down1" />
                          </el-button>
                        </el-input>
                      </template>
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.namee" class="edit-input" size="small" />
                      </template>

                      <!-- <el-input v-model="tableData.stock" class="edit-input" size="small" /> -->
                    </el-table-column>
                    <!-- <el-input
                      v-for="item in tableData"
                      :key="item.value"
                      :label="item.classifier"
                      :value="item.value"
                    ></el-input>-->
                  </el-table-column>
                  <el-table-column label="现价">
                    <el-table-column prop="XJprice" label="现价">
                      <template slot="header" slot-scope="scope">
                        <el-input v-model="search" size="mini">
                          <el-button slot="append">
                            <svg-icon icon-class="down1" class-name="down1" />
                          </el-button>
                        </el-input>
                      </template>
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.namee" class="edit-input" size="small" />
                      </template>
                    </el-table-column>
                  </el-table-column>

                  <el-table-column label="原价">
                    <el-table-column label="原价" prop="YJprice">
                      <template slot="header" slot-scope="scope">
                        <el-input v-model="search" size="mini">
                          <el-button slot="append">
                            <svg-icon icon-class="down1" class-name="down1" />
                          </el-button>
                        </el-input>
                      </template>
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.namee" class="edit-input" size="small" />
                      </template>
                    </el-table-column>
                  </el-table-column>
                  <el-table-column label="成本价">
                    <el-table-column label="成本价" prop="CBJprice">
                      <template slot="header" slot-scope="scope">
                        <el-input v-model="search" size="mini">
                          <el-button slot="append">
                            <svg-icon icon-class="down1" class-name="down1" />
                          </el-button>
                        </el-input>
                      </template>
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.namee" class="edit-input" size="small" />
                      </template>
                    </el-table-column>
                  </el-table-column>
                  <el-table-column label="编码">
                    <el-table-column label="编码" prop="code">
                      <template slot="header" slot-scope="scope">
                        <el-input v-model="search" size="mini">
                          <el-button slot="append" @click="assignment">
                            <svg-icon icon-class="down1" class-name="down1" />
                          </el-button>
                        </el-input>
                      </template>
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.namee" class="edit-input" size="small" />
                      </template>
                    </el-table-column>
                  </el-table-column>
                  <el-table-column label="重量（克）">
                    <el-table-column label="重量（克）" prop="weight">
                      <template slot="header" slot-scope="scope">
                        <el-input v-model="search" size="mini">
                          <el-button slot="append">
                            <svg-icon icon-class="down1" class-name="down1" />
                          </el-button>
                        </el-input>
                      </template>
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.namee" class="edit-input" size="small" />
                      </template>
                    </el-table-column>
                    <!-- <el-input v-model="search" size="mini"></el-input> -->
                  </el-table-column>
                </el-table>
              </div>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="商品详情" name="third" style="width: 90%; margin: 1% 5%;">
          <div>
            <tinymce :height="300" />
          </div>
        </el-tab-pane>
        <el-tab-pane label="等级/分销" name="fourth">
          <el-row>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <p>团长提成</p>
              </div>
            </el-col>
            <el-col :span="20">
              <div class="grid-content bg-purple-light">
                <el-col :span="2">
                  <p>独立规则</p>
                  <div v-if="dataA">
                    <br />
                    <br />
                    <br />
                    <p>一级</p>
                  </div>
                </el-col>
                <el-col :span="14" :offset="4">
                  <el-checkbox v-model="checked1" @change="TZChange">启用独立团长提成</el-checkbox>
                  <p > 
                默认使用团长等级提成设置，启用独立团长提成设置，此商品拥有独自的团长提成比例,不受团长等级比例及默认设置限制
                  </p>

                  <div v-if="dataA" style="margin-bottom:2%">
                    <el-input placeholder v-model="input2">
                      <template slot="append">%</template>
                    </el-input>
                  </div>
                </el-col>
              </div>
            </el-col>
          </el-row>
          <!-- <el-button>12</el-button> -->
        </el-tab-pane>
      </el-tabs>
      <el-row :gutter="20">
        <el-col :span="6" :offset="20">
          <el-button class="elbuttonStyle" @click="create">确认</el-button>
          <el-button @click="dialogFormVisible = false">取消</el-button>
        </el-col>
      </el-row>

      <el-dialog title="图片" :visible.sync="dialogFormVisible">
        <el-tabs v-model="activeName1">
          <el-tab-pane label="平台" name="first1">
            <el-row :gutter="10">
              <el-col :span="8" offset="16">
                <el-button type="danger" icon="el-icon-delete" style="margin:2%" size="small">删除</el-button>
                <el-dropdown split-button type="primary" size="small">
                  移动
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>1</el-dropdown-item>
                    <el-dropdown-item>2</el-dropdown-item>
                    <el-dropdown-item>3</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24" :offset="2">
                <el-upload
                  class="upload-demo"
                  :file-list="fileList"
                  list-type="picture-card"
                  action="https://jsonplaceholder.typicode.com/posts/"
                >
                  <i slot="default" class="el-icon-plus"></i>
                  <!-- :on-change="handleChange" -->
                </el-upload>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12" :offset="6">
                <el-pagination
                  :current-page.sync="currentPage3"
                  :page-size="100"
                  layout="prev, pager, next, jumper"
                  :total="1000"
                ></el-pagination>
                <!-- @current-change="handleCurrentChange" -->
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="本地服务器" name="second2">
            <el-row :gutter="10">
              <el-col :span="16">
                <el-select v-model="month" placeholder="不限年份">
                  <el-option v-for="item in options1" :key="item" :label="item" :value="item"></el-option>
                </el-select>
                <el-select v-model="month" placeholder="不限月份">
                  <el-option v-for="item in options1" :key="item" :label="item" :value="item"></el-option>
                </el-select>
                <el-button icon="el-icon-search"></el-button>
              </el-col>
              <el-col :span="8">
                <el-button type="danger" icon="el-icon-delete" style="margin:2%" size="small">删除</el-button>
                <el-dropdown split-button type="primary" size="small">
                  移动
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>1</el-dropdown-item>
                    <el-dropdown-item>2</el-dropdown-item>
                    <el-dropdown-item>3</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>

                <!-- <el-button size="small" type="primary" :on-change="handleChange">点击上传</el-button> -->
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24" :offset="2">
                <el-upload
                  class="upload-demo"
                  :file-list="fileList"
                  list-type="picture-card"
                  action="https://jsonplaceholder.typicode.com/posts/"
                >
                  <!-- :on-change="handleChange" -->
                  <i slot="default" class="el-icon-plus"></i>
                </el-upload>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12" :offset="6">
                <el-pagination
                  :current-page.sync="currentPage3"
                  :page-size="100"
                  layout="prev, pager, next, jumper"
                  :total="1000"
                ></el-pagination>
                <!-- @current-change="handleCurrentChange"
                -->
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="提取网络图片" name="third3">
            <div class="box">
              <div class="inner">
                <p>输入图片链接</p>

                <el-input placeholder="图片链接"></el-input>
                <el-button>转化</el-button>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-dialog>
      <el-dialog title="信息" :visible.sync="dialogVisible" width="30%">
        <el-input placeholder="请输入昵称进行搜索" v-model="searchInput" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-table :data="tableData1" style="width: 100%">
          <el-table-column>
            <template slot-scope="scope">
              <el-image style="width: 40px; height: 40px" :src="scope.row.img"></el-image>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">{{scope.row.name}}</template>
          </el-table-column>
          <el-table-column align="right">
            <template slot-scope="scope">
              <el-button size="mini" @click="Selectsupplier(scope.row)">选择</el-button>
            </template>
          </el-table-column>
        </el-table>

        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="Selectsupplier(scope.row)">确 定</el-button>
          <el-button @click="dialogVisible = false">取 消</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import {
  fetchList,
  fetchPv,
  createArticle,
  updateArticle
} from "@/api/article";
import waves from "@/directive/waves"; // waves directive
import { parseTime } from "@/utils";
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination基于el分页的二次包

import Dropzone from "dropzone";
import "dropzone/dist/dropzone.css";
// import { getToken } from 'api/qiniu';
import Tinymce from "@/components/Tinymce";
Dropzone.autoDiscover = false;
// 上传图片

const calendarTypeOptions = [
  { key: "CN", display_name: "水果蔬菜" },
  { key: "US", display_name: "蛋肉禽类" },
  { key: "JP", display_name: "海鲜冻品" },
  { key: "EU", display_name: "米面盐油" }
];

// arr to obj, such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name;
  return acc;
}, {});

export default {
  // name: "ComplexTable",
  // components: { Pagination },
  name: "TinymceDemo",
  namee: "",
  search: "",
  tableinput: [
    {
      classifier: "个",
      stock: "g1"
    },
    {
      classifier: "盒",
      stock: "h1"
    },
    {
      classifier: "箱",
      stock: "x1"
      // XJprice:'x2' ,
      // YJprice: 'x3',
      // CBJprice:,
      // code:,
      // weight:
    },
    {
      classifier: "件",
      stock: "j1"
    },
    {
      classifier: "包",
      stock: "b1"
    },
    {
      classifier: "袋",
      stock: "d1"
    }
  ],
  components: { Tinymce },
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "info",
        deleted: "danger"
      };
      return statusMap[status];
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type];
    }
  },
  data() {
    return {
      month: "",
      dialogVisible: false,
      searchInput: "",
      url: "http://dev.xmduobanjin.com/static/images/default-pic.jpg",
      pValue: "",
      hide: false,
      search: "",
      tableData1: [
        {
          img:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          name: "王照福"
        },
        {
          img:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          name: "王照福1"
        }
      ],
      tableData: [
        {
          classifier: "个",
          stock: "g1"
        },
        {
          classifier: "盒",
          stock: "h1"
        },
        {
          classifier: "箱",
          stock: "x1"
          // XJprice:'x2' ,
          // YJprice: 'x3',
          // CBJprice:,
          // code:,
          // weight:
        },
        {
          classifier: "件"
        },
        {
          classifier: "包"
        },
        {
          classifier: "袋"
        }
      ],
      classifier: "",
      weightinput: "",
      specifications: false,
      specifications1: false,
      dialoginformation: false,
      fileList: [
        {
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          url:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        },
        {
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        },
        {
          url:
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
        },
        {
          url:
            "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"
        }
      ],
      fileList1: [
        {
          url: "http://dev.xmduobanjin.com/static/images/default-pic.jpg"
        }
      ],
      people: false,
      TGtime: "",
      category: "1",
      dialogImageUrl: "",
      // dialogVisible: false,
      disabled: false,
      currentPage3: 2,
      dynamicValidateForm: {
        domains: [
          {
            value: "400g"
          },
          {
            value: "500g"
          },
          {
            value: "1kg"
          },
          {
            value: "1.5kg"
          },
          {
            value: "2kg"
          },
          {
            value: "2.5g"
          },
          {
            value: "3kg"
          }
        ]
      },
      dynamicValidateForm1: {
        domains: [
          {
            value: "个"
          },
          {
            value: "盒"
          },
          {
            value: "箱"
          },
          {
            value: "件"
          },
          {
            value: "包"
          },
          {
            value: "袋"
          }
        ]
      },

      homestate: "1",
      sxstate: "1",
      thtime: "当日达",
      timeCustom: false,
      //   thtime1:"",
      items: [],
      checked1: "",
      checked: "",
      custom: "",
      options: [
        {
          value: "选项1",
          label: "重量"
        },
        {
          value: "选项2",
          label: "量词"
        }
      ],
      options1: [1, 2, 3],

      input1: "",
      input2: "",
      input3: "",
      input4: "",
      value1: [],

      activeName: "first",
      activeName1: "first1",
      item1: "",
      item: "",
      off: false,
      dataA: false,
      GGinput: false,
      ZLchange: false,
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+id"
      },
      importanceOptions: [1, 2, 3],
      calendarTypeOptions,
      sortOptions: [
        { label: "ID Ascending", key: "+id" },
        { label: "ID Descending", key: "-id" }
      ],
      statusOptions: ["published", "draft", "deleted"],
      showReviewer: false,
      temp: {
        id: undefined,
        importance: 1,
        remark: "",
        timestamp: new Date(),
        title: "",
        type: "",
        status: "published"
      },
      dialogFormVisible: false,
      dialogStatus: "",
      textMap: {
        // update: "修改",
        create: "添加"
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        type: [
          { required: true, message: "type is required", trigger: "change" }
        ],
        timestamp: [
          {
            type: "date",
            required: true,
            message: "timestamp is required",
            trigger: "change"
          }
        ],
        title: [
          { required: true, message: "title is required", trigger: "blur" }
        ]
      },
      downloadLoading: false,
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
      datevalue2: ""
    };
  },
  created() {
    this.getList();
  },
  methods: {
    assignment() {
      // this.search = this.scope.row.namee;
      console.log(this);
    },
    addGG() {
      this.items.push("");
    },

    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now()
      });
    },
    addDomain1() {
      this.dynamicValidateForm1.domains.push({
        value: "",
        key: Date.now()
      });
    },
    Specifications() {
      if (this.value1 == "选项1") {
        this.specifications = true;
        this.specifications1 = false;
      } else if (this.value1 == "选项2") {
        this.specifications = false;
        this.specifications1 = true;
      } else if (this.value1 == "选项1,选项2" || this.value1 == "选项2,选项1") {
        this.specifications = true;
        this.specifications1 = true;
      } else {
        this.specifications = false;
        this.specifications1 = false;
      }

      console.log(this.value1);
    },
    removeDomain(items) {
      var index = this.dynamicValidateForm.domains.indexOf(items);
      console.log(index);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    removeDomain1(items) {
      var index = this.dynamicValidateForm1.domains.indexOf(items);
      console.log(index);
      if (index !== -1) {
        this.dynamicValidateForm1.domains.splice(index, 1);
      }
    },
    TZChange() {
      this.dataA = !this.dataA;
      console.log(this.dataA);
    },

    delGG() {
      this.$confirm("确认要删除此规格, 是否继续?", "提示", {
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
    },

    boxChange() {
      // alert("checked");
      this.off = !this.off;
      this.GGinput = !this.GGinput;
      this.specifications = false;
      this.specifications1 = false;
      this.value1 = "";
    },

    getList() {
      this.listLoading = true;
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items;
        this.total = response.data.total;

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false;
        }, 1.5 * 1000);
      });
    },
    handleFilter() {
      this.listQuery.page = 1;
      this.getList();
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: "操作成功",
        type: "success"
      });
      row.status = status;
    },
    sortChange(data) {
      const { prop, order } = data;
      if (prop === "id") {
        this.sortByID(order);
      }
    },
    sortByID(order) {
      if (order === "ascending") {
        this.listQuery.sort = "+id";
      } else {
        this.listQuery.sort = "-id";
      }
      this.handleFilter();
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        importance: 1,
        remark: "",
        timestamp: new Date(),
        title: "",
        status: "published",
        type: ""
      };
    },
    handleCreate() {
      this.resetTemp();
      this.dialogStatus = "create";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    },
    create() {
      //   this.$refs["dataForm"].validate(valid => {
      //     if (valid) {
      //       this.temp.id = parseInt(Math.random() * 100) + 1024; // mock a id
      //       this.temp.author = "vue-element-admin";
      //       createArticle(this.temp).then(() => {
      //         this.list.unshift(this.temp);
      //         this.dialogFormVisible = false;
      //         this.$notify({
      //           title: "添加商品",
      //           message: "添加成功",
      //           type: "success",
      //           duration: 2000
      //         });
      //       });
      //     }
      //   });
      alert("提交成功");
    },
    fanhui() {
      this.$router.push({ path: "/integral/Commodity-management" });
    },
    Custom() {
      if (this.thtime == "自定义时间") {
        this.timeCustom = true;
      } else {
        this.timeCustom = false;
      }
      //   console.log(this.time);
      console.log(this.thtime);
    },
    // handleUpdate(row) {
    //   this.temp = Object.assign({}, row); // copy obj
    //   this.temp.timestamp = new Date(this.temp.timestamp);
    //   this.dialogStatus = "update";
    //   this.dialogFormVisible = true;
    //   this.$nextTick(() => {
    //     this.$refs["dataForm"].clearValidate();
    //   });
    // },
    // updateData() {
    //   this.$refs["dataForm"].validate(valid => {
    //     if (valid) {
    //       const tempData = Object.assign({}, this.temp);
    //       tempData.timestamp = +new Date(tempData.timestamp); // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
    //       updateArticle(tempData).then(() => {
    //         const index = this.list.findIndex(v => v.id === this.temp.id);
    //         this.list.splice(index, 1, this.temp);
    //         this.dialogFormVisible = false;
    //         this.$notify({
    //           title: "添加",
    //           message: "添加成功",
    //           type: "success",
    //           duration: 2000
    //         });
    //       });
    //     }
    //   });
    // },
    handleDelete(row, index) {
      this.$notify({
        title: "删除",
        message: "删除成功",
        type: "success",
        duration: 2000
      });
      this.list.splice(index, 1);
    },
    handleFetchPv(pv) {
      fetchPv(pv).then(response => {
        this.pvData = response.data.pvData;
        this.dialogPvVisible = true;
      });
    },
    handleDownload() {
      this.downloadLoading = true;
      import("@/vendor/Export2Excel").then(excel => {
        const tHeader = ["timestamp", "title", "type", "importance", "status"];
        const filterVal = [
          "timestamp",
          "title",
          "type",
          "importance",
          "status"
        ];
        const data = this.formatJson(filterVal);
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: "table-list"
        });
        this.downloadLoading = false;
      });
    },
    formatJson(filterVal) {
      return this.list.map(v =>
        filterVal.map(j => {
          if (j === "timestamp") {
            return parseTime(v[j]);
          } else {
            return v[j];
          }
        })
      );
    },
    getSortClass: function(key) {
      const sort = this.listQuery.sort;
      return sort === `+${key}` ? "ascending" : "descending";
    },
    Selectsupplier(row) {
      this.hide = true;
      this.dialogVisible = false;

      this.url = row.img;
      this.vipValue = row.id;
      this.pvalue = row.name;
      console.log(row.img);
    },
    del() {
      this.hide = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.p-value {
  background-color: #009688;
  width: 100px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  color: white;

  position: absolute;
  bottom: 5%;
}

.GGweight {
  border: 1px solid gainsboro;
  border-radius: 2px;
  padding: 1%;
  box-shadow: none;
  margin-top: 1%;
}
.drop {
  border: 1px solid gainsboro;
}
// span {
//   color: rgb(177, 175, 175);
//   font-size: 0.8em;
// }
.commodityGG {
  width: 20%;
  margin: 1%;
}
.box {
  display: flex;
  justify-content: center;

  width: 100%;
  height: 300px;

  p {
    text-align: center;
    padding: 30% 0 1% 0;
    color: gray;
    font-weight: 200;
    font-size: 1.3em;
  }
  .inner {
    width: 50%;
    .el-button {
      position: relative;
      left: 40%;
      margin-top: 3%;
    }
  }
}
p {
  padding: 0;
  margin: 0;
  color: rgb(177, 175, 175);
  font-size: 0.9em;
}
.grid-content {
  p {
    color:#98999A ;
  
    margin: 2% 0;
    font-size: 0.9em;
  }
}
</style>
