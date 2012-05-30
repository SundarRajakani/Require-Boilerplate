/*
    app.js

    Start the app. Views take care of the rest.
*/

define([
    'jQuery',
    'Backbone',
    'views/views',
], function( $, Backbone, Views ){

    var initialize = function(){
        console.log('App.initialize()');

        var v = new Views.main().render();
        $('body').prepend( v.el );

        //  If you add a router, uncomment this line.
        //  Backbone.history.start();
    }

    return {
        initialize: initialize,
    }
});
