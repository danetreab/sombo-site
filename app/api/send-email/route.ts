import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import WelcomeTemplate from "@/components/MailTemplate";
import { sendEmail } from "@/lib/email";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {name, message, from} = await request.json();
  await sendEmail({
    from: from,
    to: "somboban305@gmail.com",
    subject: `Mail from ${name}`,
    html: render(WelcomeTemplate({ message, from, name})),
  });

  //   // return res.status(200).json({ message: "Email sent successfully" });
  //   return NextResponse.json({message: "Email sent successfully"});
//   console.log(data);
  return NextResponse.json({ message: "Email sent successfully" });
}
