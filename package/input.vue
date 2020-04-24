<template>
  <div class="lucas-input" :class="{'lucas-input--suffix':showPassword||clearable}">
    <input
      :type="type=='password'&&noshowPassword?'password':'text'"
      class="lucas-input__inner"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="{'is-disabled':disabled}"
      :value="adata"
      @input="handle"
    />
    <span class="lucas-input__suffix">
      <span class="iconfont icon-changyongicon-" v-show="showPassword" @click="changeshow"></span>
      <span class="iconfont icon-error-" v-show="clearable" @click="cleardata"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: "lucas-input",
  data() {
    return {
      noshowPassword:true
    }
  },
  model: {
    prop: "adata",
    event: "changeeee"
  },
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    adata: {
      type: String,
      default: ""
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handle(e) {
      this.$emit("changeeee", e.target.value);
    },
    cleardata() {
      this.$emit("changeeee","");
    },
    changeshow(){
      this.noshowPassword = !this.noshowPassword;
    }
  }
};
</script>

<style lang="less" scoped>
.lucas-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  .lucas-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.lucas-input--suffix {
  .lucas-input__inner {
    padding-right: 30px;
  }
  .lucas-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    span {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>