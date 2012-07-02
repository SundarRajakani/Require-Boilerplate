/*
    main.js
*/

requirejs.config({
    paths: {
        jquery: 'libs/jquery-1.7.2.min',
        underscore: 'libs/underscore-1.3.3.min',
        backbone: 'libs/backbone-0.9.2.min',
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
], function( App ){ 
    App.init();
});
