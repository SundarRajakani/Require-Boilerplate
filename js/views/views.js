define([
    'jQuery',
    'Underscore',
    'Backbone',
], function(){
    
    var MainView = Backbone.View.extend({
        tagName: "div",
        id: "main",
        initialize: function(){},
        render: function(){},
    });
    
    return {
        main: MainView,
    }
});
