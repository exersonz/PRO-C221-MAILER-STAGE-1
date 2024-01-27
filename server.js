const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

server.listen(process.env.PORT || 3030);

// import nodemailer
var nodemailer = require('nodemailer');

// adding a transporter for the mailer
const transporter = nodemailer.createTransport({
    port: 587,
    host: "smtp.gmail.com",
    auth: {
        user: 'cinty.lin.cinty@gmail.com',
        pass: 'ucwqwwkhjnzzhtgb'
    },
    secure: true
});