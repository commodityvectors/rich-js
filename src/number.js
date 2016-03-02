(() => {
    'use strict';
    // TIME RELATED FUNCTIONS
    const SECONDS = 1000;

    Number.prototype.seconds = function() {
        return this.valueOf() * SECONDS;
    };

    Number.prototype.minutes = function() {
        return this.valueOf() * (60).seconds();
    };

    Number.prototype.hours = function() {
        return this.valueOf() * (60).minutes();
    };

    Number.prototype.days = function() {
        return this.valueOf() * (24).hours();
    };

    // ITERATORS RELATED FUNCTIONS
    Number.prototype.times = function() {
        return Array.prototype.forEach.apply(Array.apply(null, {
            length: this.valueOf()
        }).map(Number.call, Number), Array.prototype.slice.call(arguments))
    };
})();
