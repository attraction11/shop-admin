/*
 * @Description: i18n国际化
 * @Author: xxx
 * @Date: 2020-12-19 11:53:48
 * @LastEditorsxxx
 * @LastEditTime: 2020-12-23 10:08:34
 */
import { App } from 'vue'
import i18n from '@/locales'

export default {
  install (app: App) {
    app.use(i18n)
  }
}
