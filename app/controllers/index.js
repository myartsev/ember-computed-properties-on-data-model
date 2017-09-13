import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    refreshModel() {
      this.send('invalidateModel');
    }
  }
});
