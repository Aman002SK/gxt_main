import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, service, subject, message } = req.body;

    // Create a transporter using SMTP configuration
    const transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 587,
      secure: false,
      auth: {
        user: "apikey",
        pass: "",
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: {
          name: "SageMind Studio", // Replace with the sender's name
          address: "hello@sagemind.studio",
        },
        to: "patilvinit83@gmail.com",
        subject: "Test",
        text: `
        Name: ${name}
        Email: ${email}
        Service: ${service}
        Subject: ${subject}
        Message: ${message}
        `,
      });
      console.log("email sent success")
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.log("email sent fail");
      console.log(error);
      res.status(500).json({ error: "Failed to send email. " + error });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
