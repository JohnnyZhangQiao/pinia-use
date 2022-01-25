<script lang="ts">
import { mapState, mapActions } from 'pinia';
import { useCounterStoreForOption } from '@/store/counterForOptions';

// setup composition API模式
export default {
  name: 'component-PiniaBasicOptions',

  computed: {
    // 获取state和getters
    ...mapState(useCounterStoreForOption, ['count1', 'doubleCount']),
  },

  methods: {
    // 获取action
    ...mapActions(useCounterStoreForOption, { increment: 'increment' }),
  }
};
</script>

<template>
  <div class="box-styl">
    <h1>Options模式</h1>
    <p class="section-box">
      Pinia的state: count1 = <b>{{ this.count1 }}</b>
    </p>
    <p class="section-box">
      Pinia的getters: doubleCount() = <b>{{ this.doubleCount }}</b>
    </p>
    <div class="section-box">
      <p>Pinia的action: increment()</p>
      <button @click="this.increment">点我</button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.box-styl {
  margin: 10px;
  .section-box {
    margin: 20px auto;
    width: 300px;
    background-color: #d7ffed;
    border: 1px solid #000;
  }
}
</style>
