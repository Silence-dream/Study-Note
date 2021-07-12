<template>
  <a-layout>
    <!-- 面包屑导航 -->
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item
        ><router-link to="/home" style="font-weight: bold; color: #000"
          >首页</router-link
        ></a-breadcrumb-item
      >
      <a-breadcrumb-item>数据统计</a-breadcrumb-item>
      <a-breadcrumb-item>数据报表</a-breadcrumb-item>
    </a-breadcrumb>

    <a-card>
      <div id="main" style="width: 750px; height: 500px"></div>
    </a-card>
  </a-layout>
</template>

<script>
import Echarts from "echarts";

export default {
  data() {
    return {
      option: {
        title: {
          text: "用户来源"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["华东", "华南", "华北", "西部", "其他"]
        },
        // 是否可以保存为图片
        // toolbox: {
        //   feature: {
        //     saveAsImage: {},
        //   },
        // },
        // 栅格布局
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        // x轴
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "2017-12-27",
              "2017-12-28",
              "2017-12-29",
              "2017-12-30",
              "2017-12-31",
              "2018-1-1"
            ]
          }
        ],
        // y轴
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "华东",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "华南",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "华北",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "西部",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "其他",
            type: "line",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
    };
  },
  mounted() {
    // 初始化echarts
    var myChart = Echarts.init(document.getElementById("main"));

    // 通过配置 渲染折线图
    myChart.setOption(this.option);
  }
};
</script>
