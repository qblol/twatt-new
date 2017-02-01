const express = require('express');
const app = express();
const router = express.Router();
const config = require('./config');
const Twit = require('twit')

var T = new Twit({
  consumer_key:         config.consumer_key,
  consumer_secret:      config.consumer_secret,
  access_token:         config.access_token,
  access_token_secret:  config.access_token_secret
})


router.get('/newtwit', function(req,res) {
  var params = {status: req.query.status}
  T.post('statuses/update', params, function(err, data, response) {
    res.send(data)
  })
})

app.use('/', router)
app.listen(3000)
