/*
    main.js
*/

requirejs.config({
    paths: {
        jquery: 'libs/jquery-1.7.2.min',
        underscore: 'libs/underscore-1.3.3.min',
        backbone: 'libs/backbone-0.9.2.min',
        console: 'utilities/safe-console/console',
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
    },
});

//  Start the app.
require([
    'app',
    'console',
], function( App, SC ){ 

    SC.setDebugMode( true );
    console.log( 'Debug mode is currently on.' );
    console.log( 'This means that console.log will be visible.' );

    App.init();

});
