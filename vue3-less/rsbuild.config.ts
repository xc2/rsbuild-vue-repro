import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";

export default defineConfig({
  plugins: [pluginVue()],
  output: { cleanDistPath: true },
  dev: { progressBar: false },
  tools: {
    bundlerChain(chain, { CHAIN_ID }) {
      chain.module
        .rule(CHAIN_ID.RULE.LESS)
        .use("debug1")
        .loader(require.resolve("../debug-loader"));
    },
    rspack(config) {
      return config;
    },
  },
});
