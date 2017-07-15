function extendClass(classToExtend) {
    classToExtend.species = '';
    classToExtend.toString = function () {
        return 'I am a ' + this.species + '.';
    }
}