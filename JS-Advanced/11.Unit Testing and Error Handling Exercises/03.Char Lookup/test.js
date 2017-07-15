let lookupChar = require('./charlooup').lookupChar;
let expect = require('chai').expect;

describe('Lookup Char tests', () => {
    it('Should return function', () => {
        expect(typeof lookupChar).to.equal('function')
    });

    it('Should return undefined', () => {
        expect(lookupChar()).to.equal(undefined)
    });

    it('Should return undefined', () => {
        expect(lookupChar(1, 1)).to.equal(undefined)
    });

    it('Should return undefined', () => {
        expect(lookupChar('petko')).to.equal(undefined)
    });

    it('Should return undefined', () => {
        expect(lookupChar('pesho', 1.2)).to.equal(undefined)
    });

    it('Should return undefined', () => {
        expect(lookupChar(1, 'petko')).to.equal(undefined)
    });

    it('Should return Incorrect index', () => {
        expect(lookupChar('pesho', -1)).to.equal('Incorrect index')
    });

    it('Should return Incorrect index', () => {
        expect(lookupChar('pesho', 5)).to.equal('Incorrect index')
    });

    it('Should return p', () => {
        expect(lookupChar('pesho', 0)).to.equal('p')
    });

    describe('Lookup Char tests', () => {
        it('Should return function', () => {
            expect(typeof lookupChar).to.equal('function')
        });

        it('Should return undefined', () => {
            expect(lookupChar()).to.equal(undefined)
        });

        it('Should return undefined', () => {
            expect(lookupChar(1, 1)).to.equal(undefined)
        });

        it('Should return undefined', () => {
            expect(lookupChar('petko')).to.equal(undefined)
        });

        it('Should return undefined', () => {
            expect(lookupChar(1, 1.2)).to.equal(undefined)
        });

        it('Should return undefined', () => {
            expect(lookupChar(1, 'petko')).to.equal(undefined)
        });

        it('Should return Incorrect index', () => {
            expect(lookupChar('pesho', -1)).to.equal('Incorrect index')
        });

        it('Should return Incorrect index', () => {
            expect(lookupChar('pesho', 5)).to.equal('Incorrect index')
        });

        it('Should return s', () => {
            expect(lookupChar('pesho', 2)).to.equal('s')
        });
    });
});