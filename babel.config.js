const __DEV__ = process.env.NODE_ENV !== 'production';
const __TEST__ = process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'testing';
/**
 * Configuración para el present de @babel/preset-env.
 * 
 * @var {object} configPresetBabelEnv
 */
const configPresetBabelEnv = {
 loose: true,
 useBuiltIns: 'usage'
};

if(__TEST__){
 /**
  * Configuración para los test de Jest.
  * Para más información ver: 
  * https://jestjs.io/docs/en/getting-started#using-babel
  */
 configPresetBabelEnv.targets = {
  node: 'current'
 }
}
/**
 * Configuración para babel
 * 
 * @var {function}
 */
module.exports = function configureBabel(api){
 api.cache(false);

 return {
  presets: [
   require('@babel/preset-env', configPresetBabelEnv),
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
   require('@babel/plugin-transform-runtime', {
    corejs: 3
   }),
   require('@babel/plugin-transform-react-jsx-source')
  ]
 }
}
