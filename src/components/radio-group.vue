<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "lucas-radio-group",
  props: {
    value: {
      type: String,
      default: ""
    },
    name:{
      type:String,
      default:""
    }
  },
  provide() {
    return {
      radioGroup: this
    };
  }
};
</script>

<style lang="less" scoped>
</style>