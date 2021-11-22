<template>
  <h4>首页</h4>
  <!-- <p>{{ $store.state.count }}</p> -->
  <p>{{ store.state.count + 1 }}</p>
  <el-button type="primary">
    测试
  </el-button>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
const store = useStore()
console.log(store.state.count)
</script>

<style scoped lang="scss">
h4{
  color: $color
}
</style>
