<template>
  <div class="unex-menu-tree-component" style="height:100%" :class="{'menu-tree-component-collapsed': isCollapsed}" v-show="$route.path !== '/login'">
    <div class="tree-head">
      <div class="title clear-fl" :class="{'title-line': visited.length > 0}">
        <div class="logo"><img ref="logo" :src="logoPath"/></div>
        <h1 class="titleText" ref="titleText">{{title}}</h1>
      </div>
      <div class="parent" v-if="visited.length > 0 && !isCollapsed" @click="previous">
        <span class="icon"><i class="el-icon-arrow-down"></i></span>
        <div class="text">{{parentName}}</div>
      </div>
    </div>
    <div class="list-box"
         @mouseleave="handleMouseLeave($event)"
         :style="{'overflow-y': isCollapsed ? 'visible' : 'auto'}">
      <div class="icon-box"
           v-show="isCollapsed || visited.length===0"
      >
        <ul v-show="isCollapsed ? true: visited.length === 0">
          <icon-item v-for="(item, index) in data"
                     v-if="item.icon !== 'create-Ta'"
                     :key="'icon-item-' + index"
                     :index="index"
                     :hoverIndex="hoverIndex"
                     @hoverItem="handleHoverItem"
                     @showMiniChildrenFromIcon="handleShowMiniChildrenFromIcon"
                     :item="item">
          </icon-item>
        </ul>
      </div>
      <div v-if="!isCollapsed" :class="['menu-list', {'visited':visited.length}]">
        <unex-aside-menu-list
          :data="listData"
          :hoverIndex="hoverIndex"
          @hoverItem="handleHoverItem"
          :className="[{'visited':visited.length}]"></unex-aside-menu-list>
      </div>
      <div class="menu-list-mini-component"
           v-if="isCollapsed && isShowMini && visited.length>0 && childrenData.length>0"
           :style="{top: miniListTop - 8 + 'px',left: '56px',transform:'translateY(' + offsetHeight + ')'}"
           ref="menuMiniList"
           @mouseleave="leaveMiniMenu"
           @mouseenter="enterMiniMenu"
      >
        <ul class="list">
          <unex-aside-menu-mini-item
            v-for="(item, index) in childrenData"
            :key="'menu-li-' + item.id"
            :item="item"
            :index="index"
            :siblings="childrenData"
            :miniHoverIndex="listActiveHover"
            @miniHoverItem="handleMiniHoverItem"
          ></unex-aside-menu-mini-item>
        </ul>
      </div>
    </div>
    <menu-history :data="data"></menu-history>
  </div>
</template>

<script>
  import iconItem from "./icon-item.vue";
  import menuList from "./menu-list.vue";
  import menuMiniItem from "./menu-mini-item.vue";
  import menuHistory from "./menu-history.vue";
  import menuMixin from './menu-mixin';

