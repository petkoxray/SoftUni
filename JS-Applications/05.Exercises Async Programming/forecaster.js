function attachEvents() {
    let forecast = $('#forecast');

    $('#submit').click(function () {
        forecast.toggle();
        $.ajax({
            url: 'https://judgetests.firebaseio.com/locations.json',
            success: getLocation,
            error: displayError
        });
    });

    function getLocation(locations) {
        let reqLocationName = $('#location').val();
        for (let location of locations) {
            if (location.name === reqLocationName) {
                displayLocation(location.code)
            }
        }
    }

    function displayLocation(code) {
        $.ajax({
            url: `https://judgetests.firebaseio.com/forecast/today/${code}.json`,
            success: displayCurrentWeather,
            error: displayError
        });

        $.ajax({
            url: `https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`,
            success: displayUpcomming,
            error: displayError
        });
    }

    function displayCurrentWeather(location) {
        let current = $('#current');
        let condition = weatherSymbols[location.forecast.condition];
        let tempStr = `${location.forecast.low}${weatherSymbols['Degrees']}/${location.forecast.high}${weatherSymbols['Degrees']}`;
        current.append(
            $('<span>').addClass('condition').addClass('symbol').html(condition));
        let conditionSpan = $('<span>').addClass('condition');
        let nameSpan = $(`<span>${location.name}</span>`).addClass('forecast-data');
        let tempSpan = $(`<span>${tempStr}</span>`).addClass('forecast-data');
        let weatherSpan = $(`<span>${location.forecast.condition}</span>`).addClass('forecast-data');
        current.append(conditionSpan
            .append(nameSpan).append(tempSpan).append(weatherSpan));
    }

    function displayUpcomming(location) {
        for (let forecast of location.forecast){
            $('#upcoming')
                .append($('<span>').addClass("upcoming")
                    .append($('<span>').addClass("symbol").html(weatherSymbols[forecast.condition]))
                    .append($('<span>').addClass("forecast-data").html(`${forecast.low}${weatherSymbols.Degrees}/${forecast.high}${weatherSymbols.Degrees}`))
                    .append($('<span>').addClass("forecast-data").text(forecast.condition))
                );
        }
    }

    function displayError(error) {
        forecast.text('Error');
    }

    let weatherSymbols = {
        Sunny: '&#x2600',
        'Partly sunny': '&#x26C5',
        Overcast: '&#x2601',
        Rain: '&#x2614',
        Degrees:'&#176'
    }
}