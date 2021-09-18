var nodemailer = require("nodemailer")
var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "bitf18m541@pucit.edu.pk",
        pass: "pucit123"
    }
})
var mailOptions = {
    from: "zakriamuhammad3637@gmail.com",
    to: "bitf18m541@pucit.edu.pk",
    subject: "Sending Email USing Node JS ",
    text: "that was easy",
}
transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Email sent :" + info.response)
    }
})