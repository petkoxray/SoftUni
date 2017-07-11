let sum = require('./sumFunction.js').sum;
let expect = require('chai').expect;

describe("Test summator", function () {
    it("Should return 3 for [1, 2]", () => {
        expect(sum([1, 2])).to.equal(3);
    });

    it("Should return 5 for [-1, 6]", () => {
        expect(sum([-1, 6])).to.equal(5);
    });

    it("Should return 1 for [1]", () => {
        expect(sum([1])).to.equal(1);
    });

    it("Should return 0 for []", () => {
        expect(sum([])).to.equal(0);
    });
});