const express = require("express");
const app = express();
const timeFunction = require('../main')

app.get('/time/:inputTime', (req, res) => {
    // return res.send("The time is "  + req.params.tagId)
    const newtime = req.params.inputTime;
    const arr = newtime.split(':');
    const hour = parseInt(arr[ 0 ]);
    const min = parseInt(arr[ 1 ]);

    let results = timeFunction.printWords(hour, min)
    // console.log("getAPI" + results);
    res.json({ "Time": results })
})

app.listen(3000, () => console.log("Rest service is running."))