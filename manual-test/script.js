var Rich = require('../modules');
console.log(Rich);
Rich.Util.prefix = 'r'
Rich.Core.applyAll();

console.log('3 Minutes', (3).rminutes());
