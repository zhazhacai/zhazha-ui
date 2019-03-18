<template>
<section :style="{ minHeight:(minHeight !==null && (loading || empty)) ? minHeight+'px':'auto',maxHeight:maxHeight!=='null' ?maxHeight+'px':'auto'}" class="unex-loading" :class="type==='search'?'unex-loading-search':'unex-loading-default'">
    <slot></slot>
    <section class="unex-loading-wrap" :style="{top: top + 'px'}" v-show="loading">
        <img src="./img/loading.gif" />
    </section>
    <template v-if="!loading">
        <section :style="{top: top + 'px'}" class="unex-loading-empty-warp" v-show="empty">
            <div class="unex-loading-empty-warp-content" v-if="type==='search'">
                <img class="loading-img" src="./img/empty.png" />
                <p class="unex-loading-error-message">{{message}}</p>
            </div>
            <div class="unex-loading-empty-warp-content" v-else-if="type==='default'">
                <img src="./img/empty_2.png" />
                <p class="unex-loading-error-message">{{message}}</p>
            </div>
            <div class="unex-loading-empty-warp-content" v-else>
                <p class="unex-loading-error-message">
                    <i data-v-a158e124="" class="unex-icon-total-info"></i>
                    {{message}}
                </p>
            </div>
        </section>
    </template>
</section>
</template>
<script>
export default {
    name: 'unex-loading',
    data() {
        return {}
    },
    props: {
        loading: { //是否显示loading
            type: Boolean,
            required: true
        },
        empty: { //是否显示为空的数据
            type: Boolean,
            required: false
        },
        minHeight: { //最小高度
            default: 400
        },
        maxHeight: { //最大高度

        },
        message: { //提示文字
            type: String,
            default: '搜索不到相关信息'
        },
        type: { // search 是搜索无数据的样式   default  是没有数据的样式  text  icon文案 样式
            type: String,
            default: 'search'
        },
        top: { //表格需要露出表头
            default: 0
        }
    }
}
</script>
