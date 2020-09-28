module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ],
  env: {
    prod: {
      plugins: [
        ['transform-rename-import', {
          original: '^(.+?)\\.scss',
          replacement: '$1.css'
        }]
      ]
    },
    test: {
      plugins: [
        'require-context-hook'
      ]
    }
  }
};
