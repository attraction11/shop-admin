import { Store } from 'vuex'
import { State } from '../store/index'

declare module '@vue/runtime-core' {
  // 声明自己的 store state
  // interface State {
  //   count: number
  // }

  // 为 `this.$store` 提供类型声明
  export interface ComponentCustomProperties {
    $store: Store<State>
  }
}
