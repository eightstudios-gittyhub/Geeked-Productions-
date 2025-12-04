import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Geeked Productions <onboarding@resend.dev>",
      to: ["YOUR_FRIEND_EMAIL_HERE"],
      subject: "Geeked Productions 🤓",
      html: `
        <p>Hi! this is <strong>Geeked Productions 🤓</strong></p>
        <p>we're Geeked to talk to you today — what may we help you with?</p>
      `,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
