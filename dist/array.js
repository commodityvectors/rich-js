'use strict';

(function () {
    'use strict';

    function getKeyFunction(p) {
        return typeof p === 'function' ? p : function (element) {
            return element[p];
        };
    }

    Array.prototype.groupBy = function (indexElement) {
        var getKey = getKeyFunction(indexElement);
        return this.reduce(function (group, element) {
            var key = getKey(element);
            group[key] = group[key] || [];
            group[key].push(element);
            return group;
        }, {});
    };

    Array.prototype.indexBy = function (indexElement) {
        var getKey = getKeyFunction(indexElement);
        return this.reduce(function (result, element) {
            var key = getKey(element);
            result[key] = element;
            return result;
        }, {});
    };
})();