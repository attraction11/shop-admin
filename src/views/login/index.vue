<template>
  <h4>登录</h4>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
const store = useStore()
console.log(store.state.count)
</script>

<style scoped lang="scss">

</style>
