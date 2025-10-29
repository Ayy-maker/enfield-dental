import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, service, date, time, notes } = body;

    if (!firstName || !lastName || !email || !phone || !service || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL || "info@enfieldmedical.com.au",
      subject: `New Booking Request - ${service}`,
      html: `
        <h2>New Appointment Booking</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
        <p><strong>Preferred Time:</strong> ${time}</p>
        ${notes ? `<p><strong>Additional Notes:</strong> ${notes}</p>` : ""}
        <hr/>
        <p><em>Please contact the patient to confirm the appointment.</em></p>
      `,
    };

    const confirmationEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Booking Confirmation - Enfield Medical & Dental",
      html: `
        <h2>Thank you for your booking request!</h2>
        <p>Dear ${firstName},</p>
        <p>We have received your appointment request for <strong>${service}</strong> on <strong>${date}</strong> at <strong>${time}</strong>.</p>
        <p>Our team will contact you within 24 hours to confirm your appointment.</p>
        <p>If you have any questions, please call us at (02) 9747 1988.</p>
        <br/>
        <p>Best regards,<br/>Enfield Medical & Dental Team</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(confirmationEmail);

    return NextResponse.json(
      { message: "Booking request sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Failed to process booking" },
      { status: 500 }
    );
  }
}
