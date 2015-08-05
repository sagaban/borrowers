import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('article', {
      // It is already the deafult values
      // /state: 'borrowed',
      friend: this.modelFor('friends/show')
    });
  },
  actions: {
    save() {
      var model = this.modelFor('articles/new');
      console.log("It go trough news article routes");

      model.save().then(() => {
        this.transitionTo('articles');
      });
    },
    cancel() {
      this.transitionTo('articles');
    }
  }
});
