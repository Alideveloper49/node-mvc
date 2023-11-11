const nodemailer = require("nodemailer");
const mailConfig = require("../../config/mail");

class MailService {
    constructor() {  // Constructor
        this.transporter = nodemailer.createTransport(mailConfig);
    }
    async send(email) {
        // send mail with defined transport object
        const info = await this.transporter.sendMail({
            from: 'info <info@dewages.com>', // sender address
            to: `${email}, ${email}`, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
    }
}

module.exports = new MailService()