let mathEnforcer = require('./mathenforcer').mathEnforcer;
let expect = require('chai').expect;

describe('General Tests', () => {
    it('AddFive return undefined',() => {
        expect(mathEnforcer.addFive()).to.equal(undefined)
    });

    it('AddFive return undefined',() => {
        expect(mathEnforcer.addFive('s')).to.equal(undefined)
    });

    it('AddFive return undefined',() => {
        expect(mathEnforcer.addFive([5])).to.equal(undefined)
    });

    it('SubtractTen return undefined',() => {
        expect(mathEnforcer.subtractTen()).to.equal(undefined)
    });

    it('SubtractTen return undefined',() => {
        expect(mathEnforcer.subtractTen('s')).to.equal(undefined)
    });

    it('SubtractTen return undefined',() => {
        expect(mathEnforcer.subtractTen([5])).to.equal(undefined)
    });

    it('sum return undefined',() => {
        expect(mathEnforcer.sum()).to.equal(undefined)
    });

    it('sum return undefined',() => {
        expect(mathEnforcer.sum('s',5)).to.equal(undefined)
    });

    it('sum return undefined',() => {
        expect(mathEnforcer.sum(5,'s')).to.equal(undefined)
    });

    it('sum return undefined',() => {
        expect(mathEnforcer.sum([5,3])).to.equal(undefined)
    });

    it('SubtractTen return -7',() => {
        expect(mathEnforcer.subtractTen(3)).to.equal(-7)
    });

    it('SubtractTen return -13',() => {
        expect(mathEnforcer.subtractTen(-3)).to.equal(-13)
    });

    it('SubtractTen return -13',() => {
        expect(mathEnforcer.subtractTen(5.2)).to.be.closeTo(-4.8, 0.01)
    });

    it('SubtractTen return -13',() => {
        expect(mathEnforcer.subtractTen(-3.22)).to.be.closeTo(-13.22,0.01)
    });

    it('AddFive return 12',() => {
        expect(mathEnforcer.addFive(7)).to.equal(12)
    });

    it('Addfive return 1',() => {
        expect(mathEnforcer.addFive(-4)).to.equal(1)
    });

    it('AddFive return 12',() => {
        expect(mathEnforcer.addFive(7.05)).to.be.closeTo(12.05,0.01);
    });

    it('Addfive return 1',() => {
        expect(mathEnforcer.addFive(-4.2)).to.be.closeTo(0.8, 0.01)
    });

    it('Sum return 12',() => {
        expect(mathEnforcer.sum(5, 7)).to.equal(12)
    });

    it('Sum return 12',() => {
        expect(mathEnforcer.sum(5, -7)).to.equal(-2)
    });

    it('Sum return 12',() => {
        expect(mathEnforcer.sum(6, 9.1)).to.be.closeTo(15.1,0.01)
    });

    it('Sum return 12',() => {
        expect(mathEnforcer.sum(5.3, -7)).to.be.closeTo(-1.7, 0.01)
    });
});