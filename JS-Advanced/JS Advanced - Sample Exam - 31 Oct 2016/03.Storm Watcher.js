let Record = (function () {
    let id = 0;

    class Record {
        constructor(temperature, humidity, pressure, windSpeed) {
            this.id = id++;
            this.temperature = Number(temperature);
            this.humidity = Number(humidity);
            this.pressure = Number(pressure);
            this.windSpeed = Number(windSpeed);
        }

       toString() {
            let weatherType = 'Not stormy';
            if (this.temperature < 20 && (this.pressure < 700 || this.pressure > 900)
            && this.windSpeed > 25) {
                weatherType = 'Stormy';
            }

             return `Reading ID: ${this.id}
Temperature: ${this.temperature}*C
Relative Humidity: ${this.humidity}%
Pressure: ${this.pressure}hpa
Wind Speed: ${this.windSpeed}m/s
Weather: ${weatherType}`;
        }
    }

    return Record;
}());
let record1 = new Record(32, 66, 760, 12);
console.log(record1.toString());
let record2 = new Record(10, 40, 680, 30);
console.log(record2.toString());



