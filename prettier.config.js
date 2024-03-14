/** @type {import('prettier').Config & Partial<{experimentalTernaries: boolean}> & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  singleQuote: false,
  semi: false,
  tabWidth: 2,
  experimentalTernaries: true,
};

module.exports = config;
