'use server'

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Email validation
    if (!email || !email.includes('@') || !name || !message) {
      return new Response(JSON.stringify({ 
        error: 'Please fill in all fields with valid information' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'raghman.gem@gmail.com',
      subject: `New Contact Form Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ 
      success: true,
      message: 'Email sent successfully' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Email error:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to send email' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}