// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'

import {
  Link,
  Upload,
  Button,
  Form,
  FormItem,
  Input,
  Popconfirm,
  Message,
  MessageBox
} from 'element-ui'

Vue.component(Link.name, Link)
Vue.component(Upload.name, Upload)
Vue.component(Button.name, Button)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)
Vue.component(Popconfirm.name, Popconfirm)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm

axios.defaults.baseURL = 'http://localhost:8080/'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})