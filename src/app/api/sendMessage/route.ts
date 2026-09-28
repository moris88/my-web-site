// app/api/sendMessage/route.ts
import { sendEmail } from "@/lib/email";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const userAgent = req.headers.get("user-agent");

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body" }, { status: 400 });
  }
  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "Invalid JSON body" }, { status: 400 });
  }
  const { name, email, message } = body as Record<string, string>;

  if (
    !name ||
    !email ||
    !message ||
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return NextResponse.json(
      { message: "Missing fields", error: "BAD REQUEST" },
      { status: 400 },
    );
  }

  const response = await sendEmail({
    name: name,
    email: email,
    message: message,
    ip: ip ?? "unknown",
    userAgent: userAgent ?? "unknown",
  });

  if (response.status === "ERROR" && response.error) {
    return NextResponse.json(
      {
        message: response.message,
        error: response.error,
      },
      { status: 500 },
    );
  }

  if (response.status === "ERROR" && !response.error) {
    return NextResponse.json(
      {
        message: response.message,
        error: "BAD REQUEST",
      },
      { status: 400 },
    );
  }

  return NextResponse.json(
    { message: "Email inviata con successo" },
    { status: 200 },
  );
}
