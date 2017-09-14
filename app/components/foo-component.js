import Ember from 'ember';

export default Ember.Component.extend({
  computedModel: Ember.computed('model', function() {
    return this.get('model').map(function(m) {
      return `Computed: ${m.data.bar}`;
    });
  }),

  computedModelChanged: Ember.observer('model', function() {
    console.log('computedModelChanged');
  }),

  init() {
    this._super(...arguments);
    this.get('computedModelChanged');
  },

  actions: {
    refreshModel() {
      this.sendAction('invalidateModel');
    }
  }
});
