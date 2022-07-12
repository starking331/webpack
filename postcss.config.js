module.exports = () => ({
    plugins: {
      'postcss-import': {},
      'postcss-normalize':{},
      'postcss-preset-env': {
        features: {
          'custom-properties': {
            warnings: false,
          },
          'custom-media-queries': {
            importFrom: 'src/main.css'
          }
        },
      }
    },
  });