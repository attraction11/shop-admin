import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { store, key } from './store'

import './styles/element/index.scss' // 覆盖 element-plus 插件默认变量设置
import elementPlus from './plugin/element-plus' // 导入 element-plus 插件

import { useTable } from './plugin/vxe-table'

import './styles/index.scss' // 加载全局样式
// import.meta.env.BASE_URL

const app = createApp(App)

app.use(router)
app.use(store, key)
app.use(elementPlus)
app.use(useTable)

// 自动注册全局组件
const modules = import.meta.globEager('./components/**/index.ts')
for (const path in modules) {
  app.use(modules[path].default)
}

app.mount('#app')
