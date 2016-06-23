
/**
 * https://github.com/EddyVerbruggen/cordova-plugin-googleplus
 */
class OAuthGoogle {

    /**
     *
     */
    constructor( $window, $localStorage ) {
        this.$window = $window;
        this.$localStorage = $localStorage;
    }

    /**
     *
     */
    login( options, success, error ) {
        /**
         * Exemplo de objeto retornado pelo google
         * {
         *      ageRangeMin: 21
         *      displayName: "Vinícius Salomão (ViZeke)"
         *      email: "vizeke@gmail.com"
         *      familyName: "Salomão"
         *      gender: "male"
         *      givenName: "Vinícius"
         *      imageUrl: "<url>"
         *      oauthToken: "<access token>"
         *      userId: "109899610867148451723"
         * }
         */
        this.$window.plugins.googleplus.login( options,
        ( responseGoogle ) => {
            //Salva o token do Google
            this.$localStorage.googleAccessToken = responseGoogle;

            success( responseGoogle );
        }, error );
    }

    trySilentLogin( options, success, error ) {
        this.$window.plugins.googleplus.trySilentLogin( options, success, error );
    }

    logout( cb ) {
        if ( this.$window.plugins && this.$window.plugins.googleplus ) {
            this.$window.plugins.googleplus.logout( cb );
        }
    }

    disconnect( cb ) {
        this.$window.plugins.googleplus.disconnect( cb );
    }
}

export default [ '$window', '$localStorage', OAuthGoogle ];
