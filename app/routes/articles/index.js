import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    let articles = this.modelFor('friends/show').get('articles');

    //
    // The return value from an async relationship is a PromiseArray.
    // The property isFulfilled will become true when the proxied
    // promise has been fulfilled. In this case, that would be when we
    // get a response from the API.
    //
    if (articles.get('isFulfilled')) {
      articles.reload();
    }
    return articles;

  },

  actions: {
    save(model) {
      console.log("It go trough index article routes, and NOT bubble up");
      model.save();
      return false;
    }
  }
});
