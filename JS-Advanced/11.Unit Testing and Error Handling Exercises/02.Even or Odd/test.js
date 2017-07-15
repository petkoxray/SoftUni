let isOddOrEven = require('./isEvenOrOdd').isOddOrEven;
let expect = require('chai').expect;

describe('Is Odd or Even tests', () => {
    it ('Should return undefined for 1', () => {
        expect(isOddOrEven(1)).to.equal(undefined);
    });

    it ('Should return function', () => {
        expect(typeof isOddOrEven).to.equal('function');
    });

    it ('Should return even', () => {
        expect(isOddOrEven('car')).to.equal('odd');
    });

    it ('Should return even', () => {
        expect(isOddOrEven('cars')).to.equal('even');
    });
});