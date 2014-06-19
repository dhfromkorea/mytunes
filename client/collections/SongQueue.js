// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  
  initialize: function() {
    this.on('dequeue', function(song) {
      this.remove(song);
      // automatically plays the next song
      if (this.legnth > 0){
        this.at(0).play();
      }
    }, this);

  },

  playFirst: function() {
    this.at(0).play();
  }
});