/*
    router.js
*/
define([
    'jquery',
    'backbone',
    'views/pages',
], function( $, Backbone, Pages ){


    var AppRouter = Backbone.Router.extend({
        initialize: function( frame ){
            this.frame = frame;
        },
        routes: { 
            '': 'defaultRoute',
            /* add routes here */
        },
       
        //  Landing page.
        defaultRoute: function(){
            C.log('Route:default');
            var self = this;

            var landingPage = new Pages.LandingPage({ router: self }).render();
            this.frame.$el.html( landingPage.el );
        },
    });

    return {
        AppRouter: AppRouter,
    }
});
