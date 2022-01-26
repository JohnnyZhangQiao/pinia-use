import { ref } from 'vue';
import { defineStore } from 'pinia';

// 装备
export const roleEquipment = defineStore('roleEquipment', () => {
  const equipment = ref<string[]>([]);

  function setItem(data: string[]) {
    equipment.value = data;
  }

  return { equipment, setItem };
});
