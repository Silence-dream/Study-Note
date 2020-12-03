<template>
  <a-layout>
    <!-- 面包屑导航 -->
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item
        ><router-link to="/home" style="font-weight: bold; color: #000"
          >首页</router-link
        ></a-breadcrumb-item
      >
      <a-breadcrumb-item>权限管理</a-breadcrumb-item>
      <a-breadcrumb-item>权限列表</a-breadcrumb-item>
    </a-breadcrumb>

    <!-- 表格 -->
    <a-table
      :columns="rightsColumns"
      :data-source="rightsData"
      :row-key="(record) => record.id"
      bordered
      :pagination="false"
    >
      <template #index="{ index }">
        {{ index + 1 }}
      </template>

      <template #level="{ record }">
        <!-- {{ record }} -->

        <a-tag size="large" v-if="record.level == 0" color="blue">一级</a-tag>
        <a-tag v-else-if="record.level == 1" color="green">二级</a-tag>
        <a-tag v-else-if="record.level == 2" color="orange">三级</a-tag>
      </template>
    </a-table>
  </a-layout>
</template>

<script>
// 导入接口
import { rights } from "@/api";
// 导入请求方法
import { httpGet } from "@/utils/http";
export default {
  data() {
    return {
      rightsColumns: [
        {
          // 列的名称
          title: "#",
          key: "index",
          // customRender自定义渲染
          slots: { customRender: "index" },
        },
        {
          // 列的名称
          title: "权限名称",
          dataIndex: "authName",
        },
        {
          // 列的名称
          title: "路径",
          dataIndex: "path",
        },
        {
          // 列的名称
          title: "权限等级",
          key: "level",
          // customRender自定义渲染
          slots: { customRender: "level" },
        },
      ],
      rightsData: [],
    };
  },
  created() {
    this.handleReadRights();
  },
  methods: {
    handleReadRights() {
      httpGet(rights.GetListRights)
        .then((response) => {
          // console.log(response)
          let { data, meta } = response;

          if (meta.status == 200) {
            this.rightsData = data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.ant-tag {
  padding: 2px 14px;
  font-size: 14px;
}
</style>