require('../../js/flip')
  export default {
    name: "unex-aside-menu",
    props: {
      data: {
        required: true,
        type: Array
      }, isCollapsed: {
        required: true,
        type: Boolean
      }, title: {
        type: String
      }, logoPath: {
        type: String
      }
    },
    components: {
      "icon-item": iconItem,
      "unex-aside-menu-list": menuList,
      "unex-aside-menu-mini-item": menuMiniItem,
      "menu-history": menuHistory,
    },
    data() {
      return {
        logo: {},
        titleText: {},
        visited: [], // 存储访问（click/hover）的非叶子节点
        opened: [],
        dataCopy: [], // list data
        childrenData: [], // mini list data
        hoverIndex: null,
        listActiveHover: null,
        offsetHeight: 0,
        isShowMini: false,
        ignorePaths: ['/admin/welcome', '/admin/storeselect', '/admin/accountinfo', '/account/tenantinfobasic', '/frame/setting']
      };
    },
    mixins: [menuMixin],
    provide() {
      return {
        rootMenu: this
      };
    },
    componentName: 'unex-aside-menu',
    mounted() {
      this.initData();
      this.initFlip();
      this.$on('item-click', this.handleItemClick);
      this.$on('icon-item-click', this.handleItemClick);
      this.$on('item-hover', this.handleItemHover);
      const openedMenus = JSON.parse(window.localStorage.getItem('openedMenus'));
      if (Array.isArray(openedMenus)) {
        this.opened = openedMenus;
      }
    },
    computed: {
      listData: {
        get() {
          if (this.dataCopy.length) {
            return this.dataCopy;
          } else {
            return this.dataCopy = this.data;
          }
        },
        set(value) {
          this.dataCopy = value;
        }
      },
      parentName() {
        const copyEd = this.visited.slice();
        const lastOne = copyEd.pop();
        return lastOne && lastOne.item.label;
      },
      miniListTop() {
        return Math.round(this.hoverIndex * 48);
      }
    },
    methods: {
      initData() {
        this.childrenData = this.data;
        this.listData = this.data;
        this.visited = [];
      },
      initFlip() {
        this.logo = new FLIP({
          element: this.$refs.logo,
          duration: 180
        });
        this.titleText = new FLIP({
          element: this.$refs.titleText,
          duration: 210
        });
      },
      flipAnimate(arr, revert = false) {
        arr.forEach(item => {
          revert === true ? this.this[item].last() : this[item].first();
          this.$nextTick(() => {
            revert === true ? this.this[item].first() : this[item].last();
            this[item].invert();
            this[item].play();
          });
        });
      },
      handleShowMiniChildrenFromIcon(item, index) {
        this.setMiniChildren(item, index);
        this.isShowMini = true;
      },
      handleClearYourChildren() { // 如子级所愿，销毁它
        this.childrenData = [];
        this.hoverIndex = null;
      },
      setMiniChildren(item, index) {
        this.visited = []; // 简单粗暴，清空visited
        const siblings = this.data;
        this.childrenData = item.children;
        if (item.children && item.children.length > 0) {
          this.visited.push({
            id: item.id,
            index: index, // 当前index
            siblings, // 方便点击返回时展示列表
            item,
          });
        }
      },
      updateChildren(childrenData) {
        this.listData = childrenData;
      },
      previous() {
        const lastOne = this.visited.pop();
        this.listData = lastOne && lastOne.siblings || this.data;
      },
      handleItemHover(index) { // hoverIndex与子菜单保持同步
        if (!this.isCollapsed && this.visited.length === 0) {
          this.hoverIndex = index;
        }
      },
      handleMiniHoverItem(index) {
        this.listActiveHover = index;
      },
      handleItemClick({ index, item, indexPath }) {
        // this.$emit('select', index, indexPath, item);
        this.showChildren(index, item, indexPath);
      },
      handleHoverItem(index) {
        this.hoverIndex = index;
      },
      handleMouseLeave($event) {
        const { relatedTarget } = $event;
        if (!relatedTarget) return;
        const { classList } = relatedTarget;
        for (let item of classList) {
          if (~['unex-menu-tree-component', 'title'].indexOf(item)) { // 从菜单上、下方向移出时清空hoverIndex
            this.isShowMini = false;
            this.hoverIndex = null;
            break;
          }
        }
      },
      enterMiniMenu() {
        this.$nextTick(() => {
          let el = this.$refs.menuMiniList;
          let { bottom } = el.getBoundingClientRect();
          let windowH = document.body.clientHeight;
          // miniList过长时向上移动尽量让现实完全
          if (bottom > windowH) {
            this.offsetHeight = `${windowH - bottom - 15}px`;
          }
        });
      },
      leaveMiniMenu() {
        this.isShowMini = false;
        this.hoverIndex = null;
        this.offsetHeight = 0;
      },
      openMenu(indexPath) {
        this.opened = indexPath;
        this.$emit('open', this.opened);
        // 将当前visited改成opened对应的
        this.visited = [];
        for (let i = 0; i < this.opened.length - 1; i++) {
          this.visited.push(this.opened[i]);
        }

        window.localStorage.setItem('openedMenus', JSON.stringify(indexPath));
      },
      showChildren(index, item, indexPath) {
        if (item.children && item.children.length > 0) {
          this.visited.push({
            id: item.id,
            index: index,
            siblings: this.listData,
            item,
          });
          this.listData = item.children;
        } else {
          this.openMenu(indexPath);
          if (/^https?:\/\//.test(item.index)) {
            window.location.href = item.index;
          } else {
            console.log(item.index)
            this.$router.push(item.index);
          }
        }
      },
    },
    watch: {
      isCollapsed(newVal) {
        this.flipAnimate(['logo']);
        if (newVal) {
          this.isShowMini = false;
        } else {
          const lastVisited = this.visited[this.visited.length - 1];
          this.listData = lastVisited ? lastVisited.item.children : this.data;
        }
      },
      visited(newVal, oldVal) {
        if (this.isCollapsed) return false;

        this.flipAnimate(['logo', 'titleText']);
      },
      $route(to) {
        const { path } = to;
        for (let ignorePath of this.ignorePaths) {
          if (ignorePath === path.toLowerCase()) {
            this.opened = [];
            break;
          }
        }
      },
      data(){ // 展开态时菜单数据改动(比如：unex-admin菜单排序)后重置菜单，否则listData未更新
        if(!this.isCollapsed){
          this.initData();
        }
      }
    }
  };
</script>
