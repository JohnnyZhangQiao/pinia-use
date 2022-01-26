<script setup lang="ts" name="component-PiniaBasicSetup">
import { storeToRefs } from 'pinia';
import appStore from '@/store';

// setup composition API模式
const { count } = storeToRefs(appStore.useCounterStoreForSetup);
const { increment, doubleCount } = appStore.useCounterStoreForSetup;
</script>

<template>
  <div class="box-styl">
    <h1>Setup模式</h1>
    <p class="section-box">
      Pinia的state: count = <b>{{ count }}</b>
    </p>
    <p class="section-box">
      Pinia的getters: doubleCount() = <b>{{ doubleCount() }}</b>
    </p>
    <div class="section-box">
      <p>Pinia的action: increment()</p>
      <button @click="increment">点我</button>
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
