const withNextra = require('nextra')({
  reactStrictMode: true,
  poweredByHeader: false,
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

module.exports = withNextra();
