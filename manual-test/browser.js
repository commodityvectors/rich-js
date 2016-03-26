(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Rich = require('../modules');
Rich.Core.applyAll();

console.log('3 Minutes', 3..minutes());

},{"../modules":4}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RichUtil = require('./util.js');

var RichArray = function () {
    function RichArray() {
        _classCallCheck(this, RichArray);
    }

    _createClass(RichArray, null, [{
        key: 'applyRichPrototype',
        value: function applyRichPrototype() {
            function getKeyFunction(p) {
                return typeof p === 'function' ? p : function (element) {
                    return element[p];
                };
            }

            RichUtil.applyToPrototype(Array, 'groupBy', function (indexElement) {
                var getKey = getKeyFunction(indexElement);
                return this.reduce(function (group, element) {
                    var key = getKey(element);
                    group[key] = group[key] || [];
                    group[key].push(element);
                    return group;
                }, {});
            });

            RichUtil.applyToPrototype(Array, 'indexBy', function (indexElement) {
                var getKey = getKeyFunction(indexElement);
                return this.reduce(function (result, element) {
                    var key = getKey(element);
                    result[key] = element;
                    return result;
                }, {});
            });

            RichUtil.applyToPrototype(Array, 'sample', function () {
                var length = this.length;
                return this[Math.floor(Math.random() * length)];
            });
        }
    }]);

    return RichArray;
}();

module.exports = RichArray;

},{"./util.js":7}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RichObject = require('./object.js');
var RichNumber = require('./number.js');
var RichArray = require('./array.js');

var RichCore = function () {
    function RichCore() {
        _classCallCheck(this, RichCore);
    }

    _createClass(RichCore, null, [{
        key: 'applyAll',
        value: function applyAll() {
            [RichObject, RichNumber, RichArray].map(function (r) {
                r.applyRichPrototype();
            });
        }
    }]);

    return RichCore;
}();

module.exports = RichCore;

},{"./array.js":2,"./number.js":5,"./object.js":6}],4:[function(require,module,exports){
'use strict';

module.exports = {
    'Core': require('./core.js'),
    'Object': require('./object.js'),
    'Number': require('./number.js'),
    'Array': require('./array.js')
};

},{"./array.js":2,"./core.js":3,"./number.js":5,"./object.js":6}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RichUtil = require('./util.js');

var RichNumber = function () {
    function RichNumber() {
        _classCallCheck(this, RichNumber);
    }

    _createClass(RichNumber, null, [{
        key: 'applyRichPrototype',
        value: function applyRichPrototype() {
            var SECONDS = 1000;

            RichUtil.applyToPrototype(Number, ['seconds', 'second'], function () {
                return this.valueOf() * SECONDS;
            });

            RichUtil.applyToPrototype(Number, ['minutes', 'minute'], function () {
                return this.valueOf() * 60..seconds();
            });

            RichUtil.applyToPrototype(Number, ['hours', 'hour'], function () {
                return this.valueOf() * 60..minutes();
            });

            RichUtil.applyToPrototype(Number, ['days', 'day'], function () {
                return this.valueOf() * 24..hours();
            });

            RichUtil.applyToPrototype(Number, 'times', function () {
                return Array.prototype.forEach.apply(Array.apply(null, {
                    length: this.valueOf()
                }).map(Number.call, Number), Array.prototype.slice.call(arguments));
            });

            RichUtil.applyToPrototype(Number, 'isEven', function () {
                return this.valueOf() % 2 === 0;
            });

            RichUtil.applyToPrototype(Number, 'isOdd', function () {
                return this.valueOf() % 2 === 1;
            });

            RichUtil.applyToPrototype(Number, 'km', function () {
                return this.valueOf() * 1000;
            });
        }
    }]);

    return RichNumber;
}();

module.exports = RichNumber;

},{"./util.js":7}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RichUtil = require('./util.js');

var RichObject = function () {
    function RichObject() {
        _classCallCheck(this, RichObject);
    }

    _createClass(RichObject, null, [{
        key: 'applyRichPrototype',
        value: function applyRichPrototype() {
            RichUtil.applyToPrototype(Object, 'getProperty', function (path) {
                var propList = path.split('.');
                return propList.reduce(function (currentValue, property) {
                    return currentValue ? currentValue[property] : currentValue;
                }, this);
            });
        }
    }]);

    return RichObject;
}();

module.exports = RichObject;

},{"./util.js":7}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RichUtil = function () {
    function RichUtil() {
        _classCallCheck(this, RichUtil);
    }

    _createClass(RichUtil, null, [{
        key: 'getFromPrototype',
        value: function getFromPrototype(klass, methodName) {
            return klass.prototype[methodName];
        }
    }, {
        key: 'applyToPrototype',
        value: function applyToPrototype(klass, methodNames, fn) {
            if (typeof methodNames === 'string') {
                methodNames = [methodNames];
            }

            methodNames.forEach(function (methodName) {
                if (klass.prototype[methodName]) {
                    console.warn('Not implementing method ' + methodName + '. Prototype already implemented');
                } else {
                    klass.prototype[methodName] = fn;
                }
            });
        }
    }]);

    return RichUtil;
}();

module.exports = RichUtil;

},{}]},{},[1]);
