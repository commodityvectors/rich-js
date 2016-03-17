'use strict';
let modulePath = '../src/number';
jest.unmock(modulePath);

describe('Number', () => {
    require(modulePath);
    describe('seconds', () => {
        it('should return the number as ms', () => {
            expect((1).second()).toBe(1000);
            expect((1).seconds()).toBe(1000);
        });
    });

    describe('minutes', () => {
        it('should return the number as ms', () => {
            expect((1).minutes()).toBe(60000);
            expect((1).minute()).toBe(60000);
        });
    });

    describe('hours', () => {
        it('should return the number as ms', () => {
            expect((1).hours()).toBe(3600000);
            expect((1).hour()).toBe(3600000);
        });
    });

    describe('days', () => {
        it('should return the number as ms', () => {
            expect((1).days()).toBe(86400000);
            expect((1).day()).toBe(86400000);
        });
    });

    describe('isEven', () => {
        it('should check if number is even', () => {
            expect((1).isEven()).toBe(false);
            expect((2).isEven()).toBe(true);
        });
    });

    describe('isOdd', () => {
        it('should check if number is odd', () => {
            expect((1).isOdd()).toBe(true);
            expect((2).isOdd()).toBe(false);
        });
    });

    describe('km', () => {
        it('should return value in meters', () => {
            expect((1).km()).toBe(1000);
        });
    });

    describe('times', () => {
        it('should iterate from 0 to number - 1', () => {
            var n = 10;
            var index = 0;
            n.times((i) => {
                expect(i).toBe(index);
                n--;
                index++;
            });
            expect(n).toBe(0);
        });
    })
});
