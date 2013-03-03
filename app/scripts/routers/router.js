define([
  'backbone'
],

function (Backbone) {
  var Router = Backbone.Router.extend({
    routes: {
      '*all': 'index'
    },

    index: function (hash) {
      console.log('Router.index() called. Hash is ' + (hash || '/'));
    }
  });

  return Router;
});