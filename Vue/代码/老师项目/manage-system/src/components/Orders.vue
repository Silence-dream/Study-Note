<template>
  <a-layout>
    <!-- 面包屑导航 -->
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item
        ><router-link to="/home" style="font-weight: bold; color: #000"
          >首页</router-link
        ></a-breadcrumb-item
      >
      <a-breadcrumb-item>订单管理</a-breadcrumb-item>
      <a-breadcrumb-item>订单列表</a-breadcrumb-item>
    </a-breadcrumb>

    <!-- 表格 -->
    <a-card>
      <a-row style="margin-bottom: 24px">
        <a-col :span="8">
          <a-input-search placeholder="请输入搜索内容" size="large">
            <template #enterButton>
              <a-button> 搜索 </a-button>
            </template>
          </a-input-search>
        </a-col>
      </a-row>
      <a-table
        :row-key="record => record.order_id"
        :columns="table.Cols"
        :data-source="table.Data"
        :pagination="false"
        bordered
      >
        <template #index="{ index }">
          {{ index + 1 }}
        </template>

        <template #pay_status="{ record }">
          <a-tag v-if="record.pay_status == 0" color="pink"> 未付款 </a-tag>
          <a-tag v-if="record.pay_status == 1" color="green"> 已付款 </a-tag>
        </template>

        <template #operation>
          <!--  -->
          <a-button
            type="primary"
            style="margin-right: 10px"
            @click="handleReadAddress"
          >
            <template #icon>
              <EditOutlined />
            </template>
          </a-button>
          <!-- 地址 -->
          <a-button class="ant-green">
            <template #icon>
              <EnvironmentOutlined />
            </template>
          </a-button>
        </template>
      </a-table>
      <a-pagination
        style="margin-top: 25px"
        v-model:current="pagination.pagenum"
        :total="pagination.total"
        :defaultPageSize="10"
        v-model:pageSize="pagination.pagesize"
        :show-total="total => `共 ${pagination.total} 条`"
        show-quick-jumper
        show-size-changer
        :page-size-options="pagination.pageSizeOptions"
        @change="handlePageChange"
        @showSizeChange="onShowSizeChange"
      />
    </a-card>
    <!-- 分配角色弹出框 -->
    <a-modal
      title="修改地址"
      v-model:visible="address.visible"
      okText="确定"
      cancelText="取消"
      @ok="handleUpdateAddress"
      :afterClose="handleResetAddress"
    >
      <a-form
        :model="address.FormModel"
        :rules="address.FormRules"
        ref="addressRef"
      >
        <a-form-item label="省市区/县" name="province" required>
          <a-cascader
            v-model:value="address.FormModel.province"
            :options="address.options"
            placeholder="请选择"
          />
        </a-form-item>

        <a-form-item ref="name" label="详细地址" name="detail" required>
          <a-input v-model:value="address.FormModel.detail" />
        </a-form-item>
      </a-form>
    </a-modal>
  </a-layout>
</template>

<script>
import { order } from "@/api";
import { httpGet } from "@/utils/http";
import { EnvironmentOutlined, EditOutlined } from "@ant-design/icons-vue";
import cityData from "@/api/citydata";
export default {
  data() {
    return {
      // 分页数据
      pagination: {
        // 每页显示多少条数据
        pagesize: 10,
        // 第几页
        pagenum: 1,
        // 数据总数
        total: 0,
        //
        pageSizeOptions: ["1", "2", "5", "10"]
      },
      // 表格数据
      table: {
        Cols: [
          {
            title: "#",
            key: "index",
            slots: { customRender: "index" }
          },
          {
            title: "订单编号",
            dataIndex: "order_number"
          },
          {
            title: "订单价格",
            dataIndex: "order_price"
          },
          {
            title: "是否付款",
            key: "pay_status",
            // dataIndex: "pay_status",
            slots: { customRender: "pay_status" }
          },
          {
            title: "是否发货",
            dataIndex: "is_send"
          },
          {
            title: "下单时间",
            dataIndex: "create_time"
          },
          {
            title: "操作",
            key: "operation",
            slots: { customRender: "operation" }
          }
        ],
        Data: []
      },
      address: {
        visible: false,
        FormModel: {
          province: [],
          detail: ""
        },
        FormRules: {
          province: [
            {
              type: "array",
              required: true,
              message: "请选择省市地址",
              trigger: "blur"
            }
          ],
          detail: [
            { required: true, message: "请填写详细地址", trigger: "blur" }
          ]
        },
        options: []
      }
    };
  },
  created() {
    this.handleReadOrders();
    // console.log(cityData);
  },
  methods: {
    handleReadOrders() {
      // then方法获取的是成功时的数据
      // catch方法获取的是失败时的数据
      httpGet(order.GetOrders, {
        pagenum: this.pagination.pagenum,
        pagesize: this.pagination.pagesize
      })
        .then(response => {
          console.log(response);
          let { meta, data } = response;
          if (meta.status == 200) {
            this.pagination.pagenum = Number(data.pagenum);
            this.pagination.total = data.total;
            this.table.Data = data.goods;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 页码改变的回调，参数是改变后的页码及每页条数
    handlePageChange(page, pageSize) {
      this.pagination.pagenum = page;
      this.pagination.pagesize = pageSize;
      this.handleReadOrders();
    },
    onShowSizeChange(current, pageSize) {
      this.pagination.pagenum = current;
      this.pagination.pagesize = pageSize;
      // this.pagesize = pagesize
      this.handleReadOrders();
    },
    handleReadAddress() {
      this.address.visible = true;
      this.address.options = cityData;
    },
    // onChange(value){
    //   console.log(value);
    //   console.log(this.address.FormModel.province);
    // }
    handleUpdateAddress() {
      this.$refs.addressRef
        .validate()
        .then(() => {
          console.log("成功");
          this.address.visible = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleResetAddress() {
      this.$refs.addressRef.resetFields();
    }
  },
  components: {
    EnvironmentOutlined,
    EditOutlined
  }
};
</script>

<style>
.ant-green {
  background-color: #67c23a;
  color: #fff;
}

.ant-green:hover,
.ant-green:focus {
  background-color: #67c23a;
  color: #fff;
  border-color: transparent;
}
</style>
