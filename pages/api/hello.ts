// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await resend.emails.send({
      from: "CLEFJIB <no-reply@resend.dev>",
      to: ["younesmrx@gmail.com"],
      subject: "Hello world",
      html: "dmfhdjfndjnf",
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
}
