import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { name, email, phone } = req.body || {};

  if (!name || !email || !phone) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ success: false, message: "Invalid email format" });
  }

  const phoneSanitized = String(phone).replace(/[^\d+]/g, "");
  if (phoneSanitized.length < 7) {
    return res.status(400).json({ success: false, message: "Invalid phone number" });
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return res
      .status(500)
      .json({ success: false, message: "Email service is not configured" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"VRS Interior Website" <${process.env.EMAIL_USER}>`,
      to: "devloper.opts@gmail.com",
      replyTo: email,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phoneSanitized}</p>
      `,
    });

    return res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("send-email error:", error);
    return res.status(500).json({ success: false, message: "Failed to send email" });
  }
}
