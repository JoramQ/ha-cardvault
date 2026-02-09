import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default {
    input: "src/cardvault-card.ts",
    output: {
        file: "../custom_components/cardvault/frontend/cardvault-card.js",
        format: "es",
        sourcemap: false,
    },
    plugins: [
        resolve({ browser: true }),
        commonjs(),
        typescript(),
        terser(),
    ],
};
