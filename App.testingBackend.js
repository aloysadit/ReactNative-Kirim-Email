var express = require('express');
var nodemailer = require('nodemailer');
var cors = require('cors')
var bodyParser = require('body-parser')

var app = express();

app.use(cors())
app.use(bodyParser.json())

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'aloys168@gmail.com',
    clientId: '968697721578-l3feen7nrgf63d8n2p8l253ndiij8j0k.apps.googleusercontent.com',
    clientSecret: '0VyQ89ySF5fP8McMi4H2etSG',
    refreshToken: '1/aheIn4bnkhZdldlDTjdWg0gC6hWbZCXgi5KBM9p244k'
  }
})



app.post('/kirimEmail', (req, res) => {
  var postKirim = {
    to: req.body.Email,
    subject: req.body.Subject,
    text: req.body.Message,
  }

  transporter.sendMail(postKirim, (n, m) => {
    res.send("Email terkirim")
    if (n) {
      console.log('Email gagal')
      res.send('Email gagal')
    }
    else {
      console.log('Email terkirim')
      res.send('Email terkirim')
    }
  })
})




app.listen(3210, () => {
  console.log('Bro, ini di PORT @3210');
})