'use strict';

class RichUtil {
    static getFromPrototype(klass, methodName) {
        return klass.prototype[methodName];
    }
    static applyToPrototype(klass, methodNames, fn) {
        if(typeof methodNames === 'string') {
            methodNames = [methodNames];
        }

        methodNames.forEach(function(methodName) {
            if(klass.prototype[methodName]) {
                console.warn(`Not implementing method ${methodName}. Prototype already implemented`);
            }
            else {
                klass.prototype[methodName] = fn;
            }
        });
    }
}


module.exports = RichUtil;
