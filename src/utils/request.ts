import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
  // baseURL: import.meta.env.VITE_API_BASEURL // 基础路径
  // baseURL: '/admin' // 基础路径
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    // 统一设置用户身份 Token
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    // 统一处理响应错误，例如 token 无效、服务端异常等
    return response
  },
  err => {
    return Promise.reject(err)
  }
)

// request 不支持泛型
// request.get、post、put 支持相应数据泛型，当后端数据没有做封装时可以直接使用这种方式
// 但由于我们的后端又包装一层数据 data，导致我们访问数据比较麻烦，因此需要自己封装一个 request

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return (res.data.data || res.data) as T
  })
}
