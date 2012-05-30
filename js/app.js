/*
    app.js

    Start the app. Views take care of the rest.
*/

define([
    'jQuery',
    'Backbone',
    'router',
    'views/views',
], function( $, Backbone, Router, Views ){
    var initialize = function(){
        
        this.view = new Views.main().render();

        Backbone.history.start();

        $('body').prepend( this.view.el );
    }

    return {
        initialize: initialize,
    }
});
