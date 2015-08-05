import Ember from 'ember';

export default Ember.Controller.extend({
  hasDescription: Ember.computed.notEmpty('model.description'),

  actions: {
    save() {
      if (!this.get('hasDescription')) {
        this.set('errorMessage', 'You have to fill the description field');
        return false;
      } else {
        return true;
      }
    },
  },
});
