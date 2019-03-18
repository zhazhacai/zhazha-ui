<template>
	<transition name="slide-down">
        <div class="unex-message" :class="theme" v-show="show">
            <div class="unex-message__content" :class="type">
                <template v-if="type === 'success'">
                    <i class="el-icon-success"></i>
                </template>
                <template v-if="type === 'error'">
                    <i class="el-icon-error"></i>
                </template>
                {{ message }}
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
    },
    data () {
        return {
            show: false,
            theme: 'plain',
            type: 'success',
            message: '操作成功',
            duration: 2,
            autoClose: true
        };
    },
    methods: {
        toggle ( flag ) {
            if ( flag === undefined ) {
                return this.show = !this.show;
            }
            return this.show = flag;
        },
        close () {
            return this.show = false;
        },
        open () {
            return this.show = true;
        },
        start () {
            this.autoClose && setTimeout(() => this.show = false, this.duration * 1000);
        }
    },
    mounted () {
        this.start();
    }
}
</script>

<style lang="scss" scoped>
    .slide-down-enter, .slide-down-leave-to {
        opacity: 0;
    }
    .slide-down-enter-active, .slide-down-leave-active {
        transition: all .5s ease-in;
    }
    .unex-message {
        position: absolute;
        top: 40px;
        left: 50%;
        transform: translateX( -50% );
        width: 400px;
        height: 48px;
        line-height: 48px;
        border: 1px solid #ebebeb;
        cursor: pointer;
        z-index: 2000;
        -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.10);
        -moz-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.10);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.10);
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
        &.plain {
            background-color: #fff;
        }
        .unex-message__content {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #333;
            i {
                font-size: 18px;

                margin-right: 10px;
            }
            &.success {
                i {
                    color: #66C947;
                }
            }
            &.error {
                i {
                    color: #fa5555;
                }
            }
        }
    }
</style>
