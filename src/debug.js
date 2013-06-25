var debug = (function(){
    var sel = {},
         _debug = true,
        UNDEFINED = "undefined",
        _levels = ["log","debug","info","warn","error"],
        _length = _levels.length,
        _emptyFunc = function(){},
        console = window.console,
        i;

    function _isConsoleFuntionExist(level){
        return typeof console[level] === UNDEFINED;
    }

    function _isConsoleExist(){
        return typeof console === UNDEFINED;
    }

    function _getConsoleFunction(level){
        if (console[level].bind === undefined) {
            if (Function.prototype.bind === undefined) {
                return function(){
                    console[level].apply(console,arguments);
                };
            } else {
                return Function.prototype.bind.call(console[level],console);
            }
        } else {
            return console[level].bind(console);
        }

    }

    function _generateMethod(level){
        if (_isConsoleExist()) {
            return _emptyFunc;
        } else if (_isConsoleFuntionExist(level)) {
            return _getConsoleFunction('log') || _emptyFunc;
        } else {
            return _getConsoleFunction(level);
        }
    }
    //TODO: add a switch
    //TODO: add prefix


    for (i = 0;i < _length;i++) {
        var level = _levels[i];
        sel[level] = _generateMethod(level);
    }

    return sel;
}());