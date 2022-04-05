require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it working

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "premium166.web-hosting.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.email,
        pass: process.env.password
    },
    logger: true
});

var mailOptions = {
    from: process.env.email,
    to: 'bryanaritcheta@yahoo.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});