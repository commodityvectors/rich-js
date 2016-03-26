'use strict';

var RichUtil = require('./util.js');

class RichArray {
    static applyRichPrototype() {
        function getKeyFunction(p) {
            return typeof p === 'function' ? p : function(element) {
                return element[p];
            };
        }

        RichUtil.applyToPrototype(Array, 'groupBy', function(indexElement) {
            const getKey = getKeyFunction(indexElement);
            return this.reduce((group, element) => {
                const key = getKey(element);
                group[key] = group[key] || [];
                group[key].push(element);
                return group;
            }, {});
        });

        RichUtil.applyToPrototype(Array, 'indexBy', function(indexElement) {
            const getKey = getKeyFunction(indexElement);
            return this.reduce((result, element) => {
                const key = getKey(element);
                result[key] = element;
                return result;
            }, {})
        });

        RichUtil.applyToPrototype(Array, 'sample', function() {
            const length = this.length;
            return this[Math.floor(Math.random() * length)];
        });
    }
}


module.exports = RichArray;
