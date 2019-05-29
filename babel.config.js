module.exports = {
  presets: [
    '@babel/env'
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ],
  env: {
    test: {
      presets: [
        ['@babel/env', { exclude: ['transform-classes'] }]
      ]
    }
  }
}
