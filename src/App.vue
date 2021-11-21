<template>
  <h1>App</h1>
  <HelloWorld />
  <!-- 路由的渲染出口 -->
  <router-view />
</template>

<script lang="ts" setup>
import HelloWorld from './components/HelloWorld.vue'
</script>
