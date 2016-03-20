(function() {
    'use strict';

    function getKeyFunction(p) {
        return typeof p === 'function' ? p : function(element) {
            return element[p];
        };
    }

    Array.prototype.groupBy = function(indexElement) {
        const getKey = getKeyFunction(indexElement);
        return this.reduce((group, element) => {
            const key = getKey(element);
            group[key] = group[key] || [];
            group[key].push(element);
            return group;
        }, {});
    };

    Array.prototype.indexBy = function(indexElement) {
        const getKey = getKeyFunction(indexElement);
        return this.reduce((result, element) => {
            const key = getKey(element);
            result[key] = element;
            return result;
        }, {})
    };

    Array.prototype.sample = function() {
        const length = this.length;
        return this[Math.floor(Math.random() * length)];
    };
})();
