import { reactive } from 'vue';
import { defineStore } from 'pinia';

interface IRoleBasic {
  name: string;
  profession: string;
  sex: string;
  [key: string]: any;
}

// 人物属性
export const roleBasic = defineStore('roleBasic', () => {
  const basic = reactive<IRoleBasic>({
    name: '',
    profession: '',
    sex: ''
  });

  function setItem(data: IRoleBasic) {
    if (typeof data === 'object') {
      Object.keys(data).forEach((key: string) => {
        if (basic.hasOwnProperty(key)) {
          basic[key] = data[key];
        }
      });
    }
  }

  return { basic, setItem };
});
