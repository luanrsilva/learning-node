const path = require('path');
const nodemailer = require('nodemailer');
//const { host, port, user, pass} = require('../config/mail');
const hbs = require('nodemailer-express-handlebars');

var smtp = require('nodemailer-smtp-transport');

var transport = nodemailer.createTransport(
    smtp({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "9f06d1518a9d2c",
            pass: "a66af3a70d7ab7",
        },
    })
);

transport.use('compile', hbs({
    viewEngine: 'handlebars',
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html',

}));

module.exports = transport;

