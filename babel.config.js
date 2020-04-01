const __DEV__ = process.env.NODE_ENV !== 'production';
/**
 * Configuración para babel
 * 
 * @var {function}
 */
module.exports = function configureBabel(api){
 api.cache(false);

 return {
  presets: [
   require('@babel/preset-env', { loose: true }),
   require('@babel/preset-react'),
   require('babel-preset-fbjs')
  ],
  plugins: [
   require('babel-plugin-styled-components', {
    displayName: __DEV__,
    minify: __DEV__,
    transpileTemplateLiterals: __DEV__,
    ssr: false
   }),
   require('@babel/plugin-transform-async-to-generator'),
   require('@babel/plugin-proposal-class-properties', { loose: true }),
   require('@babel/plugin-syntax-dynamic-import'),
   require('@babel/plugin-transform-runtime'),
   require('@babel/plugin-transform-react-jsx-source')
  ]
 }
}