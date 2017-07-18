let expect = require('chai').expect;

function produce(){
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
}

describe('List unit test', function () {
    let list;
    beforeEach(function () {
        list = produce();
    });

    it ('Add functionality', function () {
        expect(list.toString()).to.equal('');
        list.add(1);
        list.add('Pesho');
        list.add(-1.2);
        expect(list.toString()).to.equal('1, Pesho, -1.2');
        expect(list.delete('k')).to.equal(undefined);
        expect(list.delete('-1')).to.equal(undefined);
        expect(list.delete(-1)).to.equal(undefined);
        expect(list.delete(3)).to.equal(undefined);
        expect(list.delete(1.1)).to.equal(undefined);
        expect(list.delete(0)).to.equal(1);
        expect(list.delete(1)).to.equal(-1.2);
        expect(list.toString()).to.equal('Pesho');
    });
});