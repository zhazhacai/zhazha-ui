<template>
  <li class="menu-item"
      :class="{
        'hover-style': index === listActiveHover,
        'opened-style': isOpen
      }"
      @click="handleClick"
      @mouseenter="handleMouseEnter"
  >
    <slot name="title"></slot>
    <slot></slot>
  </li>
</template>

<script>
  import menuMixin from './menu-mixin';
  import emitter from '../emitter';

  export default {
    name: "unex-aside-menu-item",
    props: ['index', 'item', 'siblings','listActiveHover'],
    mixins: [emitter, menuMixin],
    inject: ['rootMenu'],
    methods: {
      handleClick() {
        this.dispatch('unex-aside-menu', 'item-click', this);
      },
      handleMouseEnter() {
        this.dispatch('unex-aside-menu', 'item-hover', this.index); // 通知menu改变iconhover
        this.$emit('hoverItem', this.index); // 通知list改变hover
        if (this.rootMenu.isCollapsed) {
          this.$emit('showMiniChildren', this.item, this.index);
        }
      }
    }
  }
</script>

<style scoped>

</style>
