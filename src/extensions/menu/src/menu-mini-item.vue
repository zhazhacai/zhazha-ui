<template>
  <li class="menu-item"
      :class="{
        'hover-style': index === miniHoverIndex,
        'opened-style': isOpen
      }"
      @click.stop="handleClick"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
  >
    <div class="text" slot="title">{{item.label}}</div>
    <div class="icon" v-if="item.children && item.children.length>0">
      <i class="el-icon-arrow-down"></i>
    </div>
    <template v-if="miniHoverIndex=== index && item.children.length>0">
      <div class="menu-list-mini-component"
           :style="{top: miniListTop + 'px',left: '152px',transform:'translateY(' + offsetHeight + ')'}"
           @mouseenter="enterMiniMenu"
           ref="menuMiniList">
        <ul class="list">
          <unex-aside-menu-mini-item
            v-for="(item2, index) in item.children"
            :key="'menu-li-' + item2.id"
            :item="item2"
            :index="index"
            :siblings="item.children"
            :miniHoverIndex="listActiveHover"
            @miniHoverItem="handleMiniHoverItem"
          ></unex-aside-menu-mini-item>
        </ul>
      </div>

    </template>
  </li>
</template>

<script>
  import menuMixin from './menu-mixin';
  import emitter from '../emitter';

  export default {
    name: "unex-aside-menu-mini-item",
    props: ['index', 'item', 'siblings', 'miniHoverIndex'],
    mixins: [emitter, menuMixin],
    inject: ['rootMenu'],
    data() {
      return {
        offsetHeight: 0,
        listActiveHover: null
      }
    },
    computed: {
      miniListTop() {
        return Math.round(this.miniHoverIndex * 48);
      }
    },
    methods: {
      handleMiniHoverItem(index) {
        this.listActiveHover = index;
      },
      handleClick() {
        this.dispatch('unex-aside-menu', 'item-click', this);
      },
      handleMouseEnter() {
        this.$emit('miniHoverItem', this.index);

        // if (this.item.children && this.item.children.length > 0) {
        //   console.log('this.miniHasVisited -> ', this.miniHasVisited);
        //   if (this.miniHasVisited) {
        //     this.rootMenu.visited.pop();
        //   }
        //
        //   this.rootMenu.visited.push({
        //     id: this.item.id,
        //     index: this.index,
        //     siblings: this.siblings,
        //     item: this.item
        //   });
        //   this.$emit('list-visited', true);
        // }
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
      handleMouseLeave() {
        this.$emit('miniHoverItem', null);
      },
    }
  }
</script>

<style scoped>

</style>
