export default Ember.Route.extend({
  model: function() {
    return EmberFire.Array.create({
      ref: new Firebase("https://mrchat.firebaseio.com/messages")
    });
  }
});
