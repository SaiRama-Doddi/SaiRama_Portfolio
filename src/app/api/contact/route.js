export const runtime = 'nodejs';
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { firstName, lastName, email, phone, message, selectedOption } = await req.json();

    console.log("Received Contact Form Data:", { firstName, lastName, email, phone, message, selectedOption });

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
       tls: {
    rejectUnauthorized: false, // ✅ allow self-signed certs
  },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER, // Add a new env var for your receiving email
      subject: `New Contact Form Submission - ${selectedOption || "No Service Selected"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${selectedOption || "N/A"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email Sent Response:", info);

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message || "Unknown error" }), { status: 500 });
  }
}
