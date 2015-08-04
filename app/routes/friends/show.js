import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    // REFACTORED: Moved to friends route
    //delete(friend) {
    //  friend.destroyRecord().then(() => {
    //    this.transitionTo('friends.index');
    //  });
    //}
  }
});
