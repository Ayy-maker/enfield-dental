import { NextResponse } from "next/server";

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

    // Log the booking (in production, this would send an email or save to database)
    console.log("Booking Submission:", {
      firstName,
      lastName,
      email,
      phone,
      service,
      date,
      time,
      notes,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending
    // In production, configure EMAIL_USER and EMAIL_PASS in .env
    // and uncomment the nodemailer code below:
    
    /*
    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
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
      `,
    });
    */

    return NextResponse.json(
      { 
        message: "Booking request received! We'll contact you within 24 hours to confirm.",
        success: true
      },
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
