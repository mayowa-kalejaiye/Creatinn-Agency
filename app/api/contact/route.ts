import { NextResponse } from 'next/server';
import { SendByte, SendByteError } from '@sendbyte/node';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, email, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Initialize SendByte client
    const sendbyte = new SendByte(process.env.SENDBYTE_API_KEY!);

    // Send the email to the agency
    const { id } = await sendbyte.emails.send({
      from: 'Creatinn Website <noreply@creatinn.com>',
      to: 'kalejaiyemayowa3@gmail.com', // Agency's email (using placeholder since Instagram is the main one now, or replace with actual)
      subject: `New Project Inquiry from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <br />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });

    return NextResponse.json({ success: true, id }, { status: 200 });
  } catch (err) {
    if (err instanceof SendByteError) {
      console.error('SendByte API Error:', err.code, err.message);
      return NextResponse.json(
        { error: 'Failed to send email via SendByte.' },
        { status: err.status || 500 }
      );
    }

    console.error('Unexpected error:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
