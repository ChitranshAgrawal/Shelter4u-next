import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// <<<<<<< HEAD
const eslintConfig = [...compat.extends("next/core-web-vitals")];
// =======
// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
// ];
// >>>>>>> 7e66a0224e76de08ccb94ba0ef3fd5a088c1cb03

export default eslintConfig;
