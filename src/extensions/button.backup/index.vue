<template>
    <section class="unex-button-container" @click="handleClick">
        <span class="unex-button"  :class="[`unex-button-${size}`,`unex-button-${type}`,disabled?`unex-button-disabled`:'']">
             <slot></slot>
        </span>

    </section>
</template>
<script>
    export default {
        data(){
            return{

            }
        },
        props:{
            size:{
                type:String,
                default:'medium'  //large /medium / small / mini  /micro
            },
            type:{
                default: 'primary', //text plain primary border
                type:String
            },
            disabled:{
                default:false,
                type: Boolean
            }
        },
        methods:{
            handleClick(){
                this.$emit('click')
            }
        }
    }
</script>
<style lang="scss">
    $primary:#3366FF;
    $primary-dark:#122FB3 ;
    $font-color:#333;
    $border-color:#D9D9D9;
    .unex-button-container{
        display: inline-block;
        .unex-button{
            text-align: center;
            background: none;
            display: inline-block;
            cursor: pointer;
        }
        .unex-button-large{
            padding: 0px 24px;
            line-height: 40px;
            min-width: 120px;
            font-size: 14px;
            border-radius: 2px;
        }
        .unex-button-medium{
            padding: 0px 16px;
            line-height: 36px;
            min-width: 104px;
            font-size: 14px;
            border-radius: 2px;
        }
        .unex-button-small{
            padding: 0px 16px;
            line-height: 32px;
            min-width: 80px;
            font-size: 14px;
            border-radius: 2px;
        }
        .unex-button-mini{
            padding: 0px 12px;
            line-height: 28px;
            min-width: 64px;
            font-size: 14px;
            border-radius: 2px;
        }
        .unex-button-micro{
            padding: 0px 8px;
            line-height: 24px;
            min-width: 56px;
            font-size: 14px;
            border-radius: 2px;
        }
        .unex-button-primary{
            background: $primary;
            color:#fff;
            &:hover{
                background: $primary-dark;
            }
            &.unex-button-disabled{
                opacity: .5;
                cursor: not-allowed;
                &:hover{
                    background: $primary;
                }
            }
        }
        .unex-button-plain{
            color: $font-color;
            border: 1px solid $border-color;
            &:hover{
                border-color: $primary;
                color: $primary;
            }
            &.unex-button-disabled{
                opacity: .5;
                cursor: not-allowed;
                &:hover{
                    color: $font-color;
                    border: 1px solid $border-color;
                }
            }
        }
        .unex-button-border{
            color: $primary;
            border: 1px solid $primary;
            &:hover{
                border-color: $primary;
                background: $primary;;
                color: #fff;
            }
            &.unex-button-disabled{
                opacity: .5;
                cursor: not-allowed;
                &:hover{
                    color: $primary;
                    border: 1px solid $primary;
                    background: none;
                }
            }
        }
    }
</style>