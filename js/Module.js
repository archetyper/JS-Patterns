var Module = (function(){

    var _private = {

        init: function(){

        },
        privateFunction: function(){

        }
    };

    var _public = {

        publicFunction: function(){

            _private.privateFunction();
        }
    };

    _private.init();

    return _public;

}());