import { defineConfig } from "tsup";
import { sassPlugin } from "esbuild-sass-plugin";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
    esbuildPlugins: [
      // sassPlugin({ type: "css" })
          sassPlugin({
      type: "local-css", // IMPORTANT: use css-module
    }),

    ], 
    
});
