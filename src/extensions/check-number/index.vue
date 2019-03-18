<template>
    <div class="check-number-box">
        <el-input v-if="type === 'textarea'" :maxlength="maxlength" :class="classNmae" type="textarea" v-model="value" @input="computedCharLen"></el-input>
        <el-input v-else :class="classNmae" :maxlength="maxlength" v-model="value" @input="computedCharLen"></el-input>

        <span :style="{bottom:bottom+'px',right:right+'px'}" class="surplue">{{surplue}}/{{maxlength}}</span>
    </div>
</template>
<script>
export default {
  name: "unex-check-number",
  props: {
    classNmae: { type: String },
    maxlength: { type: Number },
    type: {
      type: String
    },
    closed: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Number,
      default: 8
    },
    right: {
      type: Number,
      default: 12
    }
  },
  data() {
    return {
      value: "",
      surperr: false,
      surplue: 0
    };
  },

  watch: {
    closed: function(closed, oldclosed) {
      if (closed) {
        this.value = "";
        this.surplue = 0;
      }
    }
  },
  mounted() {
  },
  methods: {
    computedCharLen() {
      console.log(this.value.length);
      this.surplue = 0 + this.value.length;
      if (this.maxlength - this.value.length < 0) {
        // this.surperr = true;
      } else {
        // this.surperr = false;
      }
      this.$emit("getValue", this.value);
    }
  }
};
</script> 
<style lang="scss" scope>
.check-number-box {
  position: relative;
  .surplue {
    position: absolute;
    height: 24px;
    font-size: 14px;
    color: #333;
  }
  .errorMsg {
    position: absolute;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    color: red;
    bottom: 0;
  }
}
</style>