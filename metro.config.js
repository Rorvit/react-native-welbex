const { getDefaultConfig } = require('metro-config');
const { resolve } = require('path');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  return {
    resolver: {
      sourceExts: [...sourceExts, 'env'],
      assetExts,
      extraNodeModules: {
        '@env': resolve(__dirname, '.env'),
      },
    },
  };
})();
