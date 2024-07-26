import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/main.ts",
    output: {
      name: "@vladsilav68/react-responsive",
      file: pkg.browser,
      format: "umd",
      globals: {
        react: "React",
        "react/jsx-runtime": "jsxRuntime",
      },
    },
    plugins: [typescript({ tsconfig: "./tsconfig.json" })],
    external: ["react", "react/jsx-runtime"],
  },
  {
    input: "src/main.ts",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    plugins: [typescript({ tsconfig: "./tsconfig.json" })],
    external: ["react", "react/jsx-runtime"],
  },
];