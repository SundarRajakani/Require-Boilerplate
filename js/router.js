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

            //  Default Link Handling:
            //  +   Any anchor with an HREF in front of it, we're going to assume
            //      is an outside resource.
            //  +   Anything else, feed through the router.
            //  +   Also handily prevents JS injection.
            $(document).on("click touchend", "a:not([data-bypass])", function( ev ){
                var clicked = this;
                var href = $(clicked).attr('href');
                var protocol = clicked.protocol + '//';

                if (href && href.slice(0, protocol.length) !== protocol &&
                    href.indexOf("javascript:") !== 0) {

                    C.log('continuing');

                    //  Prevent reload.
                    ev.preventDefault();

                    //  Add into the backbone history stack.
                    Backbone.history.navigate(href, true);

                } else {
                    //  Trace for outbound links if we ever want to track.
                    C.log('outbound');
                }
            });

        },
        routes: { 
            '': 'index',
            /* add routes here */
        },
       
        //  Landing page.
        index: function(){
            C.log('Route:index');
            var self = this;

            var landingPage = new Pages.LandingPage({ router: self }).render();
            this.frame.$el.html( landingPage.el );
        },
    });

    return {
        AppRouter: AppRouter,
    }
});
