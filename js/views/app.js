/*
    app.js
*/
define([
    'jquery',
    'underscore',
    'backbone',
], function( $, _, Backbone ){

    var FrameView = Backbone.View.extend({
        id: 'frame',
        initialize: function(){},
        render: function(){
            return this;
        },
    });

    return { 
        Frame: FrameView,
    }
});
