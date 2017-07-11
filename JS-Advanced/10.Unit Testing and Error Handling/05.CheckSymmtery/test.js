let isSymmetric = require('./symmtery').isSymmetric;
let expect = require('chai').expect;

describe("Test Symmetry", () => {
    it("Type of isSymmtery to be function", () => {
        expect(typeof isSymmetric).to.equal('function');
    });

    it("", () => {
        expect(isSymmetric(1,2,1)).to.equal(false);
    });

    it("", () => {
        expect(isSymmetric(1,2,2,1)).to.equal(false);
    });

   it("Should return [1, 2, 1] for [1, 2, 1]", () => {
       expect(isSymmetric([1, 2, 1])).to.equal(true);
   });

    it("Should return [1, 2, 2, 1] for [1, 2, 2, 1]", () => {
        expect(isSymmetric([1, 2, 2, 1])).to.equal(true);
    });

    it("Should return ['pesho', 2, 2, 'pesho'] for ['pesho', 2, 2, 'pesho']", () => {
        expect(isSymmetric(['pesho', 2, 2, 'pesho'])).to.equal(true);
    });

    it("Should return [1, 2] for [1, 2]", () => {
        expect(isSymmetric([1, 2])).to.equal(false);
    });

    it("Should return [1] for [1]", () => {
        expect(isSymmetric([1])).to.equal(true);
    });
});