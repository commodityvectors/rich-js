'use strict';

var RichUtil = require('./util.js');

class RichNumber {
    static applyRichPrototype() {
        const SECONDS = 1000;

        RichUtil.applyToPrototype(Number, ['seconds', 'second'], function() {
            return this.valueOf() * SECONDS;
        });

        RichUtil.applyToPrototype(Number, ['minutes', 'minute'], function() {
            return this.valueOf() * (60).seconds();
        });

        RichUtil.applyToPrototype(Number, ['hours', 'hour'], function() {
            return this.valueOf() * (60).minutes();
        });

        RichUtil.applyToPrototype(Number, ['days', 'day'], function() {
            return this.valueOf() * (24).hours();
        });

        RichUtil.applyToPrototype(Number, 'times', function() {
            return Array.prototype.forEach.apply(Array.apply(null, {
                length: this.valueOf()
            }).map(Number.call, Number), Array.prototype.slice.call(arguments))
        });

        RichUtil.applyToPrototype(Number, 'isEven', function() {
            return this.valueOf() % 2 === 0;
        });

        RichUtil.applyToPrototype(Number, 'isOdd', function() {
            return this.valueOf() % 2 === 1;
        });

        RichUtil.applyToPrototype(Number, 'km', function() {
            return this.valueOf() * 1000;
        });
    }
}

module.exports = RichNumber;
