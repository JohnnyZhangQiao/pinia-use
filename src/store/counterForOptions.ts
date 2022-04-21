import { defineStore } from 'pinia';

// 使用options API模式定义
export const useCounterStoreForOption = defineStore('counterForOptions', {
  // 定义state
  state: () => {
    return { count: 1 };
  },
  // 定义action
  actions: {
    increment() {
      this.count++;
    }
  },
  // 定义getters
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  }
});
