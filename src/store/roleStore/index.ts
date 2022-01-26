import { defineStore } from 'pinia';
import { roleBasic } from './basic';
import { roleEquipment } from './equipment';
import { roleSkill } from './skill';
import { ROLE_INIT_INFO } from './constants';

type TProfession = 'warrior' | 'mage' | 'warlock';

// 角色组，汇聚「人物属性、装备、技能」3个store统一管理
export const roleStore = defineStore('roleStore', () => {
  // 注册组内store
  const basic = roleBasic();
  const equipment = roleEquipment();
  const skill = roleSkill();

  // 转职业
  function changeProfession(profession: TProfession) {
    basic.setItem(ROLE_INIT_INFO[profession].basic);
    equipment.setItem(ROLE_INIT_INFO[profession].equipment);
    skill.setItem(ROLE_INIT_INFO[profession].skill);
  }

  return { basic, equipment, skill, changeProfession };
});
