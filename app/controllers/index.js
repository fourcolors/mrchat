var IndexController = Ember.ArrayController.extend({
  actions: {
    sendMessage: function() {
      this.pushObject({ 
        username: this.get('username'), 
        message: this.get("message") 
      });
      return false;
    }
  }
});

export default IndexController;
