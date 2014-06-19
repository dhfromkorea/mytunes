// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(){
    // this.on('ended', function(){
    //   this.dequeue();
    // }, this);
  },
  ended: function(){
    this.trigger('ended', this);
  },
  play: function(){
    this.trigger('play', this);
  },
  enqueue: function() {
    this.trigger('enqueue', this);
  },
  dequeue: function(){
    this.trigger('dequeue', this);
  }
});
