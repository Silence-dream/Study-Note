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
          <a-switch v-model:checked="text.mg_state" :id="text.id" @change="handleUserState" />
        </template>

        <template #operation="{ record }">
          <!-- 编辑 -->
          <a-button type="primary" @click="handleReadUser(record.id)">
            <EditOutlined />
          </a-button>
          <!-- 删除 -->
          <a-button
            type="danger"
            style="margin: 0 10px"
            @click="handleDeleteUser(record.id)"
          >
            <DeleteOutlined
          /></a-button>
          <!-- 角色 -->
          <a-button
            type="default"
            style="background-color: #e6a23c; color: #fff"
            @click="handleReadRole(record)"
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
        v-model:pageSize="pagesize"
        @change="handlePageChange"
        show-quick-jumper
      />
    </div>
    <!-- 添加用户弹出框 -->
    <a-modal
      title="添加用户"
      cancelText="取消"
      okText="确定"
      v-model:visible="addVisible"
      :confirm-loading="confirmLoading"
      @ok="handleAddUser"
      @cancel="cancelAddUser"
    >
      <a-form :model="addFormModel" :rules="addFormRules" ref="addFormRef">
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
              <a-input
                type="text"
                v-model:value="addFormModel.username"
                autocomplete="off"
              />
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
              <a-input-password
                type="password"
                v-model:value="addFormModel.password"
              />
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
              <a-input type="text" v-model:value="addFormModel.email" />
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
              <a-input type="text" v-model:value="addFormModel.mobile" />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-modal>

    <!-- 编辑用户弹出框 -->
    <a-modal
      title="编辑用户"
      cancelText="取消"
      okText="确定"
      v-model:visible="editVisible"
      :confirm-loading="confirmLoading"
      @ok="handleEditUser"
      @cancel="cancelEditUser"
    >
      <a-form :model="editFormModel" :rules="editFormRules" ref="editFormRef">
        <a-row>
          <a-col :span="24">
            <!-- 用户名 -->
            <a-form-item
              label="用户名"
              name="username"
              :labelCol="{ span: 4 }"
              :wrapperCol="{ span: 20 }"
            >
              <a-input
                type="text"
                disabled
                v-model:value="editFormModel.username"
                autocomplete="off"
              />
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
              <a-input type="text" v-model:value="editFormModel.email" />
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
              <a-input type="text" v-model:value="editFormModel.mobile" />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-modal>
    <!-- 分配角色弹出框 -->
     <a-modal
      title="分配角色"
      v-model:visible="roleVisible"
      @ok="handleEditRole"
    >
      <p>
        当前的用户: {{userInfo.username}}
      </p>

       <p>
        当前的角色: {{userInfo.role_name}}
      </p>

      <p>
        分配新角色:  <a-select
      
        v-model:value="roleSelected"
        @change="handleSelectValue"
        placeholder="请选择"
        style="width: 120px"
    >
      <a-select-option v-for="item in rolesList" :key="item.id" :value="item.id">
        {{item.roleName}}
      </a-select-option>
    </a-select>
      </p>
    </a-modal>
  </a-layout>
</template>

<script>
// 引入请求方法 httpGet
import { httpGet, httpPost, httpDelete, httpPut } from "@/utils/http";

// 引入请求路径
import { user, role } from "@/api";

