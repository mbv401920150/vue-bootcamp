<template>
  <div>
    <h1>Counter example</h1>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ square }}</h3>

    <button @click="counter++">+1</button>
    <button @click="counter--">-1</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    initialValue: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const counter = ref(props.initialValue);
    const square = computed(() => counter.value * counter.value);

    return {
      counter,
      square,
    };
  },
});
</script>

<style scoped>
h1 {
  color: darkolivegreen;
  font-size: 30px;
}
</style>
