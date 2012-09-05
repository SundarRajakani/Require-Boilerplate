define([
    'jquery',
    'underscore',
    'backbone',
], function( $, _, Backbone ){
    
    var LandingPage = Backbone.View.extend({
        id: 'pg_landing',
        initialize: function(){},
        render: function(){
            return this;
        },
    });
    
    return {
        LandingPage: LandingPage
    }
});
