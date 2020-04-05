/**
 * Configuración para el present de @babel/preset-env.
 * 
 * @var {object} configPresetBabelEnv
 */
const configPresetBabelEnv = {
 useBuiltsIn: 'entry',
 exclude: ['@babel/plugin-proposal-dynamic-import'],
 shippedProposals: true,
 targets: {node: 'current'},
};
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
   require('babel-preset-fbjs'),
  ],
  plugins: [
   require('@babel/plugin-transform-runtime', {
    corejs: 2
   }),
   require('@babel/plugin-syntax-dynamic-import'),
  ]
 }
}
