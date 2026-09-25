import nextConfig from "eslint-config-next";

const eslintConfig = [
    ...nextConfig,
    {ignores: [".open-next/**", "cloudflare-env.d.ts"]},
];

export default eslintConfig;
