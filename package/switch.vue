<template>
  <div class="lucas-switch" @click="change" :class="{'is-checked':value}">
    <span class="lucas-switch__core" ref="core">
      <span class="lucas-switch__button"></span>
    </span>
    <input :name="name" class="lucas-switch__input" type="checkbox" :checked="value"/>
  </div>
</template>

<script>
export default {
  name: "lucas-switch",
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    },
    name:{
      type:String,
      default:""
    }
  },
  methods: {
    async change() {
      this.$emit("change", !this.value);
      await this.$nextTick();
      this.setColor();
    },
    setColor() {
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
    }
  },
  mounted() {
    this.setColor();
  }
};
</script>

<style lang="less" scoped>
.lucas-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .lucas-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .lucas-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.lucas-switch.is-checked {
  .lucas-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .lucas-switch__button {
      transform: translateX(20px);
    }
  }
}
.lucas-switch__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>