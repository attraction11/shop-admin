import 'vue-router'

declare module 'vue-router' {
  // eslint-disable-next-line no-unused-vars
  interface RouteMeta {
    // 是可选的
    title?: string,
    requiresAuth?: boolean
  }
}
