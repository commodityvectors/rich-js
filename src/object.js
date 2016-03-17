(function() {
    'use strict';

    Object.prototype.getProperty = function(path) {
        const propList = path.split('.');
        return propList.reduce((currentValue, property) => {
            return currentValue ? currentValue[property] : currentValue;
        }, this);
    };
})();
