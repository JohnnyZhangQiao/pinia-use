import { roleStore } from './roleStore';
import { useCounterStoreForSetup } from '@/store/counterForSetup';
import { useCounterStoreForOption } from '@/store/counterForOptions';
import { initResetFun } from '@/utils/storeTools';

export interface IAppStore {
  roleStore: ReturnType<typeof roleStore>;
  useCounterStoreForSetup: ReturnType<typeof useCounterStoreForSetup>;
  useCounterStoreForOption: ReturnType<typeof useCounterStoreForOption>;
}

const appStore: IAppStore = {} as IAppStore;

/**
 * 注册app状态库
 */
export const registerStore = () => {
  appStore.roleStore = roleStore();
  appStore.useCounterStoreForSetup = useCounterStoreForSetup();
  appStore.useCounterStoreForOption = useCounterStoreForOption();

  // 重写reset方法
  initResetFun(appStore);
};
export default appStore;
