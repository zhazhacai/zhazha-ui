<template>
  <li class="jin" :class="{
    'icon-item': true,
    'hover-style': hoverIndex === index,
    'opened-style': isOpen
  }"
      @click="handleClick"
      @mouseenter="handleMouseEnter">
      <i :class="item.icon"></i>
  </li>
</template>

<script>
  import menuMixin from './menu-mixin';
  import emitter from '../emitter';

  export default {
    name: 'unex-aside-icon-item',
    props: ['hoverIndex', 'index', 'item'],
    mixins: [emitter, menuMixin],
    inject: ['rootMenu'],
    methods: {
      handleMouseEnter() {
        this.$emit('hoverItem', this.index); // 通知list改变hover
        if (this.rootMenu.isCollapsed) {
          this.$emit('showMiniChildrenFromIcon', this.item, this.index);
        }
      },
      handleClick(){
        this.dispatch('unex-aside-menu', 'icon-item-click', this);
      }
    }
  }
</script>

<style scoped>

</style>
