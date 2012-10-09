/*
    main.js
*/

requirejs.config({
    paths: {
        jquery: 'libs/jquery-1.8.1.min',
        underscore: 'libs/underscore-1.3.3.min',
        backbone: 'libs/backbone-0.9.2.min',
        handlebars: 'libs/handlebars.runtime-1.0.beta.6.min',
        console: 'submodules/safe-console/console',
        templates:  'build/templates',
    },

    shim: {
        jquery: {
            exports: function(){
                return this.$.noConflict();
            },
        },
        underscore: {
            exports: function(){
                return this._.noConflict();
            },
        },
        backbone: {
            deps: [ 'jquery', 'underscore' ],
            exports: 'Backbone',
        },
        handlebars: {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'Handlebars',
        },
        templates: {
            deps: ['handlebars'],
            exports: 'Templates',
        },
    },
});

//  Start the app.
require([
    'jquery',
    'backbone',
    'console',
    'router',
    'views/app',
], function( $, Backbone, SC, Router, App ){ 

    SC.setDebugMode( true );
    console.log( 'Debug mode is currently on.' );
    console.log( '  This means that console.log will be visible.' );


    /*
        Start it up:

        Create:
            new Wrapper view
            new Router

        If there's any authentication, store those methods
          in the Wrapper view which holds the whole dang thing.
    */

    var wrapper = new App.Wrapper();
    $('body').prepend( wrapper.el );

    var router = new Router.AppRouter( wrapper );
    Backbone.history.start();
});
