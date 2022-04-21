import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

// 使用composition API模式定义store
export const useCounterStoreForSetup = defineStore('counterForSetup', () => {
  const count = ref<number>(1);

  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  /**
   * 唯一修改count的入口
   */
  function setCount(val: number) {
    count.value = val;
  }

  return { count, doubleCount, increment, setCount };
});
