import Vue from 'vue'
import App from './App.vue'
// import './assets/font/iconfont.css'

// import Button from "./components/button.vue"
// Vue.component(Button.name,Button);

// import Dialog from "./components/dialog.vue"
// Vue.component(Dialog.name,Dialog);

// import Input from "./components/input.vue"
// Vue.component(Input.name,Input);

// import Switch from "./components/switch.vue"
// Vue.component(Switch.name,Switch);

// import Radio from "./components/radio.vue"
// Vue.component(Radio.name,Radio);

// import RadioGroup from "./components/radio-group.vue"
// Vue.component(RadioGroup.name,RadioGroup);

// import Checkbox from "./components/checkbox.vue"
// Vue.component(Checkbox.name,Checkbox);

// import CheckboxGroup from "./components/checkbox-group.vue"
// Vue.component(CheckboxGroup.name,CheckboxGroup);

// import Form from "./components/form.vue"
// Vue.component(Form.name,Form);

// import FormItem from "./components/form-item.vue"
// Vue.component(FormItem.name,FormItem);

import lucasUi from "../dist/lucas-ui.umd"
import "../dist/lucas-ui.css"
Vue.use(lucasUi);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
