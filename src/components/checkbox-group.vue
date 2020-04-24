<template>
  <div class="lucas-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "lucas-checkbox-group",
  props:{
    value:{
      type:Array,
      default:[]
    },
    name:{
      type:String,
      default:""
    }
  },
  provide(){
    return {
      group:this
    }
  }
};
</script>

<style lang="less" scoped>
</style>