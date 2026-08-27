import { defineConfig, mergeConfig } from 'vitest/config';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import viteConfig from './vite.config.ts';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
    },
  }),
);
