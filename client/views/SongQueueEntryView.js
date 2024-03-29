// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  initialize: function() {
    _.bindAll(this, 'render');
    this.render();
  },

  tagName: 'tr',

   template: _.template("<td>(<%= artist %>)</td><td><%= title %></td>"),

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});