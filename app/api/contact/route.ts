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
    const senderEmail = process.env.SENDBYTE_SENDER_EMAIL || 'hello@try.sendbyte.africa';
    
    const { id } = await sendbyte.emails.send({
      from: `Creatinn Website <${senderEmail}>`,
      to: 'kalejaiyemayowa3@gmail.com', // Agency's email (using placeholder since Instagram is the main one now, or replace with actual)
      subject: `New Project Inquiry from ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; padding: 40px 20px; color: #111; margin: 0;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
            <div style="background-color: #111; padding: 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">Creatinn<span style="color: #bdff00;">.</span></h1>
              <p style="color: #a1a1aa; margin: 8px 0 0 0; font-size: 15px;">New Project Inquiry</p>
            </div>
            <div style="padding: 40px 30px;">
              <h2 style="margin: 0 0 24px 0; font-size: 20px; color: #111; border-bottom: 2px solid #f4f4f5; padding-bottom: 12px;">Lead Details</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f4f4f5; width: 120px;"><strong style="color: #52525b; font-size: 14px;">Name</strong></td>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f4f4f5; color: #111; font-weight: 600; font-size: 15px;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f4f4f5;"><strong style="color: #52525b; font-size: 14px;">Email</strong></td>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f4f4f5;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 500; font-size: 15px;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f4f4f5;"><strong style="color: #52525b; font-size: 14px;">Phone</strong></td>
                  <td style="padding: 14px 0; border-bottom: 1px solid #f4f4f5; color: #111; font-weight: 500; font-size: 15px;">${phone || 'Not provided'}</td>
                </tr>
              </table>

              <div style="margin-top: 32px; background-color: #fafafa; padding: 24px; border-radius: 12px; border-left: 4px solid #bdff00;">
                <h3 style="margin: 0 0 12px 0; font-size: 13px; color: #52525b; text-transform: uppercase; letter-spacing: 1px;">Message</h3>
                <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #27272a;">${message.replace(/\n/g, '<br />')}</p>
              </div>
              
              <div style="margin-top: 40px; text-align: center;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #111; color: #ffffff; font-weight: 600; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-size: 15px; transition: background-color 0.2s;">Reply to ${firstName}</a>
              </div>
            </div>
            <div style="background-color: #fafafa; padding: 24px; text-align: center; border-top: 1px solid #eaeaea;">
              <p style="margin: 0; color: #a1a1aa; font-size: 13px;">This email was sent securely from your Creatinn website.</p>
            </div>
          </div>
        </body>
        </html>
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
