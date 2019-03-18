<template>
  <li
    :class="['history-item',{'hover-style': hoverIndex === index, 'opened-style': isOpen}]"
    :key="'history-item-' + index"
    @mouseenter="handleMouseEnter(index)">
    <slot></slot>
  </li>
</template>
<script>
  import menuMixin from './menu-mixin';

  export default {
    name: 'unex-aside-history-item',
    props: ['item', 'index', 'hoverIndex'],
    inject: ['rootMenu'],
    mixins: [menuMixin],
    methods: {
      handleMouseEnter() {
        this.$emit('hoverItem', this.index);
      }
    }
  }
</script>
