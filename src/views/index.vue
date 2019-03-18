<template>
  <div style="height:100%">
    <unex-container :max="true" class="unex-page-container">
      <section class="unex-menu-component-box">
        <unex-aside-menu
          :data="treeData"
          :isCollapsed="isPickUp"
          :title="'asideTitle'"
          :logoPath="logoPath"
        ></unex-aside-menu>
      </section>

      <unex-container :vertical="true">
        <unex-header>
          <top-bar v-on:pick-up-menu="pickUpMenu"></top-bar>
        </unex-header>
        <unex-main>
          <router-view/>
        </unex-main>
      </unex-container>
    </unex-container>
  </div>
</template>

<script>
import UnexAsideMenu from "../extensions/menu/src/menu";
import TopBar from "../components/top-bar";
export default {
  components: {
    UnexAsideMenu,
    TopBar
  },
  data() {
    return {
      isCollapsed: false,
      treeData: [],
      isPickUp: false
    };
  },
  mounted() {
    // this.treeData = JSON.parse(localStorage.getItem('treeData'));
    this.treeData = [
      {
        icon: "el-icon-question",
        id: 105,
        label: "Knowledge",
        isSelected: false,
        children: [
          {
            id: 106,
            index: "/views/pages/tool",
            label: "开发工具",
            isSelected: false,
            children: []
          },
          {
            id: 1176,
            label: "乱七八糟",
            isSelected: false,
            children: [
              {
                id: 147,
                index: "/views/pages/excerpt",
                label: "摘自《云栖社区》",
                isSelected: false,
                children: []
              },
              {
                id: 108,
                index: "/views/pages/front_end_map",
                label: "前端知识图谱",
                isSelected: false,
                children: []
              },
              {
                id: 109,
                index: "/views/pages/vue_related",
                label: "Vue 相关",
                isSelected: false,
                children: []
              }
            ]
          },
        ]
      },
      {
        icon: "el-icon-document",
        id: 9,
        label: "组件",
        isSelected: false,
        children: [
          {
            id: 10,
            index: "/compontent/generic_components",
            label: "通用组件",
            isSelected: false,
            children: []
          },
          {
            id: 11,
            index: "/order/order_cancel",
            label: "退换货管理",
            isSelected: false,
            children: []
          },
          {
            id: 138,
            index: "/order/order_refund",
            label: "退款管理",
            isSelected: false,
            children: []
          },
          {
            id: 139,
            index: "/order/eval_management",
            label: "评价管理",
            isSelected: false,
            children: []
          },
          {
            id: 140,
            index: "/order/eval_dimen_management",
            label: "评价维度管理",
            isSelected: false,
            children: []
          },
          {
            id: 141,
            index: "/order/label_management",
            label: "评价标签管理",
            isSelected: false,
            children: []
          },
          {
            id: 142,
            index: "/order/rule_set",
            label: "订单规则设置",
            isSelected: false,
            children: []
          },
          {
            id: 912,
            index: "/order/preSaleGoods",
            label: "预售订单管理",
            isSelected: false,
            children: []
          }
        ]
      },
      {
        icon: "el-icon-service",
        id: 86,
        label: "营销",
        isSelected: false,
        children: [
          {
            id: 87,
            index: "/promotion/product",
            label: "促销活动",
            isSelected: false,
            children: []
          },
          {
            icon: "",
            id: 93,
            index: "/promotion/coupon",
            label: "券码活动",
            isSelected: false,
            children: []
          },
          {
            id: 94,
            index: "/promotion/saletest",
            label: "模拟测试工具",
            isSelected: false,
            children: []
          },
          {
            id: 983,
            index: "/mall/honghuweb-sit.baozun.work/home",
            label: "营销工具",
            isSelected: false,
            children: []
          }
        ]
      },
      {
        icon: "el-icon-star-on",
        id: 12,
        label: "会员",
        isSelected: false,
        children: [
          {
            id: 27,
            index: "/member/member",
            label: "会员管理",
            isSelected: false,
            children: []
          },
          {
            id: 262,
            index: "/member/member_care",
            label: "会员关怀",
            isSelected: false,
            children: []
          },
          {
            id: 28,
            index: "/member/grade",
            label: "等级策略",
            isSelected: false,
            children: []
          },
          {
            id: 282,
            index: "/member/member_integral_strategy",
            label: "会员积分策略",
            isSelected: false,
            children: []
          },
          {
            id: 632,
            index: "/member/label_management",
            label: "标签管理",
            isSelected: false,
            children: []
          },
          {
            id: 633,
            index: "/member/grant_coupon",
            label: "发放券码",
            isSelected: false,
            children: []
          },
          {
            icon: "",
            id: 1571,
            index: "/member/received_notice",
            label: "到货通知",
            isSelected: false,
            children: []
          }
        ]
      },
      {
        icon: "el-icon-share",
        id: 1264,
        label: "推荐",
        isSelected: false,
        children: [
          {
            icon: "",
            id: 1265,
            index: "/mall/advisor-web-sit.baozun.work",
            label: "场景管理",
            isSelected: false,
            children: []
          }
        ]
      },
      {
        icon: "el-icon-setting",
        id: 268,
        label: "设置",
        isSelected: false,
        children: [
          {
            icon: "",
            id: 1604,
            label: "商户设置",
            isSelected: false,
            children: [
              {
                icon: "tenant-store-info",
                id: 654,
                index: "/cms/storeManagement",
                label: "店铺信息",
                isSelected: false,
                children: []
              },
              {
                icon: "create-Ta",
                id: 742,
                index: "/basic/storeManagement",
                label: "门店管理",
                isSelected: false,
                children: []
              },
              {
                icon: "domain",
                id: 655,
                index: "/account/domainSetting",
                label: "域名配置",
                isSelected: false,
                children: []
              },
              {
                icon: "shopping-cart",
                id: 658,
                index: "/basic/freight",
                label: "店铺购物设置",
                isSelected: false,
                children: []
              },
              {
                icon: "free-shipping",
                id: 1580,
                index: "/basic/distribution",
                label: "配送方式",
                isSelected: false,
                children: []
              },
              {
                icon: "coupons-style1",
                id: 1581,
                index: "/basic/freightTemplate",
                label: "运费模板",
                isSelected: false,
                children: []
              },
              {
                icon: "seo",
                id: 289,
                index: "/cms/seo",
                label: "SEO优化",
                isSelected: false,
                children: []
              },
              {
                icon: "pim-authority",
                id: 7,
                index: "/admin/clerkManage",
                label: "权限管理",
                isSelected: false,
                children: []
              }
            ]
          },
          {
            icon: "",
            id: 1549,
            label: "短信邮件",
            isSelected: false,
            children: [
              {
                icon: "message-service",
                id: 1593,
                index: "/message/server",
                label: "短信服务设置",
                isSelected: false,
                children: []
              },
              {
                icon: "message-history",
                id: 1594,
                index: "/message/record",
                label: "短信发送记录",
                isSelected: false,
                children: []
              },
              {
                icon: "message",
                id: 747,
                index: "/message/email",
                label: "邮件设置",
                isSelected: false,
                children: []
              }
            ]
          },
          {
            icon: "",
            id: 1605,
            label: "系统功能",
            isSelected: false,
            children: [
              {
                icon: "carousel1",
                id: 1578,
                index: "/admin/materialLibrary",
                label: "素材库",
                isSelected: false,
                children: []
              },
              {
                icon: "operation-log",
                id: 792,
                index: "/admin/operationLog",
                label: "操作日志",
                isSelected: false,
                children: []
              }
            ]
          }
        ]
      }
    ];
    console.log(this.treeData);
  },
  methods: {
    pickUpMenu(bool) {
      this.isPickUp = bool;
    }
  },
  computed: {
    logoPath() {
      return require("@/extensions/images/sp-logo-blue.png");
    }
  }
};
</script>

<style lang="scss">
h1 {
  color: $--color-primary;
}
</style>
