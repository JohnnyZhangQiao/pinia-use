import { defineConfig, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';

// https://vitejs.dev/config/
export default defineConfig(({ command }: ConfigEnv) => {
  return {
    base: './',
    plugins: [
      vue(),
      // script setup语法糖增强插件
      VueSetupExtend()
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: '/src'
        }
      ]
    }
  };
});
