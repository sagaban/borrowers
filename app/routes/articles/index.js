import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('friends/show').get('articles');
  },

  actions: {
    save(model) {
      console.log("It go trough index article controller, and NOT bubble up");
      model.save();
      return false;
    }
  }
});
