<template>
  <a-layout>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item style="font-weight: bold; color: #000"
        >首页</a-breadcrumb-item
      >
      <a-breadcrumb-item><a href="">商品管理</a></a-breadcrumb-item>
      <a-breadcrumb-item><a href="">商品分类</a></a-breadcrumb-item>
    </a-breadcrumb>
    <!--  卡片组件  -->
    <a-card>
      <!-- 添加分类-->
      <a-row style="margin-bottom: 24px">
        <a-col :span="24">
          <a-button type="primary"> 添加分类 </a-button>
        </a-col>
      </a-row>
      <!-- 表格 -->
      <a-table
        :columns="table.columns"
        :data-source="table.data"
        bordered
        :row-key="record => record.cat_id"
        :pagination="false"
        :expandIconColumnIndex="1"
      >
        <!-- # index -->
        <template #index="{record,index}">
          <span v-if="record.cat_level == 0">{{ index + 1 }}</span>
        </template>
        <!-- 是否有效 -->
        <template #cat_deleted="{record}">
          <!-- 有效显示的图标 -->
          <CheckCircleTwoTone
            v-if="!record.cat_deleted"
            twoToneColor="#52c41a"
          />
          <!-- 无效显示的图标 -->
          <CheckCircleTwoTone
            v-if="record.cat_deleted"
            twoToneColor="#dc4b27"
          />
        </template>
        <!-- 排序等级 -->
        <template #cat_pid="{ record  }">
          <a-tag color="blue" v-if="record.cat_level === 0">一级</a-tag>
          <a-tag color="green" v-if="record.cat_level === 1">二级</a-tag>
          <a-tag color="orange" v-if="record.cat_level === 2">三级</a-tag>
        </template>
        <!-- 操作 -->
        <template #action>
          <a-button type="primary" shape="round" style="margin: 0 20px">
            <template #icon><EditOutlined /></template>
            编辑
          </a-button>
          <a-button type="danger" shape="round">
            删除
            <template #icon><DeleteOutlined /></template>
          </a-button>
        </template>
      </a-table>
      <!-- 分页器 -->
      <a-pagination
        :total="pagination.total"
        show-size-changer
        show-quick-jumper
        @change="paginationChange"
        @showSizeChange="showSizeChange"
        :defaultPageSize="5"
        :pageSizeOptions="pagination.pageSizeOptions"
      >
        <template #buildOptionText="props">
          <span v-if="props.value !== '50'">{{ props.value }}条/页</span>
          <span v-else>全部</span>
        </template>
      </a-pagination>
    </a-card>
  </a-layout>
</template>

<script>
// 引入请求路径
import { goods } from "@/api";
// 引入请求方法
import { httpGet } from "@/utils/http.js";
// 引入ant图标
import {
  EditOutlined,
  DeleteOutlined,
  CheckCircleTwoTone
} from "@ant-design/icons-vue";
export default {
  name: "Categories",
  data() {
    return {
      table: {
        columns: [
          {
            title: "#",
            dataIndex: "index",
            key: "index",
            slots: { customRender: "index" }
          },
          { title: "分类名称", dataIndex: "cat_name", key: "cat_name" },
          {
            title: "是否有效",
            dataIndex: "cat_deleted",
            key: "cat_deleted",
            slots: { customRender: "cat_deleted" }
          },
          {
            title: "排序",
            dataIndex: "cat_pid",
            key: "cat_pid",
            slots: { customRender: "cat_pid" }
          },
          {
            title: "操作",
            dataIndex: "action",
            key: "action",
            slots: { customRender: "action" },
            width: 400
          }
        ],
        data: []
      },
      pagination: {
        current: 0,
        total: 0,
        // 页面载入的默认显示页码和大小
        pageSize: 5,
        pageNum: 1,
        pageSizeOptions: ["5", "10", "30"]
      }
    };
  },
  created() {
    this.getTableData();
  },
  methods: {
    /**
     * 获取商品分类数据
     * @returns {Promise<void>}
     */
    async getTableData() {
      // 表格数据
      let tableData = await httpGet(goods.GetCategories, {
        type: [1, 2, 3],
        pagenum: this.pagination.pageNum,
        pagesize: this.pagination.pageSize
      });

      this.table.data = tableData.data.result;
      this.pagination.total = tableData.data.total;
      // console.log(this.table.data);
    },
    /**
     *  页码变动的回调
     * @param page
     * @param pageSize
     */
    paginationChange(page, pageSize) {
      this.pagination.pageNum = page;
      this.pagination.pageSize = pageSize;
      this.getTableData();
    },
    /**
     * 点击选择显示多少页的回调
     * @param current
     * @param size
     */
    showSizeChange(current, size) {
      console.log(current, size);
      this.pagination.pageSize = size;
      this.getTableData();
    }
  },
  components: {
    // 导入图标组件
    EditOutlined,
    DeleteOutlined,
    CheckCircleTwoTone
  }
};
</script>

<style></style>
