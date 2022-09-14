const prompt = require("prompt-sync")({ sigint: true });

function printWords(h, m) {
    let nums = [ "zero", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine",
        "ten", "eleven", "twelve", "thirteen",
        "fourteen", "fifteen", "sixteen", "seventeen",
        "eighteen", "nineteen", "twenty", "twenty one",
        "twenty two", "twenty three", "twenty four",
        "twenty five", "twenty six", "twenty seven",
        "twenty eight", "twenty nine",
    ];

    const hour = nums[ h % 12 ];

    if (m == 0) {
        const result = hour + " o'clock "
        return result;
        console.log(hour + " o'clock ");
    }

    else if (m == 05) {
        console.log("Five past" + " " + hour);
        const result = "Five past" + " " + hour
        return result
    }

    else if (m == 10) {
        console.log("Ten past" + hour);
        const result = "Ten past" + " " + hour
        return result
    }

    else if (m == 25) {
        console.log("twenty five past" + nums[ (h % 12) ]);
        const result = "twenty five past" + nums[ (h % 12) ]
        return result
    }

    else if (m == 30) {
        console.log("half past" + " " + hour);
        const result = "half past" + " " + hour;
        return result
    }

    else if (m == 55) {
        console.log("Five to " + nums[ (h % 12) + 1 ]);
        const result = "Five to " + nums[ (h % 12) + 1 ]
        return result;
    }

    else {
        console.log("Please selete time from the given instructions.")
    }

}
const currentTime = new Date();
const h = currentTime.getHours();
const m = currentTime.getMinutes();

printWords(h, m);

// Objective 2

let time = prompt("Please input time:");
const arr = time.split(':');
const hour = parseInt(arr[ 0 ]);
const min = parseInt(arr[ 1 ]);
printWords(hour, min);

exports.printWords = printWords;

