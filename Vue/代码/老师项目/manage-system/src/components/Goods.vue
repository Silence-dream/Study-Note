<template>
  <a-layout>
    <!-- 面包屑导航 -->
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item
        ><router-link to="/home" style="font-weight: bold; color: #000"
          >首页</router-link
        ></a-breadcrumb-item
      >
      <a-breadcrumb-item>商品管理</a-breadcrumb-item>
      <a-breadcrumb-item>商品列表</a-breadcrumb-item>
    </a-breadcrumb>

    <!-- 表格 -->
    <a-card>
      <a-form>
        <a-row>
          <a-col :span="12">
            <a-row :gutter="16">
              <a-col class="gutter-row" :span="16">
                <a-form-item :wrapperCol="{ span: 24 }">
                  <a-input-search size="large" placeholder="请输入内容" />
                </a-form-item>
              </a-col>
              <a-col class="gutter-row" :span="8">
                <a-button type="primary" size="large"> 添加用户 </a-button>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </a-form>
      <!-- 表格 -->
      <a-table
        :row-key="(record) => record.goods_id"
        :columns="table.Cols"
        :data-source="table.Data"
        :pagination="false"
        bordered
      >
        <template #index="{ index }">
          {{ index + 1 }}
        </template>

        <template #operation>
          <!-- 编辑 -->
          <a-button type="primary">
            <EditOutlined />
          </a-button>
          <!-- 删除 -->
          <a-button
            type="danger"
            style="margin: 0 10px"
          >
            <DeleteOutlined
          /></a-button>
        </template>
      </a-table>

      <!-- 分页 -->
      <a-pagination
        style="margin-top: 25px"
        v-model:current="pagination.pagenum"
        :total="pagination.total"
        :show-total="(total) => `共 ${pagination.total} 条`"
        show-size-changer
        @showSizeChange="onShowSizeChange"
        :page-size-options="pagination.pageSizeOptions"
        :defaultPageSize="10"
        v-model:pageSize="pagination.pagesize"
        @change="handlePageChange"
        show-quick-jumper
      />

    </a-card>
  </a-layout>
</template>

<script>
// 引入请求方法 httpGet
import { httpGet } from "@/utils/http";
// 引入菜单小图标
import { EditOutlined, DeleteOutlined } from "@ant-design/icons-vue";

// 引入请求路径
import { goods } from "@/api";
export default {
  data() {
    return {
      table: {
        Cols: [
          { title: "#", key: "index", slots: { customRender: "index" } },
          { title: "商品名称", dataIndex: "goods_name" },
          { title: "商品价格(元)", dataIndex: "goods_price" },
          { title: "商品重量", dataIndex: "goods_weight" },
          { title: "创建时间", dataIndex: "add_time" },
          {
            title: "操作",
            key: "operation",
            slots: { customRender: "operation" },
          },
        ],
        Data: [],
      },
      pagination: {
        pagenum: 1,
        pagesize: 10,
        pageSizeOptions: ["5", "10", "15", "20"],
        total: 0
      },
    };
  },
  created() {
    // 调用获取用户数据的方法
    this.getGoods();
  },
  methods: {
    // 获取用户数据
    getGoods() {
      httpGet(goods.GetGoods, {
        pagenum: this.pagination.pagenum,
        pagesize: this.pagination.pagesize,
      })
        .then((response) => {
          console.log(response);
          let { meta, data } = response;
          // 如果后台返回的状态码为200,则代表请求成
          if (meta.status == 200) {
            // console.log(response);
            this.table.Data = data.goods;
            this.pagination.total = data.total;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 根据每页显示多少条数据不同 重新渲染表格
    onShowSizeChange(current, pageSize) {
      this.pagination.pagenum = current;
      this.pagination.pagesize = pageSize;
      this.getGoods();
    },
      // 页码改变的回调，参数是改变后的页码及每页条数
    handlePageChange(page, pageSize) {
     this.pagination.pagenum = page;
      this.pagination.pagesize = pageSize;
      this.getGoods();
    },
  },
  components: {
    EditOutlined,
    DeleteOutlined,
  },
};
</script>

