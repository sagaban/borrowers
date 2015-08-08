import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return this.store.createRecord('friend');
    },
    activate() {
      console.log('----- activate hook called -----');
    },
    deactivate() {
      console.log('----- deactivate hook called -----');
    },
    resetController: function(controller, isExiting, transition) {
      if (isExiting) {
        console.log('----- resetController hook called -----');
      }
    },

    actions: {
      save() {
          console.log('+-- save action bubbled up to friends route');
          return true;
        },
        cancel() {
          console.log('+-- cancel action bubbled up to friends route');
          return true;
        }
    },
});