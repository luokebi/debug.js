var debug = (function(){
    var sel = {},
         _debug = true,
        UNDEFINED = "undefined",
        _levels = ["log","debug","info","warn","error"],
        _length = _levels.length,
        _emptyFunc = function() {},
        console = window.console,
        _prefix = '[Diigo]:',
         i;

    function _isConsoleFuntionExist(level){
        return typeof console[level] === UNDEFINED;
    }

    function _isConsoleExist(){
        return typeof console === UNDEFINED;
    }

    function _getConsoleFunction(level, _prefix){
        if (console[level].bind === undefined) {
            if (Function.prototype.bind === undefined) {
                return function(){
                    var args = Array.prototype.slice.apply(arguments);
                    args.unshift(_prefix);
                    console[level].apply(console,args);
                };
            } else {
                return Function.prototype.bind.call(console[level],console,_prefix);
            }
        } else {
            return console[level].bind(console,_prefix);
        }

    }

    function _generateMethod(level, _prefix){
        if (_isConsoleExist()) {
            return _emptyFunc;
        } else if (_isConsoleFuntionExist(level)) {
            return _getConsoleFunction('log', _prefix) || _emptyFunc;
        } else {
            return _getConsoleFunction(level, _prefix);
        }
    }

    sel.init = function() {
        for (i = 0;i < _length;i++) {
            var level = _levels[i];
            if (_debug === true) {
                sel[level] = _generateMethod(level, _prefix);
            } else {
                sel[level] = _emptyFunc;
            }

        }
    };

    // switcher for debug
    sel.disable = function() {
        _debug = false;
        this.init();
    };

    // set prefix to console
    sel.setPrefix = function(prefix) {
        _prefix ='[' + prefix + ']:';
        this.init();
    };

    sel.init();

    return sel;
}());