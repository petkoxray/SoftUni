let expect = require('chai').expect;

function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}

describe('List Unit test', () => {
    let list = {};
   beforeEach(() => {list = createList()});

    it('All properties should exist', () => {
        expect(list.add).to.exist;
        expect(list.shiftLeft).to.exist;
        expect(list.shiftRight).to.exist;
        expect(list.toString).to.exist;
        expect(list.swap).to.exist;
    });

    it('Add functionality', () => {
        list.add(10);
        expect(list.toString()).to.equal('10');
        list.add('pesho');
        list.add(true);
        expect(list.toString()).to.equal('10, pesho, true');
    });

    it('shiftLeft', () => {
        list.add(10);
        list.shiftLeft();
        expect(list.toString()).to.equal('10');
        list.add('pesho');
        list.add(true);
        list.shiftLeft();
        expect(list.toString()).to.equal('pesho, true, 10');
        list.shiftRight();
        expect(list.toString()).to.equal('10, pesho, true');
    });

    it('shiftRight', () => {
        list.add(10);
        list.shiftRight();
        expect(list.toString()).to.equal('10');
        list.add('pesho');
        list.add(true);
        list.shiftRight();
        expect(list.toString()).to.equal('true, 10, pesho');
        list.shiftLeft();
        expect(list.toString()).to.equal('10, pesho, true');
    });

    it('swap false', () => {
        list.add(10);
        list.add('pesho');
        list.add(true);
        list.add(5);
        expect(list.swap(1,4)).to.equal(false);
        expect(list.swap(-1,3)).to.equal(false);
        expect(list.swap(0,4)).to.equal(false);
        expect(list.swap('pesho',2)).to.equal(false);
        expect(list.swap(1,true)).to.equal(false);
        expect(list.swap(2,2)).to.equal(false);
    });

    it('swap true', () => {
        list.add(10);
        list.add('pesho');
        list.add(true);
        list.add(5);
        expect(list.swap(0,3)).to.equal(true);
        expect(list.swap(1,2)).to.equal(true);
        expect(list.toString()).to.equal('5, true, pesho, 10')
    });
});