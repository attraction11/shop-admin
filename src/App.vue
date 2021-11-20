<script setup lang="ts">
import { ref, onMounted } from 'vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'

const helloWorld = ref<InstanceType<typeof HelloWorld> | null>(null)

const autoIncrement = (value) => {
  console.log(value)
}

onMounted(() => {
  console.log('helloWorld: ', helloWorld.value.topic)
})
</script>

<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png"
  >
  <HelloWorld
    ref="helloWorld"
    msg="Hello Vue 3 + TypeScript + Vite"
    :topic="10"
    @increment="autoIncrement"
  />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
