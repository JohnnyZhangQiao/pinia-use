<script setup lang="ts" name="component-StoreGroup">
import appStore from '@/store';
</script>

<template>
  <div class="box-styl">
    <h1>Store组管理</h1>
    <div class="section-box">
      <p>
        当前职业： <b>{{ appStore.roleStore.basic.basic.profession }}</b>
      </p>
      <p>
        名字： <b>{{ appStore.roleStore.basic.basic.name }}</b>
      </p>
      <p>
        性别： <b>{{ appStore.roleStore.basic.basic.sex }}</b>
      </p>
      <p>
        装备： <b>{{ appStore.roleStore.equipment.equipment }}</b>
      </p>
      <p>
        技能： <b>{{ appStore.roleStore.skill.skill }}</b>
      </p>
      <span>转职：</span>
      <button @click="appStore.roleStore.changeProfession('warrior')">
        战士
      </button>
      <button @click="appStore.roleStore.changeProfession('mage')">法师</button>
      <button @click="appStore.roleStore.changeProfession('warlock')">
        道士
      </button>
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
