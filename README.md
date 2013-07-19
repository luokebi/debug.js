debug.js
========

### Features:


Ability to set prefix for the content of what you want to log.

```javascript
debug.setPrefix("XXX:");
debug.log("hello world"); // log "XXX:hello world"
```
Ability to disable all method.

```javascript
debug.disable();
debug.log("hello world"); // nothing will to log
```
