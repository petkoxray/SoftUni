let expect = require('chai').expect;

function makeList() {
    let data = [];
    return {
        addLeft: function(item) {
            data.unshift(item);
        },
        addRight: function(item) {
            data.push(item);
        },
        clear: function() {
            data = [];
        },
        toString: function() {
            return data.join(", ");
        }
    };
}

describe('List tests', () => {
    let list;
    beforeEach(() => {
        list = makeList();
    });

    it('All properties should exist', () => {
        expect(list.addRight).to.exist;
        expect(list.addLeft).to.exist;
        expect(list.clear).to.exist;
        expect(list.toString).to.exist;
    });

    it('List should be empty', () => {
       expect(list.toString()).to.equal('');
    });

    it('AddRight tests', () => {
        list.addRight('5');
        expect(list.toString()).to.equal('5');
        list.addRight('5');
        list.addRight(5);
        list.addRight(true);
        expect(list.toString()).to.equal('5, 5, 5, true');
        expect(list.clear()).to.equal(undefined);
    });

    it ('AddLeft tests', () => {
       list.addLeft(10);
        expect(list.toString()).to.equal('10');
        list.addLeft(10);
        list.addLeft('pesho');
        list.addLeft(true);
        expect(list.toString()).to.equal('true, pesho, 10, 10');
    });
});