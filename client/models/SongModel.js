// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(){

    this.on('ended', function(){
      this.dequeue();
    }, this);

  },
  ended: function(){
    // this.dequeue();
    this.trigger('ended', this);
  },
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  enqueue: function() {
    this.trigger('enqueue', this);
  },
  dequeue: function(){
    this.trigger('dequeue', this);
  }
});
