function nextDay(input) {
    let year = Number(input[0]);
    let month = Number(input[1]);
    let day = Number(input[2]);
    let date = new Date(year,month - 1,day + 1);
    let nextDate = date.getTime + 86400;
    console.log(nextDate.getFullYear);
}

nextDay(['2016', '9', '30']);