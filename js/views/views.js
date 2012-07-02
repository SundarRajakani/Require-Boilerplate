define([
    'jquery',
    'underscore',
    'backbone',
], function( $, _, Backbone ){
    
    var MainView = Backbone.View.extend({
        tagName: "div",
        id: "main",
        initialize: function(){},
        render: function(){
            return this;
        },
    });
    
    return {
        main: MainView,
    }
});
