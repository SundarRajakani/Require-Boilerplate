/*
    app.js
*/
define([
    'jquery',
    'underscore',
    'backbone',
], function( $, _, Backbone ){

    var Foundation = Backbone.View.extend({
        initialize: function(){
            $('body').addClass('app');
        },
    });

    return { 
        Foundation: Foundation,
    }
});
