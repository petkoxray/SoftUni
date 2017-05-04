function calcConus([radius, height]) {
    [radius, height] = [radius, height].map(Number);
    let volume = 1 / 3 * Math.PI * Math.pow(radius,2) * height;
    let slang = Math.sqrt(Math.pow(radius,2) + Math.pow(height,2));
    let area = Math.PI * Math.pow(radius,2) + Math.PI * radius * slang;
    console.log(volume.toFixed(4));
    console.log(area.toFixed(4));
}