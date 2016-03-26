'use strict';

var RichUtil = require('./util.js');

class RichObject {
    static applyRichPrototype() {
        RichUtil.applyToPrototype(Object, 'getProperty', function(path) {
            const propList = path.split('.');
            return propList.reduce((currentValue, property) => {
                return currentValue ? currentValue[property] : currentValue;
            }, this);
        });
    }
}

module.exports = RichObject;
