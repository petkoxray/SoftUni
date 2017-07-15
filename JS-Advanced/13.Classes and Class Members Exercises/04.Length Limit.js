class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    get innerLength() {
        return this._innerLength;
    }

    set innerLength(value) {
        this._innerLength = value;
        if (this.innerLength < 0)
            this._innerLength = 0;
    }

    increase(value) {
        this.innerLength += value;
    }

    decrease(value) {
        this.innerLength -= value;
    }

    toString() {
        if (this.innerString.length > this.innerLength)
            return this.innerString.substring(0, this.innerLength) + '...'
        return this.innerString;
    }
}

let str = new Stringer('Test', 5);
console.log(str.toString());
str.decrease(3);
console.log(str.toString());
str.decrease(5);
console.log(str.toString());
str.increase(4);
console.log(str.toString());