// 引入菜单小图标
import {
  EditOutlined,
  DeleteOutlined,
  SettingOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons-vue";

// 引入全局提示框
import { message, Modal } from "ant-design-vue";
// 创建虚拟dom
import { createVNode } from "vue";

export default {
  created() {
    // 调用获取用户数据的方法
    this.getUsers();
  },
  data() {
    // 自定义表单校验email
    let checkEmail = async (rule, value) => {
      if (value === "") {
        return Promise.reject("请输入您的邮箱");
      } else if (
        !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)
      ) {
        // 如果邮箱格式错误 那么提示
        return Promise.reject("您的邮箱格式错误!");
      } else {
        return Promise.resolve();
      }
    };
    // 自定义表单校验mobile
    let checkMobile = async (rule, value) => {
      if (value === "") {
        return Promise.reject("请输入您的手机号");
      } else if (!/^[1]([3-9])[0-9]{9}$/.test(value)) {
        // 如果邮箱格式错误 那么提示
        return Promise.reject("您的手机号格式错误!");
      } else {
        return Promise.resolve();
      }
    };
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
      pagesize: 2,
      total: 0,
      // 指定每页可以显示多少条
      pageSizeOptions: ["1", "2", "5", "10"],

      // 添加用户弹出框
      addVisible: false,
      confirmLoading: false,

      // 添加用户 模型对象
      addFormModel: {
        username: "",
        password: "",
        email: "",
        mobile: "",
      },

      // 添加用户 校验对象
      addFormRules: {
        // 给那个字段添加什么规则
        username: [
          // required 必须的
          // trigger 啥时候触发
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 4, max: 16, message: "长度在4-16个字符之间", trigger: "blur" },
        ],
        password: [
          // required 必须的
          // trigger 啥时候触发
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 16, message: "长度在6-16个字符之间", trigger: "blur" },
        ],
        email: [{ validator: checkEmail, trigger: "change" }],
        mobile: [{ validator: checkMobile, trigger: "change" }],
      },

      // 编辑用户弹出框
      editVisible: false,
      editFormModel: {},
      editFormRules: {
        email: [{ validator: checkEmail, trigger: "change" }],
        mobile: [{ validator: checkMobile, trigger: "change" }],
      },

      // 分配角色弹出框
      roleVisible: false,
      userInfo: {},
      rolesList: [],
      roleSelected: null
    };
  },
  methods: {
    // 获取用户数据
    getUsers() {
      httpGet(user.GetUsers, {
        pagenum: this.current,
        pagesize: this.pagesize,
      })
        .then((response) => {
          // console.log(response);
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
      console.log(current, pageSize);
      this.current = current;
      // this.pagesize = pagesize
      this.getUsers(current, pageSize);
    },

    // 页码改变的回调，参数是改变后的页码及每页条数
    handlePageChange(page, pageSize) {
      this.current = page;
      this.getUsers(page, pageSize);
    },

    // 显示模态框
    addUserModal() {
      this.addVisible = true;
    },

    // 添加用户
    handleAddUser() {
      // 表单校验拦截
      this.$refs.addFormRef
        .validate()
        .then(() => {
          // console.log(1111);
          // 1.获取请求参数
          let params = {
            username: this.addFormModel.username,
            password: this.addFormModel.password,
            email: this.addFormModel.email,
            mobile: this.addFormModel.mobile,
          };
          // 2.获取请求地址
          // 3.使用post请求发起ajax
          httpPost(user.AddUser, params)
            .then((response) => {
              console.log(response);
              let { data, meta } = response;

              if (meta.status == 201) {
                console.log(data);
                // 让模态框消失
                this.visible = false;
                // 清空表单中的输入框
                this.$refs.addFormRef.resetFields();
                message.success(meta.msg);
                this.getUsers();
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((error) => {
          console.log("error", error);
        });
    },

    // 取消添加用户
    cancelAddUser() {
      this.$refs.addFormRef.resetFields();
    },

    // 删除用户
    handleDeleteUser(userId) {
      let _this = this;
      // 动态添加 删除用户提示模态框
      Modal.confirm({
        title: "提示",
        icon: createVNode(ExclamationCircleOutlined),
        content: "此操作将永久删除该用户, 是否继续?",
        okText: "确认",
        cancelText: "取消",
        // 当点击确认按钮的回调
        onOk() {
          // 使用Delete方法删除用户
          httpDelete(user.DeleteUser + `/${userId}`)
            .then((response) => {
              // console.log(response);

              let { meta } = response;
              // 删除失败 提示用户
              if (meta.status == 400) {
                return message.error(meta.msg);
              }
              // 删除成功 提示用户 并刷新页面
              if (meta.status == 200) {
                _this.getUsers();
                return message.success(meta.msg);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        },
        onCancel() {
          message.warning("已取消删除！！");
        },
      });
    },

    // 回显用户信息
    handleReadUser(userId) {
      // 让编辑用户弹出框显示
      this.editVisible = true;
      // 发起ajax请求
      console.log(userId);
      httpGet(user.GetUser + `/${userId}`)
        .then((response) => {
          console.log(response);
          let { data, meta } = response;

          if (meta.status == 200) {
            this.editFormModel = data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 更新用户信息
    handleEditUser() {
      this.$refs.editFormRef
        .validate()
        .then(() => {
          // 发起ajax请求 更新数据
          httpPut(
            // this.editFormModel在回显的时候 里面就有数据 
            // 字段是双向绑定的，因此输入框中数据发生了改变 这里也会改变
            // 因此可以直接发送
            user.UpdateUser + `/${this.editFormModel.id}`,
            this.editFormModel
          )
            .then((response) => {
              // console.log(response);
              // 
              let { meta } = response;
              if (meta.status == 200) {
                // 模态框消失
                this.editVisible = false;
                // 提示用户信息
                message.success(meta.msg);
                // 刷新表格数据
                this.getUsers();
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 取消用户更新
    cancelEditUser() {},

    // 回显角色信息
    handleReadRole(user){
      // 让分配角色弹出框显示
      this.roleVisible = true;
      this.userInfo = user;
      // console.log(user);
      httpGet(role.GetRoles).then((response)=>{
        // console.log(response);
        let {data, meta} = response;

        if (meta.status == 200){
          this.rolesList = data;
        } 

      }).catch((err)=>{console.log(err)})
    },
    // 获取下拉菜单的值
    handleSelectValue(value){
      console.log(value);
    },

    // 修改用户角色
    handleEditRole(){
      // 获取选择到的角色id
      let rid = this.roleSelected 
      // 如果用户没有选择 给用户一个提示 不要发请求
      if (rid == null) {
        message.error("请您选择一个角色！！");
        return;
      }
      // 如果用户选择了 那么就发请求 修改角色
      httpPut(`users/${this.userInfo.id}/role`, {rid: this.roleSelected}).then((response)=>{
        // console.log(response)
        let {meta} = response;

        if (meta.status == 400) {
          message.error(meta.msg);
        }

        if (meta.status == 200) {
          // 提示用户成功
          message.success(meta.msg);
          // 重新渲染表格
          this.getUsers();
          // 重置选项
          this.roleSelected = null;
          // 模态框消失
          this.roleVisible = false;
        }
      }).catch((err)=>{
        console.log(err);
      })
    },

    // 更改用户状态
    handleUserState(checked,event){
      // console.log(checked)
      // console.log(event.target.id);

      httpPut(`users/${event.target.id}/state/${checked}`).then((response)=>{
        console.log(response);
      }).catch((err)=>{console.log(err)})
    }
  },
  components: {
    EditOutlined,
    DeleteOutlined,
    SettingOutlined,
  },
};
</script>

<style></style>
