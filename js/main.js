/*
    main.js
*/

requirejs.config({
    paths: {
        jquery: 'libs/jquery-1.8.1.min',
        underscore: 'libs/underscore-1.3.3.min',
        backbone: 'libs/backbone-0.9.2.min',
        handlebars: 'libs/handlebars-1.0.6.min',
        console: 'submodules/safe-console/console',
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

    },
});

//  Start the app.
require([
    'startup',
    'console',
], function( Startup, SC ){ 

    SC.setDebugMode( true );
    console.log( 'Debug mode is currently on.' );
    console.log( '  This means that console.log will be visible.' );

    Startup.start();

});
