// Require.js configuration for application
require.config({

  baseUrl: '/amd-tests/app/scripts',

  paths: {
    // JavaScript folders.
    libs: "../scripts/libs",
    plugins: "../scripts/plugins",

    // Libraries.
    jquery: "libs/jquery",
    lodash: "libs/lodash",
    backbone: "libs/backbone",
    backboneLocalstorage: 'libs/backbone.localStorage',
  },

  shim: {
    // Backbone library depends on lodash and jQuery.
    backbone: {
      deps: ["lodash", "jquery"],
      exports: "Backbone"
    },
    backboneLocalstorage: {
      deps: ['backbone'],
      exports: 'Store'
    },

    // Backbone.LayoutManager depends on Backbone.
    "plugins/backbone.layoutmanager": ["backbone"]
  }

});

define([
  'backbone',
  'routers/router',
  'views/app'
],

function (Backbone, Router, AppView) {
  new Router();
  Backbone.history.start();

  var app = new AppView();
});