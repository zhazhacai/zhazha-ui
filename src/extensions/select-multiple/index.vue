<template>
  <div class="unex-select--multiple">
    <!-- 定制化选中内容，覆盖自带input框 -->
    <div class="over-input" v-if="checkedValue.length>0||checkedOption.length>0">
      <p v-if="unlimited && checkedValue[0]===''">不限</p>
      <p v-else-if="hasAll && (checkedOption.length===options.length && checkedOption.length>0)||(checkedValue[0]===''&&checkedValue.length===1)">全部</p>
      <p v-else>已选 {{checkedOption.length}}<span></span> 项，{{checkedOption.join("/")}}</p>
    </div>
    <!-- dropdown area -->
    <el-select
            v-model="checkedValue"
            multiple
            :placeholder="placeholder"
            popper-class="unex-select--dropdown unex-select-multiple-select"
            @change="handlerSelectChange" :size="size" >



      <el-option label="全部" value="" v-if="hasAll" class="unex-multiple-options unex-multiple-options-checkbox">
        <el-checkbox
                :indeterminate="isIndeterminate"
                v-model="checkAll"
                @change="handleCheckAllChange">
          <span >全部</span>
        </el-checkbox>
      </el-option>
        <el-option  v-if="unlimited" value="" label="不限" class="unex-multiple-options ">
          <span >不限</span>
        </el-option>

        <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value" class="unex-multiple-options ">
          <span >{{ item.label }}</span>

        </el-option>



      <div class="reset-wrapper">
        <span class="reset-btn" @click="handleReset">{{$t('freight.reset')}}</span>
      </div>
    </el-select>

  </div>
</template>

<script>
    export default {
        name: "unex-select-multiple",
        model: {
            prop: 'checked',
            event: 'select'
        },
        props: {
            unlimited:{
                type: Boolean,
                default: false
            },
            hasAll: {
                type: Boolean,
                default: true
            },
            options: {
                type: Array,
                default: function () {
                    return [];
                }
            },
            checked: {
                type: Array
            },
            size: {
                type:String,
                default:'small'
            },
            placeholder:{
                type:String,
            }
        },
        data() {
            return {
                checkAll: this.checked[0]===''||(this.checked.length === this.options.length && this.checked.length>0), // 是否全选
                isIndeterminate: this.checked.length> 0 && this.checked.length < this.options.length, // 用以表示 checkbox 的不确定状态，一般用于实现全选的效果
                checkedOption: [], // 全选的 label 集合
                checkedValue: [], // props 传过来的值不允许直接修改，所以赋值给新的变量，避免报错
                allValue: [] // 保存所有的value
            }
        },
        mounted() {
            this.checkedValue = this.checked;
            this.setLabel()
        /*    this.allValue = this.options.map(item=>item.value)
            // console.log(this.checkAll);
            // 初始化所有 label
            this.checkedValue.map(n => {
                // 初始化所有value
                this.options.map(m => {
                    // 当checked为0时，选择的就是全部
                    if (String(n) === '0' || String(n) === '') {
                        this.checkedValue = this.allValue; // select 选择的值
                        this.checkAll = true; // 为全选
                        this.isIndeterminate = false;
                        this.checkedOption.push(m.label) // checkbox 选择的值
                    } else { // 不是全选时
                        if (n === m.value) { // 传什么 取什么
                            this.checkedOption.push(m.label)
                        }
                    }

                })
            })*/
        },
        methods: {
            // 重置 按钮
            handleReset() {
                console.log('33')
                this.checkAll = false;
                this.checkedOption = [];
                this.checkedValue = [];
                this.isIndeterminate = false;
            },
            // 全部 按钮点击
            handleCheckAllChange(val) {

                this.checkedValue = val ? this.options.map(item=>item.value) : [];
                this.isIndeterminate = false;

            },
            // 其余按钮 点击
            handleCheckedChange(value) {

                let checkedCount = value.length;
                this.checkAll = checkedCount === this.options.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.options.length;
            },
            // Select change 事件 监听
            handlerSelectChange(val) {
                let checkedCount = val.length;
                this.checkAll = checkedCount === this.options.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.options.length;
            },
            setLabel(){
                this.checkedOption = this.options.filter(item=>this.checkedValue.includes(item.value)).map(item=>item.label)
            }

        },
        watch: {
            checkedValue(val,oldval){
                if(this.checkedValue===this.checked) return;
                if(this.hasAll){

                    if(this.checkedValue[0]===''){
                        this.checkedValue.shift()
                    }
                }else if(this.unlimited){
                    if(oldval.includes('')){
                        this.checkedValue.shift()
                    }else if(!oldval.includes('') && val.includes('')){
                        this.checkedValue = ['']
                    }
                }
                this.setLabel()

                this.$emit("select", this.checkedValue);
                this.$emit('change', this.checkedValue);

            },

        }
    }
</script>