import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { codecovVitePlugin } from "@codecov/vite-plugin";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const codeCovToken = env.VITE_APP_CODECOV_TOKEN;

  return {
    plugins: [
      react(), // Put the Codecov vite plugin after all other plugins
      codecovVitePlugin({
        enableBundleAnalysis: codeCovToken !== undefined,
        bundleName: "vite-ts-tests",
        uploadToken: process.env.VITE_CODECOV_TOKEN,
      }),
    ],
  };
});
