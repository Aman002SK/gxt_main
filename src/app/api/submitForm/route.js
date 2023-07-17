const nodemailer = require("nodemailer");

export async function POST(request) {
  const data = await request.json();
  const name = data.name;
  const email = data.email;
  const subject = data.subject;
  const message = data.message;

  const transporter = nodemailer.createTransport({
    host: "smtp.freesmtpservers.com",
    port: 25,
  });

  const info = await transporter.sendMail({
    from: `"${name}" <hsingla378@gmail.com>`,
    to: `${email}`,
    subject: `${subject}`,
    text: `${message}`,
  });

  console.log("Message sent: %s", info.messageId);

  return {
    status: 200,
    body: "Data received successfully",
  };
}


// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "himanshusingladev@gmail.com",
//     pass: "tushar143",
//   },
// });