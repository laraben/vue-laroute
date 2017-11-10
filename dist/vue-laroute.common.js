/*!
 * vue-laroute v0.0.0 
 * (c) 2017 Sam Turrell
 * Released under the MIT License.
 */
'use strict';

function plugin (Vue, options) {
  if ( options === void 0 ) options = {};

  options = Object.assign({
    accessor: '$routes',
    routes: {}
  }, options);

  Vue.prototype[options.accessor] = options.routes;
}

plugin.version = '0.0.0';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

module.exports = plugin;
