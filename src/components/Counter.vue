<template>
  <div>
    <h1>计数器：{{ count }}</h1>
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
  </div>

  <div>
    初始值：{{ msg }}
  </div>
  <div>
    <button @click="excute">点击我</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref<number>(0)
function increment() {
  count.value++
}
function decrement() {
  count.value--
}
function excute()
{
    emit("send","ouse")
}

const emit = defineEmits<{
  (e: 'send', payload: string): void
}>()
defineProps<{
 msg:string 
 name:string  
}>()
</script>

