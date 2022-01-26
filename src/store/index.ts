import { roleStore } from './roleStore';
import { useCounterStoreForSetup } from '@/store/counterForSetup';
import { useCounterStoreForOption } from '@/store/counterForOptions';

const appStore: any = {};

/**
 * 注册app状态库
 */
export const registerStore = () => {
  appStore.roleStore = roleStore();
  appStore.useCounterStoreForSetup = useCounterStoreForSetup();
  appStore.useCounterStoreForOption = useCounterStoreForOption();
};

export default appStore;
