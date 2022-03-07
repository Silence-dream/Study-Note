import babel from "rollup-plugin-babel";
import localResolver from "rollup-plugin-local-resolve";

export default {
  input: "src/index.js",
  output: {
    file: "dist/TinyVue.js",
    //
    format: "umd",
    name: "TinyVue",
    sourcemap: true,
  },
  plugins: [
    babel({
      presets: ["@babel/preset-env"],
      exclude: "node_modules/**"
    }),
    localResolver(),
  ],
};