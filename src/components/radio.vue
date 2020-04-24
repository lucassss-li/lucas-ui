<template>
  <label class="lucas-radio" :class="{'is-checked':ischecked}" @click="checked">
    <span class="lucas-radio__input">
      <span class="lucas-radio__inner"></span>
      <input
        class="lucas-radio__original"
        type="radio"
        :name="radioGroup.name||name"
        :checked="checked"
        :value="label"
      />
    </span>
    <span class="lucas-radio__label">{{label}}</span>
  </label>
</template>

<script>
export default {
  name: "lucas-radio",
  props: {
    label: {
      type: String,
      default: "radio"
    },
    value: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  inject: {
    radioGroup: {
      from: "radioGroup",
      default: ""
    }
  },
  methods: {
    checked() {
      if (this.radioGroup) {
        this.radioGroup.$emit("input", this.label);
      } else {
        this.$emit("input", this.label);
      }
    }
  },
  computed: {
    ischecked() {
      return (this.radioGroup?this.radioGroup.value:this.value) == this.label;
    }
  }
};
</script>

<style lang="less" scoped>
.lucas-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .lucas-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .lucas-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .lucas-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .lucas-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.lucas-radio.is-checked {
  .lucas-radio__input {
    .lucas-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .lucas-radio__label {
    color: #409eff;
  }
}
</style>