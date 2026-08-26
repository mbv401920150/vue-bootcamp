import { computed, ref } from 'vue';

export const useCounter = (initialCounter: number) => {
  const counter = ref(initialCounter);
  const addOne = () => counter.value++;
  const minusOne = () => counter.value--;

  return {
    counter,
    squareCounter: computed(() => counter.value * counter.value),
    addOne,
    minusOne,
  };
};
