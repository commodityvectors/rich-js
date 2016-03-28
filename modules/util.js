'use strict';

class RichUtil {
    static methodName(mn) {
        return RichUtil.prefix + mn;
    }
    static getFromPrototype(klass, methodName) {
        return klass.prototype[RichUtil.methodName(methodName)];
    }
    static applyToPrototype(klass, methodNames, fn) {
        if(typeof methodNames === 'string') {
            methodNames = [methodNames];
        }

        methodNames.forEach(function(methodName) {
            if(RichUtil.getFromPrototype(klass, methodName)) {
                console.warn(`Not implementing method ${methodName}. Prototype already implemented`);
            }
            else {
                klass.prototype[RichUtil.methodName(methodName)] = fn;
            }
        });
    }
}

RichUtil.prefix = '';

module.exports = RichUtil;
