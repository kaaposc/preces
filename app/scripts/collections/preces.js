define([
  'backbone',
  'models/prece',
  'backboneLocalstorage'
],

function (Backbone, Prece, Store) {
  var Preces = Backbone.Collection.extend({
    model: Prece,

    localStorage: new Store('preces-store')
  });

  return new Preces();
});