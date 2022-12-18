require("dotenv").config()
const nodemailer = require("nodemailer")
const router = require("express").Router();
// function smtpSetup(){

const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
})


module.exports.mail = async (req, res) => {
    const options = {
      from: "support@myparticipants.com",
      to: req.body.email,
      subject: req.body.subject,
      text: req.body.text,
    }
  transporter.sendMail(options, function (err, info) {
    if (err) {
      res.status(500).json({ msg: err })
    } else res.status(200).json({ msg: info.response })
  })
}

// return transporter;

