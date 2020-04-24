# vue组件封装
## 1、样式：
```
<button
  class="lucas-button"
  :class="[`lucas-button-${type}`,{'lucas-button-round':round},{'lucas-button-disabled':disabled} ]"
  :disabled="disabled"
>
  <slot>按钮</slot>
</button>
```
