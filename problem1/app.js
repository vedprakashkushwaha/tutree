const express = require('express');
var app = express();
var url = require('url');


function findWinner(input, res) {
    var s = String(input);
    var steps = [];
    var temp;
    while (s.length > 1) {
        temp = "";
        var count = s.length - 1;
        for (var i = 0; i < Math.ceil(s.length / 2); i++) {
            console.log("i: " + i + "temp: " + temp);
            if (i == count - i) {
                temp = temp + s[i];
            } else if (s[i] > s[count - i]) {
                temp = temp + s[i];
            } else if (s[i] < s[count - i]) {
                temp = temp + s[count - i];
            } else {

            }
        }
        if(temp.length> 1)
        {
        s = "";
        s = s + temp;
        steps.push(temp);
        }
        else
        {
            var strongest=temp;
            break;
        }
    }


    res.end(JSON.stringify({'output':{'steps':steps,'strongest':strongest}}));
 

}

app.get("/input", function (req, res) {

    var q = url.parse(req.url, true);
    var reqData = q.query;
    var inputData = reqData['data'];
    //res.end("our input data: "+ inputData);
    findWinner(inputData, res);
});










app.listen(3000, function () {

    console.log("application started at 127.0.0.1:8000");

});