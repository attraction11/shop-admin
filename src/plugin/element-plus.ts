import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { App } from 'vue'

export default {
  install (app: App) {
    // size 用于设置表单组件的默认尺寸，zIndex 用于设置弹出组件的层级，zIndex 的默认值为 2000
    app.use(ElementPlus, { size: 'small', zIndex: 2000 })
  }
}
