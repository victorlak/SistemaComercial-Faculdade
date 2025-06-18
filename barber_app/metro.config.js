const { getDefaultConfig } = require('expo/metro-config');
// Se não for um projeto Expo, a linha acima pode ser:
// const { getDefaultConfig } = require('@react-native/metro-config');
const { mergeConfig } = require('metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const {
  resolver: { sourceExts, assetExts }
} = defaultConfig;

/**
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer')
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg']
  }
};

module.exports = mergeConfig(defaultConfig, config);