/*
    startup.js

    Start the app. Views take care of the rest.
*/

define([
    'jquery',
    'backbone',
    'views/app',
    'router',
], function( $, Backbone, App, Router ){

    function start(){
        C.log( 'Startup.start()' );

        //  Create :
        //      new App.Frame
        //      new Router
        //  If there is going to be an authentication process, 
        //    pass in the authentication token to the app.frame
        //    as a model.
        var frame = new App.Frame();
        $('body').prepend( frame.el );

        var router = new Router.AppRouter( frame );

        // Start the backbone history.
        Backbone.history.start();
    }

    return {
        start: start,
    }
});
