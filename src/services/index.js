const express = require("express");
const app = express();
const timeFunction = require('../main')

app.get('/time/:inputTime', (req, res) => {
    const inputParameter = req.params.inputTime;
    const splittedArray = inputParameter.split(':');

    let min = ''
    let hour = ''
    let response
    if (!isNaN(splittedArray[ 0 ]) & splittedArray[ 0 ].length == 2 & !isNaN(splittedArray[ 1 ]) & splittedArray[ 1 ].length == 2) {
        hour = parseInt(splittedArray[ 0 ]);
        min = parseInt(splittedArray[ 1 ]);
        response = timeFunction.humanReadableTimeConverter(hour, min);
    } else {
        response = " its no valid input time.";
    }

    res.json({ "Response": response })
})

app.listen(3000, () => console.log("Rest service is running."))