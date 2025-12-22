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
    // Strip name property and deeply clone to avoid circular references
    const { name, plugins, ...rest } = config;
    
    // Handle plugins separately to avoid circular structure
    const cleanedConfig = { ...rest };
    
    if (plugins) {
      cleanedConfig.plugins = Object.keys(plugins).reduce((acc, key) => {
        acc[key] = plugins[key];
        return acc;
      }, {});
    }
    
    return cleanedConfig;
  }),
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts", "node_modules/**"],
  }
];

export default eslintConfig;
