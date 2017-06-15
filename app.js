var express = require('express');
var bodyParser = require('body-parser')
var request = require('request');
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res) {
    // console.log(req.query.name)
    res.send(req.query['hub.challenge']);
});


app.post('/', function(req, res) {
    var URLtoken = 'https://graph.facebook.com/v2.6/me/messages?access_token=EAAKevWdVZAoABAPeFDupWtrCySHb2f1WpTF3W73BdyoAyL8ZAu6lZBRqAi0fOBDrZCiP6ySf22IMwV1FHIoMHHan6oobnB5K2ZChZAYlEHNisf2K6vFmZAnGyFoZBkjImLdZBZCnVS9f6ZCy6hZBZAS24Lpq9fVok2buPHpNtn1FfYZBwAtwZDZD'
    var sender = req.body.entry[0].messaging[0].sender.id
    var message = req.body.entry[0].messaging[0].message.text
    var data = {
        "recipient": {
            "id": sender
        },
        "message": {
            "text": '謝謝您私訊HDS 我們將會立即回覆您!!'
        }
    }

    request({
        url: URLtoken,
        method: 'POST',
        json: data
    }, function(error, response, body) {
        res.send()
    });

});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
