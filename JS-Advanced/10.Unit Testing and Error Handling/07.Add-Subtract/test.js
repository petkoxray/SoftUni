let createCalculator = require('./addsubtract').createCalculator;
let expect = require('chai').expect;

describe('Test Calculator', () => {
   let calc;

   beforeEach(() => {
       calc = createCalculator();
   });

   it('Should return 0 for calc.get()', () => {
      expect(calc.get()).to.equal(0);
   });

    it('Should return 10 for calc.add(10)', () => {
        calc.add(10);
        expect(calc.get()).to.equal(10);
    });

    it('Should return -10 for calc.add(-10)', () => {
        calc.add(-10);
        expect(calc.get()).to.equal(-10);
    });

    it('Should return -10 for calc.subtract(10)', () => {
        calc.subtract(10);
        expect(calc.get()).to.equal(-10);
    });

    it('Should return 10 for calc.subtract(-10)', () => {
        calc.subtract(-10);
        expect(calc.get()).to.equal(10);
    });

    it('Should return NaN for calc.add(pesho)', () => {
        calc.add('pesho');
        expect(calc.get()).to.be.NaN;
    });

    it('Should return 10 for calc.add("10")', () => {
        calc.add('10');
        expect(calc.get()).to.equal(10);
    });
});