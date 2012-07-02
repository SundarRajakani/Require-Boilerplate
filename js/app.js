/*
    app.js

    Start the app. Views take care of the rest.
*/

define([
    'jquery',
    'backbone',
    'views/views',
], function( $, Backbone, Views ){

    function init(){
         var v = new Views.main().render();
        $('body').prepend( v.el );

        //  If you add a router, uncomment this line.
        //  Backbone.history.start();
    }

    return {
        init: init,
    }
});
