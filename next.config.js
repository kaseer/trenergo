const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')
const { getThemeVariables } = require('antd/dist/theme')

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './shared/antd-custom.less'), 'utf8')
)

const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')
const isProd = process.env.NODE_ENV === 'production'

if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  ...withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables,
    },
  }),
})
