let expect = require('chai').expect;

class Sumator {
    constructor() {
        this.data = [];
    }

    add(item) {
        this.data.push(item);
    }

    sumNums() {
        let sum = 0;
        for (let item of this.data)
            if (typeof (item) === 'number')
                sum += item;
        return sum;
    }

    removeByFilter(filterFunc) {
        this.data = this.data.filter(x => !filterFunc(x));
    }

    toString() {
        if (this.data.length > 0)
            return this.data.join(", ");
        else
            return '(empty)';
    }
}

describe('Unit tests', function () {
    let sumator;
    beforeEach(function () {
        sumator = new Sumator();
    });
    it('Check properties', function () {
        expect(Sumator.prototype.hasOwnProperty('add')).to.equal(true);
        expect(Sumator.prototype.hasOwnProperty('sumNums')).to.equal(true);
        expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.equal(true);
        expect(Sumator.prototype.hasOwnProperty('toString')).to.equal(true);
    });

    it('Check data', function () {
        expect(sumator.data.join()).to.equal('');
        expect(sumator.data).to.exist;
    });

    it('Check add', function () {
        sumator.add(5);
        expect(sumator.toString()).to.equal('5');
    });

    it('Check add', function () {
        sumator.add('pesho');
        expect(sumator.toString()).to.equal('pesho');
    });
    it('Check add', function () {
        sumator.add(true);
        expect(sumator.toString()).to.equal('true');
    });

    it('Check add', function () {
        sumator.add(true);
        sumator.add(5);
        sumator.add('pesho');
        expect(sumator.toString()).to.equal('true, 5, pesho');
    });

    it('check sumNums', function () {
        sumator.add(true);
        sumator.add('pesho');
        let result = sumator.sumNums();
        expect(result).to.equal(0);
        sumator.add(5);
        sumator.add(10);
        let result2 = sumator.sumNums();
        expect(result2).to.equal(15);
    });

    it('check sumNums double', function () {
        sumator.add(true);
        sumator.add('pesho');
        sumator.add(1.2);
        sumator.add(5);
        let result = sumator.sumNums();
        expect(result).to.equal(6.2)
    });

    it('check toString', function () {
        expect(sumator.toString()).to.equal('(empty)');
        sumator.add(5);
        expect(sumator.toString()).to.equal('5');
        sumator.add('pesho');
        sumator.add(1.2);
        sumator.add(5);
        expect(sumator.toString()).to.equal('5, pesho, 1.2, 5');
    });

    it('check filter', function () {
        sumator.add('pesho');
        sumator.add(1.2);
        sumator.add(5);
        sumator.add(20)
        function filterFunc(x) {
            return x < 10;
        }
        sumator.removeByFilter(filterFunc);
        expect(sumator.toString()).to.equal('pesho, 20')
    });
});