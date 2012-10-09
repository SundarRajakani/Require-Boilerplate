define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'templates',
], function( $, _, Backbone, Handlebars, Templates ){
    
    var LandingPage = Backbone.View.extend({
        id: 'pg_landing',
        initialize: function(){},
        render: function(){
            var self = this;
            $( self.el ).append( 

                //  Append your template name here:
                Handlebars.templates.helloworld 

            );
            
            return this;
        },
    });
    
    return {
        LandingPage: LandingPage
    }
});
