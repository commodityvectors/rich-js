'use strict';

(function () {
    'use strict';

    Object.prototype.getProperty = function (path) {
        var propList = path.split('.');
        return propList.reduce(function (currentValue, property) {
            return currentValue ? currentValue[property] : currentValue;
        }, this);
    };
})();