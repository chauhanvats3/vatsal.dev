const nodemailer = require("nodemailer");
//const nodeHtmlToImage = require('node-html-to-image')

exports.handler = async function(event, context) {
  const params = event.queryStringParameters;
  const dataset = JSON.parse(params.dataset);
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
    subject: ``,
    text: ""
  });

  console.log("Message sent: %s", info);

  return {
    statusCode: 200,
    body: JSON.stringify({ info })
  };
};
