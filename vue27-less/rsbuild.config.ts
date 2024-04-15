import { defineConfig } from "@rsbuild/core";
import { pluginVue2 } from "@rsbuild/plugin-vue2";

export default defineConfig({
  plugins: [pluginVue2()],
  output: { cleanDistPath: true },
  dev: { progressBar: false },
  tools: {
    bundlerChain(chain, { CHAIN_ID }) {
      chain.module.rule(CHAIN_ID.RULE.LESS).use("debug").loader(require.resolve("../debug-loader"));
    },
    rspack(config) {
      return config;
    },
  },
});
