!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}({3:function(e,t,n){"use strict";function r(){return genesis_page_builder_globals.blockSettingsPermissions}function o(){var e=[];return wp.blocks.getBlockTypes().map((function(t){(t.name.startsWith("genesis-blocks")||t.name.startsWith("genesis-page-builder"))&&e.push(t)})),e=e.filter((function(e){return e.hasOwnProperty("gb_settings_data")||e.hasOwnProperty("gpb_settings_data")}))}function i(){return genesis_page_builder_globals.allRoles}n.r(t),n.d(t,"getBlockSettingsPermissions",(function(){return r})),n.d(t,"get_registered_gpb_blocks",(function(){return o})),n.d(t,"getAllRoles",(function(){return i})),wp.hooks.addFilter("gb_should_render_block_setting","gpb",(function(e,t,n,o){var i=r();return void 0===i[t]||void 0===i[t][n]?e:o.roles.some((function(e){return!0===i[t][n][e]}))}))}});