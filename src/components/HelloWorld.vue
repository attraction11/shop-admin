<script setup lang="ts">
import { ref, PropType, onMounted } from 'vue'

interface User {
  name: String,
  age: Number
}

const props = defineProps({
  msg: {
    type: String,
    default: ''
  },
  topic: {
    type: Number,
    default: null,
    require: true
  },
  obj: {
    type: Object as PropType<User>,
    default: null
  }
})

const count = ref(0)
const title = ref<HTMLHeadElement | null>(null)

const emit = defineEmits(['increment'])
const incrementFn = () => {
  count.value++
  emit('increment', count.value)
}

onMounted(() => {
  console.log('title: ', title.value)
  console.log('topic: ', props.topic)
})

</script>

<template>
  <h1>{{ props.msg }}</h1>
  <h1>{{ props.topic }}</h1>
  <button @click="incrementFn">
    点击自增
  </button>

  <p ref="title">
    Recommended IDE setup:
    <a
      href="https://code.visualstudio.com/"
      target="_blank"
    >VSCode</a>
    +
    <a
      href="https://github.com/johnsoncodehk/volar"
      target="_blank"
    >Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
    >
      Vite Docs
    </a>
    |
    <a
      href="https://v3.vuejs.org/"
      target="_blank"
    >Vue 3 Docs</a>
  </p>

  <button
    type="button"
    @click="count++"
  >
    count is: {{ count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
