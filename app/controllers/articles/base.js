import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.description',
    {
      get() {
        return !Ember.isEmpty(this.get('model.description'));
      }
    }
  ),
  actions: {
    save() {
      if (this.get('isValid')) {
        return true;
      } else {
        this.set('errorMessage', 'You have to fill the description field');
      }
      return false;
    },
    cancel() {
      return true;
    }
  }
});
