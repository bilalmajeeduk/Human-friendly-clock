const prompt = require("prompt-sync")({ sigint: true });

function humanReadableTimeConverter(inputHour, inputMinute) {
    let numbers = [ "zero", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve", "thirteen",
        "fourteen", "fifteen", "sixteen", "seventeen",
        "eighteen", "nineteen", "twenty", "twenty one",
        "twenty two", "twenty three", "twenty four",
        "twenty five", "twenty six", "twenty seven",
        "twenty eight", "twenty nine",
    ];

    const HOURS = [
        ' tweleve',
        ' one ',
        ' two ',
        ' three ',
        ' four ',
        ' five ',
        ' six ',
        ' seven ',
        ' eight ',
        ' nine ',
        ' ten ',
        ' eleven'
    ]

    const ONES = [
        'clock',
        ' one ',
        ' two ',
        ' three ',
        ' four ',
        ' five ',
        ' six ',
        ' seven ',
        ' eight ',
        ' nine '
    ]
    const TEENS = [
        ' ten ',
        ' eleven ',
        ' tweleve ',
        ' thirteen ',
        ' fourteen ',
        ' fifteen ',
        ' sixteen ',
        ' seventeen ',
        ' eighteen ',
        ' nineteen ',
    ]
    const TENS = [
        '',
        '',
        ' twenty ',
        ' thirty ',
        ' fourty ',
        ' fifty '
    ]

    const h = inputHour;
    const m = inputMinute;
    const hour = HOURS[ h % 12 ];
    const suffix = (h < 12) ? 'am' : 'pm';
    let minute = '';
    if (m < 10) {
        minute = ` oh ${ONES[ m ]} `
    }
    if (m == 0) {
        const result = hour + " o'clock "
        return result;
        console.log(hour + " o'clock ");
    }

    else if (m < 20) {
        minute = `${TEENS[ m % 10 ]}`
    }

    else if (m == 05) {
        console.log("Five past" + " " + hour);
        const result = "Five past" + " " + hour
        return result;
    }
    else if (m == 10) {
        console.log("Ten past" + hour);
        const result = "Ten past" + " " + hour
        return result;
    }

    else if (m == 25) {
        console.log("twenty five past" + " " + numbers[ (h % 12) ]);
        const result = "twenty five past" + numbers[ (h % 12) ]
        return result;
    }

    else if (m == 30) {
        console.log("half past" + " " + hour);
        const result = "half past" + " " + hour;
        return result;
    }

    else if (m == 55) {
        console.log("Five to " + numbers[ (h % 12) + 1 ]);
        const result = "Five to " + numbers[ (h % 12) + 1 ]
        return result;
    }

    else {
        minute = `${TENS[ Math.floor(m / 10) ]} ${ONES[ m % 10 ]}`
    }

    return [ "It's", hour, minute, suffix ]
        .join(' ');
}

const currentTime = new Date();
const getHour = currentTime.getHours();
const getMinute = currentTime.getMinutes();

const time = getHour.toString()
const time1 = getMinute.toString()
console.log(humanReadableTimeConverter(time, time1));



// Objective 2

let input = prompt("Please input time:");
const arr = input.split(':');
const hour = parseInt(arr[ 0 ]);
const min = parseInt(arr[ 1 ]);
humanReadableTimeConverter(hour, min);

exports.humanReadableTimeConverter = humanReadableTimeConverter;


