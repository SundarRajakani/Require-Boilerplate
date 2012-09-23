/*
    app.js
*/
define([
    'jquery',
    'underscore',
    'backbone',
], function( $, _, Backbone ){

    var WrapperView = Backbone.View.extend({
        id: 'wrapper',
        initialize: function(){},
        render: function(){
            return this;
        },
    });

    return { 
        Wrapper: WrapperView,
    }
});
