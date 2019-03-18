<template>
    <section class="unex-input-group">
        <div class="unex-input-group-select">
            <slot name="select"></slot>
        </div>

        <div class="unex-input-group-input">
            <slot name="input" ></slot>

        </div>
        <slot name="icon" class="unex-input-group-icon"></slot>
    </section>
</template>
<style lang="scss">
    .unex-input-group{
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .unex-input-group-select{
            .el-input__inner{
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
                z-index: 1;
                position: relative;
                &:focus{
                    z-index: 2;
                }
            }
        }

        .unex-input-group-input{
            position: relative;
            left: -1px;
            .el-input__inner{
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                z-index: 1;
                position: relative;
                &:focus{
                    z-index: 2;
                }
            }
            .el-input__suffix{
                z-index: 3;
            }
        }
    }
</style>
