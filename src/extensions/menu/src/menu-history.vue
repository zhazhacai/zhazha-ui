<template>
  <section class="settings" @mouseenter="showHistoryFn(true)">
    <template v-for="item, index in data" v-if="item.icon === 'create-Ta'">
      <transition name="hisanima">
        <div class="history-list" :class="{'history-list-collapsed': rootMenu.isCollapsed}" v-if="showHistory"
              @mouseleave="showHistoryFn(false)">
          <div class="history-list-inner">
            <div class="top">
              <div class="entry">快捷入口</div>
              <div class="edit">编辑</div>
            </div>
            <ul>
              <history-item v-for="(item, index) in historyList"
                            :item="item"
                            :index="index"
                            :hoverIndex="hoverIndex"
                            :key="'history-item-' + index"
                            @hoverItem="handleHoverItem">{{item.title}}
              </history-item>
            </ul>
          </div>
        </div>
      </transition>
      <!-- <div class="btn-group" :class="{'history-hover': showHistory}">
        <router-link :to="{ name: 'setUp' }" class="setting-link">
          <div class="setting" @click="$router.push('/frame/setting')"
               @mouseleave="showHistoryFn(false, $event)"
               :class="{
                 'opened-style': $route.path === '/frame/setting' || hoverIndex !==null,
               }">
            <div class="icon-wrap" ref="settingIcon"><unex-icon svg="setting"></unex-icon></div>
            <div class="text" ref="settingText">
              {{$t('frame.setting')}}
            </div>
          </div>
        </router-link>
      </div> -->
      <div class="btn-group" :class="{'history-hover': showHistory}">
        <div class="setting-link">
          <div class="setting" @click="$router.push('/admin/setUp')"
               :class="{
                 'opened-style': $route.path === '/admin/setUp' || hoverIndex !==null,
               }">
            <div class="icon-wrap" ref="settingIcon"><unex-icon svg="setting"></unex-icon></div>
            <div class="text" ref="settingText">
              设置
            </div>
          </div>
        </div>
      </div>
    </template>
  </section>
</template>

<script>
  import historyItem from './history-item.vue';

  export default {
    name: "history",
    props: {
      data: {
        required: true,
        type: Array
      }
    },
    components: {
      'history-item': historyItem,
    },
    inject: ['rootMenu'],
    data() {
      return {
        historyList: [
          { title: "Order List", href: "/lala", id:10 },
          { title: "Add Atrributes", href: "/lala" },
          { title: "Material", href: "/lala" },
          { title: "Add Coupons", href: "/lala" },
          { title: "Store Settings", href: "/lala" }
        ],
        showHistory: false,
        hoverIndex: null
      }
    },
    methods: {
      showHistoryFn(status, $event) {
        if(!status){ // 如果是从设置移动到历史记录列表时，从设置移出的mouseleave不用执行，否则会出现页面闪动
          this.hoverIndex = null;
          if($event && $event.relatedTarget.classList.contains('history-item')){
            return;
          }
        }
        this.showHistory = status;
      },
      handleHoverItem(index) {
        this.hoverIndex = index;
      }
    }
  }
</script>
