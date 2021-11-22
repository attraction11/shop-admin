<template>
  <h1>App</h1>
  <HelloWorld />
  <!-- 路由的渲染出口 -->
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts" setup>
import HelloWorld from './components/HelloWorld.vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
</script>
