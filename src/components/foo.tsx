import { defineComponent, ref } from '@vue/runtime-core'

interface PropsType {
  msg: string
}

// 组合式API的写法
export default defineComponent({
  props: {
    msg: {
      type: String,
      default: '',
      require: true
    }
  },
  setup () {
    const count = ref(0)
    return (props: PropsType) => {
      <div>
        <p>{ props.msg }</p>
        <p>{ count }</p>
      </div>
    }
  }
})

// 选项式API的写法
// export default defineComponent({
//   props: {
//     msg: {
//       type: String,
//       default: '',
//       require: true
//     }
//   },
//   data () {
//     return {
//       count: 0
//     }
//   },
//   render () {
//     return (
//       <div>
//         <div>{ this.msg }</div>
//         <div>{ this.count }</div>
//       </div>
//     )
//   }
// })

// export default () => {
//   return (
//     <div>
//       <h4>foo 函数式组件</h4>
//     </div>
//   )
// }
