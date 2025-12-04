import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return Response.json({ error: "Missing email" });
  }

  try {
    const data = await resend.emails.send({
      from: "Geeked Productions <onboarding@resend.dev>",
      to: email,
      subject: "Geeked Productions 🤓",
      html: `
        <p>Hi! this is <strong>Geeked Productions 🤓</strong></p>
        <p>We're geeked to talk to you today — what may we help you with?</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error });
  }
}