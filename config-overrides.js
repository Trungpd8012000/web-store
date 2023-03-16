const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@componentsHeader': path.resolve(__dirname, 'src/components/Header/components/'),
    '@componentsMain': path.resolve(__dirname, 'src/components/'),
    '@assetsImg': path.resolve(__dirname, 'src/assets/img/'),
    '@assetsScss': path.resolve(__dirname, 'src/assets/scss/'),
  })
);
