
export default (req, res) => {
  require('dotenv').config()
  
  const nodemailer = require('nodemailer')

  const { fullname, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOption = {
    from: `${email}`,
    to: `${process.env.EMAIL}`,
    subject: `Message From ${fullname}`,
    text: message + " | Sent from: " + email,
    html: `<div>${subject}</div><h3>Sent from:
    ${email}</h3><p>${message}</p>`
  };

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      console.log(err);
      res.send("error" + JSON.stringify(err));
    } else {
      console.log("mail send");
      res.send("success");
    }
  });
}