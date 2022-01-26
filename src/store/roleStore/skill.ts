import { ref } from 'vue';
import { defineStore } from 'pinia';

// 技能
export const roleSkill = defineStore('roleSkill', () => {
  const skill = ref<string[]>([]);

  function setItem(data: string[]) {
    skill.value = data;
  }

  return { skill, setItem };
});
