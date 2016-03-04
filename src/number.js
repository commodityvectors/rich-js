(() => {
    'use strict';
    const SECONDS = 1000;

    Number.prototype.seconds = function() {
        return this.valueOf() * SECONDS;
    };
    Number.prototype.second = Number.prototype.seconds;

    Number.prototype.minutes = function() {
        return this.valueOf() * (60).seconds();
    };
    Number.prototype.minute = Number.prototype.minutes;

    Number.prototype.hours = function() {
        return this.valueOf() * (60).minutes();
    };
    Number.prototype.hour = Number.prototype.hours;

    Number.prototype.days = function() {
        return this.valueOf() * (24).hours();
    };
    Number.prototype.day = Number.prototype.days;

    Number.prototype.times = function() {
        return Array.prototype.forEach.apply(Array.apply(null, {
            length: this.valueOf()
        }).map(Number.call, Number), Array.prototype.slice.call(arguments))
    };

    Number.prototype.isEven = function() {
        return this.valueOf() % 2 === 0;
    };

    Number.prototype.isOdd = function() {
        return this.valueOf() % 2 === 1;
    };

    Number.prototype.km = function() {
        return this.valueOf() * 1000;
    };
})();
