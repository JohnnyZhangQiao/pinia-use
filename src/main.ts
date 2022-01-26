import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { registerStore } from '@/store';

const app = createApp(App);

app.use(createPinia());
// 注册pinia状态管理库
registerStore();

app.mount('#app');
