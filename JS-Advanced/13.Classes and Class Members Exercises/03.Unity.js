class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(rat) {
        if (rat instanceof Rat)
            this.unitedRats.push(rat);
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {
        let result = this.name + '\n';
        for (let rat of this.unitedRats) {
            result += '##' + rat.name + '\n';
        }

        return result;
    }
}

let r1 = new Rat('Petko');
console.log(r1.getRats());
r1.unite(new Rat('Sasho'));
r1.unite(new Rat('Gosho'));
console.log(r1.getRats());
console.log(r1.toString());