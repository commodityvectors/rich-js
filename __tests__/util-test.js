'use strict';

let path = '../modules';
let utilPath = `${path}/util.js`;

jest.unmock(utilPath);

describe('Util', () => {
    let RichUtil;

    beforeEach(() => {
         RichUtil = require(utilPath)
    })

    describe('methodName', () => {
        it('should return the composed method name with default prefix', () => {
            expect(RichUtil.methodName('test')).toEqual('test');
        });

        it('should be able to override prefix', () => {
            RichUtil.prefix = 'r';
            expect(RichUtil.methodName('test')).toEqual('rtest');
        })
    });

    describe('getFromPrototype', () => {
        it('should get method from prototype', () => {
            expect(RichUtil.getFromPrototype(Number, 'toFixed')).not.toBe(undefined);
        });

        it('should compute prefixed prototype name', () => {
            RichUtil.prefix = 'r';
            expect(RichUtil.getFromPrototype(Number, 'toFixed')).toBe(undefined);
        });
    });

    describe('applyToPrototype', () => {
        it('should add method do a given prototype', () => {
            RichUtil.applyToPrototype(Number, 'test', function() {
                return 3;
            });

            expect((10).test()).toEqual(3);
        });

        it('should add method do a given prototype with prefix', () => {
            RichUtil.prefix = 'r';

            RichUtil.applyToPrototype(Number, 'test', function() {
                return 3;
            });

            expect((10).rtest()).toEqual(3);
        });

        it('should not override if already exists', () => {
            spyOn(console, 'warn');
            RichUtil.applyToPrototype(Number, 'toFixed', function() {});
            expect(console.warn).toHaveBeenCalled();
        });
    })
});
