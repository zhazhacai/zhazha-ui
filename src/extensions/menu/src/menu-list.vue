<template>
  <div class="menu-list-component" :class="className"
       ref="menuList"
       @mouseleave="handleMouseLeave($event)">
    <ul class="list">
      <menu-item v-for="(item, index) in data"
                 v-if="item.icon !== 'create-Ta'"
                 :key="'menu-item-' + item.id"
                 :index="index"
                 :item="item"
                 :siblings="data"
                 @hoverItem="handleHoverItem"
                 :listActiveHover="listActiveHover"
      >
        <div class="text" slot="title">{{item.label}}</div>
        <div class="icon" v-if="item.children && item.children.length>0">
          <i class="el-icon-arrow-down"></i>
        </div>
      </menu-item>
    </ul>
  </div>
</template>

<script>
  import menuItem from './menu-item.vue';
  import menuMixin from './menu-mixin';

  export default {
    name: 'unex-aside-menu-list',
    props: {
      data: {
        required: true,
        type: Array
      }, hoverIndex: {
        type: [Number, String]
      }, className: {
        type: [String, Array]
      },
    },
    components: {
      'menu-item': menuItem
    },
    data() {
      return {
        listActiveHover: null // 当前list的激活状态的hover
      };
    },
    componentName: 'unex-aside-menu-list',
    mixins: [menuMixin],
    inject: ['rootMenu'],
    methods: {
      handleHoverItem(index) { // 根据子级改变listActiveHover
        this.listActiveHover = index;
      },
      handleMouseLeave($event){
        const { relatedTarget } = $event;

        if (!relatedTarget) return;
        const {className} = relatedTarget;

        if(!~className.indexOf('icon-item')){ // 移出并且并未停留在icon时清空hoverIndex
          this.listActiveHover = null;
          this.$emit('hoverItem', null);
        }
      },
    },
    watch: {
      hoverIndex(newVal) { // 根据父级改变listActiveHover
        this.listActiveHover = newVal;
      },
    }
  };
</script>
