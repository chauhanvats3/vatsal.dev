const nodemailer = require("nodemailer");

exports.handler = async function(event, context) {
  const params = event.queryStringParameters;
  let transporter;

  transporter = nodemailer.createTransport({
    host: process.env.ZOHO_HOST,
    port: process.env.ZOHO_PORT,
    secure: true,
    auth: {
      user: process.env.ZOHO_AUTH_USER,
      pass: process.env.ZOHO_AUTH_PASS
    }
  });

  let info = await transporter.sendMail({
    from: process.env.ZOHO_EMAIL,
    to: process.env.ZOHO_AUTH_USER,
    subject: `[Enquiry] There's a message from ${params.name}`,
    text: `Sender Name : ${params.name} \nSender Email : ${params.email} \nMessage : ${params.message}`
  });

  console.log("Message sent: %s", info);

  return {
    statusCode: 200,
    body: JSON.stringify({ info })
  };
};
