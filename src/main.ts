import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'

import './styles/element/index.scss' // 覆盖 element-plus 插件默认变量设置
import elementPlus from './plugin/element-plus' // 导入 element-plus 插件

import './styles/index.scss' // 加载全局样式
// import.meta.env.BASE_URL

createApp(App)
  .use(router)
  .use(store, key)
  .use(elementPlus)
  .mount('#app')
