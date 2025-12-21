import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript").map(config => {
    // Strip name property if present in any of the returned config objects.
    // This is a workaround for Next.js 15.1+ where some configs include
    // a 'name' property that @eslint/eslintrc's FlatCompat does not expect
    // when validating legacy-style objects.
    const { name, ...rest } = config;
    return rest;
  }),
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts", "node_modules/**"],
  }
];

export default eslintConfig;
