let expect = require('chai').expect;

class SortedList {
    constructor() {
        this.list = [];
    }

    add(element) {
        this.list.push(element);
        this.sort();
    }

    remove(index) {
        this.vrfyRange(index);
        this.list.splice(index, 1);
    }

    get(index) {
        this.vrfyRange(index);
        return this.list[index];
    }

    vrfyRange(index) {
        if (this.list.length == 0) throw new Error("Collection is empty.");
        if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
    }

    sort() {
        this.list.sort((a, b) => a - b);
    }

    get size() {
        return this.list.length;
    }
}

describe('Unit Tests', function () {
    let list;
    beforeEach(function () {
        list = new SortedList();
    });

    it('Functions should exist', function () {
        expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true);
        expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true);
        expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true);
        expect(SortedList.prototype.hasOwnProperty('sort')).to.equal(true);
        expect(SortedList.prototype.hasOwnProperty('vrfyRange')).to.equal(true);
        expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
    });

    it('Test add functionality', function () {
        list.add(5);
        expect(list.list.join(' ')).to.equal('5');
        list.add(1);
        list.add(7);
        expect(list.list.join(' ')).to.equal('1 5 7')
    });

    it('Test remove functionality', function () {
        expect(() => list.remove()).throw(Error,'Collection is empty');
        list.add(5);
        list.add(1);
        expect(() => list.remove(2)).throw(Error, "Index was outside the bounds of the collection.");
        expect(() => list.remove(-1)).throw(Error, "Index was outside the bounds of the collection.");
        list.add(7);
        list.remove(1);
        expect(list.list.join(' ')).to.equal('1 7')
    });

    it('Test get functionality', function () {
        expect(() => list.get()).throw(Error,'Collection is empty');
        list.add(5);
        list.add(1);
        expect(() => list.get(2)).throw(Error, "Index was outside the bounds of the collection.");
        expect(() => list.get(-1)).throw(Error, "Index was outside the bounds of the collection.");
        expect(list.get(1)).to.equal(5);
    });

    it('Empty list check',function () {
        expect(list.list.join('')).to.equal('')
    });

    it('Size check',function () {
        expect(list.size).to.equal(0);
        list.add(5);
        list.add(1);
        expect(list.size).to.equal(2);
    });
});