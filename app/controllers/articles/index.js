import Ember from 'ember';

export default Ember.Controller.extend({
  possibleStates: ["borrowed", "returned"],
  queryParams: ['showReturned'],
  showReturned: false,

  contentDidChange: Ember.observer('model.[]', function () {
    console.log('Called when we add or removed an article.');
  }),

  stateDidChange: Ember.observer('model.@each.state', function () {
    console.log('Called when the state property change for any of the articles.');

  }),

  filteredResults: Ember.computed(
    'showReturned',
    'model.@each.state',
    {
      get(){
        if(!this.get('showReturned')){
          return this.get("model").filterBy('state','borrowed');
        } else {
          return this.get("model");
        }
      }
    }
  ),

  actions: {
    showFilter(){
      this.toggleProperty('showReturned');
      return false;
    },
  }
});
