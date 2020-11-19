<template>
  <a-layout>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item
        ><router-link to="/home" style="font-weight: bold; color: #000"
          >首页</router-link
        ></a-breadcrumb-item
      >
      <a-breadcrumb-item>用户管理</a-breadcrumb-item>
      <a-breadcrumb-item>用户列表</a-breadcrumb-item>
    </a-breadcrumb>
    <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
      <!-- 添加用户 -->
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
                <a-button type="primary" size="large" @click="addUserModal">
                  添加用户
                </a-button>
                <a-modal
                  title="添加用户"
                  cancelText="取消"
                  okText="确定"
                  v-model:visible="visible"
                  :confirm-loading="confirmLoading"
                >
                  <a-form>
                    <a-row>
                      <a-col :span="24">
                        <!-- 用户名 -->
                        <a-form-item
                          required
                          has-feedback
                          label="用户名"
                          name="username"
                          :labelCol="{ span: 4 }"
                          :wrapperCol="{ span: 20 }"
                        >
                          <a-input type="text" />
                        </a-form-item>
                        <!-- 密码 -->
                        <a-form-item
                          required
                          has-feedback
                          label="密码"
                          name="password"
                          :labelCol="{ span: 4 }"
                          :wrapperCol="{ span: 20 }"
                        >
                          <a-input-password type="password" />
                        </a-form-item>

                        <!-- 邮箱 -->
                        <a-form-item
                          required
                          has-feedback
                          label="邮箱"
                          name="email"
                          :labelCol="{ span: 4 }"
                          :wrapperCol="{ span: 20 }"
                        >
                          <a-input type="text" />
                        </a-form-item>

                        <!-- 手机号 -->
                        <a-form-item
                          required
                          has-feedback
                          label="手机号"
                          name="mobile"
                          :labelCol="{ span: 4 }"
                          :wrapperCol="{ span: 20 }"
                        >
                          <a-input type="text" />
                        </a-form-item>
                      </a-col>
                    </a-row>
                  </a-form>
                </a-modal>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </a-form>
      <!-- 表格 -->
      <a-table
        :row-key="(record) => record.id"
        :columns="tableColumns"
        :data-source="tableData"
        :pagination="false"
        bordered
      >
        <template #mg_state="{ text }">
          <a-switch :checked="text.mg_state" />
        </template>

        <template #operation>
          <!-- 编辑 -->
          <a-button type="primary">
            <EditOutlined />
          </a-button>
          <!-- 删除 -->
          <a-button type="danger" style="margin: 0 10px">
            <DeleteOutlined
          /></a-button>
          <!-- 权限 -->
          <a-button
            type="default"
            style="background-color: #e6a23c; color: #fff"
          >
            <SettingOutlined
          /></a-button>
        </template>
      </a-table>
      <!-- 分页 -->
      <a-pagination
        style="margin-top: 25px"
        v-model:current="current"
        :total="total"
        :show-total="(total) => `共 ${total} 条`"
        show-size-changer
        @showSizeChange="onShowSizeChange"
        :page-size-options="pageSizeOptions"
        :defaultPageSize="2"
        @change="handlePageChange"
        show-quick-jumper
      />
    </div>
  </a-layout>
</template>

<script>
// 引入请求方法 httpGet
import { httpGet } from "@/utils/http";

// 引入请求路径
import { user } from "@/api";
// 引入小图标
// 引入菜单小图标
import {
  EditOutlined,
  DeleteOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";

export default {
  created() {
    // 调用获取用户数据的方法
    this.getUsers();
  },
  data() {
    return {
      // 表格列配置
      tableColumns: [
        { title: "#", dataIndex: "index", key: "index" },
        { title: "姓名", dataIndex: "username", key: "username" },
        { title: "邮箱", dataIndex: "email", key: "email" },
        { title: "电话", dataIndex: "mobile", key: "mobile" },
        { title: "角色", dataIndex: "role_name", key: "role_name" },
        { title: "状态", key: "mg_state", slots: { customRender: "mg_state" } },
        {
          title: "操作",
          key: "operation",
          slots: { customRender: "operation" },
        },
      ],
      // 表格数据
      tableData: [],
      // 分页
      current: 1,
      total: 0,
      // 指定每页可以显示多少条
      pageSizeOptions: ["1", "2", "5", "10"],

      // 添加用户弹出框
      visible: false,
      confirmLoading: false,
    };
  },
  methods: {
    // 获取用户数据
    getUsers(pagenum = 1, pagesize = 2) {
      httpGet(user.GetUsers, {
        pagenum: pagenum,
        pagesize: pagesize,
      })
        .then((response) => {
          console.log(response);
          let { meta, data } = response;
          // 如果后台返回的状态码为200,则代表请求成
          if (meta.status == 200) {
            // 设置表格数据
            this.tableData = data.users;
            // 设置当前页码
            this.current = data.pagenum;
            // 设置数据总数
            this.total = data.total;
            // 给每条数据添加序号(index)属性
            this.tableData.forEach((ele, index) => {
              ele.index = index + 1;
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 根据每页显示多少条数据不同 重新渲染表格
    onShowSizeChange(current, pageSize) {
      // console.log(current, pageSize);
      this.getUsers(current, pageSize);
    },
    // 页码改变的回调，参数是改变后的页码及每页条数
    handlePageChange(page, pageSize) {
      this.getUsers(page, pageSize);
    },
    // 显示模态框
    addUserModal() {
      this.visible = true;
    },
  },
  components: {
    EditOutlined,
    DeleteOutlined,
    SettingOutlined,
  },
};
</script>

<style></style>
