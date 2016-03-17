'use strict';
let modulePath = '../src/array';
jest.unmock(modulePath);


describe('Array', () => {
    require(modulePath);

    describe('groupBy', () => {
        it('should groupBy a given property name', () => {
            let data = [{
                a: 1
            }, {
                a: 1
            }, {
                a: 2
            }, {
                a: 3
            }];
            let grouped = data.groupBy('a');

            expect(grouped[1]).toEqual(data.slice(0, 2));
            expect(grouped[2]).toEqual([data[2]]);
            expect(grouped[3]).toEqual([data[3]]);
        });

        it('should groupBy a given property function', () => {
            let data = [{
                a: 1
            }, {
                a: 1
            }, {
                a: 2
            }, {
                a: 3
            }];
            let grouped = data.groupBy((e) => {
                return e.a;
            });

            expect(grouped[1]).toEqual(data.slice(0, 2));
            expect(grouped[2]).toEqual([data[2]]);
            expect(grouped[3]).toEqual([data[3]]);
        });
    });

    describe('indexBy', () => {
        it('should indexBy a given property name', () => {
            let data = [{
                a: 1
            }, {
                a: 2
            }, {
                a: 3
            }, {
                a: 4
            }];
            let indexed = data.indexBy('a');


            expect(indexed[1]).toEqual(data[0]);
            expect(indexed[2]).toEqual(data[1]);
            expect(indexed[3]).toEqual(data[2]);
            expect(indexed[4]).toEqual(data[3]);
        });

        it('should indexBy a given property function', () => {
            let data = [{
                a: 1
            }, {
                a: 2
            }, {
                a: 3
            }, {
                a: 4
            }];
            let indexed = data.indexBy((e) => {
                return e.a;
            });

            expect(indexed[1]).toEqual(data[0]);
            expect(indexed[2]).toEqual(data[1]);
            expect(indexed[3]).toEqual(data[2]);
            expect(indexed[4]).toEqual(data[3]);
        });
    });
});
