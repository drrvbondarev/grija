const path = require('path')

module.exports = {
  // Source files
  src: path.resolve(__dirname, '../src'),

    main: path.resolve(__dirname, './src/index.js'),

  // Production build files
  build: path.resolve(__dirname, '../dist'),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, '../public'),
}
