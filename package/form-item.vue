<template>
  <div class="lucas-form-item">
    <label class="lucas-form-item__label">{{label}}</label>
    <div class="lucas-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "lucas-form-item",
  props:{
    label:{
      type:String,
      default:""
    }
  }
};
</script>

<style lang="less" scoped>
.lucas-form-item {
  margin-bottom: 25px;
  .lucas-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .lucas-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>