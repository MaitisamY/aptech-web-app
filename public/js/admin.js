$(window).on( "load", () => {
    
    $( 'link[href*="admin-dark.css"]' ).attr( "disabled", "true" );
    $( '#themeWhite' ).css( "display", "none" );

    $( '#themeBlack' ).on( "click", () => {
        $( 'link[href*="admin-dark.css"]' ).removeAttr( "disabled" );
        $( '#themeWhite' ).css( "display", "block" );
        $( '#themeBlack' ).css( "display", "none" );
    });

    $( '#themeWhite' ).on( "click", () => {
        $( 'link[href*="admin-dark.css"]' ).attr( "disabled", "true" );
        $( '#themeBlack' ).css( "display", "block" );
        $( '#themeWhite' ).css( "display", "none" );
    });

});