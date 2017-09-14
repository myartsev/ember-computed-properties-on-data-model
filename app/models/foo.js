import DS from 'ember-data';

export default DS.Model.extend({
  bar: DS.attr('number'),
  baz: DS.attr('string')
});
