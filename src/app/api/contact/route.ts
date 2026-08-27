import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, projectType, description } = body;

    const { data, error } = await resend.emails.send({
      // Now using your verified custom domain!
      from: 'Alpha Tec Website <noreply@alphatecdesigns.co.ke>',
      // Back to your official business email!
      to: ['info@alphatecdesigns.co.ke'],
      subject: `New Project Inquiry: ${projectType || 'General'} from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
          <h2 style="color: #f97316;">New Project Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Project Type:</strong> ${projectType || 'N/A'}</p>
          <br/>
          <h3>Project Description:</h3>
          <p style="background: #f4f4f4; padding: 15px; border-radius: 5px;">${description}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}