<template>
  <div class="search-bar">
    <div class="search-bar__shortcut flex flex-align-center">
      <div class="search-bar__shortcut_slot flex-grow" :class="shortcutContentClassNameObject">
        <slot name="shortCut"></slot>
      </div>

      <div class="search-bar__shortcut_dropdown flex-shrink"
        @click="tabShowHdl">
        <i class="cursor unex-icon-filter"></i>
        <span class="cursor">{{ $t('payment.filter') }}</span>
        <i class="cursor unex-icon-down"
          :class="dropdownIconClassNameObject">
        </i>
      </div>
    </div>

    <div class="search-wrap search-bar__filter" :class="searchContentClassNameObject">
      <div class="search-bar__filter_content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'unex-search-bar',
  data(){
    return {
      dropdown: true,
    }
  },
  props: {
    value: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    value: {
      handler: 'stateSyncHdl',
      immediate: true,
    }
  },
  computed: {
    searchContentClassNameObject(){
      return [ this.dropdown ? 'search-bar__filter_show' : 'search-bar__filter_hide' ]
    },
    dropdownIconClassNameObject(){
      return [ this.dropdown ? 'unex-icon-down-hide':'unex-icon-down-show']
    },
    shortcutContentClassNameObject(){
      return [ this.dropdown ? 'search-bar__shortcut_show' : 'search-bar__shortcut_hide' ]
    },
  },
  methods: {
    tabShowHdl(){
      this.dropdown = !this.dropdown
      this.$emit('input', this.dropdown)
      this.$emit('change', this.dropdown)
    },
    stateSyncHdl( newVal ){
      this.dropdown = newVal
    }
  }
}
</script>

<style lang="scss" scoped>
  .search-bar{
    background: #fff;
    margin-bottom: 10px;
    border-bottom: 1px solid  #E8E8E8;
    .flex {
      display: flex;

    }
    .flex-grow{
      flex-grow: 1;
    }
    .flex-shrink{
      flex-shrink: 0;
    }
    .flex-align-center{
      align-items: center;
    }
    .flex-justify-end{
      justify-content: flex-end;
    }

    .search-bar__shortcut{
      height: 54px;
      font-size: 14px;
      color:#666666;

      .search-bar__shortcut_slot{
        border-right: 1px solid #E8E8E8 ;
        padding-right: 16px;
        padding-left: 32px;
        height: 54px;
        line-height: 54px;
        flex: 1;
        overflow: hidden;
        position: relative;

        a{
          color: inherit;
          &:hover{
            color: inherit;
          }
        }
      }

      .search-bar__shortcut_show{
        border-bottom: 1px solid  #E8E8E8;
      }

      .search-bar__shortcut_hide{
        border-bottom:none;
      }

      .search-bar__shortcut_dropdown{
        padding-left: 14px;
        padding-right: 14px;
        display: flex;
        align-items: center;

        i{
          font-size: 22px;
          margin-right: 8px;
          margin-left: 8px;
          color: #999;
        }
        .cursor{
          cursor: pointer;
        }

        i.unex-icon-down-show{
          font-size: 16px;
          transform: rotate(0deg);
        }

        i.unex-icon-down-hide{
          font-size: 16px;
          transform: rotate(180deg);
        }
      }
    }

    .search-bar__filter{
      overflow: hidden;

      .search-bar__filter_content{
        padding: 20px 32px;
      }

      &.search-bar__filter_show{
        max-height: 500px;
      }

      &.search-bar__filter_hide{
        max-height: 0;
      }
    }
  }
</style>
