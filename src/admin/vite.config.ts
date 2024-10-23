import { mergeConfig, type UserConfig, defineConfig } from 'vite';

export default (config: UserConfig) => {
  let viteConfig = defineConfig({
    server: {
      fs: {
        allow: ['/opt/node_modules', '/opt/app'],
      },
    },
  });

  return mergeConfig(config, viteConfig);
};
