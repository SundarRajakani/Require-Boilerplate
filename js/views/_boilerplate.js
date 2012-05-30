/*
    _boilerplate

    Not production code; just good for time-saving copypasta.

*/

define([
    'jQuery',
    'Underscore',
    'Backbone',
], function( $, _, Backbone ){
    
    var BasicView = Backbone.View.extend({
        tagName: 'div',
        id: null,
        className: null,
        initialize: function(){},
        render: function(){
            return this;
        },

        //  View Methods.
        //  ....

        //  Controller Events.
        events: { },

        //  Controller Callbacks.
        //  ....

    });
    
    return {
        basic: BasicView,
    }
});
