const nodemailer = require("nodemailer");

exports.handler = async function(event, context) {
  const params = event.queryStringParameters;
  let transporter;

  let validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  if (!params.name)
    return {
      statusCode: 500,
      body: "Name Is Empty"
    };

  if (!params.message)
    return {
      statusCode: 500,
      body: "Message Is Empty"
    };

  if (!validateEmail(params.email))
    return {
      statusCode: 500,
      body: "Invalid Email"
    };

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
