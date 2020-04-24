<template>
  <transition name="dialog">
    <div class="lucas-dialog__wrapper" v-show="dialogvisiable">
      <div class="lucas-dialog" :style="{'width':width,'top':top}">
        <div class="lucas-dialog__header">
          <span class="lucas-dialog__title">{{title}}</span>
          <button class="lucas-dialog__headerbtn">
            <i class="iconfont icon-error-" @click="close"></i>
          </button>
        </div>
        <div class="lucas-dialog__body">
          <span>
            <slot>这是一段信息</slot>
          </span>
        </div>
        <div class="lucas-dialog__footer">
          <slot name="footer">
            <lucas-button>取消</lucas-button>
            <lucas-button type="primary">确定</lucas-button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "lucas-dialog",
  props: {
    title: {
      type: String,
      default: "提示"
    },
    width: {
      type: String,
      default: "30%"
    },
    top: {
      tpye: String,
      default: "15vh"
    },
    dialogvisiable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit("update:dialogvisiable", false);
    }
  }
};
</script>

<style lang="less" scoped>
.lucas-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);

  .lucas-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;

    &__header {
      padding: 20px 20px 10px;
      .lucas-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .lucas-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .lucas-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
/deep/ .lucas-button:first-child{
  margin-right: 10px;
}
</style>