var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');


router.get('/', function(req, res, next) {
    res.send("INSIDE CONTACTS ROUTER")
  });

router.post('/sendMail', function(req, res) {
    console.log("INSIDE CONTACTS ROUTER");
    console.log(req.body);

    const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'manoshreek@gmail.com',
        pass: 'flbkqeohgyxkbzej',
    },
    });
    
    transporter.sendMail({
        from: req.body.emailID, // sender address
        to: '"Mano Shree KK" <manoshreek@gmail.com>', // list of receivers
        subject: "URGENT", // Subject line
        text: req.body.message, // plain text body
        html: req.body.message, // html body
      }).then(info => {
        res.send(info);
      }).catch(console.error);
});

module.exports = router;