<template>
	<el-dialog
			:class="'unex-dialog unex-' + position + '-dialog unex-dialog--' + size"
			:top="top"
			:title="title"
			:width="width"
			:fullscreen="fullscreen"
			:modal="modal"
			:append-to-body="appendToBody"
			:lock-scroll="lockScroll"
			:close-on-click-modal="closeOnClickModal"
			:custom-class="'unex-dialog-wrap ' + customClass + ' unex-dialog-wrap--' + size"
			:show-close="showClose"
			:before-close="beforeClose"
			@open="open"
			@close="close"
			@closed="closed"
			:visible.sync="display">
		<slot slot="title" name="title"></slot>
		<slot></slot>
		<slot slot="footer" name="footer">
			<div class="unex-dialog-footer" v-if="hasSubmit">
				<el-button size="small" type="primary" @click="submit">{{$t('frame.submit')}}</el-button>
			</div>
		</slot>
	</el-dialog>
</template>
<script>
    export default {
        name:"unex-right-dialog",
        props:{
            position: { // Dialog 的显示位置，右侧：right, 居中：center
                type: String,
                default: 'right'
            },
            top: { // Dialog CSS 中的 margin-top 值
                type: String,
                default () {
                    return this.position === 'right' ? '0' : '15vh'
                }
            },
            title: { // Dialog 的标题
                type: String
            },
            visible: { // 是否显示 Dialog
                type: Boolean,
                default: false
            },
            size: { // Dialog 内容块大小，共4个预置项: mini | small | medium | large
                type: String,
                default: 'mini'
            },
            customClass: { // Dialog 的自定义类名
                type: String,
                default: ''
            },
            width: { // Dialog 的宽度
                type: String,
                default: ''
            },
            fullscreen: { // 是否为全屏 Dialog
                type: Boolean,
                default: false
            },
            modal: { // 是否需要遮罩层
                type: Boolean,
                default: true
            },
            appendToBody: { // Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true
                type: Boolean
            },
            lockScroll: { // 是否在 Dialog 出现时将 body 滚动锁定
                type: Boolean
            },
            closeOnClickModal: { // 是否可以通过点击 modal 关闭 Dialog
                type: Boolean,
                default: true
            },
            showClose: { // 是否显示关闭按钮
                type: Boolean,
                default: true
            },
            beforeClose: { // 关闭前的回调，会暂停 Dialog 的关闭
                type: Function
            },
            hasSubmit: { // 是否显示底部提交按钮
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                display: this.visible
            }
        },
        watch: {
            visible (newVal, old) {
                this.display = this.visible
            },
            display (newVal, old) {
                this.$emit('update:visible', newVal);
            }
        },
        methods:{
            submit (){ // 提交按钮点击事件
                this.$emit('submit');
            },
            open () { // Dialog 打开的回调
                this.$emit('open');
            },
            close () { // Dialog 关闭的回调
                this.$emit('close');
            },
            closed () { // Dialog 关闭动画结束时的回调
                this.$emit('closed');
            }
        }
    }
</script>
