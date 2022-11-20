const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "f91e49e4d7190b",
          pass: "8e4c8b6a5491e1"
        }
      });

      const message={
        from:"Team Teach Store <noreply@teamteach.com>",
        to: options.email,
        subject: options.subject,
        text: options.message
      }

      await transport.sendMail(message)
}

module.exports= sendEmail;