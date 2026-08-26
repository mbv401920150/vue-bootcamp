import { defineComponent } from 'vue';
import { useCounter } from '@/composables/useCounter.ts';

export default defineComponent({
  props: {
    initialValue: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { counter, squareCounter, addOne, minusOne } = useCounter(props.initialValue);

    return {
      counter,
      square: squareCounter,
      addOne,
      minusOne,
    };
  },
});
