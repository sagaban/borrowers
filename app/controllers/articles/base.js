import Ember from 'ember';

export default Ember.Controller.extend({
  hasDescription: Ember.computed.notEmpty('model.description'),
  isValid: Ember.computed.alias('hasDescription'),
  actions: {
    save() {
      if (this.get('isValid')) {
        return true;
      } else {
        this.set('errorMessage', 'You have to fill the description field');
        return false;
      }
    },
    cancel() {
      return true;
    }
  }
});
