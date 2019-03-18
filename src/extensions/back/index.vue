<template>
    <section class="unex-back">
        <i @click="goBack()" data-v-7f887df4="" class="unex-back-icon unex-icon-arrow-left"></i>
        <span class="unex-back__line"></span>
        <span class="unex-back__title" v-if="title && title.length>0">{{title}}</span>
        <span v-if="!title" class="unex-back__title unex-back__flex unex-back__flex-align-center">
             <slot></slot>
        </span>

    </section>
</template>
<script>
    export default {
        name:"unex-back",
        props:{
            isBack:{
                default:false,
                type:Boolean,
            },
            title:{
                default:'',
                type:String
            },
            handle:{
                default:false,
                type:Boolean
            },

        },
        methods:{
            goBack(){
                if(!this.handle){
                    this.$router.go(-1)
                }else {
                    this.$emit('click')
                }
            }

        }
    }
</script>
<style lang="scss">
    .unex-back{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 20px;
        .unex-back__unex-back-icon{
            color: #666666;
            margin: 0;
            padding: 0;
            font-size: 20px;
            line-height:20px;
            cursor: pointer;
        }
        .unex-back__line{
            margin: 0px 16px;
            width: 1px;
            height: 16px;
            border-left: 1px solid #D9D9D9;
        }
        .unex-back__title{
            font-size: 18px;
            color: #000000;
            letter-spacing: 0;
            line-height: 18px;
            font-weight: 500;
        }
        .unex-back__flex{
            display: flex;
        }
        .unex-back__flex-align-enter{
            align-items: center;
        }
    }
</style>
