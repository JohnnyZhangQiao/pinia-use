import { defineStore } from 'pinia';

// 使用options API模式定义
export const useCounterStoreForOption = defineStore('counterForOptions', {
  // 定义state
  state: () => {
    return { count1: 1 };
  },
  // 定义action
  actions: {
    increment() {
      this.count1++;
    }
  },
  // 定义getters
  getters: {
    doubleCount(state) {
      return state.count1 * 2;
    }
  }
});
