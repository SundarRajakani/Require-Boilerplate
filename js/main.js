/*
    main.js

    Credit to Thomas Davis <thomasalwyndavis@gmail.com>
*/


//  Path config.
require.config({
    paths: {
        strap: 'libs/backbone/strap',
        jQuery: 'libs/jquery/r-jquery',
        Underscore: 'libs/underscore/r-underscore',
        Backbone: 'libs/backbone/r-backbone',
        order: 'libs/require/order',
        text: 'libs/require/text',
    },
});

//  Start the app.
require([
    'app',
], function( App ){
    App.initialize();
});
