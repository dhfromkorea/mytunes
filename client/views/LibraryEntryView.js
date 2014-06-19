// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  initialize: function(){
    _.bindAll(this, 'render', 'play');
    this.model.set({'counter':0});
    this.model.on('change:counter', function(){
      this.render();
    },this);
  },

  tagName: 'tr',

  template: _.template("<td>(<%= artist %>)</td><td><%= title %></td><td><%= this.model.get('counter') %></td>"),

  events: {
    'click': 'play'
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },

  play: function(){
    this.model.play();
    var newCount = this.model.get('counter')+1;
    this.model.set({'counter': newCount});
  }
});
