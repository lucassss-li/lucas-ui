<template>
  <label class="lucas-checkbox" :class="{'is-checked':this.group?model:value}">
    <span class="lucas-checkbox__input">
      <span class="lucas-checkbox__inner"></span>
      <input
        type="checkbox"
        class="lucas-checkbox__original"
        :name="this.group?this.group.name:name"
        :value="this.group?label:model"
        v-model="model"
      />
    </span>
    <span class="lucas-checkbox__label">{{label}}</span>
  </label>
</template>

<script>
export default {
  name: "lucas-checkbox",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    }
  },
  inject: {
    group: {
      from: "group",
      default: null
    }
  },
  computed: {
    model: {
      get() {
        return this.group
          ? !!this.group.value.find(item => item == this.label)
          : this.value;
      },
      set(newvalue) {
        if (this.group) {
          if(newvalue){
            this.group.value.push(this.label);
          }else{
            this.group.$emit('input', this.group.value.filter(item=>item!=this.label));
            console.log(1);
            
          }
        } else {
          this.$emit("input", newvalue);
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.lucas-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .lucas-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .lucas-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .lucas-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .lucas-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
.lucas-checkbox.is-checked {
  .lucas-checkbox__input {
    .lucas-checkbox__inner {
      background-color: #409eff;
      border-color: #409eff;
      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .lucas-checkbox__label {
    color: #409eff;
  }
}
.lucas-checkbox.is-checked {
  .lucas-checkbox__input {
    .lucas-checkbox__inner {
      background-color: #409eff;
      border-color: #409eff;
      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .lucas-checkbox__label {
    color: #409eff;
  }
}
</style>