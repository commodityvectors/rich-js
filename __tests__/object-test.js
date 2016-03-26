'use strict';

let path = '../modules';
let utilPath = `${path}/util.js`;
let modulePath = `${path}/object.js`;

jest.unmock(utilPath);
jest.unmock(modulePath);

describe('Object', () => {
    require(modulePath).applyRichPrototype();
    describe('getProperty', () => {
        it('should return a property by a given path', () => {
            let obj = {
                a: {
                    b: 1
                }
            };

            expect(obj.getProperty('a.b')).toBe(1);
            expect(obj.getProperty('a.c.d')).toBe(undefined);
        });
    });
});
