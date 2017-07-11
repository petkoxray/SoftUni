function main(rectangles) {
    let basicRect = {
        width: 0,
        height: 0,
        area: function() { return this.width * this.height},
        compareTo: function(other) {
            return other.area() - this.area()
                || other.width - this.width;
        }
    };

    let result = [];
    for (let [width, height] of rectangles) {
        let rect = Object.create(basicRect);
        rect.width = width;
        rect.height = height;
        result.push(rect);
    }

    return result.sort((a, b) => a.compareTo(b));
}

console.log(main([[10, 5], [3, 20], [5, 12]]));
