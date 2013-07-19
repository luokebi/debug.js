debug.js
========

* Debug.js
** Features:
1. Ability to set prefix for the content of what you want to 
``js
debug.setPrefix("XXX:");
debug.log("hello world"); // log "XXX:hello world"
``
2. Ability to disable all method.
``js
debug.disable();
debug.log("hello world"); // nothing will to log
``
