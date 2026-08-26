<template>
  <div>
    <h1>Counter example</h1>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ square }}</h3>

    <button @click="counter++">+1</button>
    <button @click="counter--">-1</button>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

// Method 1
// const props = defineProps({
//   value: { type: Number, required: true }
// })

// Method 2
// const props = defineProps({
//   value: Number
// })

// Method 3
// const props = defineProps<{ value: number? }>();

// Method 4
interface Props {
  value?: number;
}
const props = defineProps<Props>();

const counter = ref(props.value ?? 99);
const square = computed(() => counter.value * counter.value);
</script>

<style scoped>
h1 {
  color: darkslateblue;
  font-size: 30px;
}
</style>
