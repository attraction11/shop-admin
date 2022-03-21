import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { store, key } from './store'

// import './styles/element/index.scss' // 覆盖 element-plus 插件默认变量设置
// import elementPlus from './plugin/element-plus' // 导入 element-plus 插件

// 加载全局样式
import './styles/index.scss'
import 'normalize.css'
// import.meta.env.BASE_URL

const app = createApp(App)
app.use(router)
app.use(store, key)
// app.use(elementPlus)

// 自动导入插件
// const files = import.meta.globEager('./plugin/*.ts')
// for (const path in files) {
//   app.use(files[path].default)
// }

// 自动注册全局组件
// const modules = import.meta.globEager('./components/**/index.ts')
// for (const path in modules) {
//   app.use(modules[path].default)
// }

app.mount('#app')
