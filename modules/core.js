'use strict';

var RichObject = require('./object.js');
var RichNumber = require('./number.js');
var RichArray = require('./array.js');

class RichCore {
    static applyAll() {
        [RichObject, RichNumber, RichArray].map((r) => {
            r.applyRichPrototype();
        });
    }
}

module.exports = RichCore;
