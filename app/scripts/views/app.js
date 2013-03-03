define([
  'backbone',
  'jquery',
  'collections/preces'
],

function (Backbone, $, Preces) {
  var AppView = Backbone.View.extend({
    el: '#main',

    events: {
      'submit #new-forma': 'addPrece'
    },

    initialize: function () {
      console.log('AppView initialized.');
      this.$forma = this.$('#new-forma');
    },

    addPrece: function (e) {
      e.preventDefault();
      console.log('Form submitted with ' + this.$forma.serialize());
      var values = this.$forma.serializeArray();
      Preces.create({
        nosaukums: values['nosaukums'],
        cena: values['cena'],
        nodoklis: values['nodoklis']
      });
      console.log(Preces.length);
    }
  });

  return AppView;
})