'use strict';
let modulePath = '../src/object';
jest.unmock(modulePath);

describe('Object', () => {
    require(modulePath);
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
